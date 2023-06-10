import type {
  AppProps
  // NextWebVitalsMetric
} from "next/app"
import Script from "next/script"
import { useRouter } from "next/router"
import { Fragment, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import NProgress from "nprogress"
import Aos from "aos"
import "nprogress/nprogress.css"
import "../apps/styles/globals.css"
import "../apps/styles/nprogress.css"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // NProgress.configure({ trickleRate: 0.02, trickleSpeed: 800 })

  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true
    })
  }, [])

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Current path route: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])
  return (
    <Fragment>
      <Toaster position="top-right" />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp