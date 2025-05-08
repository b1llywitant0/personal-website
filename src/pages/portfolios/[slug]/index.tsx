import { sanityClient } from '@/client'
import { useEffect, useState } from 'react'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import { useParams } from 'react-router'
import { ChevronLeft } from 'lucide-react'

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
  const { slug } = useParams()

  const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
        console.log(data)
        setPortfolio(data[0])
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <div className='mt-25 px-10 pb-5 flex flex-row gap-2'>
        <ChevronLeft color='white' />
        <span className='text-white'>Back</span>
      </div>
      {
        isLoading ?
        <div className="text-white flex justify-center items-center h-screen">
          Loading
        </div>
        :
        portfolio ?
        <div className="text-white flex justify-center items-center roboto-normal">
          <article className='px-10'>
            <h1 className='text-4xl font-bold mb-10'>{portfolio?.title}</h1>
            <PortableText
              value={portfolio.body}
              components={{
                types: {
                  image: ({ value }: any) => (
                    <img
                      src={value.asset.url}
                      alt={value.alt}
                      className="w-full rounded-lg"
                    />
                  ),
                },
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold mb-5 mt-10 underline">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-medium mb-3 mt-8">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-medium mb-3 mt-5">{children}</h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 pl-4 italic text-gray-400 border-gray-300 mb-5">
                      {children}
                    </blockquote>
                  ),
                  normal: ({ children }) => <p className="mb-3 text-lg">{children}</p>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ children, value }: any) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
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
        :
        <div className="text-white flex justify-center items-center h-screen">
          Not Found Baby
        </div>
      }
    </>
  )
}
