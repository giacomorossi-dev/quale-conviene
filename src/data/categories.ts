import type { CategoryDefinition } from "#/lib/pricing.ts";

export const CATEGORIES: CategoryDefinition[] = [
  // ----- UNIT context -----
  {
    slug: "carta-igienica",
    name: "Carta igienica",
    description:
      "Confronta confezioni di carta igienica per scoprire quale costa meno per strappo. Inserisci numero rotoli e strappi per rotolo, il calcolo è istantaneo.",
    intro:
      "Le confezioni di carta igienica usano formati molto diversi (rotoli singoli, maxi-rotoli, megapack), e il prezzo al rotolo non basta a dire quale conviene davvero. Questa utility riduce tutto al prezzo per strappo, l'unica unità di misura comparabile fra prodotti.",
    context: "unit",
    baseLabel: "strappo",
    baseLabelPlural: "strappi",
    levels: [
      {
        id: "box",
        label: "confezione",
        pluralLabel: "confezioni",
        optional: true,
        default: 0,
      },
      {
        id: "roll",
        label: "rotolo",
        pluralLabel: "rotoli",
        default: 4,
      },
    ],
    sampleEntries: [
      {
        name: "Maxipack 4 rotoli",
        price: 3.99,
        counts: { box: 0, roll: 4 },
        measureValue: 200,
        measureUnitId: "count",
      },
      {
        name: "Pacco 12 rotoli",
        price: 9.49,
        counts: { box: 0, roll: 12 },
        measureValue: 180,
        measureUnitId: "count",
      },
      {
        name: "Mega 6 rotoli",
        price: 5.49,
        counts: { box: 0, roll: 6 },
        measureValue: 250,
        measureUnitId: "count",
      },
    ],
  },
  {
    slug: "tabs-lavastoviglie",
    name: "Tabs lavastoviglie",
    description:
      "Confronta confezioni di tabs / cialde per lavastoviglie al prezzo per singolo tab.",
    intro:
      "Le tabs per lavastoviglie sono vendute in formati molto diversi (scatole singole da 30, multipack, mega-confezioni da 100+). Questa utility normalizza tutto al prezzo per tab così da confrontare formati eterogenei in un colpo d'occhio.",
    context: "unit",
    baseLabel: "tab",
    baseLabelPlural: "tab",
    levels: [
      {
        id: "box",
        label: "confezione",
        pluralLabel: "confezioni",
        optional: true,
        default: 0,
      },
      {
        id: "pack",
        label: "scatola",
        pluralLabel: "scatole",
        default: 1,
      },
    ],
    sampleEntries: [
      {
        name: "Scatola 30 tab",
        price: 7.99,
        counts: { box: 0, pack: 1 },
        measureValue: 30,
        measureUnitId: "count",
      },
      {
        name: "Maxipack 60 tab",
        price: 13.49,
        counts: { box: 0, pack: 1 },
        measureValue: 60,
        measureUnitId: "count",
      },
      {
        name: "Megapack 3 × 40 tab",
        price: 24.99,
        counts: { box: 1, pack: 3 },
        measureValue: 40,
        measureUnitId: "count",
      },
    ],
  },

  // ----- LIQUID context -----
  {
    slug: "acqua",
    name: "Acqua e bevande",
    description:
      "Confronta bottiglie, lattine e fardelli al prezzo al litro. Funziona anche fra formati diversi: 6 lattine da 33 cl vs 2 bottiglie da 1,5 L.",
    intro:
      "I supermercati alternano formati e promozioni continuamente. Inserisci la confezione (anche più bottiglie/lattine in un fardello), la quantità di ciascuna e il prezzo: il sistema normalizza tutto al prezzo per litro così da confrontare fardelli, multipack e bottiglioni nello stesso ranking.",
    context: "liquid",
    levels: [
      {
        id: "box",
        label: "fardello",
        pluralLabel: "fardelli",
        optional: true,
        default: 0,
      },
      {
        id: "bottle",
        label: "bottiglia/lattina",
        pluralLabel: "bottiglie/lattine",
        default: 6,
      },
    ],
    sampleEntries: [
      {
        name: "Fardello 6 × 1,5 L",
        price: 4.49,
        counts: { box: 1, bottle: 6 },
        measureValue: 1.5,
        measureUnitId: "L",
      },
      {
        name: "Fardello 6 × 33 cl (lattine)",
        price: 3.49,
        counts: { box: 1, bottle: 6 },
        measureValue: 33,
        measureUnitId: "cl",
      },
      {
        name: "Bottiglione 2 L",
        price: 0.79,
        counts: { box: 0, bottle: 1 },
        measureValue: 2,
        measureUnitId: "L",
      },
    ],
  },

  // ----- WEIGHT context -----
  {
    slug: "pasta",
    name: "Pasta, riso e farina",
    description:
      "Confronta pacchi di pasta, riso, farina e legumi al prezzo al kg, indipendentemente dalla grammatura.",
    intro:
      "Una confezione da 500 g a 1,29 € costa meno di una da 1 kg a 2,49 € o di un cartone da 6 × 500 g a 6,99 €? Il prezzo al chilo lo dice in un attimo. Inserisci confezione, peso e prezzo, il sistema normalizza tutto al kg.",
    context: "weight",
    levels: [
      {
        id: "box",
        label: "cartone",
        pluralLabel: "cartoni",
        optional: true,
        default: 0,
      },
      {
        id: "pack",
        label: "confezione",
        pluralLabel: "confezioni",
        default: 1,
      },
    ],
    sampleEntries: [
      {
        name: "Confezione 500 g",
        price: 1.29,
        counts: { box: 0, pack: 1 },
        measureValue: 500,
        measureUnitId: "g",
      },
      {
        name: "Cartone 6 × 500 g",
        price: 6.99,
        counts: { box: 1, pack: 6 },
        measureValue: 500,
        measureUnitId: "g",
      },
      {
        name: "Confezione 1 kg",
        price: 2.49,
        counts: { box: 0, pack: 1 },
        measureValue: 1,
        measureUnitId: "kg",
      },
    ],
  },
];

export function getCategoryBySlug(
  slug: string,
): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
