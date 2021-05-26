import * as Icons from '@/components/Icons'

const iconStyle = 'w-12 h-12 lg:w-13 lg:h-13  min-w-sm fill-current'
const Card = ({ title, url, icon, desc }) => (
  <a key={title} href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center p-4 my-8 border border-gray-400 rounded lg:p-4 dark:border-gray-700">
      <div className={`${iconStyle} ml-0 mr-4 lg:ml-4 lg:mr-8`}>
        <span className="sr-only">{title}</span>
        {Icons[icon]({
          className: iconStyle,
        })}
      </div>
      <div>
        <h2 className="!mb-1 !mt-0 !font-medium !text-heading !text-lg">
          {title}
        </h2>
        <p className="!my-1 !font-normal !text-base !leading-snug text-secondary clamp-5">
          {desc}
        </p>
      </div>
    </div>
  </a>
)

export default Card
