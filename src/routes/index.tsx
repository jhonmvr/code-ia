import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './root'
import Chat from '../components/chat/Chat'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: () => <Chat></Chat>,
})