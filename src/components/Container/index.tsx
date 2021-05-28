export function Container({ children }) {
  return (
    <article className="prose mx-auto !max-w-prose lg:prose-xl dark:prose-dark">
      {children}
    </article>
  )
}
