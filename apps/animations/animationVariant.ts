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

export const scaleChildVariant = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .7,
            type: "easing",
            stiffness: 500,
            mass: .5
        }
    }
  }

  export const fadeUpAndScaleVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
        y: -200
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: .7,
            type: "easing"
        }
    }
  }

  export const fadeLeftAndScaleVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
        x: 200
    },
    visible: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: "easing"
        }
    }
  }