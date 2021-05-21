const Card = ({ title, url, icon, desc }) => (
  <a key={title} href={url} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center p-2 my-8 border border-gray-400 rounded lg:px-6 lg:py-4 dark:border-gray-700">
      <div className="w-12 h-12 ml-0 mr-4">
        <span className="sr-only">{title}</span>
        {icon}
      </div>
      <div>
        <h2 className="!my-1 !text-lg lg:!text-xl !text-heading">{title}</h2>
        <p className="!my-1 !font-normal !leading-normal !text-base lg:!text-lg text-secondary clamp-5">
          {desc}
        </p>
      </div>
    </div>
  </a>
)

export default Card
