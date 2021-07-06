import * as React from 'react'

const Pre = (props) => {
  const textInput = React.useRef(null)
  const [hovered, setHovered] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const onEnter = () => {
    setHovered(true)
  }

  const onExit = () => {
    setTimeout(() => {
      setHovered(false)
      setCopied(false)
    }, 300)
  }

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative"
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-3 top-3 w-9 h-9 p-1 rounded border-2 bg-gray-300 dark:bg-[#282e33] ${
            copied
              ? 'focus:outline-none focus:border-blue-600 border-blue-600 dark:border-blue-400 dark:focus:border-blue-400'
              : 'border-gray-200 dark:border-[#6e7681]'
          }`}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={
              copied
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300'
            }
          >
            {copied ? (
              <React.Fragment>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </React.Fragment>
            )}
          </svg>
        </button>
      )}

      <pre className={props.className ?? null}>{props.children}</pre>
    </div>
  )
}

export default Pre
