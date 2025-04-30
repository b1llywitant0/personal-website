import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { publicRoutes } from './pages/routes'
import { Layout } from './pages/layout'
import { ArticleLayout } from './pages/portfolios/articleLayout'
import { articleRoutes } from './pages/portfolios/articleRoutes'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: publicRoutes,
    },
    {
      element: <ArticleLayout />,
      children: articleRoutes,
    }
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
