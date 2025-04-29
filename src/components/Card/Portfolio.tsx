interface PortfolioProps {
  title: string
  img: string
  startDate: string
  tools: string[]
  briefDescription: string
}

export function Portfolio(props: PortfolioProps) {
  return (
    <div
      className="w-[600px] h-[250px] relative rounded-md bg-cover bg-center p-3"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="absolute p-3 rounded-md inset-0 w-full bg-black/50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <div className="absolute top-4 flex flex-col">
          <span>{props.title}</span>
          <span>{props.startDate}</span>
          <p>{props.briefDescription}</p>
        </div>
        <div className="absolute bottom-4 flex flex-row items-center justify-start gap-3 cursor-default flex-wrap">
          {props.tools
            ? props.tools.map((item) => (
                <div className="px-2 py-1 w-fit h-fit rounded-md bg-gray-500/90 text-[13px] hover:bg-gray-800">
                  {item}
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}
