import { RouteObject } from 'react-router-dom'

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
    path: '/portfolios',
    lazy: async () => {
      const { Portfolios } = await import('./portfolios')
      return {
        element: <Portfolios />,
      }
    },
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
]
