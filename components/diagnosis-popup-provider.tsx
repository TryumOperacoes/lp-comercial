'use client'

import * as React from 'react'
import { DiagnosisPopup } from '@/components/diagnosis-popup'

interface DiagnosisPopupContextType {
  openPopup: () => void
}

const DiagnosisPopupContext = React.createContext<DiagnosisPopupContextType | undefined>(undefined)

export function useDiagnosisPopup() {
  const context = React.useContext(DiagnosisPopupContext)
  if (!context) {
    throw new Error('useDiagnosisPopup must be used within a DiagnosisPopupProvider')
  }
  return context
}

interface DiagnosisPopupProviderProps {
  children: React.ReactNode
}

export function DiagnosisPopupProvider({ children }: DiagnosisPopupProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const openPopup = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <DiagnosisPopupContext.Provider value={{ openPopup }}>
      {children}
      <DiagnosisPopup open={isOpen} onOpenChange={setIsOpen} />
    </DiagnosisPopupContext.Provider>
  )
}