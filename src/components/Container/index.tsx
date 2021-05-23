export function Container({ children }) {
  return (
    <article className="!w-full mx-auto prose lg:prose-lg dark:prose-dark !max-w-none">
      {children}
    </article>
  )
}
