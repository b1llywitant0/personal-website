import { RouteObject } from 'react-router-dom'
import { portfoliosRoutes } from './portfolios/routes'

export const publicRoutes: RouteObject[] = [
  {
    index: true,
    lazy: async () => {
      const { Homepage } = await import('./home')
      return {
        element: <Homepage />,
      }
    },
  },
  {
    path: '/portfolios/',
    children: portfoliosRoutes,
  },
  {
    path: '/blogs',
    lazy: async () => {
      const { Blogs } = await import('./blogs')
      return {
        element: <Blogs />,
      }
    },
  },
  {
    path: '*',
    lazy: async () => {
      const { default: NotFound } = await import('./notFound')
      return { element: <NotFound /> }
    },
  },
]
