const whatsappStyles = {
  link: {
    position: 'fixed',
    right: 'clamp(1rem, 3vw, 2rem)',
    bottom: 'clamp(1rem, 3vw, 2rem)',
    zIndex: 1000,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    minHeight: '3.5rem',
    padding: '0.85rem 1.1rem',
    borderRadius: '999px',
    backgroundColor: '#1c6c4c',
    color: '#f6efe4',
    textDecoration: 'none',
    boxShadow: '0 18px 40px rgba(28, 108, 76, 0.28)',
    border: '1px solid rgba(246, 239, 228, 0.2)',
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    flexShrink: 0,
  },
  labelGroup: {
    display: 'grid',
    lineHeight: 1.2,
  },
  eyebrow: {
    fontSize: '0.7rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(246, 239, 228, 0.72)',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: 700,
  },
}

const whatsappHref =
  'https://wa.me/39011000000?text=Hello%20Casa%20Aurea%20Events%2C%20I%20would%20like%20to%20request%20an%20event%20proposal.'

export default function FloatingWhatsAppButton() {
  return (
    <a
      className="floating-whatsapp-button"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Casa Aurea Events on WhatsApp"
      style={whatsappStyles.link}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        style={whatsappStyles.icon}
      >
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.76 14.82L2 22l5.35-1.18A10 10 0 1 0 12 2Zm0 18.18a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.17.7.68-3.1-.2-.31A8.18 8.18 0 1 1 12 20.18Zm4.49-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.5.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>

      <span style={whatsappStyles.labelGroup}>
        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
      </span>
    </a>
  )
}
