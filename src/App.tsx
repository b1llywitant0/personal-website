import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRoutes } from './pages/routes'

const router = createBrowserRouter([
  {
    path: '/',
    children: publicRoutes,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
