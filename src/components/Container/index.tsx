export function Container({ children }) {
  return (
    <article
      id="content-skip"
      className="flex flex-col items-start justify-center w-full max-w-screen-sm px-6 mx-auto lg:px-0 lg:max-w-screen-lg"
    >
      <div className="w-full mx-auto prose  dark:prose-dark !leading-7 text-base lg:text-lg lg:!leading-8">
        {children}
      </div>
    </article>
  )
}
