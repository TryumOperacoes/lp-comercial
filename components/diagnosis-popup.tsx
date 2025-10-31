'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DiagnosisForm } from '@/components/diagnosis-form'

interface DiagnosisPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DiagnosisPopup({ open, onOpenChange }: DiagnosisPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-[min(92vw,440px)] overflow-hidden rounded-[26px] border-none bg-white/95 p-0 shadow-[0_20px_55px_rgba(17,65,255,0.14)] backdrop-blur-sm sm:max-w-[500px]"
        aria-describedby="dialog-description diagnosis-form-description"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1141FF]/12 via-transparent to-transparent" aria-hidden="true" />
        <DialogHeader className="relative px-5 pt-6 pb-2 sm:px-7">
          <DialogTitle className="text-center text-[20px] font-bold leading-snug sm:text-[22px]">
            Faça um <span className="text-[#1141FF]">diagnóstico gratuito</span>
          </DialogTitle>
          <DialogDescription id="dialog-description" className="mx-auto max-w-[300px] text-center text-[13px] text-muted-foreground sm:text-[15px]">
            Preencha com seus dados e receba o diagnóstico comercial em poucos minutos.
          </DialogDescription>
        </DialogHeader>
        <div className="relative px-5 pb-6 sm:px-7">
          <DiagnosisForm onSuccess={() => onOpenChange(false)} />
          <p className="mt-4 text-center text-[11px] text-gray-500 sm:hidden">Ao enviar, você aceita nossa política de privacidade.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
