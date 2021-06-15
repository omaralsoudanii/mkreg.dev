export default function ProseLayout({ children }) {
  return (
    <article id="skip" className="mx-auto prose dark:prose-dark lg:prose-lg">
      {children}
    </article>
  )
}
