import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

const NameSparkles = () => {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
      }
    }
  }

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5,
        ease: "easeOut",
        delayChildren: 1.75,
      }
    }
  }

  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      variants={svgVariants}
      width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        variants={pathVariants}
        style={{ pathLength, opacity }} d="M2.5 8.5L3.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        variants={pathVariants}
        style={{ pathLength, opacity }} d="M11.5 18.5L25.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        variants={pathVariants}
        style={{ pathLength, opacity }} d="M18 29.5C21 28.5 23 28.5 26.5 28.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

export default NameSparkles