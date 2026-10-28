function Card({ children, className = '' }) {
  return (
    <div
      className={`
        relative
        border
        border-line
        bg-white/40
        p-6
        text-ink
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card