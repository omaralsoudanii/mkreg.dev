export function Container({ children }) {
  return (
    <article className="container prose max-w-prose lg:prose-lg dark:prose-dark">
      {children}
    </article>
  )
}
