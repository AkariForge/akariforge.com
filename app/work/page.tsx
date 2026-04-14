import { projects } from "@/lib/projects";
import ProjectRow from "@/components/ui/ProjectRow";
import styles from "./work.module.css";

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Work</h1>
        <span className={styles.count}>{projects.length} projects</span>
      </header>

      <section className={styles.list}>
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
