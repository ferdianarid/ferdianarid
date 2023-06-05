import PagesLayout from "@layouts/PagesLayout"
import React, { Fragment } from "react"
import { motion } from "framer-motion"
import { ParagraphText, PageText } from "@components/atoms/Text"
import { communityList, companyList } from "@data/data"
import { ICompany } from "@interfaces/index"
import CompanyCard from "@components/organism/Cards/CompanyCard"
import { childVariant, containerVariant } from "apps/animations/animationVariant"
import { Meta } from "@modules/Meta"

const About = () => {
  return (
    <Fragment>
      <Meta />
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
            <motion.div initial="hidden" animate="visible" variants={containerVariant} className="mt-6 grid phone:grid-cols-1 tablet:grid-cols-2 grid-cols-3 phone:gap-4 gap-6">
              {companyList.map((company: ICompany) => (
                <CompanyCard key={company.id} variant={childVariant} company={company.company} route={company.route} thumbnailFolder={company.thumbnailImage} />
              ))}
            </motion.div>

            <h1 className="font-gilroy-bold mt-10 text-xl text-neutral-10">Community Photo</h1>
            <motion.div initial="hidden" animate="visible" variants={containerVariant} className="mt-6 grid phone:grid-cols-1 tablet:grid-cols-2 grid-cols-3 phone:gap-4 gap-6">
              {communityList.map((community: ICompany) => (
                <CompanyCard key={community.id} variant={childVariant} company={community.company} route={community.route} thumbnailFolder={community.thumbnailImage} />
              ))}
            </motion.div>
          </div>
        </div>
      </PagesLayout>
    </Fragment >
  )
}

export default About