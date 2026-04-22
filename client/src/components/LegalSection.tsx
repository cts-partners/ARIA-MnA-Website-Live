import { ReactNode } from "react";

interface LegalSectionProps {
  id: string;
  anchor: string;
  number: number;
  title: string;
  inShort?: string;
  children: ReactNode;
}

export default function LegalSection({
  id,
  anchor,
  number,
  title,
  inShort,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={anchor}
      aria-labelledby={`${id}-heading`}
      className="mb-12 scroll-mt-28"
    >
      <h2
        id={`${id}-heading`}
        className="text-xl font-bold text-white mb-3 flex items-start gap-3"
        style={{ letterSpacing: "-0.01em" }}
      >
        <span className="text-[#4FC3F7] font-black flex-shrink-0 w-7 text-right">{number}.</span>
        <span>{title}</span>
      </h2>
      {inShort && (
        <p className="text-sm italic text-[#4FC3F7] mb-4 pl-10">
          <strong>In short:</strong> {inShort}
        </p>
      )}
      <div className="pl-10 prose-legal">{children}</div>
    </section>
  );
}
