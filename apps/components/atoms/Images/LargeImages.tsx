import React from "react"
import Image from "next/image"
import clsx from "clsx"

const LargeImages = ({ classnames, parentClassname, image, description }: any) => {
  return (
    <div className={clsx(
      "grid gap-2 my-4",
      parentClassname
    )}>
      <div className={clsx(
        "w-full relative",
        classnames
      )}>
        <Image src={`/images/posts/${image}`} className="object-cover" layout="fill" alt={image} />
      </div>
      <p className="mt-2 italic font-gilroy-normal text-sm text-neutral-60 text-center">{description}</p>
    </div>
  )
}

export default LargeImages