import styles from './Contact.module.css'

// TODO: troque pelo seu e-mail real antes de publicar.
const EMAIL = 'Igorsantosdevp@gmail.com'

function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className="scene-label">Cena 05 — Contato</p>
        <h2 className={styles.heading}>Vamos conversar</h2>
        <p className={styles.lead}>
          Estou disponível para oportunidades remotas, nacionais e internacionais como
          desenvolvedor back-end. Se você tem uma vaga, um projeto ou só quer trocar uma
          ideia sobre sistemas distribuídos, me chama.
        </p>

        <div className={styles.channels}>
          <a href={`mailto:${EMAIL}`} className={styles.channelPrimary}>
            {EMAIL}
          </a>

          <div className={styles.socialRow}>
            <a href="https://github.com/IgorSantosD3v" target="_blank" rel="noreferrer">
              <span className={styles.channelLabel}>GitHub</span>
              <span className={styles.channelValue}>/IgorSantosD3v</span>
            </a>
            <a
              href="https://www.linkedin.com/in/igor-santos-7b993b357"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.channelLabel}>LinkedIn</span>
              <span className={styles.channelValue}>/in/igor-santos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
