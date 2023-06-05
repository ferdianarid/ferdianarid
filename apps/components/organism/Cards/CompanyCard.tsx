import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaFolderOpen } from "react-icons/fa"
import Image from "next/image"

const CompanyCard = ({ company, route, thumbnailFolder, variant }: { company: string, route: string, thumbnailFolder: string, variant?: any }) => {
  return (
    <Link href={`/about/${route}`}>
      <motion.div variants={variant} className="w-full companyCardWrapper relative bg-slate-800 flex items-center phone:gap-2 gap-3 py-4 px-6 h-[250px]">
        <Image src={`/images/about/${thumbnailFolder}`} className="object-cover" layout="fill" alt="thumbnail-image" />
        <div className="w-full overlay h-full absolute top-0 left-0 z-20"></div>
        <div className="w-full titleCompanyCard absolute z-30 left-0 flex items-center justify-center phone:gap-2 gap-3">
          <FaFolderOpen size={32} className="text-semantic-warning-main" />
          <h1 className="font-gilroy-bold text-xl text-neutral-10">{company}</h1>
        </div>
      </motion.div>
    </Link>
  )
}

export default CompanyCard