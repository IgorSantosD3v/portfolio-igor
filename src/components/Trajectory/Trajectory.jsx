import { trajectory } from '../../data/trajectory'
import styles from './Trajectory.module.css'

function Trajectory() {
  return (
    <section id="trajetoria" className={styles.section}>
      <div className="container">
        <p className="scene-label">02 · Trajetória</p>
        <h2 className={styles.heading}>Como cheguei até aqui</h2>
        <p className={styles.subheading}>
          Cada tecnologia que aprendi veio de uma necessidade concreta, não de um checklist.
        </p>

        <ol className={styles.timeline}>
          {trajectory.map((item) => (
            <li
              key={`${item.year}-${item.title}`}
              className={`${styles.item} ${item.current ? styles.itemCurrent : ''}`}
            >
              <span className={styles.year}>{item.year}</span>
              <span className={styles.marker} aria-hidden="true" />
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.current && <span className={styles.badge}>Agora</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Trajectory
