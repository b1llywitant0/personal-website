import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

export function NavigationBar() {
  return (
    <div className="p-4 w-full urbanist-bold sticky top-0">
      <div className="flex justify-center h-15 w-full isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        <NavigationMenu className='w-full'>
            <NavigationMenuList className="flex gap-x-10">
              <NavigationMenuItem className="w-30">
                <Link to="/">
                  <NavigationMenuLink className="flex items-center text-l">
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-30">
                <Link to="/portfolio">
                  <NavigationMenuLink className="flex items-center text-l">
                    PORTFOLIOS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-30">
                <Link to="/blog">
                  <NavigationMenuLink className="flex items-center text-l">
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
