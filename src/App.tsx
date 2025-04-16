import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRoutes } from './pages/routes'
import { Layout } from './pages/layout'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: publicRoutes,
    },
  ],
  {
    basename: '/personal-website',
  }
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
