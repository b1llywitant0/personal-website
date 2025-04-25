import { Portfolio } from "@/components/Card/Portfolio";
import { Reveal } from "@/components/Reveal/Reveal";
import Test from '../../assets/icons/linkedin-icon-black-png.png'
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from 'motion/react'

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
    role: 'Data Engineer',
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
    role: 'Front-End Engineer',
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
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [direction, setDirection] = useState<'left'|'right'>('right')

  const filteredData = PortfolioItems.filter(item => selectedRole ? item.role === selectedRole : true)

  const itemsPerPage = 4

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-background-dark text-text-inverted gap-10">
      
      <select
        onChange={(e) => {
          setSelectedRole(e.target.value || null);
          setCurrentPage(1)
        }}
        className="text-black bg-white mt-30"
      >
        <option value=''>All</option>
        <option value='Data Analyst'>Data Analyst</option>
        <option value='Data Scientist'>Data Scientist</option>
        <option value='Data Engineer'>Data Engineer</option>
        <option value='Front-End Engineer'>Front-End Engineer</option>
      </select>
      <AnimatePresence mode='wait' initial={false}>
      <motion.div 
        className="flex flex-row flex-wrap items-start justify-center gap-5"
        key={currentPage}
        initial={{ opacity: 0, x: direction === 'right' ? "100%" : "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === 'right' ? "-100%" : "100%" }}
        transition={{ duration: 0.5, ease:'easeInOut'}}  
      >
        {
          paginatedData.map((item) => (
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
      </motion.div>
      </AnimatePresence>
      {
       currentPage != 1 ?  
       <div className="absolute left-5 top-1/2 w-fill">
        <Button onClick={() => {
          setDirection('left')
          setTimeout(() => setCurrentPage(currentPage-1),0)
        }}>
          <ChevronLeft />
        </Button>
       </div>
      : ''
      }
      {
       currentPage != totalPages ?  
       <div className="absolute right-5 top-1/2 w-fill">
        <Button onClick={() => {
          setDirection('right')
          setTimeout(() => setCurrentPage(currentPage+1),0)
        }}>
          <ChevronRight />
        </Button>
       </div>
      : ''
      }
    </div>
  )
}
