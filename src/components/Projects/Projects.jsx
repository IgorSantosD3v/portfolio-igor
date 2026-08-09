import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className="container">
        <p className="scene-label">Cena 03 — Projetos</p>
        <h2 className={styles.heading}>Trabalhos em cartaz</h2>
        <p className={styles.subheading}>
          Uma seleção de projetos que mostram como penso estrutura, dados e interface.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <a
          href="https://github.com/IgorSantosD3v?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className={styles.allProjects}
        >
          Ver todos os repositórios no GitHub →
        </a>
      </div>
    </section>
  )
}

export default Projects
