import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/root'
import { Route as IndexRoute } from './routes/index'
import { Route as AboutRoute } from './routes/about'

const routeTree = RootRoute.addChildren([ IndexRoute, AboutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}