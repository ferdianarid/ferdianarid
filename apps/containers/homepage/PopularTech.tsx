import React from "react"
import TechIcon from "@components/atoms/Images/TechIcon"
import { HeadingText } from "@components/atoms/Text"
import { TechList } from "@data/data"

const PopularTech = ({ lang }: { lang: any }) => {
  return (
    <div className="w-full bg-neutral-20 dark:bg-primary-pressed">
      <div className="max-w-[1440px] mx-auto px-6 mt-16 md:mt-0 md:px-24 py-24 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <HeadingText isLight className="text-center md:text-left">{lang.technology}</HeadingText>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 grid grid-cols-4 gap-5 items-center">
          {TechList.map((item: any) => (
            <TechIcon key={item.id} title={item.title} width={170} height={item.height} alt={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularTech