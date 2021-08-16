const Card = ({
  title,
  url,
  Icon,
  desc,
}: {
  title: string
  desc: string
  url: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}) => {
  const iconStyle = 'w-12 h-12 md:w-14 md:h-14  min-w-sm svg-fill'
  return (
    <a key={title} href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center py-2 px-4 my-8 border border-gray-200 rounded md:py-4 md:px-8 dark:border-opacity-40 dark:border-gray-700">
        <div className={`${iconStyle} ml-0 mr-4 md:ml-2 md:mr-8`}>
          <span className="sr-only">{title}</span>
          <Icon className={iconStyle} />
        </div>
        <div>
          <h2 className="!my-1 !font-medium  !text-lg md:!text-xl">{title}</h2>
          <p className="!my-1  !text-secondary !text-[0.9rem] md:!text-base !leading-snug !font-normal clamp clamp-5">
            {desc}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Card
