#!/usr/bin/env python3
"""Reorder numbered PNGs: 3 landscapes first, then P/L interleaved. Prints orientations for TS."""
import glob
import os
import shutil
import subprocess
import sys


def pixel_dims(path: str) -> tuple[int, int]:
    out = subprocess.check_output(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", path],
        text=True,
    )
    w = h = 0
    for line in out.splitlines():
        if "pixelWidth" in line:
            w = int(line.split()[-1])
        if "pixelHeight" in line:
            h = int(line.split()[-1])
    return w, h


def build_order(dirpath: str) -> list[int]:
    paths = sorted(glob.glob(os.path.join(dirpath, "[0-9][0-9].png")))
    items: list[tuple[int, int, int]] = []
    for p in paths:
        n = int(os.path.basename(p).replace(".png", ""))
        w, h = pixel_dims(p)
        items.append((n, w, h))
    landscapes = sorted(n for n, w, h in items if w > h)
    portraits = sorted(n for n, w, h in items if h > w)
    if len(landscapes) < 3:
        raise SystemExit(f"{dirpath}: need at least 3 landscape images, got {len(landscapes)}")
    head = landscapes[:3]
    l_rest = landscapes[3:]
    p_rest = portraits[:]
    mixed: list[int] = []
    i = j = 0
    while i < len(p_rest) or j < len(l_rest):
        if i < len(p_rest):
            mixed.append(p_rest[i])
            i += 1
        if j < len(l_rest):
            mixed.append(l_rest[j])
            j += 1
    return head + mixed


def apply_order(dirpath: str, order: list[int]) -> list[str]:
    """Rename via temp dir to new 01..NN. Returns orientations for new 01..NN (ts literals)."""
    tmp = dirpath + ".reorder-tmp"
    os.makedirs(tmp, exist_ok=True)
    for i, old_n in enumerate(order, start=1):
        src = os.path.join(dirpath, f"{old_n:02d}.png")
        dst = os.path.join(tmp, f"{i:02d}.png")
        if not os.path.isfile(src):
            raise SystemExit(f"missing {src}")
        shutil.copy2(src, dst)
    for p in glob.glob(os.path.join(dirpath, "*.png")):
        os.remove(p)
    for p in glob.glob(os.path.join(tmp, "*.png")):
        shutil.move(p, dirpath)
    os.rmdir(tmp)

    orientations: list[str] = []
    for i in range(1, len(order) + 1):
        w, h = pixel_dims(os.path.join(dirpath, f"{i:02d}.png"))
        orientations.append("landscape" if w > h else "portrait")
    return orientations


def main() -> None:
    root = os.path.join(os.path.dirname(__file__), "..", "public", "uploads")
    folders = ["japan", "italy", "denmark"]
    all_out: dict[str, list[str]] = {}
    for name in folders:
        d = os.path.abspath(os.path.join(root, name))
        order = build_order(d)
        print(f"{name}: order {order}", file=sys.stderr)
        orientations = apply_order(d, order)
        all_out[name] = orientations
    for name, ori in all_out.items():
        ts_name = f"{name}Orientations"
        joined = ", ".join(f'"{o}"' for o in ori)
        print(f"export const {ts_name} = [{joined}] as const;")


if __name__ == "__main__":
    main()
