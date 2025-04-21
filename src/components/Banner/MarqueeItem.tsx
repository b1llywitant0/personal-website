interface MarqueItemProps {
    logo: string,
    name: string
}

export function MarqueeItem(props: MarqueItemProps) {
    return (
        <div className="inline-flex mx-4">
            <div className="flex flex-col items-center gap-5 w-full">
                <img src={props.logo} className='h-5 w-5' alt={`logo-${props.name}`} />
                <span className="urbanist-normal text-[20px] mx-4">
                    {props.name}
                </span>
            </div>
        </div>
    )
}