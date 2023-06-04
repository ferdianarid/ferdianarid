import { Fragment } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { TypeAnimation } from "react-type-animation"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import Header from "@containers/homepage/Header"
import Background from "@containers/homepage/Background"
import Journey from "@containers/homepage/Journey"
import PopularTech from "@containers/homepage/PopularTech"
import ProjectCarousel from "@components/templates/ProjectCarousel"
import { HeadingText, ParagraphText } from "@components/atoms/Text"
import en from "@locales/en"
import id from "@locales/id"

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  const lang = locale === "id" ? id : en

  const emailHandler = () => {
    window.open("mailto:ferdianahmadrozikin018@gmail.com")
  }
  return (
    <Fragment>
      <Meta />
      <div className="w-full py-3 md:px-[120px] bg-green-500 dark:bg-[#1f1e2e] flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <h1>
          <TypeAnimation
            sequence={[
              "Currently work at Dipa Inhouse"
            ]}
            className="text-sm font-gilroy-semibold text-neutral-10 dark:text-neutral-10 text-center"
            cursor={false}
          />
        </h1>
      </div>
      <PagesLayout>
        <Header lang={lang} emailHandler={emailHandler} />

        <div className="w-full">
          <div className="max-w-[1200px] bg-white mx-auto -mt-28 md:-mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 py-10 px-6 md:px-24 rounded-3xl relative z-20">
            <div className="flex flex-col space-y-1 items-center">
              <h1 className="font-gilroy-bold text-primary-main text-4xl phone:text-3xl">8</h1>
              <h2 className="font-gilroy-medium phone:text-sm text-md text-primary-main">Project Released</h2>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <h1 className="font-gilroy-bold text-primary-main text-4xl phone:text-3xl">3400</h1>
              <h2 className="font-gilroy-medium phone:text-sm text-md text-primary-main">Github Commits</h2>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <div className="flex items-center font-gilroy-bold text-primary-main phone:text-3xl text-4xl">
                3+ years
              </div>
              <h2 className="font-gilroy-medium phone:text-sm text-md text-primary-main">Join in Company</h2>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <div className="flex items-center font-gilroy-bold text-primary-main text-4xl phone:text-3xl">
                10+
              </div>
              <h2 className="font-gilroy-medium phone:text-sm text-md text-primary-main">Technology Used</h2>
            </div>
          </div>
        </div>

        <Background lang={lang} />
        <Journey lang={lang} />
        <PopularTech lang={lang} />

        <div className="w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-24">
            <HeadingText className="text-center">{lang.recentProject}</HeadingText>
            <ParagraphText className="text-center mt-5 mb-6">{lang.descriptionRecentProject}</ParagraphText>
            <ProjectCarousel />
          </div>
        </div>
        <div className="w-full bg-neutral-20 dark:bg-primary-pressed md:h-[350px] md:-mt-[300px]"></div>
        <div className="w-full"></div>
      </PagesLayout>
    </Fragment>
  )
}

export default Home
