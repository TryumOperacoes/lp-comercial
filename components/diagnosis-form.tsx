'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2 } from 'lucide-react'
import { trackFormSubmission } from '@/lib/gtm'

const diagnosisSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Empresa deve ter pelo menos 2 caracteres'),
  segment: z.string().min(1, 'Selecione um segmento'),
  companySize: z.string().min(1, 'Selecione o tamanho da empresa'),
})

type DiagnosisFormData = z.infer<typeof diagnosisSchema>

const segments = [
  'Tecnologia',
  'Varejo',
  'Indústria',
  'Serviços',
  'Saúde',
  'Educação',
  'Financeiro',
  'Construção',
  'Alimentação',
  'Transporte',
  'Outro'
]

const companySizes = [
  'Até 5 funcionários',
  'De 5 a 10 funcionários',
  'De 11 a 50 funcionários',
  'De 51 a 100 funcionários',
  'De 101 a 500 funcionários',
  'Mais de 500 funcionários'
]

interface DiagnosisFormProps {
  onSuccess?: () => void
}

export function DiagnosisForm({ onSuccess }: DiagnosisFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DiagnosisFormData>({
    resolver: zodResolver(diagnosisSchema),
  })

  const segmentValue = watch('segment')
  const companySizeValue = watch('companySize')

  const onSubmit = async (data: DiagnosisFormData) => {
    setIsSubmitting(true)

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search)
      const utmData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      }

      // Prepare webhook payload
      const payload = {
        ...data,
        ...utmData,
        timestamp: new Date().toISOString(),
        source: 'landing_page_diagnosis_popup',
      }

      // Send to webhook (replace with your actual webhook URL)
      const response = await fetch(process.env.NEXT_PUBLIC_DIAGNOSIS_WEBHOOK_URL || 'https://your-webhook-url.com/diagnosis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário')
      }

      // Track form submission in GTM
      trackFormSubmission(data)

      // Success
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome *
        </label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Seu nome completo"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="seu@email.com"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Telefone *
        </label>
        <Input
          id="phone"
          {...register('phone')}
          placeholder="(11) 99999-9999"
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-gray-700">
          Empresa *
        </label>
        <Input
          id="company"
          {...register('company')}
          placeholder="Nome da empresa"
          className={errors.company ? 'border-red-500' : ''}
        />
        {errors.company && (
          <p className="text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="segment" className="text-sm font-medium text-gray-700">
          Segmento *
        </label>
        <Select
          value={segmentValue}
          onValueChange={(value) => setValue('segment', value)}
        >
          <SelectTrigger className={errors.segment ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione o segmento" />
          </SelectTrigger>
          <SelectContent>
            {segments.map((segment) => (
              <SelectItem key={segment} value={segment}>
                {segment}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.segment && (
          <p className="text-sm text-red-500">{errors.segment.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="companySize" className="text-sm font-medium text-gray-700">
          Tamanho da empresa *
        </label>
        <Select
          value={companySizeValue}
          onValueChange={(value) => setValue('companySize', value)}
        >
          <SelectTrigger className={errors.companySize ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione o tamanho" />
          </SelectTrigger>
          <SelectContent>
            {companySizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.companySize && (
          <p className="text-sm text-red-500">{errors.companySize.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1141FF] hover:bg-[#0E34CC] text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Solicitar diagnóstico gratuito'
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Ao enviar este formulário, você concorda com nossa política de privacidade.
      </p>
    </form>
  )
}