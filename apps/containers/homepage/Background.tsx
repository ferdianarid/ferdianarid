import React from "react"
import { HeadingText, ParagraphText } from "@components/atoms/Text"

const Background = ({ lang }: { lang: any }) => {
  return (
    <div className="w-full bg-neutral-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-24 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <HeadingText>{lang.background}</HeadingText>
        </div>
        <div className="w-full mt-5 md:mt-0 md:w-1/2 flex flex-col space-y-3">
          <ParagraphText>{lang.descriptionBackground1}</ParagraphText>
          <ParagraphText>{lang.descriptionBackground2}</ParagraphText>
        </div>
      </div>
    </div>
  )
}

export default Background