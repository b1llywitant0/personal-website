import { RouteObject } from 'react-router-dom'

export const portfoliosRoutes: RouteObject[] = [
  {
    index: true,
    lazy: async () => {
      const { Portfolios } = await import('./')
      return {
        element: <Portfolios />,
      }
    },
  },
  {
    path: '/portfolios/:slug',
    lazy: async () => {
      const { PortfolioDetails } = await import('./[slug]')
      return {
        element: <PortfolioDetails />,
      }
    },
  },
]
