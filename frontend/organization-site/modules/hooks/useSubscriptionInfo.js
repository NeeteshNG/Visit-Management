import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axios'

export function useSubscriptionInfo() {
  return useQuery(
    ['subscription-info'],
    async () => {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('access') : ''
      if (!token) {
        throw new Error('No access token found')
      }

      const res = await axiosInstance.get('/user/subscription-of-org/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (res.status === 200) {
        return res.data
      } else {
        throw new Error('Failed to fetch subscription info')
      }
    },
    {
      staleTime: 10 * 60 * 1000, // 10 minutes - subscription doesn't change often
      cacheTime: 30 * 60 * 1000, // 30 minutes
    }
  )
}
