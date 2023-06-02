import React from "react"
import { dipaImageList } from "@data/data"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"

const DipaInhouse = () => {
  return (
    <CompanyLayout companyName="Dipa Inhouse">
      {dipaImageList.map((item: ICompanyCard) => (
        <CompanyPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default DipaInhouse