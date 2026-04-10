import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center px-[clamp(24px,6vw,100px)] py-20 max-w-275 mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-accent font-medium mb-7">
          Developer Tools &amp; Portfolio
        </p>
        <h1 className="font-display text-[clamp(60px,9vw,108px)] font-light leading-[0.95] tracking-[-0.04em] text-text mb-2.5">
          Akari<span className="text-accent">Forge</span>
        </h1>
        <div className="w-13 h-0.5 bg-accent opacity-55 mb-9" />
        <p className="text-[14px] font-light leading-[1.8] text-text-muted max-w-115 mb-13">
          Tools forged with clarity. A growing portfolio of developer utilities,
          automation scripts, and workflow tools - built for the people who care
          how things work.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <Button href="#work" variant="primary">
            View Work
          </Button>
          <Button href="#about" variant="secondary">
            About
          </Button>
        </div>
      </section>
    </>
  );
}
