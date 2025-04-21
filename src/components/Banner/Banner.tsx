import { Marquee } from './Marquee'
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
    logo: GitLogo,
    name: 'Git',
  },
  {
    logo: MetabaseLogo,
    name: 'Metabase',
  },
  {
    logo: LookerLogo,
    name: 'Looker',
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
]

export function Banner() {
  return (
    <div className="h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center gap-10 items-center">
      <div className="flex flex-col items-center mt-10">
        <span className="urbanist-normal text-[120px] text-center">
          BILLY WITANTO
        </span>
        <span className="text-center playfair-display-400 text-[40px]">
          Researcher | Data Analyst | Analytics Engineer{' '}
          <a className="text-[12px]">(wanna-be)</a>
        </span>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-3">
        <span className="w-1/2 text-left urbanist-normal text-[20px]">
          What I work with:
        </span>
        <div className="w-1/2 h-55 rounded-xl flex flex-col">
          <Marquee items={techStackItems1} />
          <Marquee items={techStackItems2} />
        </div>
      </div>
    </div>
  )
}
