type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  variant,
  href,
  children,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-block font-body text-[11px] font-medium tracking-[0.1em] uppercase px-[30px] py-[13px] transition-transform duration-150 hover:-translate-y-px";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-accent text-accent-text hover:opacity-85",
    secondary:
      "bg-transparent text-text-muted border border-border hover:border-border-hover hover:text-text",
  };

  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
