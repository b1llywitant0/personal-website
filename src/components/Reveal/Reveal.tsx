import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
}

export function Reveal(props: RevealProps) {
  const targetRef = useRef(null)
  const isInView = useInView(targetRef, { once: true, amount: 0.5 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      console.log(isInView)
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={targetRef} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        {props.children}
      </motion.div>
    </div>
  )
}
