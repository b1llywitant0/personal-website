import { Portfolio } from '@/components/Card/Portfolio'
import { Reveal } from '@/components/Reveal/Reveal'
import Test from '../../assets/icons/linkedin-icon-black-png.png'
import { useState } from 'react'
import { ArrowUpDown, CalendarArrowDown, CalendarArrowUp, ChevronLeft, ChevronRight, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'motion/react'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import MultipleSelector, { Option } from '@/components/ui/MultiSelect'

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
    title:
      'The correlation between viral genetics and the progression of Hepatitis B disease',
    img: Test,
    startDate: '2021-10-01',
    role: 'Data Analyst',
    tools: ['R', 'SPSS'],
    briefDescription:
      'The dissertation of my manager. I single-handedly helped with the data analysis, including the selection of statistical methods used.',
  },
  {
    id: 2,
    title: 'Philadephia Property Value Prediction',
    img: Test,
    startDate: '2022-04-10',
    role: 'Data Scientist',
    tools: ['Python', 'Jupyter Notebook'],
    briefDescription: 'My first machine learning project.',
  },
  {
    id: 3,
    title: 'CMK',
    img: Test,
    startDate: '2024-09-01',
    role: 'Data Analyst',
    tools: ['Python', 'Jupyter Notebook'],
    briefDescription: 'Digital marketing analyst.',
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
    briefDescription: 'My first data engineer portfolio.',
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
    briefDescription:
      'Personal project to create a website and showcasing my front-end skill that I learned recently.',
  },
]

const filterRoles = [
  { label: 'All Roles', value: 'All' },
  { label: 'Data Analyst', value: 'Data Analyst' },
  { label: 'Data Scientist', value: 'Data Scientist' },
  { label: 'Data Engineer', value: 'Data Engineer' },
  { label: 'Front-End Engineer', value: 'Front-End Engineer' },
]

const filterTools = [
  { label: 'R', value: 'R' },
  { label: 'SPSS', value: 'SPSS' },
  { label: 'Python', value: 'Python' },
  { label: 'Jupyter Notebook', value: 'Jupyter Notebook' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'Kafka', value: 'Kafka' },
  { label: 'Debezium', value: 'Debezium' },
  { label: 'Airflow', value: 'Airflow' },
  { label: 'ClickHouse', value: 'ClickHouse' },
  { label: 'dbt', value: 'dbt' },
  { label: 'Cube', value: 'Cube' },
  { label: 'Metabase', value: 'Metabase' },
  { label: 'React', value: 'React' },
  { label: 'Vite', value: 'Vite' },
  { label: 'HTML', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'ShadCN', value: 'ShadCN' },
  { label: 'Tailwind', value: 'Tailwind' },
  { label: 'Framer Motion', value: 'Framer Motion' },
]

export function Portfolios() {
  const [selectedRole, setSelectedRole] = useState<string>('All')
  const [selectedTools, setSelectedTools] = useState<Option[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const [ascending, setAscending] = useState<boolean>(true)

  const filteredData = PortfolioItems
  .filter((item) => {
    // Filter by role (if not 'All')
    const roleMatch = selectedRole === 'All' || item.role === selectedRole;

    // Filter by tools (only if selectedTools contains items)
    const toolsMatch =
      selectedTools.length === 0 ||
      selectedTools.some((option) => item.tools.includes(option.value));

    return roleMatch && toolsMatch;
  })
  .sort((a, b) => {
    if (ascending) {
      return a.startDate.localeCompare(b.startDate); // Ascending sort
    }
    return b.startDate.localeCompare(a.startDate); // Descending sort
  });

  const itemsPerPage = 4

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-background-dark text-text-inverted gap-8">
      <div className="flex flex-row justify-center items-center gap-4 mt-25 bg-gray-600/40 rounded-md p-3">
        <ListFilter />
        <div>
          <Select
            onValueChange={(e) => {
              setSelectedRole(e)
              setCurrentPage(1)
            }}
          >
            <SelectTrigger className="bg-white text-black w-auto min-h-10">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              {filterRoles.map((item) => (
                <SelectItem value={item.value}>{item.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <MultipleSelector
            defaultOptions={filterTools}
            placeholder="Tools"
            emptyIndicator={
              <p className="text-center leading-10 text-gray-600 dark:text-gray-400">
                No tool found
              </p>
            }
            maxCount={3}
            onChange={(e) => {
              setSelectedTools(e)
              setCurrentPage(1)
            }}
            className="bg-white text-black w-auto"
          />
        </div>
        <div 
          className='h-full w-0 ring ring-white/90'
        />
        <div className='flex flex-row gap-3 items-center'>
          <ArrowUpDown />
          <Button className='bg-white' onClick={() => {
            setAscending(true)
          }}>
            <CalendarArrowDown color='black'/>
          </Button>
          <Button className='bg-white' onClick={() => {
            setAscending(false)
          }}>
            <CalendarArrowUp color='black'/>
          </Button>
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="flex flex-row flex-wrap items-start justify-center gap-5"
          key={currentPage}
          initial={{ opacity: 0, x: direction === 'right' ? '100%' : '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'right' ? '-100%' : '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {paginatedData.map((item) => (
            <Reveal slide={true} vertical={true}>
              <Portfolio
                key={item.id}
                img={item.img}
                title={item.title}
                startDate={item.startDate}
                tools={item.tools}
                briefDescription={item.briefDescription}
              />
            </Reveal>
          ))}
        </motion.div>
      </AnimatePresence>
      {currentPage != 1 ? (
        <div className="absolute left-5 top-1/2 w-fill">
          <Button
            onClick={() => {
              setDirection('left')
              setTimeout(() => setCurrentPage(currentPage - 1), 0)
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      ) : (
        ''
      )}
      {currentPage != totalPages ? (
        <div className="absolute right-5 top-1/2 w-fill">
          <Button
            onClick={() => {
              setDirection('right')
              setTimeout(() => setCurrentPage(currentPage + 1), 0)
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
