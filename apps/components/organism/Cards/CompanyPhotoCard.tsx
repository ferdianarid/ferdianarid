import React from "react"
import Image from "next/image"

const CompanyPhotoCard = ({ image, title }: { image: string, title: string }) => {
  return (
    <div className="w-full h-[270px] relative overflow-clip">
      <Image src={`/images/about/${image}`} className="w-full h-full object-cover absolute hover:scale-[1.05] transition-all duration-700" layout="fill" alt={title} />
      <div className="w-full py-4 bg-slate-800 absolute bottom-0 left-0 pl-4">
        <h1 className="font-gilroy-normal text-sm text-neutral-10">{title}</h1>
      </div>
    </div>
  )
}

export default CompanyPhotoCard