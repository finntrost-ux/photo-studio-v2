import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 pt-2 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="relative w-full max-w-[667px] aspect-[667/1000]">
        <Image
          src="/uploads/about.png"
          alt="Finn Trost portrait"
          fill
          sizes="(max-width: 1024px) 100vw, 667px"
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
          <a
            href="https://www.instagram.com/comfort_finn/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <p>finn.trost@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
