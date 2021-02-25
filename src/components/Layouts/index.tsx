export function CenteredColumn({ children }) {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto justify-content">
      {children}
    </div>
  )
}
