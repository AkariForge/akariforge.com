import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-300 mx-auto px-[clamp(24px,5vw,60px)] py-9 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/"
          className="font-display text-[14px] font-normal tracking-[-0.01em] text-text-muted no-underline hover:text-text transition-colors"
        >
          AkariForge
        </Link>
        <span className="text-[11px] tracking-[0.07em] text-text-dim">
          © {new Date().getFullYear()} Michael Larsen
        </span>
      </div>
    </footer>
  );
}
