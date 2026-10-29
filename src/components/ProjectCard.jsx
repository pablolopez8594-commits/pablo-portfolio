import Card from './Card.jsx'
import ProjectCarousel from './ProjectCarousel.jsx'

function ProjectCard({ project }) {
  return (
    <Card className="bg-transparent!">


      {/* Carrousel */}
      <div className="flex flex-col gap-8 lg:flex-row ml-15">



        {project.images?.length > 0 && (
          <ProjectCarousel
            images={project.images}
            title={project.title}
          />
        )}


        <div className="flex flex-col lg:w-5/5  items-center">

          <p className="mb-2 text-3xl uppercase tracking-[0.28em] text-paper font-bold mb-8">
            Project
          </p>

          <h3 className="mb-15 break-words text-5xl font-bold text-paper sm:text-6xl lg:text-8xl">
            {project.title}
          </h3>





          <p className="mb-6 max-w-2xl text-paper font-bold text-2xl text-center lg:text-left ">
            {project.description}
          </p>



          <div className="mt-5 border-t border-bold border-line pt-5">
            <p className="mb-3 text-2sl uppercase tracking-[0.48em] text-paper font-bold">
              Technologies
            </p>

<div className="flex flex-wrap gap-4">
  {project.technologies?.map((technology, index) => (
    <img
      key={index}
      src={technology}
      alt="Technology Logo"
      className="h-30 w-30 object-contain"
    />
  ))}
</div>
          </div>


        </div>


      </div>
    </Card>
  )
}

export default ProjectCard