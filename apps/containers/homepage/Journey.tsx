import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { leftTransition, rightTransition, rightTransitionDelay } from "apps/animations/FadeTransition"
import clsx from "clsx"

const Journey = ({ lang }: { lang: any }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div className="w-full bg-neutral-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-10 md:py-16 flex justify-between flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <motion.img ref={ref} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }} src="/images/chair.webp" className="rounded-3xl h-[550px] w-[480px] object-cover" alt="chair" />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={leftTransition} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 pb-2 to-yellow-400 font-gilroy-bold text-5xl md:text-7xl">{lang.journey}</motion.h1>
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={rightTransition} className={clsx(
            "text-heading-7 leading-relaxed font-gilroy-normal",
            "dark:text-neutral-60 text-neutral-10 mt-5"
          )}>{lang.descriptionJourney2}</motion.h1>
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={rightTransitionDelay} className={clsx(
            "text-heading-7 leading-relaxed font-gilroy-normal",
            "dark:text-neutral-60 text-neutral-10 mt-5"
          )}>{lang.descriptionJourney2}</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Journey