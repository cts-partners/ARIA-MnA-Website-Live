import { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";

interface TocEntry {
  id: string;
  title: string;
  anchor: string;
}

interface LegalPageProps {
  title: string;
  metaTitle: string;
  description: string;
  effective: string;
  lastUpdated: string;
  version: string;
  toc: TocEntry[];
  children: ReactNode;
}

export default function LegalPage({
  title,
  metaTitle,
  description,
  effective,
  lastUpdated,
  version,
  toc,
  children,
}: LegalPageProps) {
  return (
    <PageLayout title={metaTitle} description={description}>
      {/* Skip to content */}
      <a
        href="#legal-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4FC3F7] focus:text-black focus:rounded"
      >
        Skip to content
      </a>

      {/* Hero */}
      <section className="bg-[#000000] border-b border-[#1E2D45] py-16">
        <div className="container max-w-4xl">
          <div className="mb-4">
            <a href="/legal" className="text-sm text-[#4FC3F7] hover:underline">
              ← Legal Hub
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            {title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-[#7A8FA8]">
            <span>Effective: <time dateTime={effective}>{effective}</time></span>
            <span>·</span>
            <span>Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time></span>
            <span>·</span>
            <span>Version: {version}</span>
          </div>
          <p className="mt-4 text-sm text-[#7A8FA8] max-w-2xl">
            This is a draft document intended to accelerate counsel review. It is not legal advice and should not be published without review by qualified attorneys for each jurisdiction where the service operates.
          </p>
        </div>
      </section>

      <div id="legal-content" className="bg-[#000000] py-12">
        <div className="container max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* TOC sidebar */}
            <aside
              className="lg:w-64 flex-shrink-0"
              aria-label="Table of contents"
            >
              <div className="lg:sticky lg:top-28">
                <p className="label-caps text-[#66E0FF] mb-4">Contents</p>
                <nav>
                  <ol className="space-y-1">
                    {toc.map((entry, i) => (
                      <li key={entry.id}>
                        <a
                          href={`#${entry.anchor}`}
                          className="text-sm text-[#7A8FA8] hover:text-[#4FC3F7] transition-colors block py-0.5 leading-snug"
                        >
                          {i + 1}. {entry.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="mt-8 pt-6 border-t border-[#1E2D45]">
                  <button
                    onClick={() => window.print()}
                    className="text-sm text-[#4FC3F7] hover:underline block mb-2"
                    aria-label="Print this page"
                  >
                    Print / Save as PDF
                  </button>
                  <a
                    href="#changelog"
                    className="text-sm text-[#7A8FA8] hover:text-[#4FC3F7] transition-colors block"
                  >
                    Change log
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              {children}

              {/* Change log */}
              <section id="changelog" className="mt-16 pt-8 border-t border-[#1E2D45]">
                <h2 className="text-xl font-bold text-white mb-4">Change Log</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1E2D45]">
                      <th className="text-left py-2 pr-4 text-[#7A8FA8] font-semibold w-32">Date</th>
                      <th className="text-left py-2 text-[#7A8FA8] font-semibold">Summary of Changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1E2D45]">
                      <td className="py-2 pr-4 text-[#B8C8DC]">{effective}</td>
                      <td className="py-2 text-[#B8C8DC]">Initial publication. All sections drafted for counsel review.</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </main>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
