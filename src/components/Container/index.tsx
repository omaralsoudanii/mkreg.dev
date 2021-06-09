export function Container({ children }) {
  return (
    <article
      id="content-skip"
      className="flex flex-col items-start justify-center w-full max-w-2xl px-6 mx-auto lg:px-0 lg:max-w-3xl"
    >
      <div className="w-full !max-w-none mx-auto prose dark:prose-dark lg:prose-lg">
        {children}
      </div>
    </article>
  )
}
