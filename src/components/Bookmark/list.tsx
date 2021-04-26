import React from 'react'
import Bookmarks from '@/components/Bookmark/data'

const BookmarkList = () =>
  Bookmarks.map((Bookmark) => {
    return (
      <a
        key={Bookmark.title}
        href={Bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center p-4 my-8  border border-gray-300 rounded hover:shadow sm:px-2 dark:border-gray-700">
          <div className="w-8 h-8 ml-0 mr-4 md:ml-4 md:w-10 md:h-10">
            {Bookmark.icon}
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-tight text-primary">
              {Bookmark.title}
            </h4>
            <p className="leading-5 text-secondary clamp-3">{Bookmark.desc}</p>
          </div>
        </div>
      </a>
    )
  })

export default BookmarkList
