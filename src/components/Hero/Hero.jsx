import portrait from '../../assets/igor-santos.jpg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="sobre" className={styles.hero}>
      <div id="top" className={styles.anchor} />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="scene-label">Cena 01 — Sobre</p>

          <h1 className={styles.headline}>
            Penso em arquitetura
            <br />
            antes de digitar
            <br />
            <em>a primeira linha.</em>
          </h1>

          <p className={styles.lead}>
            Sou Igor Santos, desenvolvedor back-end de 24 anos com experiência em{' '}
            <strong>Python, C# e ASP.NET</strong>. Construo APIs escaláveis, sistemas
            distribuídos e automações — do design de banco de dados ao Docker e Kubernetes —
            e hoje integro modelos de linguagem em sistemas reais.
          </p>

          <p className={styles.lead}>
            Meu objetivo é atuar em times nacionais e internacionais como desenvolvedor back-end,
            contribuindo para a construção de sistemas distribuídos e escaláveis.
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryBtn}>
              Ver projetos
            </a>
            <a href="#contato" className={styles.secondaryBtn}>
              Entrar em contato
            </a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/IgorSantosD3v" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className={styles.dot} />
            <a
              href="https://www.linkedin.com/in/igor-santos-7b993b357"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.frame}>
          <div className={styles.frameCorner} data-pos="tl" />
          <div className={styles.frameCorner} data-pos="tr" />
          <div className={styles.frameCorner} data-pos="bl" />
          <div className={styles.frameCorner} data-pos="br" />
          <img
            src={portrait}
            alt="Retrato de Igor Santos, desenvolvedor back-end, sentado em uma cadeira de diretor em um estúdio escuro"
            className={styles.portrait}
          />
          <span className={styles.slate}>TAKE 01 · BACK-END DEV</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
