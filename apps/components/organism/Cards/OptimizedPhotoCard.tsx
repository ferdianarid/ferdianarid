import React from "react"
import LazyImage from "../LazyImage"

const OptimizedPhotoCard = ({ image, title }: { image: string, title: string }) => {
  return (
    <div className="w-full h-[270px] relative overflow-clip">
      <LazyImage
        src={`/images/about/${image}`}
        placeholderImage={`/images/about/compressed/${image.replace(".jpg", ".webp")}`}
        classNames="w-full h-full object-cover absolute hover:scale-[1.05] transition-all duration-700"
        alt={title}
      />
      <div className="w-full py-4 bg-slate-800 absolute bottom-0 left-0 pl-4">
        <h1 className="font-gilroy-normal text-sm text-neutral-10">{title}</h1>
      </div>
    </div>
  )
}

export default OptimizedPhotoCard