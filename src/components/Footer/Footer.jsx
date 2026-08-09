import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {year} Igor Santos</span>
        <span className={styles.tag}>Construído com React</span>
      </div>
    </footer>
  )
}

export default Footer
