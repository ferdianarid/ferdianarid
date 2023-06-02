import React from "react"
import { karismaImageList } from "@data/data"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"

const KarismaAcademy = () => {
  return (
    <CompanyLayout companyName="Karisma Academy">
      {karismaImageList.map((item: ICompanyCard) => (
        <CompanyPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default KarismaAcademy