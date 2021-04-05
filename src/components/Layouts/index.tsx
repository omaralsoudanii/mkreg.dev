export function CenteredColumn({ children }) {
  return (
    <div className="flex flex-col max-w-screen-md mx-auto justify-content">
      {children}
    </div>
  )
}
