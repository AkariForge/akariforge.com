import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "contextloop",
    title: "ContextLoop",
    category: "Workflow Tool",
    shortDescription:
      "Tracks prompt counts and session goals during AI-assisted development. Auto-generates a CONTEXT.md file via the Anthropic API when a configurable threshold is reached.",
    longDescription:
      "ContextLoop is a lightweight session management tool for AI-assisted development workflows. It monitors how many prompts you have sent in a working session and tracks the goals you set at the start. When a configurable threshold is reached, it calls the Anthropic API to automatically generate a CONTEXT.md file - a structured summary of the session that can be fed into the next conversation to preserve continuity. It is designed to reduce the cognitive overhead of working in long, multi-session AI coding workflows.",
    features: [
      {
        label: "Prompt threshold tracking",
        description:
          "Counts prompts sent during a session and triggers a summary when a configurable limit is reached.",
      },
      {
        label: "Session goal logging",
        description:
          "Lets you record what you are trying to achieve at the start of a session so the generated summary reflects your intent.",
      },
      {
        label: "Automatic CONTEXT.md generation",
        description:
          "Calls the Anthropic API to produce a structured Markdown file summarising the session - ready to paste into the next conversation.",
      },
      {
        label: "Configurable threshold",
      },
    ],
    stack: ["React", "Anthropic API", "TypeScript"],
    status: "available",
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
      "A USB Tool for near 100% automation of windows installations. It uses an unattended.xml file to preconfigure choices during Windows install and OOBE.",
    longDescription:
      "USB Deploy Suite is a multi-stage Windows deployment pipeline built for computer repair and provisioning workflows. It combines an Autounattend.xml answer file with a post-install PowerShell stage and a provisioning package to automate the entire Windows setup process from first boot to a configured desktop. The Autounattend.xml handles partitioning, regional settings, and OOBE suppression. The PowerShell stage runs after first login to install software, apply system settings, and clean up. The PPKG file handles account configuration and policy application. Together they reduce a manual Windows installation from roughly an hour of interaction to near-zero.",
    features: [
      {
        label: "Unattended installation",
        description:
          "Autounattend.xml drives the Windows installer silently - no prompts for language, partition layout, or OOBE steps.",
      },
      {
        label: "Post-install PowerShell stage",
        description:
          "Runs automatically after first login to install software, configure system settings, and remove pre-installed bloatware.",
      },
      {
        label: "Provisioning package support",
        description:
          "A PPKG file handles account setup and policy application in a format Windows applies natively during first boot.",
      },
      {
        label: "USB-bootable",
        description:
          "The entire pipeline lives on a single bootable USB drive - no network share or deployment server required.",
      },
      {
        label: "Repair-shop optimised",
      },
    ],
    stack: ["PowerShell", "Autounattend.xml", "PPKG"],
    status: "available",
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
    longDescription:
      "Dev Toolbox is a browser extension built for developers who need quick access to common encoding, formatting, and debugging utilities without leaving the browser. It handles JSON formatting with syntax highlighting, Base64 encoding and decoding, JWT inspection, URL encoding and decoding, and Regex testing with live match highlighting - all in a single panel. The free tier covers the core utilities. The paid tier unlocks advanced features including saved Regex patterns, JWT secret validation, and persistent history across sessions.",
    features: [
      {
        label: "JSON formatter",
        description:
          "Parses and pretty-prints raw JSON with syntax highlighting and inline error reporting for malformed input.",
      },
      {
        label: "Base64 encoder and decoder",
        description:
          "Encodes plain text to Base64 and decodes Base64 back to plain text in a single input panel.",
      },
      {
        label: "JWT inspector",
        description:
          "Decodes and displays JWT header and payload. The paid tier adds secret validation.",
      },
      {
        label: "URL encoder and decoder",
      },
      {
        label: "Regex tester",
        description:
          "Tests Regex patterns against sample input with live match highlighting as you type.",
      },
      {
        label: "Freemium model",
        description:
          "Core utilities are free. Advanced features - saved patterns, JWT validation, persistent history - require a paid licence.",
      },
    ],
    stack: ["React", "TypeScript", "Vite"],
    status: "in-development",
    links: {
      github: "https://github.com/AkariForge/dev-toolbox",
    },
    featured: true,
    publishedAt: "2026-02-10",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
