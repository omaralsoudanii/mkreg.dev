import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import Image from 'next/image'

export default function MK() {
  const extraMeta = {
    title: 'MK',
    description: 'Mark Knopfler OBE',
  }

  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1>The Sultan of swing</h1>
              <p className="text-2xl">Mark Knopfler OBE</p>
            </div>
            <div>
              <Image
                src="/static/images/mk.jpg"
                width="800"
                height="534"
                quality={80}
                layout="responsive"
              />
            </div>
          </div>
          <p className="text-xl">
            Well, Congrats on finding this page! This is my favourite human
            being in planet earth. The one and only the legendendary Mr.Mark
            Knopfler.
          </p>
          <p className="text-xl">
            The domain name meaning if you ever wondered is an acronym for
          </p>
          <p className="text-xl">
            <a
              href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              Mark Knopfler Red Electric Guitar
            </a>
          </p>
        </div>
      </CenteredColumn>
    </Page>
  )
}
