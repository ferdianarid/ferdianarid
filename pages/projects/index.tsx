import * as fs from "fs"
import path from "path"
import { NextPage } from "next"
import { motion, useAnimation } from "framer-motion"
import { useRouter } from "next/router"
import matter from "gray-matter"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { childVariant, containerVariant } from "@animations/animationVariant"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import { PageText, ParagraphText } from "@components/atoms/Text"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import id from "@locales/id"
import en from "@locales/en"

const Projects: NextPage = ({ project }: any) => {
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
                                <PageText isLight>{lang.headerProject}</PageText>
                                <ParagraphText>{lang.subheaderProject}</ParagraphText>
                                <p className="mt-2 font-medium text-semantic-warning-main text-xs rounded-md py-1 px-2 bg-semantic-warning-main bg-opacity-20 w-fit">Showing {project.length} projects</p>
                            </div>
                            {/* <div className="w-full md:w-fit flex items-center">
                                <input type="search" className="w-full bg-slate-100 dark:bg-primary-hover text-sm py-[13px] px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" placeholder={lang.searchbarProject} name="query" id="query" />
                                <button type="submit" className="py-3 text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-slate-100 dark:bg-primary-hover"><FaSearch className="text-neutral-40 dark:text-neutral-10" size={21} /></button>
                            </div> */}
                        </div>
                        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariant} className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-8 mt-8">
                            {project.map((item: any) => (
                                <ProjectCard
                                    key={item.id}
                                    variant={childVariant}
                                    isLight
                                    liveBadge
                                    projectId={item.projectId}
                                    projectUrl={item.frontMatter.projectUrl}
                                    fileImage={item.frontMatter.imageUrl}
                                    title={item.frontMatter.name}
                                    description={item.frontMatter.description}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </PagesLayout>
        </Fragment>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("apps", "data", "projects"))

    const project = files.map((filename: string) => {
        const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "projects", filename))

        const { data: frontMatter } = matter(markdownWithMeta)

        const projectId = filename.split(".")[0]

        return {
            frontMatter,
            projectId
        }
    })

    return {
        props: {
            project
        }
    }
}

export default Projects