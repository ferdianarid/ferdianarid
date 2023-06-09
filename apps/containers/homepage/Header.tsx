import { ParagraphText } from "@components/atoms/Text"
import React, { useEffect } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { childVariant, containerVariant } from "apps/animations/animationVariant"
import NameSparkles from "@components/atoms/Sparkles/NameSparkles"
import { FaDev, FaEnvelopeOpen, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa"

const Header = ({ lang, emailHandler }: { lang: any, emailHandler: any }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div className="w-full bg-neutral-20 dark:bg-primary-pressed pt-6 md:pt-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 pt-8 md:pt-24 md:pb-48 pb-48 flex flex-col md:flex-row items-center justify-between">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariant} className="w-full md:w-1/2">
          <motion.p variants={childVariant} className="text-md text-semantic-warning-main w-fit font-gilroy-bold bg-semantic-warning-main bg-opacity-20 dark:bg-primary-hover dark:bg-opacity-30 py-2 px-4 rounded-lg">{lang.badge}</motion.p>
          <motion.h1 variants={childVariant} data-testid="heading" className="relative w-fit mt-7 mb-4 text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-[45px] md:text-6xl">
            {lang.greeting}
            <TypeAnimation
              sequence={[
                " Ferdian."
              ]}
              className="text-transparent rounded-lg text-primary-pressed bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400 font-gilroy-bold bg-opacity-50 text-[45px] md:text-6xl"
              cursor={false}
            />
            <div className="absolute top-[-5px] right-[-10px] phone:top-0 phone:right-[-13px]">
              <NameSparkles />
            </div>
          </motion.h1>
          <ParagraphText variant={childVariant}>{lang.subgreeting}</ParagraphText>
          <div className="w-full mt-10 md:mt-20 flex phone:flex-col items-center md:space-x-12">
            <motion.button variants={childVariant} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} onClick={emailHandler} name="cta-button" className="w-full md:w-fit px-6 py-3 phone:py-4 rounded-lg bg-semantic-warning-main font-gilroy-bold text-lg text-neutral-10 flex items-center gap-2 justify-center"><FaEnvelopeOpen size={20} className="text-neutral-10" />{lang.email}</motion.button>
            <div className="flex items-center gap-5 phone:gap-10 phone:mt-10">
              <FaLinkedin size={24} className="text-neutral-60" />
              <FaGithub size={24} className="text-neutral-60" />
              <FaGitlab size={24} className="text-neutral-60" />
              <FaDev size={24} className="text-neutral-60" />
            </div>
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 mt-28 md:mt-0 pl-0 md:pl-16">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="w-full border-8 border-neutral-10 h-full bg-gradient-to-r from-purple-600  to-yellow-400 relative rounded-3xl flex items-center justify-center pt-20 md:pt-5">
            <Image src="/images/ferdian.png" className="z-10" width={340} height={420} alt="ferdian" />
            <div className="absolute -top-16 right-0 h-40 w-64 ">
            </div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1 }} className="absolute left-2 rounded-xl bottom-12 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-5">
              <h1 className="font-gilroy-bold text-xl text-primary-main">Ferdian Ahmad R</h1>
              <h1 className="font-gilroy-normal text-sm text-primary-main">Frontend Engineer</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1.5 }} className="absolute right-4 -top-14 md:-right-10 rounded-xl md:top-16 h-fit z-20 w-fit bg-neutral-10 shadow-lg p-4">
              <motion.img className="w-[80px] h-[80px]" initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: 360 }} transition={{ duration: 1, delay: 1.5 }} src="/images/framer-logo.png" alt="framer" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 1 }} className="absolute left-5 rounded-xl -top-14 h-fit z-10 w-fit bg-neutral-10 shadow-lg p-5 flex items-center justify-center">
              <motion.img className="w-[80px] h-[70px]" initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: 360 }} transition={{ duration: 1, delay: 1.5 }} src="/images/react-logo.png" alt="react" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header