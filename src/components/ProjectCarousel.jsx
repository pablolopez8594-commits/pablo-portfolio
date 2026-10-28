import {useState} from 'react';
function ProjectCarousel({ images, title }) {
const[currentImage, setCurrentImage] = useState(0)

return(
<div className="mb-8">
{/* aqui comienza la imagen */}
<div className="h-[650px] w-[600px] overflow-hidden rounded-md bg-transparent! ">
  <img
    src={images[currentImage]}
    alt={`${title} screenshot ${currentImage + 1}`}
    className="h-full w-full  rounded-md border-line!"
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
    className="cursor-pointer font-bold  px-7 py-4 text-7xl text-paper transition-colors hover:border-amber hover:text-amber-deep rounded-md"
  >
    ❮❮❮❮
  </button>

          <span className="justify-self-center text-3xl text-paper font-bold">
          {currentImage + 1} / {images.length}
        </span>

  <button
    onClick={() =>
      setCurrentImage(
        (prev) => (prev + 1) % images.length
      )
    }
    className="cursor-pointer font-bold  px-7 py-4 text-7xl text-paper transition-colors hover:border-amber hover:text-amber-deep rounded-md"
  >
    ❯❯❯❯
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