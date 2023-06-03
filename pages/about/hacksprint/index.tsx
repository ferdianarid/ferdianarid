import React from "react"
import { hacksprintImageList } from "@data/data"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"
import CompanyPhotoCard from "@components/organism/Cards/CompanyPhotoCard"

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