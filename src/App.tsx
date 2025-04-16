import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRoutes } from './pages/routes'

const router = createBrowserRouter([
  {
    path: '/',
    children: publicRoutes,
  },
],
{
  basename: '/personal-website'
})

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
