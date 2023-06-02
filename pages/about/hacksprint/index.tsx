import React from "react"
import { hacksprintImageList } from "@data/data"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"

const Hacksprint = () => {
  return (
    <CompanyLayout companyName="Hacksprint 1000Startup Digital">
      {hacksprintImageList.map((item: ICompanyCard) => (
        <CompanyPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default Hacksprint