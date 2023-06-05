import React from "react"
import { surabayadevImageList } from "@data/data"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"

const SurabayaDev = () => {
  return (
    <CompanyLayout companyName="SurabayaDev">
      {surabayadevImageList.map((item: ICompanyCard) => (
        <CompanyPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default SurabayaDev