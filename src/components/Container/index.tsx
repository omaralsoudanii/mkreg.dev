export function Container({ children }) {
  return (
    <article
      id="skip"
      className="w-full mt-6 mx-auto prose dark:prose-dark lg:prose-lg "
    >
      {children}
    </article>
  )
}
