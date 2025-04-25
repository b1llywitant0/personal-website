import { Portfolio } from "@/components/Card/Portfolio";
import { Reveal } from "@/components/Reveal/Reveal";
import Test from '../../assets/icons/linkedin-icon-black-png.png'

interface PortfolioItem {
  id: number
  title: string
  img: string
  startDate: string
  role: string
  tools: string[]
  briefDescription: string    
}

const PortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'The correlation between viral genetics and the progression of Hepatitis B disease',
    img: Test,
    startDate: '2021-10-01',
    role: 'Data Analyst',
    tools: [
      'R',
      'SPSS',
    ],
    briefDescription: 'The dissertation of my manager. I single-handedly helped with the data analysis, including the selection of statistical methods used.'
  },
  {
    id: 2,
    title: 'Philadephia Property Value Prediction',
    img: Test,
    startDate: '2022-04-10',
    role: 'Data Scientist',
    tools: [
      'Python',
      'Jupyter Notebook',
    ],
    briefDescription: 'My first machine learning project.'
  },
  {
    id: 3,
    title: 'CMK',
    img: Test,
    startDate: '2024-09-01',
    role: 'Data Analyst',
    tools: [
      'Python',
      'Jupyter Notebook',
    ],
    briefDescription: 'Digital marketing analyst.'
  },
  {
    id: 4,
    title: 'ELT Pipeline',
    img: Test,
    startDate: '2025-03-01',
    role: 'Analytics Engineer',
    tools: [
      'PostgreSQL',
      'Kafka',
      'Debezium',
      'Airflow',
      'ClickHouse',
      'dbt',
      'Cube',
      'Metabase',
    ],
    briefDescription: 'My first data engineer portfolio.'
  },
  {
    id: 5,
    title: 'Personal website',
    img: Test,
    startDate: '2025-04-01',
    role: 'Front-end Engineer',
    tools: [
      'React',
      'Vite',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'ShadCN',
      'Tailwind',
      'Framer Motion',
    ],
    briefDescription: 'Personal project to create a website and showcasing my front-end skill that I learned recently.'
  }
  
]

export function Portfolios() {
  return (
    <div className="flex flex-col items-center justify-center h-fill mt-4 bg-background-dark text-text-inverted gap-10">
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 mt-20">
        {
          PortfolioItems.map((item) => (
            <Reveal slide={true} vertical={false}>
              <Portfolio 
                key={item.id}
                img={item.img}
                title={item.title}
                startDate={item.startDate}
                tools={item.tools}
                briefDescription={item.briefDescription}
              />
            </Reveal>
          ))
        }        
      </div>
    </div>
  )
}
