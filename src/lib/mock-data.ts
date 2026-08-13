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

export type MonitorPeriod = "week" | "maand";

export const monitorHeader = {
  eyebrow: "Campagnedashboard",
  title: "Van Cranenbroek – Performance",
};

export const monitorPeriodMeta: Record<
  MonitorPeriod,
  { subtitlePeriod: string; buttonLabel: string; note: string; deltaSuffix: string; alert: string }
> = {
  week: {
    subtitlePeriod: "Week van 10 aug – 16 aug 2026",
    buttonLabel: "Week van 10 aug – 16 aug 2026",
    note: "laatste week is mogelijk incompleet",
    deltaSuffix: "vorige week",
    alert:
      "Meta wordt alleen op CPA gerapporteerd, geen ROAS – de drie funnels (Conversie/Add to cart/Verkeer) zijn sowieso niet vergelijkbaar op omzet. Instagram en Facebook zijn per campagne samengevoegd op weekniveau; later uit te splitsen per platform. Cijfers hieronder zijn week-op-week.",
  },
  maand: {
    subtitlePeriod: "Augustus 2026",
    buttonLabel: "Augustus 2026 (t/m nu – incompleet)",
    note: "deze maand loopt nog, cijfers zijn incompleet",
    deltaSuffix: "vorige maand",
    alert:
      "Google levert zelf geen dagcijfers – de maandtotalen zijn opgebouwd door elke wekelijkse Google-rapportage toe te wijzen aan de maand waarin de meeste dagen van die week vallen (max. ±2 dagen ruis rond een maandgrens). Meta's maandcijfers zijn wel exact per kalenderdag berekend. Augustus loopt nog (t/m dit dashboard bijgewerkt is) – vergelijk die maand met terughoudendheid tegenover de volledige maand juli.",
  },
};

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

export const monitorGoogleAds: Record<MonitorPeriod, { accountStats: Stat[]; subChannels: SubChannel[] }> = {
  week: {
    accountStats: [
      { value: "€2.599,77", label: "Kosten" },
      { value: "152,4", label: "Conversies", deltaPct: -57, deltaTone: "bad" },
      { value: "€4.275,60", label: "Conv.waarde", deltaPct: -62, deltaTone: "bad" },
      { value: "1,64x", label: "ROAS (netto)", deltaPct: -38, deltaTone: "bad" },
    ],
    subChannels: [
      {
        name: "Shopping",
        kosten: 2341.57,
        conversies: 134.8,
        convWaarde: 3545.19,
        roas: 1.51,
        kostenPerConv: 17.38,
        campaigns: [
          { campagne: "VC | Shopping | NL | Losse categorieën", kosten: 1650.0, conversies: 118.0, convWaarde: 2650.0 },
          { campagne: "VC | Shopping | NL - Regulier", kosten: 360.0, conversies: 10.5, convWaarde: 550.0 },
          { campagne: "VC | Shopping | BE/NL", kosten: 130.0, conversies: 3.8, convWaarde: 200.0 },
          { campagne: "VC | Shopping | NL | Brand", kosten: 125.0, conversies: 1.8, convWaarde: 120.0 },
          { campagne: "VC | Shopping | NL | Bestsellers", kosten: 76.57, conversies: 0.7, convWaarde: 25.19 },
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
          { campagne: "VC | Search | Prospecting | NL", kosten: 95.0, conversies: 6.0, convWaarde: 220.0 },
          { campagne: "VC | Search | Brand | NL", kosten: 50.57, conversies: 5.2, convWaarde: 250.0 },
          { campagne: "VC | Search | Brand | BE/NL", kosten: 25.0, conversies: 1.5, convWaarde: 96.0 },
        ],
      },
      {
        name: "Performance Max",
        kosten: 87.63,
        conversies: 5.0,
        convWaarde: 164.4,
        roas: 1.88,
        kostenPerConv: 17.7,
        campaigns: [{ campagne: "VC | Pmax | NL | Alle producten", kosten: 87.63, conversies: 5.0, convWaarde: 164.4 }],
      },
    ],
  },
  maand: {
    accountStats: [
      { value: "€6.848,41", label: "Kosten" },
      { value: "511,0", label: "Conversies", deltaPct: -73, deltaTone: "bad" },
      { value: "€15.586,22", label: "Conv.waarde", deltaPct: -74, deltaTone: "bad" },
      { value: "2,28x", label: "ROAS (netto)", deltaPct: -16, deltaTone: "bad" },
    ],
    subChannels: [
      {
        name: "Shopping",
        kosten: 6110.54,
        conversies: 437.1,
        convWaarde: 12929.4,
        roas: 2.12,
        kostenPerConv: 13.98,
        campaigns: [
          { campagne: "VC | Shopping | NL | Losse categorieën", kosten: 4387.81, conversies: 312.1, convWaarde: 8968.55 },
          { campagne: "VC | Shopping | NL - Regulier", kosten: 956.43, conversies: 74.7, convWaarde: 2106.15 },
          { campagne: "VC | Shopping | BE/NL", kosten: 351.63, conversies: 25.0, convWaarde: 714.87 },
          { campagne: "VC | Shopping | NL | Brand", kosten: 331.45, conversies: 21.3, convWaarde: 976.9 },
          { campagne: "VC | Shopping | NL | Bestsellers", kosten: 83.22, conversies: 4.0, convWaarde: 162.93 },
        ],
      },
      {
        name: "Zoeken",
        kosten: 477.32,
        conversies: 63.0,
        convWaarde: 2238.81,
        roas: 4.69,
        kostenPerConv: 7.58,
        campaigns: [
          { campagne: "VC | Search | Prospecting | NL", kosten: 320.33, conversies: 27.0, convWaarde: 772.09 },
          { campagne: "VC | Search | Brand | NL", kosten: 107.2, conversies: 25.2, convWaarde: 975.25 },
          { campagne: "VC | Search | Brand | BE/NL", kosten: 49.78, conversies: 10.8, convWaarde: 491.47 },
        ],
      },
      {
        name: "Performance Max",
        kosten: 260.56,
        conversies: 11.0,
        convWaarde: 418.01,
        roas: 1.6,
        kostenPerConv: 23.8,
        campaigns: [{ campagne: "VC | Pmax | NL | Alle producten", kosten: 260.56, conversies: 11.0, convWaarde: 418.01 }],
      },
    ],
  },
};

export type BrandSplit = {
  name: string;
  kosten: number;
  conversies: number;
  convWaarde: number;
  roas: number;
  kostenPerConv: number;
  deltaPct: number;
  deltaTone: "good" | "bad";
};

export const monitorGoogleAdsBrandSplit: Record<MonitorPeriod, BrandSplit[]> = {
  week: [
    { name: "Brand", kosten: 193.77, conversies: 11.8, convWaarde: 488.11, roas: 2.52, kostenPerConv: 16.37, deltaPct: 152, deltaTone: "bad" },
    { name: "Non-brand", kosten: 2405.99, conversies: 140.6, convWaarde: 3787.48, roas: 1.57, kostenPerConv: 17.11, deltaPct: 36, deltaTone: "bad" },
  ],
  maand: [
    { name: "Brand", kosten: 488.43, conversies: 57.3, convWaarde: 2443.62, roas: 5.0, kostenPerConv: 8.53, deltaPct: 40, deltaTone: "bad" },
    { name: "Non-brand", kosten: 6359.98, conversies: 453.7, convWaarde: 13142.6, roas: 2.07, kostenPerConv: 14.02, deltaPct: 18, deltaTone: "bad" },
  ],
};

export type WeekPoint = Record<string, number | string>;

export const monitorGoogleAdsTrend: WeekPoint[] = [
  { week: "29 jun", kosten: 3800, conversies: 320, convWaarde: 12200, roas: 3.2, account: 13.5, brand: 6.2, nonBrand: 13.8 },
  { week: "6 jul", kosten: 4600, conversies: 430, convWaarde: 14500, roas: 3.15, account: 11.5, brand: 7.2, nonBrand: 11.6 },
  { week: "13 jul", kosten: 5900, conversies: 445, convWaarde: 14000, roas: 2.3, account: 15.2, brand: 5.6, nonBrand: 15.3 },
  { week: "20 jul", kosten: 4600, conversies: 400, convWaarde: 11500, roas: 2.3, account: 12.0, brand: 9.0, nonBrand: 11.7 },
  { week: "27 jul", kosten: 3500, conversies: 310, convWaarde: 9000, roas: 2.7, account: 11.0, brand: 11.0, nonBrand: 11.0 },
  { week: "3 aug", kosten: 4300, conversies: 360, convWaarde: 11500, roas: 2.7, account: 11.2, brand: 6.3, nonBrand: 11.2 },
  { week: "10 aug", kosten: 2599.77, conversies: 152.4, convWaarde: 4275.6, roas: 1.64, account: 17.06, brand: 16.37, nonBrand: 17.11 },
];

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
  ratioLabel: string;
  stats: Stat[];
  campaigns: MonitorFunnelCampaign[];
};

// Trend reeksen zijn onafhankelijk van de week/maand-keuze (zie notitie bij de trendgrafieken).
export const monitorMetaTrend: Record<string, WeekPoint[]> = {
  Conversie: [
    { week: "29 jun", kosten: 1400, volume: 65 },
    { week: "6 jul", kosten: 2000, volume: 118 },
    { week: "13 jul", kosten: 1950, volume: 128 },
    { week: "20 jul", kosten: 1900, volume: 122 },
    { week: "27 jul", kosten: 1950, volume: 96 },
    { week: "3 aug", kosten: 2010.2, volume: 121.3 },
    { week: "10 aug", kosten: 844.27, volume: 57 },
  ],
  "Add to cart": [
    { week: "29 jun", kosten: 300, volume: 140 },
    { week: "6 jul", kosten: 460, volume: 290 },
    { week: "13 jul", kosten: 480, volume: 300 },
    { week: "20 jul", kosten: 470, volume: 295 },
    { week: "27 jul", kosten: 460, volume: 270 },
    { week: "3 aug", kosten: 492.0, volume: 302.3 },
    { week: "10 aug", kosten: 201.73, volume: 130 },
  ],
  Verkeer: [
    { week: "29 jun", kosten: 150, volume: 1500 },
    { week: "6 jul", kosten: 205, volume: 3000 },
    { week: "13 jul", kosten: 210, volume: 3100 },
    { week: "20 jul", kosten: 205, volume: 3000 },
    { week: "27 jul", kosten: 205, volume: 3050 },
    { week: "3 aug", kosten: 218.9, volume: 3330.8 },
    { week: "10 aug", kosten: 87.57, volume: 1299 },
  ],
};

export const monitorMeta: Record<MonitorPeriod, { subtitle: string; funnels: MonitorFunnel[] }> = {
  week: {
    subtitle: "3 losse doelstellingen – niet optelbaar",
    funnels: [
      {
        badge: "Conversie",
        badgeColor: "accent",
        title: "Echte conversies in de webshop (Meta-attributie)",
        volumeLabel: "Conversies",
        ratioLabel: "conv.",
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
        ratioLabel: "ATC",
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
        ratioLabel: "weergave",
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
    ],
  },
  maand: {
    subtitle: "3 losse doelstellingen – niet optelbaar",
    funnels: [
      {
        badge: "Conversie",
        badgeColor: "accent",
        title: "Echte conversies in de webshop (Meta-attributie)",
        volumeLabel: "Conversies",
        ratioLabel: "conv.",
        stats: [
          { value: "€3.245,80", label: "Kosten", deltaPct: -42, deltaTone: "bad" },
          { value: "218", label: "Conversies", deltaPct: -38, deltaTone: "bad" },
          { value: "€14,89", label: "Kosten/conv.", deltaPct: -6, deltaTone: "good" },
        ],
        campaigns: [
          { campagne: "Retargeting — Vloeren & Verf", kosten: 1450.0, volume: 98 },
          { campagne: "Conversie — Tuinmeubelen", kosten: 1795.8, volume: 120 },
        ],
      },
      {
        badge: "Add to cart",
        badgeColor: "amber",
        title: "Soft conversie – toegevoegd aan winkelwagen",
        volumeLabel: "Add to carts",
        ratioLabel: "ATC",
        stats: [
          { value: "€892,40", label: "Kosten", deltaPct: -39, deltaTone: "bad" },
          { value: "512", label: "Add to carts", deltaPct: -35, deltaTone: "bad" },
          { value: "€1,74", label: "Kosten/ATC", deltaPct: -6, deltaTone: "good" },
        ],
        campaigns: [
          { campagne: "ATC — Klussen Gereedschap", kosten: 410.0, volume: 235 },
          { campagne: "ATC — Dieren & Voeding", kosten: 482.4, volume: 277 },
        ],
      },
      {
        badge: "Verkeer",
        badgeColor: "blue",
        title: "Landingspagina-weergaven",
        volumeLabel: "LP-weergaven",
        ratioLabel: "weergave",
        stats: [
          { value: "€412,90", label: "Kosten", deltaPct: -41, deltaTone: "bad" },
          { value: "5.180", label: "LP-weergaven", deltaPct: -39, deltaTone: "bad" },
          { value: "€0,08", label: "Kosten/weergave", deltaPct: 3, deltaTone: "bad" },
        ],
        campaigns: [
          { campagne: "Prospecting — Outdoor Cooking", kosten: 190.0, volume: 2380 },
          { campagne: "Prospecting — Wonen Algemeen", kosten: 222.9, volume: 2800 },
        ],
      },
    ],
  },
};
