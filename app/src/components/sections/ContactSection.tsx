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

  const handleCopyEmail = async () => {
    try {
      await copyTextWithFallback(contact.email)
      setCopyMessage('Email copiado')
    } catch {
      setCopyMessage('No se pudo copiar el email')
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contacto</h2>
      <p>{contact.message}</p>

      <p className="contact-email">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <button type="button" className="copy-button" onClick={handleCopyEmail}>
        Copiar email
      </button>
      <p className="copy-status" role="status" aria-live="polite">
        {copyMessage}
      </p>

      <div className="contact-links">
        <a href={contact.linkedinUrl} target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
        <a href={contact.githubUrl} target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      </div>
    </section>
  )
}
