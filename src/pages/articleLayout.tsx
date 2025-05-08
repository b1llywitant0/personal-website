import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ArticleLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  const navigate = useNavigate()

  return (
    <div className="relative h-full w-full items-center bg-background-dark overflow-auto no-scrollbar">
      <AnimatePresence mode="wait">
        <Button
          className="cursor-pointer"
          onClick={() => {
            navigate(-1)
          }}
        >
          <ChevronLeft color="white" />
        </Button>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
