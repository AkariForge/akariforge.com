import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-between px-[clamp(24px,5vw,60px)] bg-bg-nav backdrop-blur-md border-b border-border">
      <Link
        href="/"
        className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text no-underline"
      >
        Akari<span className="text-accent">Forge</span>
      </Link>
      <ul className="flex items-center gap-8 list-none">
        <li>
          <Link
            href="/work"
            className="text-text-muted text-[11px] tracking-widest uppercase hover:text-text transition-colors"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-text-muted text-[11px] tracking-widest uppercase hover:text-text transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/store"
            className="text-text-muted text-[11px] tracking-widest uppercase hover:text-text transition-colors"
          >
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
