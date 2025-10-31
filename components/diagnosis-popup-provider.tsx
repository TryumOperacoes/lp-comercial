'use client'

import * as React from 'react'
import { DiagnosisPopup } from '@/components/diagnosis-popup'

interface DiagnosisPopupContextType {
  openPopup: () => void
  closePopup: () => void
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

  const openPopup = React.useCallback(() => setIsOpen(true), [])
  const closePopup = React.useCallback(() => setIsOpen(false), [])

  return (
    <DiagnosisPopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <DiagnosisPopup open={isOpen} onOpenChange={setIsOpen} />
    </DiagnosisPopupContext.Provider>
  )
}
