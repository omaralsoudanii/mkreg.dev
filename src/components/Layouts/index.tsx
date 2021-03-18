export function CenteredColumn({ children }) {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg justify-content">
      {children}
    </div>
  )
}
