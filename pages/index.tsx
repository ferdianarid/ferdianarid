import { Fragment } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import { statistics } from "@data/statistics"
import Header from "@containers/homepage/Header"
import Background from "@containers/homepage/Background"
import Journey from "@containers/homepage/Journey"
import PopularTech from "@containers/homepage/PopularTech"
import Stats from "@components/moleculs/Stats"
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
      <PagesLayout>
        <Header lang={lang} emailHandler={emailHandler} />

        <div className="w-full">
          <div className="max-w-[1200px] bg-white mx-auto -mt-28 md:-mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 py-10 px-6 md:px-24 rounded-3xl relative z-20">
            {statistics.map((item: any) => (
              <Stats key={item.id} count={item.count} title={item.title} />
            ))}
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
