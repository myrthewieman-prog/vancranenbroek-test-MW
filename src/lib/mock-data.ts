export type Kpi = {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
};

export const kpis: Kpi[] = [
  { label: "Impressies", value: "2.847.300", delta: 8.2, deltaLabel: "vs. vorige periode" },
  { label: "Kliks", value: "64.912", delta: 5.4, deltaLabel: "vs. vorige periode" },
  { label: "CTR", value: "2,28%", delta: -0.3, deltaLabel: "vs. vorige periode" },
  { label: "Conversies", value: "3.184", delta: 12.6, deltaLabel: "vs. vorige periode" },
  { label: "Advertentiebudget", value: "€ 48.250", delta: 2.1, deltaLabel: "vs. vorige periode" },
  { label: "ROAS", value: "4,6x", delta: -1.8, deltaLabel: "vs. vorige periode" },
];

export type WeeklyChannelPerformance = {
  week: string;
  Social: number;
  Search: number;
  Display: number;
};

export const weeklyClicks: WeeklyChannelPerformance[] = [
  { week: "Wk 26", Social: 5200, Search: 6100, Display: 2400 },
  { week: "Wk 27", Social: 5600, Search: 6300, Display: 2550 },
  { week: "Wk 28", Social: 6100, Search: 6050, Display: 2700 },
  { week: "Wk 29", Social: 5900, Search: 6800, Display: 2650 },
  { week: "Wk 30", Social: 6700, Search: 7100, Display: 2900 },
  { week: "Wk 31", Social: 7200, Search: 7400, Display: 3050 },
  { week: "Wk 32", Social: 7600, Search: 7250, Display: 3200 },
  { week: "Wk 33", Social: 8100, Search: 7900, Display: 3400 },
];

export type Campaign = {
  campagne: string;
  kanaal: "Social" | "Search" | "Display" | "Retail media";
  status: "Actief" | "Gepauzeerd" | "Gepland";
  budget: number;
  impressies: number;
  kliks: number;
  ctr: number;
  conversies: number;
  roas: number;
};

export const campaigns: Campaign[] = [
  { campagne: "Tuinseizoen — Barbecues", kanaal: "Search", status: "Actief", budget: 9500, impressies: 412300, kliks: 11250, ctr: 2.73, conversies: 612, roas: 5.8 },
  { campagne: "Wonen — Vloeren & Verf", kanaal: "Social", status: "Actief", budget: 7200, impressies: 388900, kliks: 8340, ctr: 2.14, conversies: 401, roas: 4.1 },
  { campagne: "Klussen — Gereedschap", kanaal: "Search", status: "Actief", budget: 6800, impressies: 301500, kliks: 9120, ctr: 3.02, conversies: 587, roas: 6.4 },
  { campagne: "Dieren — Zomeractie", kanaal: "Display", status: "Actief", budget: 4100, impressies: 275400, kliks: 4980, ctr: 1.81, conversies: 214, roas: 3.2 },
  { campagne: "Tuinmeubelen Retargeting", kanaal: "Social", status: "Actief", budget: 5300, impressies: 198700, kliks: 6210, ctr: 3.13, conversies: 388, roas: 5.1 },
  { campagne: "Outdoor Cooking Prospecting", kanaal: "Display", status: "Gepauzeerd", budget: 3600, impressies: 244100, kliks: 3870, ctr: 1.59, conversies: 126, roas: 2.4 },
  { campagne: "Vaktechniek — B2B", kanaal: "Retail media", status: "Actief", budget: 5950, impressies: 156800, kliks: 4290, ctr: 2.74, conversies: 341, roas: 4.9 },
  { campagne: "Najaarscollectie — Teaser", kanaal: "Social", status: "Gepland", budget: 5800, impressies: 0, kliks: 0, ctr: 0, conversies: 0, roas: 0 },
];
