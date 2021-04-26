import React from 'react'
import Bookmarks from '@/components/Bookmark/data'

const BookmarkList = () =>
  Bookmarks.map((Bookmark) => {
    return (
      <a
        key={Bookmark.title}
        href={Bookmark.url}
        target="_blank"
        className="link-unstyled"
        rel="noopener noreferrer"
      >
        <div className="flex items-center px-4 py-3 my-8 border border-gray-300 rounded dark:border-gray-700">
          <div className="w-12 h-12 ml-0 mr-4">
            <span className="sr-only">{Bookmark.title}</span>
            {Bookmark.icon}
          </div>
          <div>
            <h4 className="!font-extrabold !mt-2 !mb-1 text-primary">
              {Bookmark.title}
            </h4>
            <p className="!mt-1 !mb-2 text-[15px] leading-5 text-secondary clamp-5">
              {Bookmark.desc}
            </p>
          </div>
        </div>
      </a>
    )
  })

export default BookmarkList
