import styles from "./about.module.css";
import {
  isAvailableForWork,
  experience,
  education,
  contactLinks,
} from "@/lib/about";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.pageLabel}>/ about</p>
        <h1 className={styles.heading}>Michael Larsen</h1>
        <p className={styles.role}>Web Developer &amp; Tooling builder</p>
        {isAvailableForWork && (
          <span className={styles.availabilityBadge}>Available for work</span>
        )}
      </header>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Experience</p>
        <div className={styles.timeline}>
          {experience.map((entry) => (
            <div key={entry.period} className={styles.timelineRow}>
              <span className={styles.timelinePeriod}>{entry.period}</span>
              <div className={styles.timelineBody}>
                <p className={styles.timelineTitle}>{entry.title}</p>
                <p className={styles.timelineSub}>
                  {entry.organisation} — {entry.description}
                </p>
                {entry.badge && (
                  <span className={styles.timelineBadge}>{entry.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Education</p>
        <div className={styles.timeline}>
          {education.map((entry) => (
            <div key={entry.period} className={styles.timelineRow}>
              <span className={styles.timelinePeriod}>{entry.period}</span>
              <div className={styles.timelineBody}>
                <p className={styles.timelineTitle}>{entry.title}</p>
                <p className={styles.timelineSub}>
                  {entry.organisation} — {entry.description}
                </p>
                {entry.badge && (
                  <span className={styles.timelineBadge}>{entry.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Contact</p>
        <div className={styles.contactList}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.contactLink}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
            >
              <span className={styles.contactIcon}>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
