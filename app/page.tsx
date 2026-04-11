import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Developer Tools &amp; Portfolio</p>
        <h1 className={styles.headline}>
          Akari<span className={styles.headlineAccent}>Forge</span>
        </h1>
        <div className={styles.rule} />
        <p className={styles.description}>
          Tools forged with clarity. A growing portfolio of developer utilities,
          automation scripts, and workflow tools - built for the people who care
          how things work.
        </p>
        <div className={styles.ctas}>
          <Button href="#work" variant="primary">
            View Work
          </Button>
          <Button href="#about" variant="secondary">
            About
          </Button>
        </div>
      </section>
      <section className={styles.work} id="work">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
          <span className={styles.sectionCount}>
            {projects.filter((p) => p.featured).length} projects
          </span>
        </div>
        <div className={styles.projectsGrid}>
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
    </>
  );
}
