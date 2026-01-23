import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axios'

export function useVisitorHistoryData (userId) {
  return useQuery(
    ['visitor-history', userId],
    async () => {
      try {
        const res = await axiosInstance.get(
          `/organization/${userId}/visit-history`,
          {
            headers: {
              Authorization: `Bearer ${
                typeof window !== 'undefined'
                  ? localStorage?.getItem('access')
                  : ''
              }`
            }
          }
        )
        return res.data
      } catch (error) {
        throw new Error(
          error.response?.data?.message || 'Failed to fetch visitor history'
        )
      }
    },
    {
      enabled: !!userId,
      staleTime: 2 * 60 * 1000, // 2 minutes
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  )
}
