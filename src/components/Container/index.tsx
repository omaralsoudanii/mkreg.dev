export function Container({ children }) {
  return (
    <article
      id="skip"
      className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-20 lg:max-w-3xl"
    >
      <div className="prose sm:prose dark:prose-dark w-full mx-auto lg:prose lg:prose-lg  !max-w-none">
        {children}
      </div>
    </article>
  )
}
