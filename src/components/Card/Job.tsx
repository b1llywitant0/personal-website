interface JobProps {
  Title: string
  DurationFrom?: string
  DurationTo?: string
  Company: string
  CompanyLink?: string
  Location?: string
  Description: string
  Tools?: string[]
}

export function JobCard(props: JobProps) {
  return (
    <div className="w-[75vw] h-fit rounded-md bg-gray-500/40 p-5 flex flex-col roboto-normal gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-end md:gap-3">
          <span className="font-medium text-xl md:text-3xl">{props.Title}</span>
          <span className="text-l md:text-lg">
            ({props.DurationFrom} - {props.DurationTo})
          </span>
        </div>
        {props.CompanyLink ? (
          <a
            href={props.CompanyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-m md:text-lg w-fit"
          >
            <span>@ </span>
            <span className="hover:underline">{props.Company}</span>
          </a>
        ) : (
          <span className="text-lg w-fit">
            @ {props.Company} - {props.Location}
          </span>
        )}
      </div>
      <span className="text-medium">{props.Description}</span>
      <div className="flex flex-row flex-wrap items-center justify-start gap-3 cursor-default">
        {props.Tools
          ? props.Tools.map((item) => (
              <div
                key={item}
                className="px-2 py-1 w-fit h-fit rounded-md bg-gray-500/90 text-[13px] hover:bg-gray-800"
              >
                {item}
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}
