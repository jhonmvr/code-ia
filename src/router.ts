import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './app/routes/root'
import { Route as IndexRoute } from './app/routes/index'
import { Route as AboutRoute } from './app/routes/about'

const routeTree = RootRoute.addChildren([ IndexRoute, AboutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}