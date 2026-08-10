export type Kpi = {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
};

export const kpis: Kpi[] = [
  { label: "Mediabudget besteed", value: "€ 17.600", delta: 4.8, deltaLabel: "vs. vorige periode" },
  { label: "Impressies", value: "1.160.000", delta: 9.1, deltaLabel: "vs. vorige periode" },
  { label: "Kliks", value: "22.320", delta: 6.7, deltaLabel: "vs. vorige periode" },
  { label: "CTR", value: "1,92%", delta: -0.2, deltaLabel: "vs. vorige periode" },
  { label: "Conversies", value: "1.317", delta: 11.3, deltaLabel: "vs. vorige periode" },
  { label: "ROAS", value: "5,1x", delta: 2.4, deltaLabel: "vs. vorige periode" },
];

export const clientKpis: Kpi[] = [kpis[0], kpis[2], kpis[4], kpis[5]];

export type GoalRow = {
  label: string;
  achieved: number;
  target: number;
  format: "currency" | "number" | "percent" | "multiplier";
};

export const clientGoals: GoalRow[] = [
  { label: "Bezoekers via paid", achieved: 22320, target: 27500, format: "number" },
  { label: "Conversieratio", achieved: 5.9, target: 5.5, format: "percent" },
  { label: "Conversies", achieved: 1317, target: 1550, format: "number" },
  { label: "Omzet (indicatief o.b.v. ROAS)", achieved: 89760, target: 110000, format: "currency" },
  { label: "ROAS", achieved: 5.1, target: 4.5, format: "multiplier" },
];

export const clientHighlights: string[] = [
  "Conversieratio (5,90%) ligt boven doel — vooral gedreven door Search — Merknaam (CTR 7,84%) en Search — Tuinseizoen Barbecues.",
  "ROAS staat op 5,1x, ruim boven het doel van 4,5x.",
  "Retargeting op Meta (Vloeren & Verf) levert binnen dat kanaal de laagste kosten per conversie op.",
];

export const clientAttention: string[] = [
  "Bezoekers lopen nog iets achter op doel: bij 66% van de looptijd is 81% van het bezoekersdoel behaald.",
  "Performance Max — Wonen heeft een duidelijk hogere kostprijs per conversie dan de rest van Google Ads; komende periode scherper sturen op targeting.",
  "Mediabudget is voor 65% besteed bij 66% van de looptijd — pacing ligt op schema.",
];

export type WeeklySpend = {
  week: string;
  "Google Ads": number;
  Meta: number;
};

export const weeklySpend: WeeklySpend[] = [
  { week: "Wk 27", "Google Ads": 1200, Meta: 950 },
  { week: "Wk 28", "Google Ads": 1400, Meta: 1150 },
  { week: "Wk 29", "Google Ads": 1550, Meta: 1300 },
  { week: "Wk 30", "Google Ads": 1650, Meta: 1400 },
  { week: "Wk 31", "Google Ads": 1800, Meta: 1550 },
  { week: "Wk 32", "Google Ads": 1900, Meta: 1750 },
];

export type BudgetPacing = {
  totalMediaspend: number;
  spent: number;
  startDate: string;
  endDate: string;
  today: string;
  daysTotal: number;
  daysElapsed: number;
};

export const paidOverview: BudgetPacing = {
  totalMediaspend: 27000,
  spent: 17600,
  startDate: "1-7-2026",
  endDate: "31-8-2026",
  today: "10-8-2026",
  daysTotal: 62,
  daysElapsed: 41,
};

export type KpiTargetRow = {
  metric: string;
  achieved: number;
  target: number;
  format: "currency" | "number" | "percent" | "decimal";
  lowerIsBetter?: boolean;
  neutral?: boolean;
};

export type ChannelData = {
  label: string;
  budgetPacing: BudgetPacing;
  kpiRows: KpiTargetRow[];
  campaigns: Record<string, string | number>[];
  campaignColumns: { key: string; label: string; align?: "left" | "right"; format?: "currency" | "number" | "percent" }[];
};

export const googleAds: ChannelData = {
  label: "Google Ads",
  budgetPacing: {
    totalMediaspend: 15000,
    spent: 9500,
    startDate: "1-7-2026",
    endDate: "31-8-2026",
    today: "10-8-2026",
    daysTotal: 62,
    daysElapsed: 41,
  },
  kpiRows: [
    { metric: "Budget", achieved: 9500, target: 15000, format: "currency", neutral: true },
    { metric: "CPM", achieved: 15.32, target: 18.0, format: "currency", lowerIsBetter: true },
    { metric: "Impressies", achieved: 620000, target: 900000, format: "number" },
    { metric: "CPC", achieved: 0.76, target: 0.9, format: "currency", lowerIsBetter: true },
    { metric: "Kliks", achieved: 12450, target: 16500, format: "number" },
    { metric: "CTR", achieved: 2.01, target: 1.8, format: "percent" },
    { metric: "Conversies", achieved: 812, target: 950, format: "number" },
    { metric: "CPA", achieved: 11.7, target: 15.0, format: "currency", lowerIsBetter: true },
    { metric: "Conversieratio", achieved: 6.52, target: 5.5, format: "percent" },
  ],
  campaignColumns: [
    { key: "campagne", label: "Campagne" },
    { key: "netwerk", label: "Netwerk" },
    { key: "kosten", label: "Kosten", align: "right", format: "currency" },
    { key: "impressies", label: "Impressies", align: "right", format: "number" },
    { key: "kliks", label: "Kliks", align: "right", format: "number" },
    { key: "ctr", label: "CTR", align: "right", format: "percent" },
    { key: "conversies", label: "Conversies", align: "right", format: "number" },
    { key: "cpa", label: "CPA", align: "right", format: "currency" },
  ],
  campaigns: [
    { campagne: "Search — Tuinseizoen Barbecues", netwerk: "Zoeknetwerk", kosten: 2850, impressies: 148000, kliks: 4120, ctr: 2.78, conversies: 298, cpa: 9.56 },
    { campagne: "Search — Klussen Gereedschap", netwerk: "Zoeknetwerk", kosten: 2100, impressies: 121000, kliks: 3340, ctr: 2.76, conversies: 241, cpa: 8.71 },
    { campagne: "Search — Merknaam", netwerk: "Zoeknetwerk", kosten: 850, impressies: 38000, kliks: 2980, ctr: 7.84, conversies: 189, cpa: 4.5 },
    { campagne: "Performance Max — Wonen", netwerk: "Performance Max", kosten: 2400, impressies: 268000, kliks: 1680, ctr: 0.63, conversies: 62, cpa: 38.71 },
    { campagne: "Search — Dieren & Voeding", netwerk: "Zoeknetwerk", kosten: 1300, impressies: 45000, kliks: 330, ctr: 0.73, conversies: 22, cpa: 59.09 },
  ],
};

export const meta: ChannelData = {
  label: "Meta",
  budgetPacing: {
    totalMediaspend: 12000,
    spent: 8100,
    startDate: "1-7-2026",
    endDate: "31-8-2026",
    today: "10-8-2026",
    daysTotal: 62,
    daysElapsed: 41,
  },
  kpiRows: [
    { metric: "Budget", achieved: 8100, target: 12000, format: "currency", neutral: true },
    { metric: "CPM", achieved: 15.0, target: 16.5, format: "currency", lowerIsBetter: true },
    { metric: "Impressies", achieved: 540000, target: 750000, format: "number" },
    { metric: "Bereik", achieved: 210000, target: 280000, format: "number" },
    { metric: "Frequentie", achieved: 2.6, target: 3.0, format: "decimal", neutral: true },
    { metric: "CPC", achieved: 0.82, target: 1.0, format: "currency", lowerIsBetter: true },
    { metric: "Kliks", achieved: 9870, target: 12000, format: "number" },
    { metric: "CTR", achieved: 1.83, target: 1.6, format: "percent" },
    { metric: "Conversies", achieved: 505, target: 600, format: "number" },
    { metric: "CPA", achieved: 16.04, target: 20.0, format: "currency", lowerIsBetter: true },
    { metric: "Conversieratio", achieved: 5.12, target: 5.0, format: "percent" },
  ],
  campaignColumns: [
    { key: "campagne", label: "Campagne" },
    { key: "doelstelling", label: "Doelstelling" },
    { key: "spend", label: "Amount spent", align: "right", format: "currency" },
    { key: "impressies", label: "Impressions", align: "right", format: "number" },
    { key: "bereik", label: "Reach", align: "right", format: "number" },
    { key: "kliks", label: "Kliks", align: "right", format: "number" },
    { key: "ctr", label: "CTR", align: "right", format: "percent" },
    { key: "conversies", label: "Conversies", align: "right", format: "number" },
  ],
  campaigns: [
    { campagne: "Prospecting — Tuinmeubelen", doelstelling: "Verkeer", spend: 2200, impressies: 165000, bereik: 72000, kliks: 2850, ctr: 1.73, conversies: 132 },
    { campagne: "Retargeting — Vloeren & Verf", doelstelling: "Conversies", spend: 1450, impressies: 68000, bereik: 24000, kliks: 2210, ctr: 3.25, conversies: 178 },
    { campagne: "Awareness — Zomeractie Dieren", doelstelling: "Bereik", spend: 1600, impressies: 172000, bereik: 78000, kliks: 1890, ctr: 1.1, conversies: 61 },
    { campagne: "Conversie — Outdoor Cooking", doelstelling: "Conversies", spend: 1550, impressies: 78000, bereik: 22000, kliks: 1640, ctr: 2.1, conversies: 94 },
    { campagne: "Retargeting — Klussen Gereedschap", doelstelling: "Conversies", spend: 1300, impressies: 57000, bereik: 14000, kliks: 1280, ctr: 2.25, conversies: 40 },
  ],
};
