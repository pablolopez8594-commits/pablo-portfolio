import profile from '../data/profile.js'
import Card from '../components/Card.jsx'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'
function Contact() {
  return (
    <section
      id="contact"
            className="bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${blackPrint})`,
            }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          06 / Contact
        </p>

        <h2 className="mb-8 text-3xl font-bold text-ink">
          Contact
        </h2>

        <Card className="bg-white/20 backdrop-invert rounded-lg">
          <p className="mb-6 max-w-2xl text-blueprint-slate">
            I'm open to opportunities in software development,
            technical support, and related technology roles.
          </p>

          <div className="flex flex-wrap gap-3">

            <a
              href={`mailto:${profile.email}`}
              className="border border-ink bg-amber px-4 py-2 text-sm text-white transition-colors hover:border-amber hover:bg-amber"
            >
              Email
            </a>

            <a
              href="https://github.com/pablolopez8594-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line bg-paper px-4 py-2 text-sm text-amber-deep transition-colors hover:border-amber hover:text-amber-deep"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pablo-lopez-91134a213/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line bg-paper px-4 py-2 text-sm text-amber-deep transition-colors hover:border-amber hover:text-amber-deep"
            >
              LinkedIn
            </a>

          </div>
        </Card>

      </div>
    </section>
  )
}

export default Contact