import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ICertification } from "@interfaces/index"
import { FaLink } from "react-icons/fa"

const CertificationCard = ({ image, title, company, credential, links, variant }: ICertification) => {
  return (
    <motion.div variants={variant} className="w-full flex phone:flex-col gap-4 relative border border-primary-hover p-4">
      <div className="w-[100px] h-[100px] relative">
        <Image src={`/images/certification/${image}`} className="w-full object-cover" layout="fill" alt={image} />
      </div>
      <div className="flex gap-2 flex-col justify-between">
        <div className="w-full flex gap-2 justify-between md:pr-5">
          <h1 className="font-gilroy-bold text-lg text-neutral-10">{title}</h1>
          <button onClick={() => window.open(links)} className="absolute top-4 right-4 p-2 hover:bg-primary-hover transition-all duration-700 border border-primary-hover rounded-lg">
            <FaLink size={16} className="text-neutral-10" />
          </button>
        </div>
        <div className="grid gap-1">
          <h1 className="font-gilroy-medium text-sm text-neutral-40">{company}</h1>
          <h1 className="font-gilroy-medium text-sm text-neutral-60">Credential ID {credential}</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard