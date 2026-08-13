import { skillGroups } from '../../data/trajectory'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="scene-label">04 · Habilidades</p>
        <h2 className={styles.heading}>Onde estou operacional</h2>
        <p className={styles.subheading}>
          Tecnologias que uso no dia a dia e frentes em que estou evoluindo agora.
        </p>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <div className={styles.groupHeader}>
                <h3>{group.label}</h3>
                <span
                  className={`${styles.status} ${
                    group.status === 'operational' ? styles.statusOn : styles.statusProgress
                  }`}
                >
                  {group.status === 'operational' ? 'Operacional' : 'Em progresso'}
                </span>
              </div>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
