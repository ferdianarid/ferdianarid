import React, { Fragment } from "react"
import { ParagraphText } from "@components/atoms/Text"
import Feedback from "@components/atoms/Field/Feedback"
import Link from "next/dist/client/link"

const Footer: React.FC = () => {
    return (
        <Fragment>
            <div className="w-full bg-neutral-20 dark:bg-[#10101d]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-24">
                    <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-5">
                        <div className="col-span-2">
                            <Link href="/">
                                <h1 data-testid="footerHeading" className="font-gilroy-bold text-3xl text-primary-pressed dark:text-neutral-10 hover:cursor-pointer">
                                    Portfolio.
                                </h1>
                            </Link>
                            <ParagraphText className="mt-5" data-test-id="footerSubheading">Frontend Developer based in Jombang. Focus developing micro interaction in the Frontend of Website. And also integrating with backend or CMS</ParagraphText>
                            <ParagraphText className="mt-10">&copy;2022 Ferdian Ahmad R</ParagraphText>
                        </div>
                        <div className="">
                            <h1 className="font-gilroy-bold text-xl text-primary-pressed dark:text-neutral-10">Discover</h1>
                            <div className="grid gap-y-4 mt-5">
                                <ParagraphText>
                                    <Link href="/posts" className="font-gilroy-medium hover:cursor-pointer">
                                        Posts
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="/services" className="font-gilroy-medium hover:cursor-pointer">
                                        Services
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="/projects" className="font-gilroy-medium hover:cursor-pointer">
                                        Projects
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="/experience" className="font-gilroy-medium hover:cursor-pointer">
                                        Experience
                                    </Link>
                                </ParagraphText>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-gilroy-bold text-xl text-primary-pressed dark:text-neutral-10">Social Media</h1>
                            <div className="grid gap-y-4 mt-5">
                                <ParagraphText>
                                    <Link href="https://github.com/ferdianarid" className="font-gilroy-medium hover:cursor-pointer">
                                        Github
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="https://www.linkedin.com/in/ferdianar" className="font-gilroy-medium hover:cursor-pointer">
                                        LinkedIn
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="https://facebook.com/ferdian.r.37" className="font-gilroy-medium hover:cursor-pointer">
                                        Facebook
                                    </Link>
                                </ParagraphText>
                                <ParagraphText>
                                    <Link href="https://instagram.com/ferdianarid" className="font-gilroy-medium hover:cursor-pointer">
                                        Instagram
                                    </Link>
                                </ParagraphText>
                            </div>
                        </div>
                        <Feedback />
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Footer