import TagManager from 'react-gtm-module'

export const initGTM = (gtmId: string) => {
  if (typeof window !== 'undefined' && gtmId) {
    TagManager.initialize({
      gtmId,
      dataLayer: {
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      },
    })
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    TagManager.dataLayer({
      dataLayer: {
        event: eventName,
        ...parameters,
      },
    })
  }
}

export const trackFormSubmission = (formData: Record<string, any>) => {
  trackEvent('form_submission', {
    form_type: 'diagnosis',
    ...formData,
  })
}