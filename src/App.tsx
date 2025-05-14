import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRoutes } from './pages/routes'
import { Layout } from './pages/layout'
import { ArticleLayout } from './pages/articleLayout'
import { portfoliosRoutes } from './pages/portfolios/routes'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: publicRoutes,
    },
    {
      element: <ArticleLayout />,
      children: portfoliosRoutes,
    },
  ],
  {
    basename: '/',
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
