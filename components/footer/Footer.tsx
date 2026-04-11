import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          AkariForge
        </Link>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Michael Larsen
        </span>
      </div>
    </footer>
  );
}
