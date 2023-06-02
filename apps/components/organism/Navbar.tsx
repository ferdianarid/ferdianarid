import React, { SetStateAction, useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import PostsCategory from "./Popover/PostsCategory"
import { useRouter } from "next/router"
import en from "@locales/en"
import id from "@locales/id"
import { LanguageList } from "@data/data"
import Switcher from "@components/atoms/Button/Switcher"
import clsx from "clsx"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean | any>>(false)

  const router = useRouter()
  const { locale } = router

  const lang = locale === "id" ? id : en

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }
  return (
    <nav className="bg-neutral-10 dark:bg-primary-pressed">
      <div className="w-full max-w-[1440px] mx-auto px-5 py-[18px] md:px-24">
        <div className="">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <motion.div className="hover:cursor-pointer flex flex-col" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.2 }}>
                <h1 data-test-id="brand" className="font-gilroy-bold text-2xl text-primary-pressed dark:text-neutral-10">{lang.brandPortfolio}</h1>
                <p className="text-xs text-primary-pressed dark:text-neutral-10 font-gilroy-normal">Frontend Developer</p>
              </motion.div>
            </Link>
            <div className="ml-auto flex items-center space-between">
              <div className="hidden md:block">
                <div className="ml-16 flex items-center space-x-10 relative z-20">
                  <Link href="/projects">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }} className={clsx(
                      "text-primary-pressed dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/projects" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationProject}
                    </motion.p>
                  </Link>
                  <PostsCategory textColors="text-primary-pressed dark:text-neutral-10" />
                  <Link href="/experience">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className={clsx(
                      "text-primary-pressed dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/experience" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationExperience}
                    </motion.p>
                  </Link>
                  <Link href="/about">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className={clsx(
                      "text-primary-pressed dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/about" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationAbout}
                    </motion.p>
                  </Link>
                  {/* <Link href="/services">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className="text-primary-pressed dark:text-neutral-10 font-gilroy-medium text-sm hover:cursor-pointer">
                      {lang.navigationService}
                    </motion.p>
                  </Link>
                  <Link href="/account">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className="text-primary-pressed dark:text-neutral-10 font-gilroy-medium text-sm rounded-lg py-3 hover:cursor-pointer">
                      {lang.navigationAccount}
                    </motion.p>
                  </Link> */}
                  {/* Select Language */}
                  <select
                    onChange={changeLanguage}
                    className="bg-transparent text-primary-pressed dark:text-neutral-10 text-sm font-gilroy-medium py-2"
                  >
                    {LanguageList?.map((item: any) => (
                      <option
                        key={item.id}
                        value={item.value}
                        className="py-2 font-gilroy-medium text-primary-pressed text-sm hover:cursor-pointer  transition duration-150 ease-in-out hover:bg-primary-hover flex items-center focus:outline-none hover:text-neutral-10"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <Switcher />
                </div>
              </div>
            </div>
            <div className="flex md:w-fit md:space-x-4 justify-between">
              <div className="block mr-2 mt-1 md:hidden">
                <Switcher />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-headline-7 inline-flex md:hidden items-center justify-center p-2 rounded-md text-neutral-10 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen
                  ? (
                    <svg width="24" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 1.9999C0.799805 1.11625 1.51615 0.399902 2.3998 0.399902H21.5998C22.4835 0.399902 23.1998 1.11625 23.1998 1.9999C23.1998 2.88356 22.4835 3.5999 21.5998 3.5999H2.3998C1.51615 3.5999 0.799805 2.88356 0.799805 1.9999Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 9.9999C0.799805 9.11625 1.51615 8.3999 2.3998 8.3999H11.9998C12.8835 8.3999 13.5998 9.11625 13.5998 9.9999C13.5998 10.8836 12.8835 11.5999 11.9998 11.5999H2.3998C1.51615 11.5999 0.799805 10.8836 0.799805 9.9999Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 17.9999C0.799805 17.1162 1.51615 16.3999 2.3998 16.3999H21.5998C22.4835 16.3999 23.1998 17.1162 23.1998 17.9999C23.1998 18.8836 22.4835 19.5999 21.5998 19.5999H2.3998C1.51615 19.5999 0.799805 18.8836 0.799805 17.9999Z" fill="currentColor" />
                    </svg>
                  )
                  : (
                    <svg className="mb-5" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.868532 0.868532C1.49337 0.243693 2.50643 0.243693 3.13127 0.868532L9.9999 7.73716L16.8685 0.868532C17.4934 0.243693 18.5064 0.243693 19.1313 0.868532C19.7561 1.49337 19.7561 2.50643 19.1313 3.13127L12.2626 9.9999L19.1313 16.8685C19.7561 17.4934 19.7561 18.5064 19.1313 19.1313C18.5064 19.7561 17.4934 19.7561 16.8685 19.1313L9.9999 12.2626L3.13127 19.1313C2.50643 19.7561 1.49337 19.7561 0.868532 19.1313C0.243693 18.5064 0.243693 17.4934 0.868532 16.8685L7.73716 9.9999L0.868532 3.13127C0.243693 2.50643 0.243693 1.49337 0.868532 0.868532Z" fill="currentColor" />
                    </svg>

                  )}
              </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref: any) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="py-2 mb-7 px-5 md:mt-0 flex flex-col space-y-3">
                  <Link href="/projects">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }} className={clsx(
                      "text-primary-pressed py-3 rounded-lg dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/projects" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationProject}
                    </motion.p>
                  </Link>
                  <PostsCategory textColors="text-primary-pressed dark:text-neutral-10" />
                  <Link href="/experience">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className={clsx(
                      "text-primary-pressed py-3 rounded-lg dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/experience" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationExperience}
                    </motion.p>
                  </Link>
                  <Link href="/about">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className={clsx(
                      "text-primary-pressed py-3 rounded-lg dark:text-neutral-10 text-sm hover:cursor-pointer",
                      router.pathname === "/about" ? "dark:text-semantic-warning-main font-semibold" : "dark:text-neutral-10 font-gilroy-medium"
                    )}>
                      {lang.navigationAbout}
                    </motion.p>
                  </Link>
                  {/* <Link href="/services">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className="text-primary-pressed dark:text-neutral-10 font-gilroy-medium text-sm rounded-lg py-3 hover:cursor-pointer">
                      {lang.navigationService}
                    </motion.p>
                  </Link> */}
                  {/* <Link href="/account">
                    <motion.p initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }} className="text-primary-pressed dark:text-neutral-10 font-gilroy-medium text-sm rounded-lg py-3 hover:cursor-pointer">
                      {lang.navigationAccount}
                    </motion.p>
                  </Link> */}
                  {/* Select Language */}
                  <select
                    onChange={changeLanguage}
                    className="bg-transparent text-primary-pressed dark:text-neutral-10 text-sm font-gilroy-medium py-2"
                  >
                    {LanguageList.map((item: any) => (
                      <option
                        key={item.id}
                        value={item.value}
                        className="font-gilroy-medium text-primary-pressed text-sm hover:cursor-pointer py-3 px-0 transition duration-150 ease-in-out hover:bg-primary-hover flex items-center focus:outline-none hover:text-neutral-10"
                      >
                        {/* <div className="flex items-center space-x-2 w-fit"> */}
                        <p className="text-sm font-gilroy-medium py-2 px-0">
                          {item.name}
                        </p>
                        {/* </div> */}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </nav >
  )
}

export default Navbar