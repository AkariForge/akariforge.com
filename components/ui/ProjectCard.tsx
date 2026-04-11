import type { Project } from "@/lib/types";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.category}>{project.category}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.shortDescription}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <span className={`${styles.status} ${styles[project.status]}`}>
          <span className={styles.statusDot} />
          {project.status}
        </span>
        <span className={styles.cta}>View Project</span>
      </div>
    </article>
  );
}
