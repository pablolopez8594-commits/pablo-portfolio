import experience from '../data/experience.js'
import Card from '../components/Card.jsx'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'

function Experience() {
  return (
    <section
      id="experience"
        className="bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${blackPrint})`,
        }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          04 / Professional Background
        </p>

        <h2 className="mb-8 text-3xl font-bold text-ink">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <Card key={job.id} className="bg-white/20 backdrop-invert rounded-lg">

              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-blueprint-slate">
                {job.period}
              </p>

              <div className="mb-4 flex items-center justify-between gap-4">

                <div>
                  <h3 className="text-xl font-bold text-blueprint-slate">
                    {job.role}
                  </h3>

                  <p className="text-blueprint-slate">
                    {job.organization} — {job.location}
                  </p>
                </div>

                {job.image && (
                  <img
                    src={job.image}
                    alt={`${job.organization} image`}
                    className="flex flex-col lg:flex-row h-12 w-auto object-contain"
                  />
                )}

              </div>

              <p className="mb-4 text-blueprint-slate">
                {job.description}
              </p>

              <ul className="space-y-2 text-sm text-blueprint-slate">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>
                    — {highlight}
                  </li>
                ))}
              </ul>

            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience