import * as React from 'react'
import Image from '@/components/ImageComposed'
import Heading from '@/components/Heading'
import Seo from '@/components/Seo'

export default function MK() {
  const meta = {
    title: 'MK',
    description: 'Mark Knopfler OBE',
  }

  return (
    <article>
      <Seo data={meta} />
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Heading title="The Sultan of swing" subTitle="Mark Knopfler" />
          <Image
            src="/static/images/mk.jpg"
            alt="Mark Knopfler"
            width={3000}
            height={2400}
          />
          <div className=" hr-stroke" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <p className="text-lg">
            Well, Congrats on finding this page! Let me introduce you to my
            favourite human being in the universe. The one and only the
            legendendary Mr.Mark Knopfler.
          </p>
          <p className="text-lg">
            If you have ever wondered why the hell I have this domain rather
            than something closer to my name (for SEO bleh...), Then I can tell
            you that it's based on this acronym:
          </p>
          <a
            href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto text-xl text-center text-link"
          >
            Mark Knopfler Red Electric Guitar &rarr;
          </a>
          <p className="text-lg">
            Every one has his own "Red Electric Guitar". Seeing my Idol getting
            his guitar, gives me some euphoric feeling with a smile on my face.
          </p>
          <p className="text-lg">
            So there you go, now you have the answer to the ultimate question of
            life. You can check my YouTube playlist for some goodies in the
            footer below 👇
          </p>
        </div>
      </div>
    </article>
  )
}
