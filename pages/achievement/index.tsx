import { useRouter } from "next/router"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import React, { Fragment, useEffect } from "react"
import en from "@locales/en"
import id from "@locales/id"
import { certificationList } from "@data/data"
import { ICertification } from "@interfaces/index"
import CertificationCard from "@components/organism/Cards/CertificationCard"
import { childVariant, containerVariant } from "@animations/animationVariant"

const Achievement = () => {
  const router = useRouter()
  const { locale } = router

  const lang = locale === "id" ? id : en

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <Fragment>
      <Meta />
      <PagesLayout>
        <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
          <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
              <div className="">
                <PageText isLight>{lang.headerAchievement}</PageText>
                <ParagraphText>{lang.subheaderAchievement}</ParagraphText>
                <p className="mt-2 font-medium text-semantic-warning-main text-xs rounded-md py-1 px-2 bg-semantic-warning-main bg-opacity-20 w-fit">Showing {certificationList.length} Achievement</p>
              </div>
            </div>
            <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariant} className="grid grid-cols-1 md:grid-cols-2 h-full gap-8 mt-8">
              {certificationList.map((certificate: ICertification) => (
                <CertificationCard
                  key={certificate.id}
                  variant={childVariant}
                  title={certificate.title}
                  links={certificate.links}
                  image={certificate.image}
                  company={certificate.company}
                  credential={certificate.credential}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </PagesLayout>
    </Fragment>
  )
}

export default Achievement