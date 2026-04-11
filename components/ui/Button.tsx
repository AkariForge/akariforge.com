import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonVariant;
  href?: string;
  children: React.ReactNode;
};

export default function Button({ variant, href, children }: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
