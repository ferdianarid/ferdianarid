import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import TechIcon from "@components/atoms/Images/TechIcon"
import { TechList } from "@data/data"
import { containerVariant, fadeUpAndScaleVariant, scaleChildVariant } from "apps/animations/animationVariant"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"

const PopularTech = ({ lang }: { lang: any }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div className="w-full bg-neutral-20 dark:bg-primary-pressed">
      <div className="max-w-[1440px] mx-auto px-6 mt-16 md:mt-0 md:px-24 py-24 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <motion.h1 ref={ref} initial="hidden" animate={controls} variants={fadeUpAndScaleVariant} className={clsx(
            "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 pb-2 to-yellow-400",
            "font-gilroy-bold text-5xl md:text-7xl text-center md:text-left",
          )}>{lang.technology}</motion.h1>
        </div>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariant} className="w-full md:w-1/2 mt-10 md:mt-0 grid grid-cols-4 gap-5 items-center">
          {TechList.map((item: any) => (
            <TechIcon key={item.id} variant={scaleChildVariant} title={item.title} width={170} height={item.height} alt={item.title} />
          ))}
        </motion.div>
      </div>
    </div >
  )
}

export default PopularTech