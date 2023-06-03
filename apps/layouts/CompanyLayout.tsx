import React, { Fragment, ReactNode } from "react"
import PagesLayout from "./PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import PreviousButton from "@components/moleculs/PreviousButton"
import { Meta } from "@modules/Meta"

const CompanyLayout = ({ companyName, children }: { companyName: string, children: ReactNode }) => {
  return (
    <Fragment>
      <Meta />
      <PagesLayout>
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
          <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
            <div className="mb-5">
              <div className="">
                <PreviousButton />
                <PageText isLight>{companyName}</PageText>
                <ParagraphText>Activity during work at {companyName}</ParagraphText>
              </div>
            </div>
            <div className="w-full grid phone:grid-cols-1 tablet:grid-cols-2 grid-cols-3 gap-6 mt-8">
              {children}
            </div>
          </div>
        </div>
      </PagesLayout >
    </Fragment>
  )
}

export default CompanyLayout