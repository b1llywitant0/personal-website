import { sanityClient, urlFor } from '@/client'
import { useEffect, useState, useRef } from 'react'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import { useNavigate, useParams } from 'react-router'
import {
  ChevronLeft,
  BookOpen,
  Info,
  Loader2,
  CornerDownRight,
} from 'lucide-react'
import type { PortableTextSpan } from '@portabletext/types'
import NotFound from '@/pages/notFound'

interface PortfolioItem {
  title: string
  mainImage: {
    alt: string
    asset: {
      url: string
    }
  }
  tools: { name: string }[]
  body: PortableTextBlock[]
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-')
}

export function PortfolioDetails() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([])
  const currentH2Ref = useRef('')

  useEffect(() => {
    setIsLoading(true)
    const cachedData = sessionStorage.getItem(slug || '')
    const cachedTimestamp = sessionStorage.getItem(`${slug}_timestamp`)

    const currentTime = Date.now()

    if (
      cachedData &&
      cachedTimestamp &&
      currentTime - parseInt(cachedTimestamp) < 600000
    ) {
      setIsLoading(false)
      setPortfolio(JSON.parse(cachedData))
    } else {
      sanityClient
        .fetch(
          `*[_type == 'portfolio' && slug.current == "${slug}"] {
            title,
            tools[] -> { name },
            mainImage { asset -> { url }, alt },
            body
          }`
        )
        .then((data) => {
          setIsLoading(false)
          if (data.length > 0) {
            setPortfolio(data[0])
            sessionStorage.setItem(slug || '', JSON.stringify(data[0]))
            sessionStorage.setItem(`${slug}_timestamp`, currentTime.toString())
          }
        })
        .catch(console.error)
    }
  }, [slug])

  useEffect(() => {
    if (portfolio?.body) {
      const newHeadings: { id: string; text: string; level: number }[] = []
      let currentH2 = ''

      portfolio.body.forEach((block) => {
        if (
          block._type === 'block' &&
          (block.style === 'h2' || block.style === 'h3')
        ) {
          const headingText =
            block.children
              ?.filter((c): c is PortableTextSpan => c._type === 'span')
              .map((c) => c.text)
              .join('') || ''

          if (block.style === 'h2') {
            currentH2 = slugify(headingText)
            if (!newHeadings.some((h) => h.id === currentH2)) {
              newHeadings.push({
                id: currentH2,
                text: headingText,
                level: 2,
              })
            }
          } else if (block.style === 'h3') {
            const id = `${currentH2}-${slugify(headingText)}`
            if (!newHeadings.some((h) => h.id === id)) {
              newHeadings.push({
                id,
                text: headingText,
                level: 3,
              })
            }
          }
        }
      })

      setHeadings(newHeadings)
    }
  }, [portfolio?.body])

  return (
    <>
      {isLoading ? (
        <div className="h-screen items-center justify-center flex flex-col gap-5 roboto-normal">
          <Loader2 className="h-20 w-20 animate-spin" color="white" />
          <span className="animate-pulse duration-100 text-white">Loading</span>
        </div>
      ) : portfolio ? (
        <div className="text-white flex flex-col lg:flex-row px-10 gap-10 roboto-normal">
          <div>
            <div className="mt-25 px-10 left-0 pb-5 absolute md:fixed flex flex-row gap-2 z-5">
              <div
                className="group cursor-pointer h-fit flex flex-row items-center gap-1 hover:scale-115 transform transition duration-200"
                onClick={() => navigate('/portfolios')}
              >
                <ChevronLeft color="white" size={25} />
                <span className="text-white text-xl">Back</span>
              </div>
            </div>
            <aside className="hidden lg:block sticky top-1/4 h-max w-64 border-l border-gray-700 pl-4 text-sm text-gray-300">
              <h3 className="text-white mb-3 font-semibold">
                Table of Contents
              </h3>
              <ul className="space-y-1">
                {headings.map((h) => (
                  <li
                    key={h.id}
                    className={`mb-2 ${h.level === 3 ? 'ml-4 text-gray-400 text-sm' : ''}`}
                  >
                    <a
                      href={`#${h.id}`}
                      className="hover:text-white transition-colors duration-150"
                      onClick={(e) => {
                        e.preventDefault()
                        const el = document.getElementById(h.id)
                        if (el) {
                          el.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          })
                        }
                      }}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <article className="w-full lg:w-2/3 mt-25 mb-10">
            <h1 className="text-4xl font-bold mb-6">{portfolio.title}</h1>
            <img
              src={portfolio.mainImage.asset.url}
              className="h-[300px] w-full object-cover rounded-md mb-8"
              alt={portfolio.mainImage.alt}
            />
            <PortableText
              value={portfolio.body}
              components={{
                types: {
                  image: ({ value }) => {
                    const imageUrl = urlFor(value).url()
                    return (
                      <div className="my-6 flex justify-start">
                        <img
                          src={imageUrl}
                          alt={value.alt}
                          className="rounded-md"
                        />
                      </div>
                    )
                  },
                },
                block: {
                  h2: ({ children }) => {
                    const headingText = String(children)
                    const id = slugify(headingText)
                    currentH2Ref.current = id
                    return (
                      <>
                        <div className="w-full h-px my-10 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                        <h2
                          id={id}
                          className="text-3xl font-semibold mt-8 mb-4 flex items-center gap-2 underline scroll-mt-25"
                        >
                          <BookOpen size={20} />
                          {children}
                        </h2>
                      </>
                    )
                  },
                  h3: ({ children }) => {
                    const headingText = String(children)
                    const id = `${currentH2Ref.current}-${slugify(headingText)}`
                    return (
                      <h3
                        id={id}
                        className="flex items-center gap-2 text-2xl font-medium mb-3 mt-6 scroll-mt-25"
                      >
                        <CornerDownRight size={20} />
                        {children}
                      </h3>
                    )
                  },
                  normal: ({ children, index }) => {
                    const isFirst = index === 0
                    return (
                      <p
                        className={`mb-4 text-lg ${isFirst ? 'drop-cap' : ''}`}
                      >
                        {children}
                      </p>
                    )
                  },
                  blockquote: ({ children }) => (
                    <div className="border-l-4 pl-4 italic text-gray-400 border-gray-300 mb-5 flex items-start gap-2">
                      <Info size={18} className="mt-1 text-gray-400" />
                      <blockquote>{children}</blockquote>
                    </div>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({
                    children,
                    value,
                  }: {
                    children: React.ReactNode
                    value?: { href: string }
                  }) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {children}
                    </a>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-5">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-5">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="mb-2 text-base leading-relaxed text-white">
                      {children}
                    </li>
                  ),
                  number: ({ children }) => (
                    <li className="mb-2 text-base leading-relaxed text-white">
                      {children}
                    </li>
                  ),
                },
              }}
            />
          </article>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}
