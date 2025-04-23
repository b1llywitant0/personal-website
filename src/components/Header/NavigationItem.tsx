import { Link, useLocation } from 'react-router-dom'
import { NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'

interface NavItemProps {
  to: string
  children: React.ReactNode
}

export function NavItem(props: NavItemProps) {
  const location = useLocation()
  const isActive = location.pathname === props.to

  return (
    <NavigationMenuItem
      className={`w-30 rounded-md ${
        isActive ? 'text-text-base bg-background-light' : ''
      }`}
    >
      <Link to={props.to}>
        <NavigationMenuLink
          className={`flex items-center rounded-md ${
            isActive ? 'hover:bg-background-light hover:text-text-base' : ''
          }`}
        >
          {props.children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
