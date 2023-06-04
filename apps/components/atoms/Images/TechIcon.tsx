import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ITechIcon {
    title: string
    width: number
    height: number
    alt: string
    variant?: any
}

const TechIcon: React.FC<ITechIcon> = ({ title, width, height, alt, variant }) => {
    return (
        <motion.div variants={variant}>
            <Image src={`/images/${title}.png`} width={width} height={height} alt={alt} />
        </motion.div>
    )
}

export default TechIcon