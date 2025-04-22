import { Marquee } from '../../components/Marquee/Marquee'
import GolangLogo from '../../assets/icons/tech-stacks/golang-logo.svg'
import PythonLogo from '../../assets/icons/tech-stacks/python-logo.webp'
import RLogo from '../../assets/icons/tech-stacks/r-logo.png'
import GitLogo from '../../assets/icons/tech-stacks/git-logo.webp'
import MetabaseLogo from '../../assets/icons/tech-stacks/metabase-logo.png'
import LookerLogo from '../../assets/icons/tech-stacks/looker-logo.png'
import PostgreLogo from '../../assets/icons/tech-stacks/postgresql-logo.png'
import ClickHouseLogo from '../../assets/icons/tech-stacks/clickhouse-logo.svg'
import AirflowLogo from '../../assets/icons/tech-stacks/airflow-logo.webp'
import DbtLogo from '../../assets/icons/tech-stacks/dbt-logo.svg'
import KafkaLogo from '../../assets/icons/tech-stacks/kafka-logo-black.svg'
import SparkLogo from '../../assets/icons/tech-stacks/spark-logo.png'
import CubeLogo from '../../assets/icons/tech-stacks/cube-logo.png'
import DebeziumLogo from '../../assets/icons/tech-stacks/debezium-logo.png'
import DockerLogo from '../../assets/icons/tech-stacks/docker-logo.webp'
import JupyterLogo from '../../assets/icons/tech-stacks/jupyter-logo.png'
import HtmlLogo from '../../assets/icons/tech-stacks/html-logo.webp'
import CssLogo from '../../assets/icons/tech-stacks/css-logo.webp'
import JsLogo from '../../assets/icons/tech-stacks/javascript-logo.webp'
import TsLogo from '../../assets/icons/tech-stacks/typescript-logo.webp'
import ReactLogo from '../../assets/icons/tech-stacks/react-logo.webp'
import ViteLogo from '../../assets/icons/tech-stacks/vite-logo.svg'
import TailwindLogo from '../../assets/icons/tech-stacks/tailwind-logo.png'
import ShadcnLogo from '../../assets/icons/tech-stacks/shadcn-logo.png'
import { useTypewriter } from '@/hooks/useTypewriter'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'motion/react'
import { useEffect } from 'react'
import { ArrowDown } from 'lucide-react'

const techStackItems1 = [
  {
    logo: GolangLogo,
    name: 'Golang',
  },
  {
    logo: PythonLogo,
    name: 'Python',
  },
  {
    logo: RLogo,
    name: 'R',
  },
  {
    logo: HtmlLogo,
    name: 'HTML',
  },
  {
    logo: CssLogo,
    name: 'CSS',
  },
  {
    logo: JsLogo,
    name: 'JavaScript',
  },
  {
    logo: TsLogo,
    name: 'TypeScript',
  },
  {
    logo: ReactLogo,
    name: 'React',
  },
  {
    logo: ViteLogo,
    name: 'Vite',
  },
  {
    logo: TailwindLogo,
    name: 'Tailwind',
  },
  {
    logo: ShadcnLogo,
    name: 'ShadCN',
  },
]

const techStackItems2 = [
  {
    logo: PostgreLogo,
    name: 'PostgreSQL',
  },
  {
    logo: ClickHouseLogo,
    name: 'ClickHouse',
  },
  {
    logo: AirflowLogo,
    name: 'Airflow',
  },
  {
    logo: DbtLogo,
    name: 'dbt',
  },
  {
    logo: KafkaLogo,
    name: 'Kafka',
  },
  {
    logo: DebeziumLogo,
    name: 'Debezium',
  },
  {
    logo: SparkLogo,
    name: 'Spark',
  },
  {
    logo: CubeLogo,
    name: 'Cube',
  },
  {
    logo: DockerLogo,
    name: 'Docker',
  },
  {
    logo: GitLogo,
    name: 'Git',
  },
  {
    logo: JupyterLogo,
    name: 'Notebook',
  },
  {
    logo: MetabaseLogo,
    name: 'Metabase',
  },
  {
    logo: LookerLogo,
    name: 'Looker',
  },
]

const colors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export function Banner() {
  const typed = useTypewriter([
    'a researcher',
    'a data analyst',
    'an analytics engineer',
  ])

  const color = useMotionValue(colors[0])
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #111827 50%, ${color}`

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
      style={{
        backgroundImage,
      }}
      className="h-screen w-full flex flex-col justify-center gap-10 items-center text-text-inverted"
    >
      <div className="flex flex-col items-center mt-10 cursor-default">
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="inter-normal text-[100px] text-center"
        >
          Billy Witanto
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <span className="text-left roboto-normal !font-extralight text-[25px] cursor-default">
            Hi! I am <span>{typed}</span>
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col w-full justify-center items-center gap-5 cursor-default mt-20"
      >
        <span className="w-3/4 text-center inter-normal text-[15px]">
          Experienced in:
        </span>
        <div className="w-3/4 rounded-xl flex flex-col">
          <Marquee items={techStackItems1} />
          <Marquee items={techStackItems2} />
        </div>
      </motion.div>
      <div className="absolute flex flex-row gap-1 items-center bottom-5">
        <ArrowDown className="animate-bounce" />
        <span className="inline-block align-middle cursor-default">
          Scroll-down to see more
        </span>
      </div>
    </motion.section>
  )
}
