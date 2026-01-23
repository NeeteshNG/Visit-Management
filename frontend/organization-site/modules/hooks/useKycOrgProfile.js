import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axios'

export function useKycOrgProfile(userId) {
  return useQuery(
    ['kyc-org-profile', userId],
    async () => {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('access') : ''
      if (!token) {
        throw new Error('No access token found')
      }

      const res = await axiosInstance.get(
        `/organization/${userId}/organization-kyc/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status === 200) {
        return res.data
      } else {
        throw new Error('Failed to fetch KYC profile')
      }
    },
    {
      enabled: !!userId,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  )
}
