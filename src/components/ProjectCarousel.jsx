import {useState} from 'react';
function ProjectCarousel({ images, title }) {
const[currentImage, setCurrentImage] = useState(0)

return(
<div className="mb-8">
{/* aqui comienza la imagen */}
<div className="
  h-[420px]
  w-full
  max-w-[600px]
  shrink-0
  overflow-hidden
  rounded-md
  sm:h-[520px]
  lg:h-[650px]
  lg:w-[600px]
">
  <img
    src={images[currentImage]}
    alt={`${title} screenshot ${currentImage + 1}`}
    className="h-full w-full object-contain rounded-md"
  />
</div>
{/*  */}



{/* botones de previous, contador y next */}


<div className="grid grid-cols-3 items-center mt-0 ">
<button
  onClick={() =>
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    )
  }
  className="cursor-pointer justify-self-start px-2 py-3 text-4xl font-bold text-paper transition-colors hover:text-amber-deep lg:px-7 lg:py-4 lg:text-7xl"
>
  <span className="lg:hidden">❮</span>
  <span className="hidden lg:inline">❮❮❮❮</span>
</button>

          <span className="break-words text-2xl font-bold text-paper sm:text-3xl lg:text-3xl justify-self-center">
          {currentImage + 1} / {images.length}
        </span>

<button
  onClick={() =>
    setCurrentImage(
      (prev) => (prev + 1) % images.length
    )
  }
  className="cursor-pointer justify-self-end px-2 py-3 text-4xl font-bold text-paper transition-colors hover:text-amber-deep lg:px-7 lg:py-4 lg:text-7xl"
>
  <span className="lg:hidden">❯</span>
  <span className="hidden lg:inline">❯❯❯❯</span>
</button>
</div>
{/*  */}

<div className=" flex justify-center gap-2">
  {images.map((image, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`h-1 w-4 rounded-full ${
        currentImage === index
          ? 'bg-amber'
          : 'bg-slate-300'
      }`}
      aria-label={`Go to image ${index + 1}`}
    />
  ))}
</div>



</div>

)

}

export default ProjectCarousel