'use client'

import { useState } from 'react'
import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Providers ({ children }) {
  // Create QueryClient once and persist across renders
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient} >
      <Provider >{children}</Provider>
    </QueryClientProvider>
  )
}
