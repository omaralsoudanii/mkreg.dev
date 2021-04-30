import React from 'react'

const Card = ({ data }) => (
  <a
    key={data.title}
    href={data.url}
    target="_blank"
    className="link-unstyled"
    rel="noopener noreferrer"
  >
    <div className="flex items-center px-4 py-3 my-8 border border-gray-300 rounded dark:border-gray-700">
      <div className="w-12 h-12 ml-0 mr-4">
        <span className="sr-only">{data.title}</span>
        {data.icon}
      </div>
      <div>
        <h2 className=" !mt-2 !mb-1 !text-lg">{data.title}</h2>
        <p className="!mt-1 !mb-2 text-[15px] !leading-5 text-secondary clamp-5">
          {data.desc}
        </p>
      </div>
    </div>
  </a>
)

export default Card
