import helloIcon from '../../assets/icons/undraw_hello_ccwj.svg'
import { Button } from '../ui/button'

export function Banner() {
  const driveFileId = '1NdFq6LhQEm5UpPPaWZel_9tjeKVRmfnK'
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`

  return (
    <div className="bg-beach h-screen w-full bg-no-repeat bg-cover flex justify-evenly items-center">
      <div className="flex flex-col gap-4 items-center">
        <span className="urbanist-bold text-3xl text-center">
          Hi, welcome! <br />
          My name is Billy.
        </span>
        <a className="text-center urbanist-normal">
          I am a data-enthusiast based in Jakarta, Indonesia. <br />
          <strong>Why data-enthusiast, not a specific role?</strong> Well, I
          have a broad experience related to data. <br />
        </a>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md"
        >
          <Button className='cursor-pointer'>Download My Resume Here!</Button>
        </a>
      </div>
      <img src={helloIcon} className="size-[500px]" />
    </div>
  )
}
