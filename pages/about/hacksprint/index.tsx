import React from "react"
import { hacksprintImageList } from "@data/data"
import { ICompanyCard } from "@interfaces/index"
import CompanyLayout from "@layouts/CompanyLayout"
import OptimizedPhotoCard from "@components/organism/Cards/OptimizedPhotoCard"

const Hacksprint = () => {
  return (
    <CompanyLayout companyName="Hacksprint 1000Startup Digital">
      {hacksprintImageList.map((item: ICompanyCard) => (
        <OptimizedPhotoCard key={item.id} image={item.image} title={item.title} />
      ))}
    </CompanyLayout>
  )
}

export default Hacksprint