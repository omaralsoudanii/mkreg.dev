export function Container({ children }) {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-20 lg:max-w-3xl">
      <div
        id="skip"
        className="w-full !max-w-none mx-auto prose dark:prose-dark  lg:prose-lg"
      >
        {children}
      </div>
    </article>
  )
}
