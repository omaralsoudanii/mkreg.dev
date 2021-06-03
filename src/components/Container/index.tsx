export function Container({ children }) {
  return (
    <article
      id="skip"
      className="w-full mx-auto mt-6 prose dark:prose-dark lg:prose-lg max-w-prose"
    >
      {children}
    </article>
  )
}
