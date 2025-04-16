import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

export function NavigationBar() {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-center items-center h-15 w-full isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-x-20">
            <NavigationMenuItem className="w-30">
              <Link to="/">
                <NavigationMenuLink className="flex items-center">
                  HOME
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-30">
              <Link to="/portfolio">
                <NavigationMenuLink className="flex items-center">
                  PORTFOLIOS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-30">
              <Link to="/blog">
                <NavigationMenuLink className="flex items-center">
                  BLOGS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
