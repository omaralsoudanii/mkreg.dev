function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      {...props}
    >
      <path d='M4 6h16M4 12h16M4 18h16' />
    </svg>
  )
}

export default SvgMenu
