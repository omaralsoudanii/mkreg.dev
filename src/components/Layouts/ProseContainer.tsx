export default function ProseContainer({ children }) {
  return (
    <div
      id="skip"
      className="prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto"
    >
      {children}
    </div>
  )
}
