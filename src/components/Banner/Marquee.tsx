import { MarqueeItem } from "./MarqueeItem"

interface MarqueeProps {
    items: {
        logo: string,
        name: string
    }[]
}

export function Marquee(props: MarqueeProps) {
    return (
        <div className='relative flex overflow-x-hidden cursor-default group'>
          <div className="py-3 animate-marquee whitespace-nowrap group-hover:paused">
            {props.items.map((item) => (
                <MarqueeItem key={`a-${item.name}`} logo={item.logo} name={item.name}/>
            ))}
          </div>
          <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap group-hover:paused">
          {props.items.map((item) => (
                <MarqueeItem key={`b-${item.name}`} logo={item.logo} name={item.name}/>
            ))}
          </div>
        </div>
    )
}