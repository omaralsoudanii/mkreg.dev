export function Container({ children }) {
  return (
    <article className="mx-auto prose md:prose-lg dark:prose-dark">
      {children}
    </article>
  )
}
