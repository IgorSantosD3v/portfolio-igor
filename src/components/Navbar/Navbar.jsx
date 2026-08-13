import { useEffect, useState } from 'react'
import { siteConfig } from '../../data/siteConfig'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>IS</span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Igor Santos</span>
            <span className={styles.logoTag}>Back-End Developer</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.navCta}
            onClick={handleLinkClick}
          >
            Vamos conversar
          </a>
        </nav>

        <button
          className={styles.menuToggle}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
