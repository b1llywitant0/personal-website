import { PortfolioCard } from '@/components/Card/Portfolio'
import { Reveal } from '@/components/Reveal/Reveal'
import { useEffect, useState } from 'react'
import {
  ArrowUpDown,
  CalendarArrowDown,
  CalendarArrowUp,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  Loader2,
} from 'lucide-react'
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
import { sanityClient } from '@/client'
import { PortableTextBlock } from '@portabletext/react'

interface PortfolioItem {
  title: string
  mainImage: {
    alt: string
    asset: {
      url: string
    }
  }
  createdAt: string
  role: string
  slug: {
    current: string
  }
  tools: { name: string }[]
  briefDescription: PortableTextBlock[]
}

// const PortfolioItems: PortfolioItem[] = [
//   {
//     id: 1,
//     title:
//       'The correlation between viral genetics and the progression of Hepatitis B disease',
//     img: EijkmanPic,
//     startDate: '2021-10-01',
//     role: 'Data Analyst',
//     linkTo: '/portfolios/eijkman-main-research',
//     tools: ['R', 'SPSS'],
//     briefDescription:
//       'The dissertation of my manager. I single-handedly helped with the data analysis, including the selection of statistical methods used.',
//   },
//   {
//     id: 2,
//     title: 'Philadephia Property Value Prediction',
//     img: '',
//     startDate: '2022-04-10',
//     role: 'Data Scientist',
//     linkTo: '/portfolios/purwadhika-final-project',
//     tools: ['Python', 'Jupyter Notebook'],
//     briefDescription: 'My first machine learning project.',
//   },
//   {
//     id: 3,
//     title: 'CMK',
//     img: '',
//     startDate: '2024-09-01',
//     role: 'Data Analyst',
//     linkTo: '/portfolios/cmk-summary',
//     tools: ['Python', 'Jupyter Notebook'],
//     briefDescription: 'Digital marketing analyst.',
//   },
//   {
//     id: 4,
//     title: 'ELT Pipeline',
//     img: '',
//     startDate: '2025-03-01',
//     role: 'Data Engineer',
//     linkTo: '/portfolios/elt-dbt-semantic-layer',
//     tools: [
//       'PostgreSQL',
//       'Kafka',
//       'Debezium',
//       'Airflow',
//       'ClickHouse',
//       'dbt',
//       'Cube',
//       'Metabase',
//     ],
//     briefDescription: 'My first data engineer portfolio.',
//   },
//   {
//     id: 5,
//     title: 'Personal website',
//     img: '',
//     startDate: '2025-04-01',
//     role: 'Front-End Engineer',
//     linkTo: '/portfolios/personal-website-description',
//     tools: [
//       'React',
//       'Vite',
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'TypeScript',
//       'ShadCN',
//       'Tailwind',
//       'Framer Motion',
//     ],
//     briefDescription:
//       'Personal project to create a website and showcasing my front-end skill that I learned recently.',
//   },
// ]

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
  const [posts, setPosts] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    const cachedData = sessionStorage.getItem('portfolios')
    const cachedTimestamp = sessionStorage.getItem('portfolios_timestamp')

    const currentTime = Date.now()

    if (
      cachedData &&
      cachedTimestamp &&
      currentTime - parseInt(cachedTimestamp) < 600000
    ) {
      setIsLoading(false)
      setPosts(JSON.parse(cachedData))
    } else {
      sanityClient
        .fetch(
          `*[_type == 'portfolio'] {
        title,
        slug {
          current
        },
        role,
        tools[] -> {
          name
        },
        createdAt,
        briefDescription,
        mainImage {
          asset -> {
            url
          },
          alt
        }
      }`
        )
        .then((data) => {
          setIsLoading(false)
          setPosts(data)
          sessionStorage.setItem('portfolios', JSON.stringify(data))
          sessionStorage.setItem('portfolios_timestamp', currentTime.toString())
        })
        .catch(console.error)
    }
  }, [])

  const [selectedRole, setSelectedRole] = useState<string>('All')
  const [selectedTools, setSelectedTools] = useState<Option[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const [ascending, setAscending] = useState<boolean>(true)

  const filteredData = posts
    ?.filter((item) => {
      const roleMatch = selectedRole === 'All' || item.role === selectedRole

      const toolsMatch =
        selectedTools.length === 0 ||
        selectedTools.some((option) =>
          item.tools.some((tool) => tool.name === option.value)
        )

      return roleMatch && toolsMatch
    })
    .sort((a, b) => {
      if (ascending) {
        return a.createdAt?.localeCompare(b.createdAt)
      }
      return b.createdAt.localeCompare(a.createdAt)
    })

  const itemsPerPage = 4

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-background-dark text-text-inverted gap-8 robot-normal">
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
        <div className="h-full w-0 ring ring-white/90" />
        <div className="flex flex-row gap-3 items-center">
          <ArrowUpDown />
          <Button
            className={`bg-gray-500 ${!ascending ? 'ring-2 ring-white' : ''}`}
            onClick={() => {
              setAscending(false)
            }}
          >
            <CalendarArrowDown color="white" className="hover:" />
          </Button>
          <Button
            className={`bg-gray-500 ${ascending ? 'ring-2 ring-white' : ''}`}
            onClick={() => {
              setAscending(true)
            }}
          >
            <CalendarArrowUp color="white" />
          </Button>
        </div>
      </div>
      {!isLoading && paginatedData.length > 0 ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="flex flex-row flex-wrap items-start justify-center gap-5"
            key={currentPage}
            initial={{
              opacity: 0,
              x: direction === 'right' ? '100%' : '-100%',
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'right' ? '-100%' : '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {paginatedData.map((item) => (
              <Reveal slide={true} vertical={true}>
                <PortfolioCard
                  key={item.slug.current}
                  img={item.mainImage.asset.url}
                  title={item.title}
                  startDate={item.createdAt}
                  linkTo={item.slug.current}
                  tools={item.tools}
                  briefDescription={item.briefDescription}
                />
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      ) : !isLoading && paginatedData.length == 0 ? (
        <div className="h-screen flex flex-col justify-center items-center text-white text-center px-4 roboto-normal">
           <h1 className="text-4xl font-bold mb-4">Nothing's here</h1>
           <p className="text-xl mb-6">Please use another filter</p>
        </div>
      ) : (
        <div className="h-full items-center justify-center flex flex-col gap-5 roboto-normal">
          <Loader2 className="h-20 w-20 animate-spin" />
          <span className='animate-pulse duration-100'>Retrieving data</span>
        </div>
      )}
      {currentPage > 1 ? (
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
      {!currentPage && currentPage != totalPages ? (
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
