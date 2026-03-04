import { useState } from 'react'

import type { ContactInfo } from '../../content/siteContent'

type ContactSectionProps = {
  contact: ContactInfo
}

async function copyTextWithFallback(text: string): Promise<void> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  if (typeof document !== 'undefined') {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.setAttribute('readonly', 'true')
    textArea.style.position = 'absolute'
    textArea.style.left = '-9999px'

    document.body.appendChild(textArea)
    textArea.select()

    const copied = document.execCommand('copy')
    document.body.removeChild(textArea)

    if (copied) {
      return
    }
  }

  throw new Error('No copy method available')
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [copyMessage, setCopyMessage] = useState('')
  const normalizedEmail = contact.email.trim()
  const normalizedPhone = contact.phone.trim()
  const phoneHref = `tel:${normalizedPhone.replace(/[^\d+]/g, '')}`

  const handleCopyEmail = async () => {
    try {
      await copyTextWithFallback(normalizedEmail)
      setCopyMessage('Email copiado')
    } catch {
      setCopyMessage('No se pudo copiar el email')
    }
  }

  const handleCopyPhone = async () => {
    try {
      await copyTextWithFallback(normalizedPhone)
      setCopyMessage('Telefono copiado')
    } catch {
      setCopyMessage('No se pudo copiar el telefono')
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contacto</h2>
      <p>{contact.message}</p>

      <div className="contact-details">
        <p className="contact-item">
          <span className="contact-label">Email:</span>{' '}
          <a href={`mailto:${normalizedEmail}`}>{normalizedEmail}</a>
        </p>
        <p className="contact-item">
          <span className="contact-label">Telefono:</span>{' '}
          <a href={phoneHref}>{normalizedPhone}</a>
        </p>
      </div>

      <div className="contact-actions">
        <button type="button" className="copy-button" onClick={handleCopyEmail}>
          Copiar email
        </button>
        <button type="button" className="copy-button copy-button-secondary" onClick={handleCopyPhone}>
          Copiar telefono
        </button>
      </div>
      <p className="copy-status" role="status" aria-live="polite">
        {copyMessage}
      </p>

      <div className="contact-links">
        <a href={contact.facebookUrl} target="_blank" rel="noreferrer noopener">
          Facebook
        </a>
        <a href={contact.instagramUrl} target="_blank" rel="noreferrer noopener">
          Instagram
        </a>
        <a href={contact.xUrl} target="_blank" rel="noreferrer noopener">
          X
        </a>
      </div>
    </section>
  )
}
