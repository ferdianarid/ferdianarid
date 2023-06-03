import { ParagraphText } from "@components/atoms/Text"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const Header = ({ lang, emailHandler }: { lang: any, emailHandler: any }) => {
  return (
    <div className="w-full bg-neutral-20 dark:bg-primary-pressed pt-6 md:pt-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 pt-14 md:pt-28 md:pb-48 pb-48 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <p data-aos="fade-up" data-aos-duration="900" className="text-md text-semantic-warning-main w-fit font-gilroy-bold bg-semantic-warning-main bg-opacity-20 dark:bg-primary-hover dark:bg-opacity-30 py-2 px-4 rounded-lg">{lang.badge}</p>
          <h1 data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500} data-testid="heading" className="my-7 text-primary-pressed dark:text-neutral-10 font-gilroy-bold text-5xl md:text-6xl">
            {lang.greeting}
            <TypeAnimation
              sequence={[
                " Ferdian"
              ]}
              className="text-transparent rounded-lg text-primary-pressed bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400 font-gilroy-bold bg-opacity-50 text-5xl md:text-6xl"
              cursor={false}
            />
          </h1>
          <ParagraphText isLight animationEffect="fade-up" animationDuration={1000} animationDelay={800}>{lang.subgreeting}</ParagraphText>
          <div className="mt-10 md:mt-20 flex items-center space-x-3">
            <button data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000" onClick={emailHandler} name="cta-button" className="w-full md:w-fit px-8 py-3 rounded-lg bg-semantic-warning-main font-gilroy-bold text-md text-neutral-10">{lang.email}</button>
          </div>
        </div>
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
              <Image src="/images/framer-logo.png" width={80} height={70} alt="react" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 1 }} className="absolute left-5 rounded-xl -top-14 h-fit z-10 w-fit bg-neutral-10 shadow-lg p-5 flex items-center justify-center">
              <Image src="/images/react-logo.png" width={80} height={70} alt="react" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header