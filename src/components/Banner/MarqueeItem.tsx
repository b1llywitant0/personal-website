interface MarqueItemProps {
  logo: string
  name: string
}

export function MarqueeItem(props: MarqueItemProps) {
  return (
    <div className="inline-flex w-20 mx-4">
      <div className="flex flex-col items-center gap-3 w-full">
        <img src={props.logo} className="h-10" alt={`logo-${props.name}`} />
        <span className="urbanist-normal text-[15px] mx-4">{props.name}</span>
      </div>
    </div>
  )
}
