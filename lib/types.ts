// A union type forces every project to use one of these exact strings.
export type ProjectFeature = {
  label: string;
  description?: string;
};

export type ProjectStatus = "available" | "in-development" | "archived";

export type ProjectCategory =
  | "Desktop Application"
  | "Workflow Tool"
  | "Windows Automation"
  | "Browser Extension"
  | "Library";

export type Project = {
  slug: string; // URL-safe identifier: "contextloop"
  title: string; // Display name: "Contextloop"
  category: ProjectCategory; // Constrained by the union above
  shortDescription: string; // Card-length summary, 1-2 sentences
  longDescription?: string; // Full detail page body
  features?: ProjectFeature[];
  stack: string[];
  status: ProjectStatus;
  links: {
    github?: string;
    live?: string;
    download?: string;
    purchaseUrl?: string; // Future Lemon Sqeezy checkout URL
  };
  featured?: boolean; // If true, appears pn the homepage grid
  publishedAt: string; // ISO 8601 date string: "2026-04-10"
  ogImage?: string; // hero / social share image: "projects/contextloop/og.png"
  images?: string[]; // screenshots: ["projects/Contextloop/screenshot-1.png"]
};

export type TimelineEntry = {
  period: string;
  title: string;
  organisation: string;
  description: string;
  badge?: string; // optional . not every entry has one
};

export type ContactLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
