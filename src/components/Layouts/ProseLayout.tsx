export default function ProseLayout({ children }) {
  return (
    <div id="skip" className="prose dark:prose-dark lg:prose-lg !max-w-[75ch]">
      {children}
    </div>
  )
}
