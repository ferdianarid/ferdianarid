import React from "react"
import { gdscImageList } from "@data/data"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"

const GoogleDevelopers = () => {
  return (
    <CompanyLayout companyName="Google Developers">
      {gdscImageList.map((item: ICompanyCard) => (
        <CompanyPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default GoogleDevelopers