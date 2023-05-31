import Link from "next/link"
import React from "react"

const AuthButton = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/auth/signin">
        <button className="w-full px-5 py-3 rounded-lg border border-semantic-warning-main font-gilroy-bold text-sm text-semantic-warning-main">
          {/* {lang.signInButton} */}
          Sign In
        </button>
      </Link>
      <Link href="/auth/signup">
        <button className="w-full px-5 py-3 rounded-lg border border-semantic-warning-main font-gilroy-bold bg-semantic-warning-main text-sm text-neutral-10">
          {/* {lang.signUpButton} */}
          Sign Up
        </button>
      </Link>
    </div>
  )
}

export default AuthButton