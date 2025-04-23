interface JobProps {
    Title: string,
    DurationFrom?: string,
    DurationTo?: string,
    Company: string,
    Location?: string,
    Description: string,
}

export function Job(props: JobProps) {
    return (
        <div className='w-[75vw] h-fit rounded-md bg-gray-500/40 p-5 flex flex-col'>
            <div className="flex flex-col">
                <div>
                    <span>{props.Title}</span>
                    <span className="text-2xl">{props.DurationFrom} - {props.DurationTo}</span>
                </div>
                <span>{props.Company}</span>
                <span>{props.Location}</span>
            </div>
            <span>{props.Description}</span>
        </div>
    )
}