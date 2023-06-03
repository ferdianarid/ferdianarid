import {
  Fragment,
  // SetStateAction,
  // useState
} from "react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
// import ConfirmModal from "../Modals/ConfirmModal"
import { ParagraphText } from "@components/atoms/Text"
import { IRecentProject } from "@interfaces/index"
import { LiveBadge } from "@components/atoms/Badge"
import { useRouter } from "next/router"
import id from "@locales/id"
import en from "@locales/en"
import truncateString from "apps/helpers/truncateString"
import { motion } from "framer-motion"

const ProjectCard: React.FC<IRecentProject> = ({ title, fileImage, description, isLight, liveBadge, projectId, projectUrl, variant }) => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === "id" ? id : en

  // const [open, setOpen] = useState<SetStateAction<boolean | any>>(false)

  // const openModal = () => setOpen(true)
  // const closeModal = () => setOpen(false)

  return (
    <Fragment>
      {/* <ConfirmModal projectUrls={projectUrl} showModal={open} onClose={closeModal} /> */}
      <motion.div variants={variant} className={clsx(
        "w-full h-full relative flex flex-col justify-between",
        "shadow-lg shadow-slate-100 dark:shadow-none",
        "rounded-2xl",
        isLight ? "border border-neutral-10 dark:border-primary-hover" : "",
        isLight ? "p-5" : "p-5",
        isLight ? "" : "bg-neutral-10"
      )}>
        <div>
          <div className="w-full h-[200px]">
            <Image src={`/images/projects/${fileImage}.png`} className="object-cover rounded-2xl h-[200px]" width={800} height={200} alt={fileImage} />
          </div>
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <h3 className={clsx(
                "font-gilroy-bold text-xl",
                isLight ? "text-primary-pressed dark:text-neutral-10" : "text-primary-main"
              )}>{title}</h3>
              {liveBadge && <LiveBadge />}
            </div>
            <ParagraphText className='pt-2'>{truncateString(description, 100)}</ParagraphText>
          </div>
        </div>
        <div className="mt-6 flex phone:flex-col gap-2">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={clsx(
            "phone:w-full w-1/2 text-center py-3 rounded-xl px-8 border border-semantic-warning-main dark:border-primary-main text-neutral-10 dark:text-neutral-10 font-gilroy-bold text-sm",
            isLight ? "bg-semantic-warning-main dark:bg-primary-hover" : "bg-primary-main"
          )}>{lang.buttonOpenProject}</a>
          <Link href={`/projects/${projectId}`} className="phone:w-full w-1/2">
            <button className={clsx(
              "w-full py-3 rounded-xl px-8 border font-gilroy-bold text-sm",
              isLight ? "" : "bg-neutral-10",
              isLight ? "text-neutral-60 dark:text-neutral-10" : "text-primary-main",
              isLight ? "border-neutral-30 dark:border-primary-hover" : "border-primary-main"
            )}>{lang.buttonDetailProject}</button>
          </Link>
        </div>
      </motion.div>
    </Fragment>
  )
}

export default ProjectCard