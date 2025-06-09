import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/about',
  component: () => <div>About</div>,
})