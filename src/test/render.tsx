import { render, type RenderResult } from '@testing-library/react'
import { createMemoryRouter } from 'react-router'

import { App } from '@/app/App'
import { routes } from '@/app/router'

export function renderRoute(path: string): RenderResult {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return render(<App router={router} />)
}
