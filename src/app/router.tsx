import { createBrowserRouter, type RouteObject } from 'react-router'

import { RootLayout } from '@/app/RootLayout'
import { HomePage } from '@/features/home/HomePage'
import { NotFoundPage } from '@/features/home/NotFoundPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export type AppRouter = ReturnType<typeof createBrowserRouter>

export function createAppRouter(): AppRouter {
  return createBrowserRouter(routes)
}
