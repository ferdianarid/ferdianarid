import React from "react"
import Link from "next/link"
import { FaFolderOpen } from "react-icons/fa"

const CompanyCard = ({ company, route }: { company: string, route: string }) => {
  return (
    <Link href={`/about/${route}`} className="w-full bg-slate-800 flex items-center phone:gap-2 gap-3 rounded-2xl py-4 px-6">
      <FaFolderOpen size={32} className="text-semantic-warning-main" />
      <h1 className="font-gilroy-bold phone:text-sm text-xl text-neutral-10">{company}</h1>
    </Link>
  )
}

export default CompanyCard