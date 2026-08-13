import { siteConfig } from '../../data/siteConfig'
import styles from './WhatsappButton.module.css'

// Botão flutuante, sempre visível, para que o contato por WhatsApp nunca
// passe despercebido — independente de em qual seção a pessoa esteja.
function WhatsappButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={styles.button}
      aria-label={`Chamar ${siteConfig.name} no WhatsApp`}
    >
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.18 3.03 14.69 2 12.04 2Zm0 1.67c2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.55-3.71 8.24-8.27 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.18 8.18 0 0 1-1.26-4.37c0-4.55 3.71-8.22 8.26-8.22Zm-4.53 4.6c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.7 2.7 4.19 3.68 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.3 7.3 0 0 1-1.35-1.68c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z"
        />
      </svg>
      <span className={styles.label}>WhatsApp</span>
    </a>
  )
}

export default WhatsappButton
