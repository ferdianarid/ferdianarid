import React from "react"
import { ParagraphText } from "@components/atoms/Text"
import { IReleaseUpdate } from "@interfaces/index"

const UpdateCard = ({ dateUpdate, listUpdate }: IReleaseUpdate) => {
  return (
    <div className="">
      <h1 className="text-neutral-10 font-gilroy-semibold text-sm mb-1">{dateUpdate}</h1>
      {listUpdate?.map((item: any, idx: number) => (
        <div key={idx}>
          <ParagraphText>- {item}</ParagraphText>
        </div>
      ))}
    </div>
  )
}

export default UpdateCard