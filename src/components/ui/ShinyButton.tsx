import { useTime, useTransform, motion } from 'motion/react'
import { Button } from './button'

interface ShinyButtonProps {
  text: string
}

export function ShinyButton(props: ShinyButtonProps) {
  const time = useTime()

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  })

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #1f2937, #ffffff)`
  })

  return (
    <div className="relative w-fit mx-1">
      <Button className="relative text-l md:text-xl h-1/2 cursor-pointer !font-light bg-gray-600 z-10 hover:bg-gray-700">
        {props.text}
      </Button>
      <motion.div
        className="absolute -inset-[1px] rounded-md"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  )
}
