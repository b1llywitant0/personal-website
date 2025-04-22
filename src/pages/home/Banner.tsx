import { Marquee } from '../../components/Marquee/Marquee'
import GolangLogo from '../../assets/icons/tech-stacks/golang-logo.svg'
import PythonLogo from '../../assets/icons/tech-stacks/python-logo.webp'
import RLogo from '../../assets/icons/tech-stacks/r-logo.png'
import GitLogo from '../../assets/icons/tech-stacks/git-logo.webp'
import SpssLogo from '../../assets/icons/tech-stacks/spss-logo.png'
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
  {
    logo: SpssLogo,
    name: 'SPSS',
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

export function Banner() {
  const typed = useTypewriter(['a researcher', 'a data analyst', 'an analytics engineer'])

  return (
    <div className="h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center gap-10 items-center text-text-base">
      <div className="flex flex-col items-center mt-10 cursor-default">
        <span className="urbanist-semibold text-[100px] text-center">
          BILLY WITANTO
        </span>
        <span className="text-left playfair-display-400 text-[32px] cursor-default">
          Hi, I am <span className='text-accent-dark'>{typed}</span>
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-3 cursor-default">
        <span className="w-3/4 text-left urbanist-normal text-[20px]">
          What I Use:
        </span>
        <div className="w-3/4 rounded-xl flex flex-col">
          <Marquee items={techStackItems1} />
          <Marquee items={techStackItems2} />
        </div>
      </div>
    </div>
  )
}
