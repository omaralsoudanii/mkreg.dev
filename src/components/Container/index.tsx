export function Container({ children }) {
  return (
    <article className="container mx-auto px-2 sm:px-0 prose dark:prose-dark">
      {children}
    </article>
  )
}
