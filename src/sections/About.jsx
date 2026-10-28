import profile from '../data/profile.js'
import blackPrint from '../assets/images/backgrounds/blackprint.jpg'
import Card from '../components/Card.jsx'
function About() {
  return (
    <section id="about" className="bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url(${blackPrint})`,
  }}
          >
      
      <div className="mx-auto max-w-4xl px-6 py-20">

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber">
          01 / Profile
        </p>

        <h2 className="mb-6 text-3xl font-bold text-ink">
          About
        </h2>
        <Card className="bg-white/20 backdrop-invert rounded-lg">
        <div className="space-y-4 text-blueprint-slate font-bold ">
          {profile.about.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
          
        </Card>


      </div>
    </section>
  )
}

export default About