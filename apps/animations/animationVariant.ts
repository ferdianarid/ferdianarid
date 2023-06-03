export const containerVariant = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: {
          delayChildren: .7,
          staggerChildren: .5
      }
  }
}

export const childVariant = {
  hidden: {
      y: 200,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          duration: .7,
          type: "easing",
          stiffness: 500,
          mass: .5
      }
  }
}