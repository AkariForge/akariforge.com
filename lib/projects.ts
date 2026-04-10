import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "contextloop",
    title: "ContextLoop",
    category: "Workflow Tool",
    shortDescription:
      "Tracks prompt counts and session goals during AI-assisted development. Auto-generates a CONTEXT.md file via the Anthropic API when a configurable threshhold is reached.",
    tags: ["React", "Anthropic API", "AI Workflow"],
    status: "in-development",
    links: {
      github: "https://github.com/AkariForge/contextloop",
    },
    featured: true,
    publishedAt: "2026-04-10",
  },
  {
    slug: "usbdeploysuite",
    title: "USB Deploy Suite",
    category: "Windows Automation",
    shortDescription:
      "A USB Tool for near 100% automation of windows installations. It uses an unattended.xml file to preconfigure choises during Windows install and OOBE.",
    tags: ["Autounattend", "provisioning packages", "Automation"],
    status: "in-development",
    links: {
      github: "https://github.com/AkariForge/usbdeploysuite",
    },
    featured: true,
    publishedAt: "2025-08-16",
  },
  {
    slug: "devtoolbox",
    title: "Dev Toolbox",
    category: "Browser Extension",
    shortDescription:
      "A browser extension that easily formats raw JSON, encodes/decodes Base64, JTW, and URL strings, and lastly tests Regex. It comes with a freemium and paid tier.",
    tags: ["React", "Browser Extension", "Developer tools"],
    status: "in-development",
    links: {
      github: "https://github.com/AkariForge/dev-toolbox",
    },
    featured: true,
    publishedAt: "2026-02-10",
  },
];
