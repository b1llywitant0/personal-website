import { Banner } from '@/pages/home/Banner'
import { Button } from '@/components/ui/button'

export function Homepage() {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Homepage Click</Button>
      </div>
    </>
  )
}
