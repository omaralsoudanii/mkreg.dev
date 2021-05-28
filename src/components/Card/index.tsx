import * as Icons from '@/components/Icons'

const iconStyle = 'w-12 h-12 lg:w-14 lg:h-14  min-w-sm svg-fill'
const Card = ({ title, url, icon, desc }) => (
  <a key={title} href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center p-4 my-8 border border-gray-400 rounded lg:py-4 lg:px-8 dark:border-gray-700">
      <div className={`${iconStyle} ml-0 mr-4 lg:ml-2 lg:mr-8`}>
        <span className="sr-only">{title}</span>
        {Icons[icon]({
          className: iconStyle,
        })}
      </div>
      <div>
        <h2 className="!my-1 !font-medium  !text-lg  lg:!text-xl">{title}</h2>
        <p className="!my-1   text-secondary !font-normal !leading-snug text-base clamp-5">
          {desc}
        </p>
      </div>
    </div>
  </a>
)

export default Card
