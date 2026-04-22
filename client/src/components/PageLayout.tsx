import { ReactNode, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  /** Optional document title — if provided, sets document.title */
  title?: string;
  /** Optional meta description — if provided, updates the meta[name="description"] tag */
  description?: string;
}

export default function PageLayout({
  children,
  className = "",
  title,
  description,
}: PageLayoutProps) {
  // Update document title and meta description when props change
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  return (
    <div className={`min-h-screen bg-background text-foreground flex flex-col ${className}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[oklch(0.78_0.15_75)] focus:text-[oklch(0.10_0.015_240)] focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
