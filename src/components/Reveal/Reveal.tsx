import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  slide?: boolean
  duration?: number
  vertical?: boolean
  slideBackground?: string
  viewAmount?: number
}

export function Reveal({
  children,
  slide = false,
  duration = 0.5,
  vertical = true,
  slideBackground = '#FFFFFF',
  viewAmount = 0.5,
}: RevealProps) {
  const targetRef = useRef(null)
  const isInView = useInView(targetRef, { once: true, amount: viewAmount })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={targetRef} className="relative w-fit overflow-hidden">
      <motion.div
        variants={
          vertical
            ? {
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }
            : {
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }
        }
        initial="hidden"
        animate={mainControls}
        transition={
          slide ? { duration: duration, delay: 0.25 } : { duration: duration }
        }
      >
        {children}
      </motion.div>
      {slide ? (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: duration, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: slideBackground,
            zIndex: 20,
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}
