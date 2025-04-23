import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from 'motion/react'
import { Button } from '../../components/ui/button'
import { useEffect } from 'react'
import { Reveal } from '@/components/Reveal/Reveal'
import { Job } from '@/components/Card/Job'

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
    <motion.section
      style={{ backgroundImage }}
      className="h-[2000px] flex flex-col items-center justify-start gap-20"
    >
      <Reveal duration={1}>
        <div className=" flex flex-col justify-start mt-30 gap-5 text-text-inverted text-2xl roboto-normal !font-light">
          <div className="flex flex-row gap-5">
            <p>📍</p>
            <p>I am a data professional based in Jakarta, Indonesia.</p>
          </div>
          <div className="flex flex-row gap-5">
            <p>🎯</p>
            <p>
              From analytics and engineering to visualization and storytelling,
              <br />
              my work blends technical expertise with business understanding,
              <br />
              helping teams make better, data-driven decisions.
            </p>
          </div>
        </div>
      </Reveal>
      <div className='w-full flex flex-col gap-10 justify-center items-center text-text-inverted'>
        <Reveal slide={true}>
          <span className="text-5xl inter-normal">
            Work Experience
          </span>
        </Reveal>
        <div>
          <Reveal duration={1}>
            <Job 
              Title='Software Engineer Trainee'
              DurationFrom='September 2024'
              DurationTo='February 2025'
              Company='Sea Labs Indonesia'
              Location='Jakarta Pusat, Indonesia'
              Description='Intership for full-stack software engineer'
            />
          </Reveal>
        </div>
      </div>
      <div>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md"
        >
          <Button className="cursor-pointer roboto-normal !font-light">
            DOWNLOAD RESUME
          </Button>
        </a>
      </div>
    </motion.section>
  )
}
