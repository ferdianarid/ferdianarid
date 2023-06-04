export const topTransition = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: -40 }
}

export const leftTransition = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 1, delay: .8 } },
  hidden: { opacity: 0, translateX: -100 }
}

export const rightTransition = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 1, delay: .8 } },
  hidden: { opacity: 0, translateX: 100 }
}

export const rightTransitionDelay = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 1, delay: 1.5 } },
  hidden: { opacity: 0, translateX: 100 }
}

export const bottomTransition = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 1, delay: .8 } },
  hidden: { opacity: 0, translateY: 100 }
}

export const fadeInView = {
  visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
  hidden: { opacity: 0 }
}