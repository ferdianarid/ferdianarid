import fs from "fs"
import * as path from "path"
import { Fragment, useRef } from "react"
import { NextPage } from "next/types"
import { motion } from "framer-motion"
import matter from "gray-matter"
import { FaSearch } from "react-icons/fa"
import { Meta } from "@modules/Meta"
import PagesLayout from "@layouts/PagesLayout"
import PostCard from "@components/organism/Cards/PostCard"
import { PageText, ParagraphText } from "@components/atoms/Text"
import { childVariant, containerVariant } from "apps/animations/animationVariant"

const Posts: NextPage = ({ posts }: any) => {
    const queryRefs = useRef<HTMLInputElement>(null)

    const queryHandler = () => {
        if (queryRefs.current !== null) {
            const queryKey = queryRefs.current.value
            const result = posts.filter((text: any) => text.frontMatter.title).includes(queryKey)
            return result
        }
    }
    return (
        <Fragment>
            <Meta />
            <PagesLayout>
                <div className="w-full bg-neutral-10 dark:bg-primary-pressed">
                    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center justify-between mb-5">
                            <div className="">
                                <PageText isLight>All Posts.</PageText>
                                <ParagraphText>this is a post that you can read anytime</ParagraphText>
                            </div>
                            <div className="w-full md:w-fit flex items-center">
                                <input type="search" ref={queryRefs} className="w-full bg-slate-100 dark:bg-primary-hover text-sm py-[13px] px-4 rounded-l-lg text-neutral-10 focus:outline-none focus:border-2 focus:border-semantic-warning-main" placeholder="Search posts" name="query" id="query" />
                                <button onClick={queryHandler} className="py-[14px] text-heading-6 text-neutral-10 px-4 rounded-r-lg bg-slate-100 dark:bg-primary-hover"><FaSearch className="text-neutral-40 dark:text-neutral-10" size={21} /></button>
                            </div>
                        </div>
                        <motion.div initial="hidden" animate="visible" variants={containerVariant} className="w-full grid grid-cols-1 gap-2 md:grid-cols-3">
                            {posts.map((post: any, idx: number) => (
                                <PostCard key={idx} variant={childVariant} imagePath={post.frontMatter.imageUrl} postId={post.postId} title={post.frontMatter.title} description={post.frontMatter.description} category={post.frontMatter.category} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </PagesLayout>
        </Fragment >
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("apps", "data", "posts"))

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("apps", "data", "posts", filename))

        const { data: frontMatter } = matter(markdownWithMeta)

        const postId = filename.split(".")[0]

        return {
            frontMatter,
            postId
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default Posts