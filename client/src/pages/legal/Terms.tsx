import LegalPage from "@/components/LegalPage";
import LegalSection from "@/components/LegalSection";
import { TOS_EFFECTIVE, TOS_LAST_UPDATED, TOS_VERSION, tosSections } from "./tosContent";

const toc = tosSections.map((s) => ({ id: s.id, title: s.title, anchor: s.anchor }));

function renderBody(body: string) {
  // Split on double newlines for paragraphs, handle **bold** inline
  return body.split("\n\n").map((para, i) => {
    const html = para
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br />");
    return (
      <p
        key={i}
        className="text-[#B8C8DC] text-sm leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      metaTitle="Terms of Service — ARIA M&A Intelligence Platform"
      description="The terms governing your use of the ARIA M&A Intelligence Platform, including subscriptions, acceptable use, data handling, and dispute resolution."
      effective={TOS_EFFECTIVE}
      lastUpdated={TOS_LAST_UPDATED}
      version={TOS_VERSION}
      toc={toc}
    >
      {tosSections.map((section, i) => (
        <LegalSection
          key={section.id}
          id={section.id}
          anchor={section.anchor}
          number={i + 1}
          title={section.title}
          inShort={section.inShort}
        >
          {renderBody(section.body)}
        </LegalSection>
      ))}
    </LegalPage>
  );
}
