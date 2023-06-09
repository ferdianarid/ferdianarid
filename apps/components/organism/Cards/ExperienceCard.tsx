import React, { Fragment } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ParagraphText } from "@components/atoms/Text"
import { JobStatusBadge, MonthBadge } from "@components/atoms/Badge"
import { IExperience } from "@interfaces/index"

const ExperienceCard: React.FC<IExperience> = (props: IExperience) => {
    const { position, image, startDate, endDate, company, duration, workStatus, location, description, jobStatus, variant } = props
    return (
        <Fragment>
            <motion.div variants={variant} className="mt-10 grid gap-x-5 md:grid-cols-9 grid-cols-1">
                <div className="relative mb-5 md:mb-0 md:col-span-1 md:w-full w-24 h-24">
                    <Image src={`/images/experience/${image}`} className="rounded-xl" layout="fill" alt={image} />
                </div>
                <div className="md:col-span-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <h1 className="font-gilroy-bold text-3xl text-primary-pressed dark:text-white">{position}</h1>
                        <h1 className="font-gilroy-normal text-xs md:text-sm text-semantic-warning-main">{startDate} - {endDate}</h1>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-2">
                        <h1 className="font-gilroy-bold text-lg text-semantic-warning-main">{company}</h1>
                        <div className="flex items-center ml-4 gap-2">
                            <MonthBadge>{duration} Month</MonthBadge>
                            <JobStatusBadge>{jobStatus}</JobStatusBadge>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6 mb-4 md:mb-0">
                        <p className='text-white font-gilroy-normal text-sm mt-2'>{workStatus}</p>
                        <p className='text-white font-gilroy-normal text-sm mt-2'>{location} - Indonesia</p>
                    </div>
                    <ParagraphText>{description}</ParagraphText>
                </div>
            </motion.div>
        </Fragment>
    )
}

export default ExperienceCard