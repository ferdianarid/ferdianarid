import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ICertification } from "@interfaces/index"

const CertificationCard = ({ image, title, company, credential, variant }: ICertification) => {
  return (
    <motion.div variants={variant} className="w-full flex phone:flex-col gap-4 border border-primary-hover p-4">
      <div className="w-[100px] h-[100px] relative">
        <Image src={`/images/certification/${image}`} className="w-full object-cover" layout="fill" alt={image} />
      </div>
      <div className="flex gap-2 flex-col justify-between">
        <h1 className="font-gilroy-bold text-lg text-neutral-10">{title}</h1>
        <div className="grid gap-1">
          <h1 className="font-gilroy-medium text-sm text-neutral-60">{company}</h1>
          <h1 className="font-gilroy-medium text-sm text-neutral-60">Credential ID {credential}</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard