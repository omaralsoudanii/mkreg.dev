export default function Heading({ title, subTitle = '' }) {
  return subTitle ? (
    <div className="space-y-6">
      <h1 className="font-bold text-primary">{title}</h1>
      <p className="text-xl">{subTitle}</p>
    </div>
  ) : (
    <h1 className="font-bold text-primary">{title}</h1>
  )
}
