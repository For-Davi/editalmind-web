import { QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { RouterProvider } from 'react-router'

import { createQueryClient } from '@/app/query-client'
import type { AppRouter } from '@/app/router'

interface AppProps {
  router: AppRouter
}

export function App({ router }: AppProps) {
  const [queryClient] = useState(createQueryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
