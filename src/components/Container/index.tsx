export function Container({ children }) {
  return (
    <article className="container w-full max-w-none">
      <div className="mx-auto prose prose-sm md:prose dark:prose-dark">
        {children}
      </div>
    </article>
  )
}
