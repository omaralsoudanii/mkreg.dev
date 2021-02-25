import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function Page(props: Props) {
  const { children } = props
  return (
    <>
      <Header />
      <div className="px-4 pt-24 pb-16 lg:px-0">{children}</div>
      <Footer />
    </>
  )
}
