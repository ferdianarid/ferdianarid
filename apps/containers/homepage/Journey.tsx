import React from "react"
import Image from "next/image"
import { HeadingText, ParagraphText } from "@components/atoms/Text"

const Journey = ({ lang }: { lang: any }) => {
  return (
    <div className="w-full bg-neutral-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-10 md:py-16 flex justify-between flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image src="/images/chair.webp" className="rounded-3xl" width={480} height={550} alt="chair" objectFit="cover" />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <HeadingText>{lang.journey}</HeadingText>
          <ParagraphText className="mt-5">{lang.descriptionJourney1}</ParagraphText>
          <ParagraphText className="mt-5">{lang.descriptionJourney2}</ParagraphText>
        </div>
      </div>
    </div>
  )
}

export default Journey