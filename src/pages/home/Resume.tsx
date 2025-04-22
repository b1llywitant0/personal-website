import { Button } from '../../components/ui/button'

export function Resume() {
  const driveFileId = '1NdFq6LhQEm5UpPPaWZel_9tjeKVRmfnK'
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`

  return (
    <section className='h-96'>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md"
      >
        <Button className="cursor-pointer roboto-normal !font-light">
          DOWNLOAD RESUME
        </Button>
      </a>
    </section>
  )
}
