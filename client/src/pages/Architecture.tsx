import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, Brain } from "lucide-react";

const tabs = ["Agents", "Modules", "Stack", "GraphRAG Flow"];

const agentCategories = [
  {
    name: "Diligence",
    count: 8,
    color: "oklch(0.72 0.14 200)",
    colorClass: "text-[oklch(0.72_0.14_200)]",
    badgeClass: "text-[oklch(0.72_0.14_200)] bg-[oklch(0.72_0.14_200/0.1)]",
    agents: [
      { name: "Customer Validation Agent", accuracy: 88 },
      { name: "ESG Compliance Agent", accuracy: 90 },
      { name: "Financial Analysis Agent", accuracy: 96 },
      { name: "HR & Culture Agent", accuracy: 85 },
      { name: "IP Assessment Agent", accuracy: 89 },
      { name: "Legal Review Agent", accuracy: 93 },
      { name: "Market Sizing Agent", accuracy: 91 },
      { name: "Tech Stack Audit Agent", accuracy: 92 },
    ],
  },
  {
    name: "Knowledge",
    count: 3,
    color: "oklch(0.65 0.18 280)",
    colorClass: "text-[oklch(0.65_0.18_280)]",
    badgeClass: "text-[oklch(0.65_0.18_280)] bg-[oklch(0.65_0.18_280/0.1)]",
    agents: [
      { name: "Entity Resolution Agent", accuracy: 96 },
      { name: "GraphRAG Search Agent", accuracy: 95 },
      { name: "Relationship Mapping Agent", accuracy: 93 },
    ],
  },
  {
    name: "Marketplace",
    count: 2,
    color: "oklch(0.70 0.18 150)",
    colorClass: "text-[oklch(0.70_0.18_150)]",
    badgeClass: "text-[oklch(0.70_0.18_150)] bg-[oklch(0.70_0.18_150/0.1)]",
    agents: [
      { name: "Data Quality Agent", accuracy: 97 },
      { name: "Deal Matching Agent", accuracy: 94 },
    ],
  },
  {
    name: "Sell-Side",
    count: 3,
    color: "oklch(0.78 0.15 75)",
    colorClass: "text-[oklch(0.78_0.15_75)]",
    badgeClass: "text-[oklch(0.78_0.15_75)] bg-[oklch(0.78_0.15_75/0.1)]",
    agents: [
      { name: "Buyer Matching Agent", accuracy: 93 },
      { name: "CIM Generator Agent", accuracy: 95 },
      { name: "Engagement Tracking Agent", accuracy: 91 },
    ],
  },
  {
    name: "Sourcing",
    count: 4,
    color: "oklch(0.60 0.20 25)",
    colorClass: "text-[oklch(0.60_0.20_25)]",
    badgeClass: "text-[oklch(0.60_0.20_25)] bg-[oklch(0.60_0.20_25/0.1)]",
    agents: [
      { name: "Company Profiler Agent", accuracy: 91 },
      { name: "Outreach Optimization Agent", accuracy: 87 },
      { name: "Signal Detection Agent", accuracy: 89 },
      { name: "Thesis Matching Agent", accuracy: 94 },
    ],
  },
  {
    name: "Valuation",
    count: 3,
    color: "oklch(0.65 0.18 280)",
    colorClass: "text-[oklch(0.65_0.18_280)]",
    badgeClass: "text-[oklch(0.65_0.18_280)] bg-[oklch(0.65_0.18_280/0.1)]",
    agents: [
      { name: "Asset Valuation Agent", accuracy: 90 },
      { name: "Comparable Analysis Agent", accuracy: 92 },
      { name: "DCF Valuation Agent", accuracy: 94 },
    ],
  },
];

const stackLayers = [
  {
    layer: "Frontend",
    items: ["React 19", "TypeScript", "Tailwind CSS", "tRPC Client"],
    color: "oklch(0.72 0.14 200)",
  },
  {
    layer: "API Layer",
    items: ["tRPC v11", "Express 4", "JWT Auth", "Rate Limiting"],
    color: "oklch(0.65 0.18 280)",
  },
  {
    layer: "AI Orchestration",
    items: ["Multi-Agent Framework", "LLM Router", "Tool Registry", "Memory Store"],
    color: "oklch(0.78 0.15 75)",
  },
  {
    layer: "Knowledge Layer",
    items: ["Opportunity Map", "Vector Embeddings", "GraphRAG Engine", "Entity Resolution"],
    color: "oklch(0.70 0.18 150)",
  },
  {
    layer: "Data Layer",
    items: ["MySQL / TiDB", "Vector DB", "S3 Storage", "Real-time Streams"],
    color: "oklch(0.60 0.20 25)",
  },
];

const graphRAGSteps = [
  {
    step: "1",
    title: "Document Ingestion",
    desc: "Upload financial documents, CIMs, contracts. AI parses, extracts entities, and generates semantic embeddings.",
    color: "oklch(0.78 0.15 75)",
  },
  {
    step: "2",
    title: "Knowledge Indexing",
    desc: "Content indexed with vector embeddings. Entities (companies, people, deals) mapped to the knowledge graph.",
    color: "oklch(0.72 0.14 200)",
  },
  {
    step: "3",
    title: "Hybrid Search",
    desc: "Queries combine dense vector similarity with graph traversal — finding both semantic matches and relationship chains.",
    color: "oklch(0.65 0.18 280)",
  },
  {
    step: "4",
    title: "Agentic Action",
    desc: "Specialized agents consume search results to generate memos, score opportunities, and run diligence autonomously.",
    color: "oklch(0.70 0.18 150)",
  },
];

export default function Architecture() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 px-4 relative" aria-labelledby="arch-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[oklch(0.18_0.020_240)] text-[oklch(0.65_0.18_280)]" aria-hidden="true">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium text-[oklch(0.60_0.010_240)] uppercase tracking-widest">
              AI Agents · Opportunity Map · Hybrid GraphRAG
            </span>
          </div>
          <h1 id="arch-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Architecture
          </h1>
          <p className="text-[oklch(0.60_0.010_240)] max-w-2xl text-lg">
            ARIA combines specialized agents, a knowledge graph, vector search, and multi-LLM architecture into a single platform purpose-built for M&A.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 bg-background sticky top-16 z-40 border-b border-[oklch(0.22_0.018_240)]" aria-label="Architecture sections">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto" role="tablist">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === i
                    ? "border-[oklch(0.78_0.15_75)] text-[oklch(0.78_0.15_75)]"
                    : "border-transparent text-[oklch(0.60_0.010_240)] hover:text-white"
                }`}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`arch-panel-${i}`}
                id={`arch-tab-${i}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 px-4 bg-background">
        <div className="container-wide">

          {/* Agents Tab */}
          {activeTab === 0 && (
            <div id="arch-panel-0" role="tabpanel" aria-labelledby="arch-tab-0">
              <h2 className="text-2xl font-bold text-white mb-3 font-display">Production AI Agents</h2>
              <p className="text-[oklch(0.60_0.010_240)] mb-10">
                23 specialized agents across 6 categories, each purpose-built for a specific M&A task.
              </p>
              <div className="space-y-10">
                {agentCategories.map((cat) => (
                  <div key={cat.name}>
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className={`text-lg font-semibold font-display ${cat.colorClass}`}>{cat.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cat.badgeClass}`}>
                        {cat.count} agents
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.agents.map((agent) => (
                        <div
                          key={agent.name}
                          className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-xl p-4 flex items-center justify-between gap-4"
                        >
                          <span className="text-sm text-white font-medium">{agent.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-16 h-1.5 bg-[oklch(0.22_0.018_240)] rounded-full overflow-hidden" role="progressbar" aria-valuenow={agent.accuracy} aria-valuemin={0} aria-valuemax={100} aria-label={`${agent.accuracy}% accuracy`}>
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${agent.accuracy}%`, background: cat.color }}
                              />
                            </div>
                            <span className="text-sm font-bold" style={{ color: cat.color }}>{agent.accuracy}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules Tab */}
          {activeTab === 1 && (
            <div id="arch-panel-1" role="tabpanel" aria-labelledby="arch-tab-1">
              <h2 className="text-2xl font-bold text-white mb-3 font-display">Platform Modules</h2>
              <p className="text-[oklch(0.60_0.010_240)] mb-8">
                Eight production modules, each with dedicated AI agents, data pipelines, and APIs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {["Deal Sourcing", "Due Diligence", "Sell-Side Prep", "Valuation Engine", "Marketplace", "Opportunity Map", "Market Signals", "Deal CRM"].map((mod, i) => {
                  const colors = ["oklch(0.72 0.14 200)", "oklch(0.65 0.18 280)", "oklch(0.78 0.15 75)", "oklch(0.70 0.18 150)", "oklch(0.60 0.20 25)", "oklch(0.72 0.14 200)", "oklch(0.65 0.18 280)", "oklch(0.78 0.15 75)"];
                  return (
                    <div key={mod} className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-xl p-5">
                      <div className="text-3xl font-bold font-display mb-2" style={{ color: colors[i] }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-sm font-semibold text-white">{mod}</div>
                      <div className="text-xs text-[oklch(0.70_0.18_150)] mt-1">Production</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stack Tab */}
          {activeTab === 2 && (
            <div id="arch-panel-2" role="tabpanel" aria-labelledby="arch-tab-2">
              <h2 className="text-2xl font-bold text-white mb-3 font-display">Technology Stack</h2>
              <p className="text-[oklch(0.60_0.010_240)] mb-8">
                Enterprise-grade stack built for security, scalability, and performance.
              </p>
              <div className="space-y-4">
                {stackLayers.map((layer) => (
                  <div key={layer.layer} className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} aria-hidden="true" />
                      <span className="text-sm font-semibold text-white">{layer.layer}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-[oklch(0.18_0.020_240)] border border-[oklch(0.22_0.018_240)] text-[oklch(0.70_0.010_240)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GraphRAG Flow Tab */}
          {activeTab === 3 && (
            <div id="arch-panel-3" role="tabpanel" aria-labelledby="arch-tab-3">
              <h2 className="text-2xl font-bold text-white mb-3 font-display">GraphRAG Flow</h2>
              <p className="text-[oklch(0.60_0.010_240)] mb-8">
                How ARIA ingests documents, builds knowledge, and takes action — end to end.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {graphRAGSteps.map((step, i) => (
                  <div key={step.step} className="relative">
                    {i < graphRAGSteps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                        style={{ background: `linear-gradient(90deg, ${step.color}60, transparent)` }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="bg-[oklch(0.13_0.018_240)] border border-[oklch(0.22_0.018_240)] rounded-xl p-6 relative z-10">
                      <div className="text-3xl font-bold font-display mb-3" style={{ color: step.color }}>{step.step}</div>
                      <h3 className="text-base font-semibold text-white mb-2 font-display">{step.title}</h3>
                      <p className="text-sm text-[oklch(0.75_0.010_240)] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="py-12 px-4 bg-[oklch(0.12_0.018_240)]">
        <div className="container-wide">
          <Link href="/contact">
            <Button className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.13_75)] text-[oklch(0.10_0.015_240)] font-semibold px-8 glow-gold">
              Request a Technical Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
