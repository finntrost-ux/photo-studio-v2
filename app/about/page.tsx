import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 pt-2 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src="/uploads/07.png"
          alt="Finn Trost portrait"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <h1 className="type-title text-neutral-900">Finn Trost</h1>
        <p className="type-body max-w-xl text-neutral-800">
          I shoot photos because it is fun and because life looks better on
          film. Most of my pictures happen while walking around with friends,
          coffee in one hand, camera in the other. I like street scenes, odd
          little moments, and people being exactly themselves. Sometimes the
          frame is clean, sometimes it is chaos, and both are great. This is
          not a big art mission, just my playful way of noticing things. You
          will see family, friends, and a few lovable fools who end up in front
          of my lens. Every roll is a small experiment and a personal snapshot
          of how I see the day.
        </p>
        <div className="type-nav space-y-2 text-neutral-900">
          <a href="https://instagram.com/finn.trost" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <p>finn@comfortstudio.photo</p>
        </div>
      </div>
    </section>
  );
}
