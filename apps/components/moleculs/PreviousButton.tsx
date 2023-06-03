import { useRouter } from "next/router"
import React from "react"
import { FaChevronLeft } from "react-icons/fa"

const PreviousButton = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="flex items-center gap-2 mb-7">
      <FaChevronLeft size={10} className="dark:text-neutral-10 text-primary-pressed" />
      <h3 className="font-gilroy-medium text-sm dark:text-neutral-10 text-primary-pressed">Back to previous</h3>
    </button>
  )
}

export default PreviousButton