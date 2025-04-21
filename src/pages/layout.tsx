import { NavigationBar } from '@/components/Header/NavigationBar'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="relative h-full w-full items-center bg-background-light overflow-auto no-scrollbar">
      <NavigationBar />
      <Outlet />
    </div>
  )
}
