import { NavigationBar } from '@/components/Header/NavigationBar'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <Outlet />
    </div>
  )
}
