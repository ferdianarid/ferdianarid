import PagesLayout from "@layouts/PagesLayout"
import React, { Fragment } from "react"
import { ParagraphText, PageText } from "@components/atoms/Text"

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
          </div>
        </div>
      </PagesLayout>
    </Fragment>
  )
}

export default About