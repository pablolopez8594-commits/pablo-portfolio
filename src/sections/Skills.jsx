import skills from '../data/skills.js'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg' 
function Skills() {
  return (
    <section id="skills"   className="bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url(${blackPrint})`,
  }}>
      <div className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          02 / Technical Stack
        </p>

        <h2 className="mb-8 text-3xl font-bold text-ink">
          Skills
        </h2>

        <div className="space-y-0">
          {skills.map((group) => (
            <div key={group.category}>

              <h3 className=" text-2xl uppercase tracking-[0.38em] text-paper"  >
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-17">
                {group.items.map((skill) => (
    <img
    
      src={skill}
      alt="Technology Logo"
      className="h-30 w-30 object-contain mt-7"
    />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills