import { MapPin } from 'lucide-react'
import { Marquee } from './Marquee'
import GitHubIcon from '../../assets/icons/github-icon-black.png'

const techStackItems = [
  {
    logo: GitHubIcon,
    name: 'Golang',
  },
  {
    logo: GitHubIcon,
    name: 'Python',
  },
  {
    logo: GitHubIcon,
    name: 'Looker Studio',
  },
  {
    logo: GitHubIcon,
    name: 'Git',
  },
  {
    logo: GitHubIcon,
    name: 'SPSS',
  },
  {
    logo: GitHubIcon,
    name: 'Metabase',
  },
  {
    logo: GitHubIcon,
    name: 'R',
  },
]

export function Banner() {
  return (
    <div className="h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center gap-5 items-center">
      <div className="flex flex-col items-center">
        <span className="urbanist-normal text-[120px] text-center">
          BILLY WITANTO
        </span>
        <span className="text-center playfair-display-400 text-[40px]">
          Researcher | Data Analyst | Analytics Engineer <a className='text-[12px]'>(wanna-be)</a>
        </span>
        <div className="flex justify-center items-center gap-3 mt-10">
          <MapPin />
          <span className="text-center urbanist-normal text-[20px]">
            Jakarta, Indonesia
          </span>
        </div>
      </div>
      <div className='flex flex-col w-full justify-center items-center gap-3'>
        <span className='w-1/2 text-left urbanist-normal text-[20px]'>What I work with:</span>
        <div className='w-1/2 h-40 rounded-xl flex flex-col'>
          <Marquee items={techStackItems}/>
        {/* <div className='relative flex overflow-x-hidden'>
          <div className="py-3 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">R</span>
            <span className="text-4xl mx-4">Python</span>
            <span className="text-4xl mx-4">Golang</span>
            <span className="text-4xl mx-4">Git</span>
            <span className="text-4xl mx-4">SPSS</span>
            <span className="text-4xl mx-4">Metabase</span>
            <span className="text-4xl mx-4">Looker Studio</span>
          </div>
          <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">R</span>
            <span className="text-4xl mx-4">Python</span>
            <span className="text-4xl mx-4">Golang</span>
            <span className="text-4xl mx-4">Git</span>
            <span className="text-4xl mx-4">SPSS</span>
            <span className="text-4xl mx-4">Metabase</span>
            <span className="text-4xl mx-4">Looker Studio</span>
          </div>
        </div>
        <div className='relative flex overflow-x-hidden'>
          <div className="py-3 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">HTML</span>
            <span className="text-4xl mx-4">CSS</span>
            <span className="text-4xl mx-4">JavaScript</span>
            <span className="text-4xl mx-4">TypeScript</span>
            <span className="text-4xl mx-4">React</span>
            <span className="text-4xl mx-4">Vite</span>
            <span className="text-4xl mx-4">Tailwind</span>
            <span className="text-4xl mx-4">ShadCN</span>
          </div>
          <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">HTML</span>
            <span className="text-4xl mx-4">CSS</span>
            <span className="text-4xl mx-4">JavaScript</span>
            <span className="text-4xl mx-4">TypeScript</span>
            <span className="text-4xl mx-4">React</span>
            <span className="text-4xl mx-4">Vite</span>
            <span className="text-4xl mx-4">Tailwind</span>
            <span className="text-4xl mx-4">ShadCN</span>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}
