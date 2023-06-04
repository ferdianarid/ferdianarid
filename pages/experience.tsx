import { Fragment, useEffect } from "react"
import { NextPage } from "next/types"
import { useRouter } from "next/router"
import { motion, useAnimation } from "framer-motion"
import PagesLayout from "@layouts/PagesLayout"
import { DataExperience } from "@data/experience"
import { PageText, ParagraphText } from "@components/atoms/Text"
import ExperienceCard from "@components/organism/Cards/ExperienceCard"
import id from "@locales/id"
import en from "@locales/en"
import { Meta } from "@modules/Meta"
import { IExperience } from "@interfaces/index"
import { useInView } from "react-intersection-observer"
import { childVariant, containerVariant } from "@animations/animationVariant"

const Experience: NextPage = () => {
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
                                <PageText isLight>{lang.headerExperience}</PageText>
                                <ParagraphText>{lang.subheaderExperience}</ParagraphText>
                            </div>
                        </div>
                        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariant} className="w-full">
                            {DataExperience.map((experience: IExperience) => {
                                const { id, position, image, startDate, endDate, company, duration, workStatus, jobStatus, location, description } = experience
                                return (
                                    <ExperienceCard
                                        key={id}
                                        variant={childVariant}
                                        position={position}
                                        image={image}
                                        startDate={startDate}
                                        endDate={endDate}
                                        company={company}
                                        duration={duration}
                                        workStatus={workStatus}
                                        jobStatus={jobStatus}
                                        location={location}
                                        description={description}
                                    />
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export default Experience