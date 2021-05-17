import * as Icons from '@/components/Icons'

const Card = ({ title, url, icon, desc }) => (
  <a key={title} href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center p-2 my-8 border border-gray-400 rounded md:px-6 md:py-4 dark:border-gray-700">
      <div className="w-12 h-12 ml-0 mr-4">
        <span className="sr-only">{title}</span>
        {Icons[icon]({
          className: 'w-12 h-12 min-w-sm fill-svg',
        })}
      </div>
      <div>
        <h2 className="!my-2 !text-lg md:!text-2xl !text-heading">{title}</h2>
        <p className="!my-2 !font-normal !leading-normal !text-base md:!text-lg text-secondary clamp-5">
          {desc}
        </p>
      </div>
    </div>
  </a>
)

export default Card
