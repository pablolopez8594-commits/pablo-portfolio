import Card from '../components/Card.jsx'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'
import skills from '../assets/images/techLogos/skills.png'
function Recognition() {
  return (
    <section
      id="recognition"
      className="bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${blackPrint})`,
        }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          05 / Recognition
        </p>

        <h2 className="mb-8 text-3xl font-bold text-ink">
          Recognition
        </h2>

        <Card className="bg backdrop-invert rounded-lg border-amber-deep! border-5">

          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-blueprint-slate">
            2026 / Skills Ontario
          </p>
<div className=" flex items-center justify-between gap-4">
  <h3 className="text-5xl font-bold text-amber-deep!">
    Bronze Medal     🥉
  </h3>

  <img
    src={skills}
    alt="skills"
    className="h-40 w-70 object-contain"
  />
</div>

          <p className="mb-4 text-lg font-medium text-blueprint-slate">
            Web Design & Development
          </p>

          <p className="max-w-2xl text-blueprint-slate">
            Awarded a bronze medal at the 2026 Skills Ontario Competition
            in Web Design & Development.
          </p>

        </Card>

      </div>
    </section>
  )
}

export default Recognition