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
      <DialogContent className="sm:max-w-[500px] p-0 gap-0" aria-describedby="dialog-description diagnosis-form-description">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-center">
            Faça um <span className="text-[#1141FF]">diagnóstico gratuito</span>
          </DialogTitle>
          <DialogDescription id="dialog-description" className="text-center text-sm text-muted-foreground">
            Preencha com seus dados e receba o diagnóstico comercial em poucos minutos.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <DiagnosisForm onSuccess={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
