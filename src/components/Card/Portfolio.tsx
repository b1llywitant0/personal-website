import { PortableText, PortableTextBlock } from '@portabletext/react'
import { Link } from 'react-router'

interface PortfolioProps {
  title: string
  img: string
  startDate: string
  tools: { name: string }[]
  briefDescription: PortableTextBlock[]
  linkTo: string
}

export function PortfolioCard(props: PortfolioProps) {
  return (
    <Link to={`/portfolios/${props.linkTo}`}>
      <div
        className="group w-screen max-w-[90%] h-[150px] md:w-[600px] md:h-[250px] mx-auto relative rounded-md bg-cover bg-center p-3 roboto-normal overflow-hidden"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="absolute inset-0 bg-black/60 translate-y-[65%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out px-5 py-3 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-[10px] md:text-[20px] h-[75px] w-full">
              {props.title}
            </span>
            <span className="font-light text-[13px]">
              {props.startDate.split('-')[0]}
            </span>
            <PortableText
              value={props.briefDescription}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="font-normal text-[15px] pr-2">{children}</p>
                  ),
                },
              }}
            />
          </div>

          <div className="hidden md:flex flex-row items-center justify-start gap-2 cursor-default flex-wrap">
            {props.tools?.map((item) => (
              <div
                key={item.name}
                className="px-2 py-1 w-fit h-fit rounded-md bg-gray-500/90 text-[13px] hover:bg-gray-800"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
