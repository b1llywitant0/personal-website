import { sanityClient, urlFor } from '@/client'
import { useEffect, useState } from 'react'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import { useNavigate, useParams } from 'react-router'
import { ChevronLeft, BookOpen, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

export function PortfolioDetails() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])

  useEffect(() => {
    setIsLoading(true)
    sanityClient
      .fetch(
        `*[_type == 'portfolio' && slug.current == "${slug}"] {
        title,
        tools[] -> {
          name
        },
        mainImage {
          asset -> {
            url
          },
          alt
        },
        body
      }`
      )
      .then((data) => {
        setIsLoading(false)
        setPortfolio(data[0])
      })
      .catch(console.error)
  }, [slug])  // Ensure the fetch happens when the slug changes

  // useEffect to update headings after content is loaded
  useEffect(() => {
    if (portfolio?.body) {
      const newHeadings: { id: string; text: string }[] = []  // Explicitly defining the type
      portfolio.body.forEach((block) => {
        if (block._type === 'block' && block.style === 'h2') {
          const headingText = block.children?.[0]?.text || ''
          const id = headingText.toLowerCase().replace(/\s+/g, '-')
          if (!newHeadings.some(h => h.id === id)) {
            newHeadings.push({ id, text: headingText })
          }
        }
      })
      setHeadings(newHeadings)
    }
  }, [portfolio?.body])
  return (
    <>
      <div className='mt-25 px-10 pb-5 fixed flex flex-row gap-2'>
        <Button
          className='bg-none hover:bg-none cursor-pointer'
          onClick={() => {
            navigate(-1)
          }}>
          <ChevronLeft color='white' />
          <span className='text-white'>Back</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="text-white flex justify-center items-center h-screen">Loading</div>
      ) : portfolio ? (
        <div className="text-white flex flex-col lg:flex-row px-10 gap-10 roboto-normal">
          {/* Table of Contents */}
          <aside className="hidden lg:block sticky top-1/4 h-max w-64 border-l border-gray-700 pl-4 text-sm text-gray-300">
            <h3 className="text-white mb-3 font-semibold">Table of Contents</h3>
            <ul className="space-y-1">
              {headings.map((h) => (
                <li key={h.id} className='mb-2'>
                  <a href={`#${h.id}`} className="hover:text-white">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Article */}
          <article className='w-full lg:w-2/3 mt-25 mb-10'>
            <h1 className='text-4xl font-bold mb-6'>{portfolio?.title}</h1>
            <img
              src={portfolio.mainImage.asset.url}
              className='h-[300px] w-full object-cover rounded-md mb-8'
            />

            <PortableText
              value={portfolio.body}
              components={{
                types: {
                  image: ({ value }) => {
                    const imageUrl = urlFor(value).width(800).url()
                    return (
                      <div className="my-6 flex justify-center">
                        <img
                          src={imageUrl}
                          alt={value.alt}
                          className="rounded-md w-full lg:w-2/3"
                        />
                      </div>
                    )
                  },
                },
                block: {
                  h2: ({ children }) => {
                    const headingText = String(children)
                    const id = headingText.toLowerCase().replace(/\s+/g, '-')
                    return (
                      <>
                        <div className="w-full h-px my-10 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                        <h2 id={id} className="text-3xl font-semibold mt-8 mb-4 flex items-center gap-2 underline">
                          <BookOpen size={20} />
                          {children}
                        </h2>
                      </>
                    )
                  },
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-medium mb-3 mt-6">{children}</h3>
                  ),
                  normal: ({ children, index }) => {
                    const isFirst = index === 0
                    return (
                      <p className={`mb-4 text-lg ${isFirst ? 'drop-cap' : ''}`}>
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
                  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ children, value }: any) => (
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
                  bullet: ({ children }) => <ul className="list-disc pl-6 mb-5">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal pl-6 mb-5">{children}</ol>,
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="mb-2 text-base leading-relaxed text-white">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="mb-2 text-base leading-relaxed text-white">{children}</li>
                  ),
                },
              }}
            />
          </article>
        </div>
      ) : (
        <div className="text-white flex justify-center items-center h-screen">
          Not Found Baby
        </div>
      )}
    </>
  )
}
