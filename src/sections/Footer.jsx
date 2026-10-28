import profile from '../data/profile.js'

function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-blueprint-slate sm:flex-row sm:items-center sm:justify-between">

        <p>
          © 2026 {profile.name}
        </p>

        <p className="text-xs uppercase tracking-[0.18em]">
          Built with React, Vite & Tailwind CSS
        </p>

      </div>
    </footer>
  )
}

export default Footer