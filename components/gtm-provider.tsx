'use client'

import { useEffect } from 'react'
import { initGTM } from '@/lib/gtm'

interface GTMProviderProps {
  children: React.ReactNode
}

export function GTMProvider({ children }: GTMProviderProps) {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    if (gtmId) {
      initGTM(gtmId)
    }
  }, [])

  return <>{children}</>
}