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

export const clientChannelColumns = [
  { key: "kanaal", label: "Kanaal" },
  { key: "spend", label: "Spend", align: "right" as const, format: "currency" as const },
  { key: "orders", label: "Orders", align: "right" as const, format: "number" as const },
  { key: "cpo", label: "CPO", align: "right" as const, format: "currency" as const },
];

export const clientChannelBreakdown: Record<string, string | number>[] = [
  { kanaal: "Google Ads", spend: 9500, orders: 812, cpo: 11.7 },
  { kanaal: "Meta", spend: 8100, orders: 505, cpo: 16.04 },
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

export type Stat = {
  value: string;
  label: string;
  deltaPct?: number;
  deltaTone?: "good" | "bad";
};

export const monitorHeader = {
  eyebrow: "Campagnedashboard",
  title: "Van Cranenbroek – Performance",
  periodLabel: "Week van 10 aug – 16 aug 2026",
  note: "laatste week is mogelijk incompleet",
};

export const monitorAlert =
  "Meta wordt alleen op CPA gerapporteerd, geen ROAS – de drie funnels (Conversie/Add to cart/Verkeer) zijn sowieso niet vergelijkbaar op omzet. Instagram en Facebook zijn per campagne samengevoegd op weekniveau; later uit te splitsen per platform. Cijfers hieronder zijn week-op-week.";

export type MonitorCampaign = {
  campagne: string;
  kosten: number;
  conversies: number;
  convWaarde: number;
};

export type SubChannel = {
  name: string;
  kosten: number;
  conversies: number;
  convWaarde: number;
  roas: number;
  kostenPerConv: number;
  campaigns: MonitorCampaign[];
};

export const monitorGoogleAds = {
  accountStats: [
    { value: "€2.599,77", label: "Kosten" },
    { value: "152,4", label: "Conversies", deltaPct: -57, deltaTone: "bad" },
    { value: "€4.275,60", label: "Conv.waarde", deltaPct: -62, deltaTone: "bad" },
    { value: "1,64x", label: "ROAS (netto)", deltaPct: -38, deltaTone: "bad" },
  ] as Stat[],
  subChannels: [
    {
      name: "Shopping",
      kosten: 2341.57,
      conversies: 134.8,
      convWaarde: 3545.19,
      roas: 1.51,
      kostenPerConv: 17.38,
      campaigns: [
        { campagne: "Shopping — Tuin & Buiten", kosten: 1450.0, conversies: 84.2, convWaarde: 2210.5 },
        { campagne: "Shopping — Wonen", kosten: 891.57, conversies: 50.6, convWaarde: 1334.69 },
      ],
    },
    {
      name: "Zoeken",
      kosten: 170.57,
      conversies: 12.7,
      convWaarde: 566.0,
      roas: 3.32,
      kostenPerConv: 13.4,
      campaigns: [
        { campagne: "Zoeken — Merknaam", kosten: 45.2, conversies: 6.1, convWaarde: 310.0 },
        { campagne: "Zoeken — Generiek", kosten: 125.37, conversies: 6.6, convWaarde: 256.0 },
      ],
    },
    {
      name: "Performance Max",
      kosten: 87.63,
      conversies: 5.0,
      convWaarde: 164.4,
      roas: 1.88,
      kostenPerConv: 17.7,
      campaigns: [{ campagne: "PMax — Algemeen", kosten: 87.63, conversies: 5.0, convWaarde: 164.4 }],
    },
  ] as SubChannel[],
};

export type MonitorFunnelCampaign = {
  campagne: string;
  kosten: number;
  volume: number;
};

export type MonitorFunnel = {
  badge: string;
  badgeColor: "accent" | "amber" | "blue";
  title: string;
  volumeLabel: string;
  stats: Stat[];
  campaigns: MonitorFunnelCampaign[];
};

export const monitorMeta = {
  subtitle: "3 losse doelstellingen – niet optelbaar",
  funnels: [
    {
      badge: "Conversie",
      badgeColor: "accent",
      title: "Echte conversies in de webshop (Meta-attributie)",
      volumeLabel: "Conversies",
      stats: [
        { value: "€844,27", label: "Kosten", deltaPct: -58, deltaTone: "bad" },
        { value: "57", label: "Conversies", deltaPct: -53, deltaTone: "bad" },
        { value: "€14,81", label: "Kosten/conv.", deltaPct: -11, deltaTone: "good" },
      ],
      campaigns: [
        { campagne: "Retargeting — Vloeren & Verf", kosten: 380.0, volume: 28 },
        { campagne: "Conversie — Tuinmeubelen", kosten: 464.27, volume: 29 },
      ],
    },
    {
      badge: "Add to cart",
      badgeColor: "amber",
      title: "Soft conversie – toegevoegd aan winkelwagen",
      volumeLabel: "Add to carts",
      stats: [
        { value: "€201,73", label: "Kosten", deltaPct: -59, deltaTone: "bad" },
        { value: "130", label: "Add to carts", deltaPct: -57, deltaTone: "bad" },
        { value: "€1,55", label: "Kosten/ATC", deltaPct: -5, deltaTone: "good" },
      ],
      campaigns: [
        { campagne: "ATC — Klussen Gereedschap", kosten: 96.5, volume: 62 },
        { campagne: "ATC — Dieren & Voeding", kosten: 105.23, volume: 68 },
      ],
    },
    {
      badge: "Verkeer",
      badgeColor: "blue",
      title: "Landingspagina-weergaven",
      volumeLabel: "LP-weergaven",
      stats: [
        { value: "€87,57", label: "Kosten", deltaPct: -60, deltaTone: "bad" },
        { value: "1.299", label: "LP-weergaven", deltaPct: -61, deltaTone: "bad" },
        { value: "€0,07", label: "Kosten/weergave", deltaPct: 4, deltaTone: "bad" },
      ],
      campaigns: [
        { campagne: "Prospecting — Outdoor Cooking", kosten: 40.0, volume: 610 },
        { campagne: "Prospecting — Wonen Algemeen", kosten: 47.57, volume: 689 },
      ],
    },
  ] as MonitorFunnel[],
};
