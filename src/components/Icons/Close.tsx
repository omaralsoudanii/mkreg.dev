function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default SvgClose
