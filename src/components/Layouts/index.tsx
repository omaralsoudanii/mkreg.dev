export function CenteredColumn({ children }) {
  return (
    <div className="flex flex-col w-full max-w-screen-sm mx-auto justify-content">
      {children}
    </div>
  )
}
