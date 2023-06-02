import React from "react"
import { FaLock } from "react-icons/fa"

const EmptyPhoto = () => {
  return (
    <div className="w-full bg-slate-800 h-[270px] flex items-center justify-center">
      <FaLock size={72} className="text-slate-600" />
    </div>
  )
}

export default EmptyPhoto