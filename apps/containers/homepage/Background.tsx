import React, { useEffect } from "react"
import clsx from "clsx"
import { motion, useAnimation } from "framer-motion"
import { leftTransition, rightTransition, rightTransitionDelay } from "apps/animations/FadeTransition"
import { useInView } from "react-intersection-observer"

const Background = ({ lang }: { lang: any }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div className="w-full bg-neutral-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-24 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={leftTransition} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 pb-2 to-yellow-400 font-gilroy-bold text-5xl md:text-7xl">{lang.background}</motion.h1>
        </div>
        <div className="w-full mt-5 md:mt-0 md:w-1/2 flex flex-col space-y-3">
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={rightTransition} className={clsx(
            "text-heading-7 leading-relaxed font-gilroy-normal",
            "dark:text-neutral-60 text-neutral-10"
          )}>{lang.descriptionBackground1}</motion.h1>
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={rightTransitionDelay} className={clsx(
            "text-heading-7 leading-relaxed font-gilroy-normal",
            "dark:text-neutral-60 text-neutral-10"
          )}>{lang.descriptionBackground2}</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Background