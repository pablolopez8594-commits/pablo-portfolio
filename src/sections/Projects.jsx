import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import bluePrint from '../assets/images/backgrounds/blueprint.jpg'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'
function Projects() {
  return (
    <section id="projects"             className="bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                  backgroundImage: `url(${blackPrint})`, 
                }}>


                   {/* Solo el puñetero titulo: */}




      <div className="mx-auto max-w-4xl px-6 pt-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          03 / Selected Work
        </p>

        <h2 className="mb-8 text-3xl font-bold text-ink">
          Projects
        </h2>
      </div>
                   {/* Aqui acaba el titulo y empieza el plano azul*/}

      <div>
        
        <div className=" border-3 rounded-md border-line! bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${bluePrint})`,

          }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects