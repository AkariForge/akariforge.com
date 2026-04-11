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

      <section className={styles.about} id="about">
        <div className={styles.aboutContent}>
          <p className={styles.aboutLabel}>About</p>
          <h2 className={styles.aboutHeading}>
            Developer &amp; toolsmith based in Odense, Denmark
          </h2>
          <p className={styles.aboutBody}>
            I build tools that solve real problems in developer workflows - from
            Windows automation pipelines to AI-assisted development utilities.
            My focus is on clarity, craft, and understanding the root cause of
            what I&apos;m building, not just shipping working code.
          </p>
          <p className={styles.aboutBody}>
            AkariForge is the home for these projects. The portfolio you see now
            is the beginning - a foundation being built with the intent to grow
            into a full product offering.
          </p>
          <Button href="#work" variant="secondary">
            View Work
          </Button>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>DK</span>
            <span className={styles.statLabel}>Based in Denmark</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>JS</span>
            <span className={styles.statLabel}>TypeScript / React</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>PS</span>
            <span className={styles.statLabel}>PowerShell / Win</span>
          </div>
        </div>
      </section>
    </>
  );
}
