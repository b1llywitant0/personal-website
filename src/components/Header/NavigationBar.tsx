import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import LinkedInLogo from '../../assets/icons/linkedin-icon-black-png.png'
import GithubLogo from '../../assets/icons/github-icon-black.png'
// import EmailIcon from '../../assets/icons/email-icon-black.png'
import { NavItem } from './NavigationItem'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="p-4 w-full inter-normal fixed top-0 text-text-inverted text-l z-[999]">
        <div className="flex relative justify-center h-15 w-full isolate aspect-video rounded-xl bg-surface-dark/80 shadow-lg ring-1 ring-black/5">
          <div className="hidden md:flex">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex gap-x-10">
                <NavItem to="/">ABOUT ME</NavItem>
                <NavItem to="/portfolios">PORTFOLIOS</NavItem>
                {/* <NavItem to="/blogs">BLOGS</NavItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden absolute right-0 h-full flex items-center justify-end mx-5">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              {!isMenuOpen ? <Menu size={30} /> : <X size={30} />}
            </button>
          </div>
          <div className="absolute left-0 md:left-auto md:right-0 h-full px-5 flex items-center justify-end gap-5">
            {/* <Button className="p-0 bg-transparent hover:bg-transparent shadow-none">
            <Link to="/contact">
              <img src={EmailIcon} className="w-[28px] h-[28px] invert" />
            </Link>
          </Button> */}
            <Button className="p-0 bg-transparent hover:bg-transparent shadow-none">
              <Link to="https://www.linkedin.com/in/billywitanto">
                <img src={LinkedInLogo} className="w-[25px] h-[25px] invert" />
              </Link>
            </Button>
            <Button className="p-0 bg-transparent hover:bg-transparent shadow-none">
              <Link to="https://github.com/b1llywitant0">
                <img src={GithubLogo} className="w-[25px] h-[25px] invert" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 h-screen w-screen inter-normal bg-background-dark/90 text-text-inverted text-l flex justify-center items-center z-[100]"
        >
          <NavigationMenu
            onClick={() => {
              setIsMenuOpen(false)
            }}
            className="w-full"
          >
            <NavigationMenuList className="flex flex-col gap-y-10">
              <NavItem to="/">ABOUT ME</NavItem>
              <NavItem to="/portfolios">PORTFOLIOS</NavItem>
              {/* <NavItem to="/blogs">BLOGS</NavItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
