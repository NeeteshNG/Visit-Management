import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axios'

export function useNotificationCount(userId) {
  return useQuery(
    ['notification-count', userId],
    async () => {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('access') : ''
      if (!token) {
        throw new Error('No access token found')
      }

      const res = await axiosInstance.get(
        `/notification/${userId}/notifications-count`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status === 200) {
        return res.data
      } else {
        throw new Error('Failed to fetch notification count')
      }
    },
    {
      enabled: !!userId,
      staleTime: 30 * 1000, // 30 seconds - notifications should update more frequently
      cacheTime: 2 * 60 * 1000, // 2 minutes
    }
  )
}
