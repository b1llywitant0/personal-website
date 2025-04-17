import { Link, useLocation } from "react-router-dom";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";

export function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
    const location = useLocation()
    const isActive = location.pathname === to
  
    return (
      <NavigationMenuItem
        className={`w-30 rounded-md ${
          isActive ? 'text-text-inverted bg-background-dark' : ''
        }`}
      >
        <Link to={to}>
          <NavigationMenuLink className="flex items-center">
            {children}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }
  