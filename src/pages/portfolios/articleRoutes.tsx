import { RouteObject } from 'react-router-dom'

export const articleRoutes: RouteObject[] = [
  {
    path: '/portfolios/eijkman-main-research',
    lazy: async () => {
      const { Eijkman } = await import('./items/Eijkman')
      return {
        element: <Eijkman />,
      }
    },
  },
]
