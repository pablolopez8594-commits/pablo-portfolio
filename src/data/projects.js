import pslcImages from './projectImages'
import techLogosPslc from './techLogosPslc'
const projects = [
  {
    id: 'pslc',
    title: 'Pocket SLC',
    description: 'Pocket SLC is a full-stack campus web application designed to simplify access to essential student services at St. Lawrence College. As team lead, I designed and developed features including section-based timetable lookup, a searchable staff directory, printing resources, and an interactive indoor campus map with SVG-based navigation and Dijkstra’s shortest-path algorithm. The application was built using the technologies listed bellow, with a focus on database design, responsive UI, usability, accessibility, and practical problem-solving.',
    technologies: [techLogosPslc[0], techLogosPslc[1], techLogosPslc[2], techLogosPslc[3], techLogosPslc[4], techLogosPslc[5], techLogosPslc[6]],
    images: [pslcImages[0], pslcImages[1], pslcImages[2], pslcImages[3]],
  },
]
export default projects