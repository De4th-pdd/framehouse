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
  activeProjects: string;
  openTasks: string;
  orders: string;
  ordersSub: string;
  activityChange: string;
  points: number[];
}

export const MERIDIAN_METRICS: Record<"24H" | "7D" | "30D" | "YTD", MetricTimeframe> = {
  "24H": {
    activeProjects: "24",
    openTasks: "18",
    orders: "142",
    ordersSub: "PKR 485,000 processed",
    activityChange: "+12.4% vs yesterday",
    points: [35, 42, 40, 58, 62, 54, 78, 85, 92],
  },
  "7D": {
    activeProjects: "24",
    openTasks: "18",
    orders: "984",
    ordersSub: "PKR 3,240,000 processed",
    activityChange: "+18.6% vs last week",
    points: [28, 38, 45, 60, 55, 74, 82, 88, 96],
  },
  "30D": {
    activeProjects: "28",
    openTasks: "22",
    orders: "4,120",
    ordersSub: "PKR 14,800,000 processed",
    activityChange: "+24.2% vs last month",
    points: [20, 32, 44, 52, 68, 64, 79, 86, 100],
  },
  YTD: {
    activeProjects: "36",
    openTasks: "14",
    orders: "38,400",
    ordersSub: "Annual fulfillment",
    activityChange: "+42.8% YoY",
    points: [15, 25, 38, 48, 62, 70, 81, 91, 105],
  },
};

export const MERIDIAN_WORKSTREAMS: WorkstreamItem[] = [
  {
    id: "WF-1042",
    stream: "Inventory Catalog Sync",
    module: "E-Commerce Catalog",
    units: "1,284 ITEMS",
    unitsNum: 1284,
    environment: "Production",
    status: "Completed",
    timestamp: "TODAY • 14:22",
    handler: "Catalog Synchronization",
  },
  {
    id: "WF-1041",
    stream: "Wholesale Order Dispatch",
    module: "Fulfillment Module",
    units: "48 ORDERS",
    unitsNum: 48,
    environment: "Production",
    status: "Completed",
    timestamp: "TODAY • 11:05",
    handler: "Fulfillment Dispatcher",
  },
  {
    id: "WF-1040",
    stream: "Customer Account Onboarding",
    module: "Client Management",
    units: "12 PROFILES",
    unitsNum: 12,
    environment: "Staging",
    status: "Active",
    timestamp: "YESTERDAY • 18:40",
    handler: "Client Onboarding Flow",
  },
  {
    id: "WF-1039",
    stream: "Invoice Reconciliation",
    module: "Billing & Accounts",
    units: "86 INVOICES",
    unitsNum: 86,
    environment: "Production",
    status: "Completed",
    timestamp: "OCT 01 • 16:15",
    handler: "Automated Ledger Audit",
  },
  {
    id: "WF-1038",
    stream: "Warehouse Stock Health",
    module: "Inventory Sentinel",
    units: "24 LOCATIONS",
    unitsNum: 24,
    environment: "Sandbox",
    status: "Queued",
    timestamp: "OCT 01 • 09:30",
    handler: "Threshold Auditor",
  },
];

export const COMMAND_ACTIONS = [
  { label: "View All Environments", id: "env-all", shortcut: "⌘A" },
  { label: "Switch Env: Production", id: "env-prod", shortcut: "⌘1" },
  { label: "Switch Env: Staging", id: "env-stg", shortcut: "⌘2" },
  { label: "Switch Env: Sandbox", id: "env-sbx", shortcut: "⌘3" },
  { label: "Filter: Active Workflows Only", id: "filter-active", shortcut: "⌘F" },
  { label: "Export Operational Ledger (CSV)", id: "export-data", shortcut: "⌘E" },
];
