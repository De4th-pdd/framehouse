export interface Transaction {
  id: string;
  counterparty: string;
  category: string;
  amount: string;
  amountNum: number;
  currency: "USD" | "GBP" | "AED" | "PKR";
  status: "Settled" | "In Escrow" | "Pending";
  date: string;
  network: string;
}

export interface MetricTimeframe {
  volume: string;
  change: string;
  netFlow: string;
  points: number[];
}

export const MERIDIAN_METRICS: Record<"24H" | "7D" | "30D" | "YTD", MetricTimeframe> = {
  "24H": {
    volume: "$482,900.00",
    change: "+14.2% vs yesterday",
    netFlow: "+$128,450.00",
    points: [35, 42, 40, 58, 62, 54, 78, 85, 92],
  },
  "7D": {
    volume: "$2,845,300.00",
    change: "+28.6% vs last week",
    netFlow: "+$892,100.00",
    points: [28, 38, 45, 60, 55, 74, 82, 88, 96],
  },
  "30D": {
    volume: "$12,410,000.00",
    change: "+41.3% vs last month",
    netFlow: "+$3,620,000.00",
    points: [20, 32, 44, 52, 68, 64, 79, 86, 100],
  },
  YTD: {
    volume: "$84,200,000.00",
    change: "+112% year-to-date",
    netFlow: "+$24,500,000.00",
    points: [15, 25, 38, 48, 62, 70, 81, 91, 105],
  },
};

export const MERIDIAN_TRANSACTIONS: Transaction[] = [
  {
    id: "TX-9042",
    counterparty: "Atelier Noor Global Holdings",
    category: "Cross-Border Settlement",
    amount: "$142,500.00",
    amountNum: 142500,
    currency: "USD",
    status: "Settled",
    date: "TODAY • 14:22",
    network: "SWIFT GPI / CHIPS",
  },
  {
    id: "TX-9041",
    counterparty: "Vertex Architecture AG",
    category: "Master Services Retainer",
    amount: "$68,400.00",
    amountNum: 68400,
    currency: "USD",
    status: "Settled",
    date: "TODAY • 11:05",
    network: "FedNow Direct",
  },
  {
    id: "TX-9040",
    counterparty: "Foundry Capital Syndicate",
    category: "Private Placement Escrow",
    amount: "$350,000.00",
    amountNum: 350000,
    currency: "USD",
    status: "In Escrow",
    date: "YESTERDAY • 18:40",
    network: "Smart Escrow Vault",
  },
  {
    id: "TX-9039",
    counterparty: "Loom Dynamics Karachi",
    category: "Supply Chain Reconciliation",
    amount: "₨ 18,450,000",
    amountNum: 66300,
    currency: "PKR",
    status: "Settled",
    date: "OCT 01 • 16:15",
    network: "Raast RTGS",
  },
  {
    id: "TX-9038",
    counterparty: "Gulf Maritime Logistics",
    category: "Freight Customs Escrow",
    amount: "AED 184,000.00",
    amountNum: 50100,
    currency: "AED",
    status: "Pending",
    date: "OCT 01 • 09:30",
    network: "UAE CBUAE IPI",
  },
];

export const COMMAND_ACTIONS = [
  { label: "View All Currencies", id: "curr-all", shortcut: "⌘A" },
  { label: "Switch Currency: USD ($)", id: "curr-usd", shortcut: "⌘1" },
  { label: "Switch Currency: AED (د.إ)", id: "curr-aed", shortcut: "⌘2" },
  { label: "Switch Currency: PKR (₨)", id: "curr-pkr", shortcut: "⌘3" },
  { label: "Filter: High-Value Settlements (> $50k)", id: "filter-high", shortcut: "⌘F" },
  { label: "Simulate Ledger Export (CSV/JSON)", id: "export-data", shortcut: "⌘E" },
];
