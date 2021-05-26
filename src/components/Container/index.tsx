export function Container({ children }) {
  return (
    <article className="prose mx-auto !max-w-prose lg:prose-lg dark:prose-dark">
      {children}
    </article>
  )
}
