import styles from "./store.module.css";
import StoreNotifyForm from "@/components/ui/StoreNotifyForm";

export default function StorePage() {
  return (
    <div className={styles.storePage}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Store</p>
        <h1 className={styles.heading}>Developer tools, built to last.</h1>
        <p className={styles.subheading}>
          Utilities, automation scripts, and workflow tools for developers who
          care how things work.
        </p>
      </header>

      <section className={styles.teaser}>
        <p className={styles.teaserLabel}>Coming soon</p>
        <div className={styles.teaserBody}>
          <p>
            The store will carry small, focused tools built for developer
            workflows - things like the USB Deploy Suite and Dev Toolbox. No
            subscriptions, no bloat. You buy it, you own it.
          </p>
          <p>
            Every tool is built and maintained by one person, which means it
            either solves a real problem or it does not ship. If you want to
            know when something drops, leave your email below.
          </p>
        </div>
      </section>

      <section className={styles.notifySection}>
        <p className={styles.notifyLabel}>Get notified</p>
        <p className={styles.notifyDescription}>
          Leave your email and you will be the first to know when something
          launches.
        </p>
        <StoreNotifyForm />
      </section>
    </div>
  );
}
