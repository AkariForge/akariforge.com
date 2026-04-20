import type { Project } from "@/lib/types";
import styles from "./ProjectRow.module.css";

type Props = {
  project: Project;
};

export default function ProjectRow({ project }: Props) {
  return (
    <article className={styles.row}>
      <div className={styles.left}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
      </div>

      <div className={styles.right}>
        <span className={styles.status} data-status={project.status}>
          {project.status}
        </span>
        <ul className={styles.tags}>
          {project.stack.map((technology) => (
            <li key={technology} className={styles.tag}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
