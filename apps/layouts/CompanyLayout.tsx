import React, { Fragment, ReactNode } from "react"
import { useRouter } from "next/router"
import { FaChevronLeft } from "react-icons/fa"
import PagesLayout from "./PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import { Meta } from "@modules/Meta"

const CompanyLayout = ({ companyName, children }: { companyName: string, children: ReactNode }) => {
  const router = useRouter()
  return (
    <Fragment>
      <Meta />
      <PagesLayout>
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
          <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
            <div className="mb-5">
              <div className="">
                <button onClick={() => router.back()} className="flex items-center gap-2 mb-7">
                  <FaChevronLeft size={10} className="dark:text-neutral-10 text-primary-pressed" />
                  <h3 className="font-gilroy-medium text-sm dark:text-neutral-10 text-primary-pressed">Back to previous</h3>
                </button>
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