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
]
