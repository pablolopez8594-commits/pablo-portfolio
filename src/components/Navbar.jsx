import profile from '../data/profile.js'

function Navbar() {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">

        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-blueprint-slate transition-colors hover:text-amber"
        >
          {profile.initials}
          <span className="text-amber">.</span>
        </a>

        <nav className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs uppercase tracking-[0.18em] text-blueprint-slate transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default Navbar