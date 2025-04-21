import { Button } from '../../components/ui/button'

export function Resume() {
    const driveFileId = '1NdFq6LhQEm5UpPPaWZel_9tjeKVRmfnK'
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`
  
    return (
        <>
            <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md"
            >
            <Button className="cursor-pointer urbanist-bold">
            DOWNLOAD RESUME
            </Button>
            </a>
        </>
    )
}