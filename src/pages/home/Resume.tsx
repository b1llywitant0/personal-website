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
const jobs = [
  {
    title: 'Software Engineer Trainee',
    durationFrom: 'September 2024',
    durationTo: 'February 2025',
    company: 'Sea Labs Indonesia',
    companyLink: 'https://sealabsindonesia.sea.com/home',
    location: 'Jakarta, Indonesia',
    description: 'Internship for full-stack software engineer.',
    tools: [
      'CLI',
      'Git',
      'PostgreSQL',
      'Golang',
      'Postman',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React+Vite',
      'Tailwind',
      'ShadCN',
    ],
  },
  {
    title: 'Digital Marketing Analyst',
    durationFrom: 'October 2022',
    durationTo: 'September 2024',
    company: 'PT. Central Mega Kencana',
    companyLink: 'https://centralmegakencana.com/',
    location: 'Jakarta, Indonesia',
    description:
      'Responsible to analysis of digital marketing-related campaigns of all brands, which include but not limited to media placement of ads, website & search engine optimization, and social media.',
    tools: [
      'Python',
      'Google Analytics 4',
      'Google Tag Manager',
      'Google Search Console',
      'Ads Manager: Meta, Google, TikTok',
      'SEMRush',
      'FanpageKarma',
      'Brand24',
    ],
  },
  {
    title: 'Research Assistant',
    durationFrom: 'May 2018',
    durationTo: 'September 2021',
    company: 'Eijkman Institute of Molecular Biology',
    companyLink:
      'https://en.wikipedia.org/wiki/Eijkman_Molecular_Biology_Research_Center',
    location: 'Jakarta, Indonesia',
    description: 'Doing lab things related to Hepatitis B & C virus.',
    tools: ['R', 'SPSS'],
  },
]

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
        <div className=" flex flex-col justify-start mt-45 gap-5 text-text-inverted text-2xl roboto-normal !font-light">
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
      <div className="w-full flex flex-col gap-10 justify-center items-center text-text-inverted">
        <Reveal slide={true}>
          <span className="text-5xl inter-normal cursor-default">
            Work Experience
          </span>
        </Reveal>
        <div className="flex flex-col gap-10">
          {jobs.map((item) => (
            <Reveal duration={1} vertical={false}>
              <Job
                Title={item.title}
                DurationFrom={item.durationFrom}
                DurationTo={item.durationTo}
                Company={item.company}
                CompanyLink={item.companyLink}
                Location={item.location}
                Description={item.description}
                Tools={item.tools}
              />
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md"
        >
          <Button className="cursor-pointer roboto-normal !font-light">
            You can download my resume here~
          </Button>
        </a>
      </Reveal>
    </motion.section>
  )
}
