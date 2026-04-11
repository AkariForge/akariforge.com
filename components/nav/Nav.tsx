import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Akari<span className={styles.logoAccent}>Forge</span>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/work" className={styles.navLink}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/store" className={styles.navLink}>
            Store
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
