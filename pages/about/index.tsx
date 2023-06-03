import PagesLayout from "@layouts/PagesLayout"
import React, { Fragment } from "react"
import { ParagraphText, PageText } from "@components/atoms/Text"
import { companyList } from "@data/data"
import { ICompany } from "@interfaces/index"
import CompanyCard from "@components/organism/Cards/CompanyCard"

const About = () => {
  return (
    <Fragment>
      <PagesLayout>
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
          <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
              <div className="">
                <PageText isLight>About Me</PageText>
                <ParagraphText>Playground photo about me</ParagraphText>
              </div>
            </div>
            <h1 className="font-gilroy-bold mt-10 text-xl text-neutral-10">Company Photo</h1>
            <div className="mt-6 grid phone:grid-cols-2 tablet:grid-cols-2 grid-cols-3 phone:gap-4 gap-6">
              {companyList.map((company: ICompany) => (
                <CompanyCard key={company.id} company={company.company} route={company.route} thumbnailFolder={company.thumbnailImage} />
              ))}
            </div>
          </div>
        </div>
      </PagesLayout>
    </Fragment >
  )
}

export default About