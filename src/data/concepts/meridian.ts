export interface WorkstreamItem {
  id: string;
  stream: string;
  module: string;
  units: string;
  unitsNum: number;
  environment: "Production" | "Staging" | "Sandbox";
  status: "Completed" | "Active" | "Queued";
  timestamp: string;
  handler: string;
}

export interface MetricTimeframe {
  operations: string;
  change: string;
  throughput: string;
  points: number[];
}

export const MERIDIAN_METRICS: Record<"24H" | "7D" | "30D" | "YTD", MetricTimeframe> = {
  "24H": {
    operations: "48,290 OPS",
    change: "+14.2% activity",
    throughput: "1,280 OPS/HR",
    points: [35, 42, 40, 58, 62, 54, 78, 85, 92],
  },
  "7D": {
    operations: "284,530 OPS",
    change: "+28.6% activity",
    throughput: "8,920 OPS/HR",
    points: [28, 38, 45, 60, 55, 74, 82, 88, 96],
  },
  "30D": {
    operations: "1,241,000 OPS",
    change: "+41.3% activity",
    throughput: "36,200 OPS/HR",
    points: [20, 32, 44, 52, 68, 64, 79, 86, 100],
  },
  YTD: {
    operations: "8,420,000 OPS",
    change: "+112% activity",
    throughput: "245,000 OPS/HR",
    points: [15, 25, 38, 48, 62, 70, 81, 91, 105],
  },
};

export const MERIDIAN_WORKSTREAMS: WorkstreamItem[] = [
  {
    id: "OP-9042",
    stream: "Inventory Sync Pipeline",
    module: "Catalog Synchronization",
    units: "14,250 RECORDS",
    unitsNum: 14250,
    environment: "Production",
    status: "Completed",
    timestamp: "TODAY • 14:22",
    handler: "Batch Worker Node 04",
  },
  {
    id: "OP-9041",
    stream: "Spatial Asset Rendering",
    module: "Asset Generation Pipeline",
    units: "6,840 ASSETS",
    unitsNum: 6840,
    environment: "Production",
    status: "Completed",
    timestamp: "TODAY • 11:05",
    handler: "GPU Compute Cluster",
  },
  {
    id: "OP-9040",
    stream: "Data Extraction & Indexing",
    module: "Document Parser Service",
    units: "35,000 PAGES",
    unitsNum: 35000,
    environment: "Staging",
    status: "Active",
    timestamp: "YESTERDAY • 18:40",
    handler: "Parallel OCR Ingestion",
  },
  {
    id: "OP-9039",
    stream: "Regional Cache Invalidation",
    module: "Edge Distribution Router",
    units: "1,845 ENDPOINTS",
    unitsNum: 1845,
    environment: "Production",
    status: "Completed",
    timestamp: "OCT 01 • 16:15",
    handler: "Anycast Global Purge",
  },
  {
    id: "OP-9038",
    stream: "Telemetry Anomaly Scan",
    module: "Auditing & Health Sentinel",
    units: "18,400 EVENTS",
    unitsNum: 18400,
    environment: "Sandbox",
    status: "Queued",
    timestamp: "OCT 01 • 09:30",
    handler: "Heuristic Sentinel Bot",
  },
];

export const COMMAND_ACTIONS = [
  { label: "View All Environments", id: "env-all", shortcut: "⌘A" },
  { label: "Switch Env: Production", id: "env-prod", shortcut: "⌘1" },
  { label: "Switch Env: Staging", id: "env-stg", shortcut: "⌘2" },
  { label: "Switch Env: Sandbox", id: "env-sbx", shortcut: "⌘3" },
  { label: "Filter: High-Density Jobs (> 10k)", id: "filter-high", shortcut: "⌘F" },
  { label: "Simulate Ledger Export (CSV/JSON)", id: "export-data", shortcut: "⌘E" },
];
