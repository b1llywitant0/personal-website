import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from 'motion/react'
import { Button } from '../../components/ui/button'
import { useEffect } from 'react'

const colors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export function Resume() {
  const driveFileId = '1NdFq6LhQEm5UpPPaWZel_9tjeKVRmfnK'
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`

  const color = useMotionValue(colors[0])
  const backgroundImage = useMotionTemplate`radial-gradient(100% 5% at 50% 0%, ${color} 50%, #111827`

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [color])

  return (
    <motion.section style={{ backgroundImage }} className="h-screen">
      {/* <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md"
      >
        <Button className="cursor-pointer roboto-normal !font-light">
          DOWNLOAD RESUME
        </Button>
      </a> */}
    </motion.section>
  )
}
