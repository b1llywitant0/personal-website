import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import LinkedInLogo from '../../assets/icons/linkedin-icon-black-png.png'
import GithubLogo from '../../assets/icons/github-icon-black.png'
// import EmailIcon from '../../assets/icons/email-icon-black.png'
import { NavItem } from './NavigationItem'

export function NavigationBar() {
  return (
    <div className="p-4 w-full inter-normal fixed top-0 text-text-inverted text-l z-100">
      <div className="flex relative justify-center h-15 w-full isolate aspect-video rounded-xl bg-surface-dark/80 shadow-lg ring-1 ring-black/5">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex gap-x-10">
            <NavItem to="/">ABOUT ME</NavItem>
            <NavItem to="/portfolios">PORTFOLIOS</NavItem>
            {/* <NavItem to="/blogs">BLOGS</NavItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="absolute right-0 h-full px-5 flex items-center justify-end gap-5">
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
  )
}
