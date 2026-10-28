import profile from '../data/profile.js'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'
function Hero() {
  return (
    <section id="top"
  className="bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url(${blackPrint})`,
  }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-amber ">
          Portfolio / {profile.name}
        </p>

        <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight text-ink">
          {profile.headline}
        </h1>

        <p className="max-w-xl text-lg text-amber">
          Based in {profile.location}. {profile.status}.
        </p>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-ink bg-ink px-5 py-2.5 text-sm text-black transition hover:border-amber hover:bg-amber"
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero