import { NavigationBar } from '@/components/Header/NavigationBar'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div id="scrollable-div" className="relative h-full w-full items-center bg-background-dark overflow-auto no-scrollbar">
      <NavigationBar />
      <AnimatePresence mode="wait">
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
