export function Container({ children }) {
  return (
    <article className="container mx-auto prose dark:prose-dark">
      {children}
    </article>
  )
}
