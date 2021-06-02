export function Container({ children }) {
  return (
    <article className="container w-full mx-auto prose dark:prose-dark lg:prose-lg ">
      {children}
    </article>
  )
}
