import LegalPage from "@/components/LegalPage";
import LegalSection from "@/components/LegalSection";
import {
  PRIVACY_EFFECTIVE,
  PRIVACY_LAST_UPDATED,
  PRIVACY_VERSION,
  privacySections,
  dataCategories,
  retentionTable,
  cookieTable,
  rightsTable,
} from "./privacyContent";

const toc = privacySections.map((s) => ({ id: s.id, title: s.title, anchor: s.anchor }));

function renderBody(body: string) {
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

function DataCategoriesTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#1E2D45] mb-6">
      <table className="w-full min-w-[520px] text-sm" role="table">
        <thead>
          <tr className="border-b border-[#1E2D45] bg-[#0D1425]">
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[28%]" scope="col">Category</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[42%]" scope="col">Examples</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold" scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {dataCategories.map((row, i) => (
            <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
              <td className="px-4 py-3 text-white font-medium">{row.category}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.examples}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetentionTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#1E2D45] mb-6">
      <table className="w-full min-w-[520px] text-sm" role="table">
        <thead>
          <tr className="border-b border-[#1E2D45] bg-[#0D1425]">
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[28%]" scope="col">Category</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[35%]" scope="col">Retention Period</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold" scope="col">Justification</th>
          </tr>
        </thead>
        <tbody>
          {retentionTable.map((row, i) => (
            <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
              <td className="px-4 py-3 text-white font-medium">{row.category}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.retention}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.justification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CookieTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#1E2D45] mb-6">
      <table className="w-full min-w-[600px] text-sm" role="table">
        <thead>
          <tr className="border-b border-[#1E2D45] bg-[#0D1425]">
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[20%]" scope="col">Category</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[20%]" scope="col">Provider</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[15%]" scope="col">Retention</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold w-[25%]" scope="col">Purpose</th>
            <th className="text-left px-4 py-3 text-[#7A8FA8] font-semibold" scope="col">Opt-Out</th>
          </tr>
        </thead>
        <tbody>
          {cookieTable.map((row, i) => (
            <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
              <td className="px-4 py-3 text-white font-medium">{row.category}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.provider}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.retention}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.purpose}</td>
              <td className="px-4 py-3 text-[#B8C8DC]">{row.optOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RightsTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#1E2D45] mb-6">
      <table className="w-full min-w-[700px] text-sm" role="table">
        <thead>
          <tr className="border-b border-[#1E2D45] bg-[#0D1425]">
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[18%]" scope="col">Right</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[12%]" scope="col">EU/UK</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[14%]" scope="col">US States</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[10%]" scope="col">Canada</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[10%]" scope="col">Brazil</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold w-[10%]" scope="col">APAC</th>
            <th className="text-left px-3 py-3 text-[#7A8FA8] font-semibold" scope="col">How to Exercise</th>
          </tr>
        </thead>
        <tbody>
          {rightsTable.map((row, i) => (
            <tr key={i} className={`border-b border-[#1E2D45] ${i % 2 === 0 ? "bg-[#000000]" : "bg-[#060C18]"}`}>
              <td className="px-3 py-3 text-white font-medium">{row.right}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.euUk}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.usStates}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.canada}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.brazil}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.apac}</td>
              <td className="px-3 py-3 text-[#B8C8DC]">{row.howToExercise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      metaTitle="Privacy Policy — ARIA M&A Intelligence Platform"
      description="How ARIA M&A Intelligence Platform collects, uses, shares, and protects your personal data, and how to exercise your privacy rights."
      effective={PRIVACY_EFFECTIVE}
      lastUpdated={PRIVACY_LAST_UPDATED}
      version={PRIVACY_VERSION}
      toc={toc}
    >
      {privacySections.map((section, i) => (
        <LegalSection
          key={section.id}
          id={section.id}
          anchor={section.anchor}
          number={i + 1}
          title={section.title}
          inShort={section.inShort}
        >
          {renderBody(section.body)}
          {section.table === "dataCategories" && <DataCategoriesTable />}
          {section.table === "retentionTable" && <RetentionTable />}
          {section.table === "cookieTable" && <CookieTable />}
          {section.table === "rightsTable" && <RightsTable />}
        </LegalSection>
      ))}
    </LegalPage>
  );
}
