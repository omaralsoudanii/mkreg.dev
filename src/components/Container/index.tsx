export function Container({ children }) {
  return (
    <article
      id="skip"
      className="flex flex-col items-start justify-center w-full max-w-2xl px-6 py-8 mx-auto my-4 lg:pt-12 lg:px-0 lg:max-w-3xl"
    >
      <div className="w-full mx-auto prose dark:prose-dark lg:prose-lg !max-w-none">
        {children}
      </div>
    </article>
  )
}
