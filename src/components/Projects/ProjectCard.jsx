import styles from './Projects.module.css'

function ProjectCard({ project }) {
  const { number, title, description, tags, repoUrl, demoUrl } = project

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.number}>{number}</span>
        <div className={styles.cardLinks}>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            aria-label={`Ver código de ${title} no GitHub`}
          >
            Código ↗
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.cardLink}
              aria-label={`Ver demonstração de ${title}`}
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>

      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
