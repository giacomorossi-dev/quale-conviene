import type { CategoryDefinition } from "#/lib/pricing.ts";

/**
 * All categories sorted alphabetically by slug. Each entry follows the
 * pattern in `pricing.ts`: declare a `context` (math) and inject category-
 * specific labels via `levels`, `baseLabel`, etc.
 *
 * `keywords` powers the home-page search: include synonyms, related
 * products and common brand names so users searching for "panna" or
 * "powerade" land on the right utility.
 */
export const CATEGORIES: CategoryDefinition[] = [
  {
    slug: "acqua",
    name: "Acqua e bevande",
    description:
      "Confronta bottiglie, lattine e fardelli al prezzo al litro. Funziona anche fra formati diversi: 6 lattine da 33 cl vs 2 bottiglie da 1,5 L.",
    intro:
      "I supermercati alternano formati e promozioni continuamente. Inserisci la confezione (anche più bottiglie/lattine in un fardello), la quantità di ciascuna e il prezzo: il sistema normalizza tutto al prezzo per litro.",
    context: "liquid",
    keywords: ["acqua", "acqua minerale", "acqua naturale", "acqua frizzante", "acqua effervescente", "minerale"],
    levels: [
      { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
      { id: "bottle", label: "bottiglia/lattina", pluralLabel: "bottiglie/lattine", default: 6 },
    ],
    sampleEntries: [
      { name: "Fardello 6 × 1,5 L", price: 4.49, counts: { box: 1, bottle: 6 }, measureValue: 1.5, measureUnitId: "L" },
      { name: "Fardello 6 × 33 cl (lattine)", price: 3.49, counts: { box: 1, bottle: 6 }, measureValue: 33, measureUnitId: "cl" },
      { name: "Bottiglione 2 L", price: 0.79, counts: { box: 0, bottle: 1 }, measureValue: 2, measureUnitId: "L" },
    ],
  },

  {
    slug: "bevande-sportive",
    name: "Bevande sportive e isotoniche",
    description:
      "Confronta bottigliette e fardelli di bevande sportive (Powerade, Gatorade…) al prezzo al litro.",
    intro:
      "Le bevande sportive arrivano in formati molto diversi (singoli 500 ml, fardelli da 6, formato gym 1 L). Riduci tutto a €/L per scegliere il formato che paga meno per la stessa idratazione.",
    context: "liquid",
    keywords: ["bevanda sportiva", "isotonica", "powerade", "gatorade", "energade", "sport drink", "elettroliti"],
    levels: [
      { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
      { id: "bottle", label: "bottiglia", pluralLabel: "bottiglie", default: 1 },
    ],
    sampleEntries: [
      { name: "Bottiglietta 500 ml", price: 1.49, counts: { box: 0, bottle: 1 }, measureValue: 500, measureUnitId: "ml" },
      { name: "Bottiglia 1 L", price: 2.49, counts: { box: 0, bottle: 1 }, measureValue: 1, measureUnitId: "L" },
      { name: "Multipack 6 × 500 ml", price: 7.49, counts: { box: 1, bottle: 6 }, measureValue: 500, measureUnitId: "ml" },
    ],
  },

  {
    slug: "bibite",
    name: "Bibite gassate ed energy drink",
    description:
      "Cola, aranciata, energy drink: confronta lattine, bottiglie e fardelli al prezzo al litro.",
    intro:
      "Bottiglie da 1,5 L, fardelli di lattine da 33 cl, mini-bottiglie da 45 cl: il prezzo in scaffale non si confronta a colpo d'occhio. Inserisci formato e prezzo, il sistema normalizza al litro.",
    context: "liquid",
    keywords: ["coca cola", "coca-cola", "pepsi", "aranciata", "fanta", "sprite", "chinotto", "ginger", "tè freddo", "the freddo", "tea", "energy drink", "redbull", "red bull", "monster", "estathè", "lipton"],
    levels: [
      { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
      { id: "bottle", label: "bottiglia/lattina", pluralLabel: "bottiglie/lattine", default: 1 },
    ],
    sampleEntries: [
      { name: "Bottiglia 1,5 L", price: 1.69, counts: { box: 0, bottle: 1 }, measureValue: 1.5, measureUnitId: "L" },
      { name: "Lattina 33 cl", price: 0.89, counts: { box: 0, bottle: 1 }, measureValue: 33, measureUnitId: "cl" },
      { name: "Fardello 6 × 33 cl", price: 4.49, counts: { box: 1, bottle: 6 }, measureValue: 33, measureUnitId: "cl" },
    ],
  },

  {
    slug: "capsule-caffe",
    name: "Capsule caffè",
    description:
      "Confronta confezioni di capsule caffè al prezzo per singola capsula. Confronta sempre capsule dello stesso tipo di macchina.",
    intro:
      "Le capsule sono vendute in astucci da 10, 50, 100 e oltre, con sconti sui multipack non sempre evidenti. Inserisci numero capsule e prezzo: il sistema mostra €/capsula così sai quale pacco ti dà davvero il miglior prezzo. Confronta sempre capsule dello stesso tipo di macchina (Nespresso, Dolce Gusto, A Modo Mio…).",
    context: "unit",
    baseLabel: "capsula",
    baseLabelPlural: "capsule",
    keywords: ["caffè", "caffe", "capsule", "capsule caffè", "cialde", "nespresso", "dolce gusto", "lavazza", "a modo mio", "lavazza espresso point"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "pack", label: "astuccio", pluralLabel: "astucci", default: 1 },
    ],
    sampleEntries: [
      { name: "Astuccio 10 capsule", price: 4.50, counts: { box: 0, pack: 1 }, measureValue: 10, measureUnitId: "count" },
      { name: "Astuccio 50 capsule", price: 18.99, counts: { box: 0, pack: 1 }, measureValue: 50, measureUnitId: "count" },
      { name: "Megapack 100 capsule", price: 34.99, counts: { box: 0, pack: 1 }, measureValue: 100, measureUnitId: "count" },
      { name: "Multipack 3 × 50", price: 52.99, counts: { box: 1, pack: 3 }, measureValue: 50, measureUnitId: "count" },
    ],
  },

  {
    slug: "carta-igienica",
    name: "Carta igienica",
    description:
      "Confronta confezioni di carta igienica per scoprire quale costa meno per strappo. Inserisci numero rotoli e strappi per rotolo.",
    intro:
      "Le confezioni di carta igienica usano formati molto diversi (rotoli singoli, maxi-rotoli, megapack), e il prezzo al rotolo non basta a dire quale conviene davvero. Questa utility riduce tutto al prezzo per strappo, l'unica unità di misura comparabile fra prodotti.",
    context: "unit",
    baseLabel: "strappo",
    baseLabelPlural: "strappi",
    keywords: ["carta igienica", "carta wc", "carta igienic", "rotolone", "rotoli wc", "veline wc", "papercart"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "roll", label: "rotolo", pluralLabel: "rotoli", default: 4 },
    ],
    sampleEntries: [
      { name: "Maxipack 4 rotoli", price: 3.99, counts: { box: 0, roll: 4 }, measureValue: 200, measureUnitId: "count" },
      { name: "Pacco 12 rotoli", price: 9.49, counts: { box: 0, roll: 12 }, measureValue: 180, measureUnitId: "count" },
      { name: "Mega 6 rotoli", price: 5.49, counts: { box: 0, roll: 6 }, measureValue: 250, measureUnitId: "count" },
    ],
  },

  {
    slug: "detersivo-lavatrice",
    name: "Detersivo lavatrice",
    description:
      "Confronta detersivi liquidi e in capsule per la lavatrice al prezzo per lavaggio. Funziona anche con detersivi concentrati.",
    intro:
      "Il numero che conta è il prezzo per lavaggio, non al litro: un concentrato da 750 ml che fa 44 lavaggi quasi sempre vince contro uno standard da 1,5 L che ne fa solo 24. Inserisci numero lavaggi dichiarati in confezione e prezzo: il sistema fa i conti.",
    context: "dosage",
    keywords: ["detersivo", "detersivo lavatrice", "detersivo bucato", "bucato", "lavaggio", "ammorbidente", "dash", "dixan", "perlana", "vernel", "scala", "ace lavatrice", "capsule lavatrice"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "bottle", label: "flacone", pluralLabel: "flaconi", default: 1 },
    ],
    sampleEntries: [
      { name: "Flacone standard 1,5 L", price: 4.49, counts: { box: 0, bottle: 1 }, measureValue: 1.5, measureUnitId: "L", doseCount: 24 },
      { name: "Concentrato 750 ml", price: 4.99, counts: { box: 0, bottle: 1 }, measureValue: 750, measureUnitId: "ml", doseCount: 44 },
      { name: "Maxi-flacone 3 L", price: 8.99, counts: { box: 0, bottle: 1 }, measureValue: 3, measureUnitId: "L", doseCount: 50 },
      { name: "Capsule 30 monodose", price: 9.99, counts: { box: 0, bottle: 1 }, measureValue: 750, measureUnitId: "ml", doseCount: 30 },
    ],
  },

  {
    slug: "detersivo-piatti",
    name: "Detersivo per piatti",
    description:
      "Confronta detersivi piatti liquidi in formati diversi (500 ml, 750 ml, 1 L) al prezzo al litro.",
    intro:
      "Concentrati ed extra-concentrati cambiano i conti: un flacone 750 ml a €3,99 può costare meno per lavata di uno standard da 1 L a €3,49. Inserisci volume e prezzo, il sistema riduce tutto a €/L.",
    context: "liquid",
    keywords: ["detersivo piatti", "lava piatti", "lavapiatti", "fairy", "winni's", "nelsen", "svelto", "ava"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "bottle", label: "flacone", pluralLabel: "flaconi", default: 1 },
    ],
    sampleEntries: [
      { name: "Flacone 500 ml", price: 1.99, counts: { box: 0, bottle: 1 }, measureValue: 500, measureUnitId: "ml" },
      { name: "Flacone 1 L", price: 3.49, counts: { box: 0, bottle: 1 }, measureValue: 1, measureUnitId: "L" },
      { name: "Concentrato 750 ml", price: 3.99, counts: { box: 0, bottle: 1 }, measureValue: 750, measureUnitId: "ml" },
    ],
  },

  {
    slug: "formaggio-grattugiato",
    name: "Formaggio grattugiato",
    description:
      "Parmigiano, grana e formaggi grattugiati: confronta vaschette e barattoli al prezzo al kg.",
    intro:
      "Le confezioni di formaggio grattugiato vanno dai 60 g del pacchetto monoporzione ai 500 g della busta risparmio, con grossi sconti sui formati grandi. Inserisci grammatura e prezzo, il sistema normalizza al kg.",
    context: "weight",
    keywords: ["formaggio", "formaggio grattugiato", "parmigiano", "parmigiano reggiano", "grana", "grana padano", "pecorino", "padano", "reggiano", "grattugiato"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "pack", label: "vaschetta", pluralLabel: "vaschette", default: 1 },
    ],
    sampleEntries: [
      { name: "Bustina 60 g", price: 1.79, counts: { box: 0, pack: 1 }, measureValue: 60, measureUnitId: "g" },
      { name: "Vaschetta 100 g", price: 2.99, counts: { box: 0, pack: 1 }, measureValue: 100, measureUnitId: "g" },
      { name: "Confezione 250 g", price: 5.99, counts: { box: 0, pack: 1 }, measureValue: 250, measureUnitId: "g" },
    ],
  },

  {
    slug: "latte-uht",
    name: "Latte UHT e panna",
    description:
      "Confronta brick, bottiglie e fardelli di latte (e panna da cucina) al prezzo al litro.",
    intro:
      "Brick da 500 ml, da 1 L, bottiglie PET da 1,5 L, fardelli 6 × 1 L: il prezzo per brick varia ma €/L è l'unico numero che conta. Lo stesso strumento serve anche per la panna fresca, da montare o da cucina: stesso volume, formato uguale.",
    context: "liquid",
    keywords: ["latte", "latte uht", "latte fresco", "latte parzialmente scremato", "latte intero", "latte scremato", "panna", "panna fresca", "panna da cucina", "panna da montare", "panna vegetale", "yogurt liquido", "yogurt da bere", "kefir", "latte di mandorla", "latte di soia", "bevanda vegetale"],
    levels: [
      { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
      { id: "bottle", label: "brick/bottiglia", pluralLabel: "brick/bottiglie", default: 1 },
    ],
    sampleEntries: [
      { name: "Brick 1 L", price: 1.39, counts: { box: 0, bottle: 1 }, measureValue: 1, measureUnitId: "L" },
      { name: "Fardello 6 × 1 L", price: 7.49, counts: { box: 1, bottle: 6 }, measureValue: 1, measureUnitId: "L" },
      { name: "Bottiglia PET 1,5 L", price: 1.89, counts: { box: 0, bottle: 1 }, measureValue: 1.5, measureUnitId: "L" },
      { name: "Brick 500 ml", price: 0.89, counts: { box: 0, bottle: 1 }, measureValue: 500, measureUnitId: "ml" },
    ],
  },

  {
    slug: "lievito",
    name: "Lievito di birra",
    description:
      "Confronta panetti freschi e bustine di lievito secco al prezzo al kg.",
    intro:
      "Panetti freschi da 25 g, bustine di lievito secco da 7 g, multipack: il €/kg è l'unico modo per confrontare formati diversi sulla stessa scala. Tieni a mente che 7 g di secco ≈ 25 g di fresco in potere lievitante.",
    context: "weight",
    keywords: ["lievito", "lievito di birra", "lievito secco", "lievito istantaneo", "lievito pizza", "bertolini", "mastrofornaio", "paneangeli"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "pack", label: "panetto/bustina", pluralLabel: "panetti/bustine", default: 1 },
    ],
    sampleEntries: [
      { name: "Panetto fresco 25 g", price: 0.29, counts: { box: 0, pack: 1 }, measureValue: 25, measureUnitId: "g" },
      { name: "Tris panetti 3 × 25 g", price: 0.79, counts: { box: 0, pack: 3 }, measureValue: 25, measureUnitId: "g" },
      { name: "Bustina secca 7 g", price: 0.49, counts: { box: 0, pack: 1 }, measureValue: 7, measureUnitId: "g" },
      { name: "Tris bustine secco", price: 1.19, counts: { box: 0, pack: 3 }, measureValue: 7, measureUnitId: "g" },
    ],
  },

  {
    slug: "merendine",
    name: "Merendine e biscotti",
    description:
      "Confronta multipack di merendine, crostatine e biscotti al prezzo per pezzo.",
    intro:
      "Multipack 6, 8, 24 pezzi, formati famiglia, edizioni limitate: il prezzo per merendina è l'unico modo per scoprire se il multipack conviene davvero o se i singoli pezzi al bar costano meno.",
    context: "unit",
    baseLabel: "merendina",
    baseLabelPlural: "merendine",
    keywords: ["merendine", "merendina", "biscotti", "biscotti per la colazione", "snack dolci", "kinder", "kinder brioss", "kinder delice", "crostatine", "girelle", "tegolino", "saccottino", "fiesta", "buondì", "mulino bianco", "ferrero", "barrette", "wafer"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "pack", label: "multipack", pluralLabel: "multipack", default: 1 },
    ],
    sampleEntries: [
      { name: "Multipack 6 pezzi", price: 2.49, counts: { box: 0, pack: 1 }, measureValue: 6, measureUnitId: "count" },
      { name: "Multipack 8 pezzi", price: 3.99, counts: { box: 0, pack: 1 }, measureValue: 8, measureUnitId: "count" },
      { name: "Maxi 24 pezzi", price: 8.99, counts: { box: 0, pack: 1 }, measureValue: 24, measureUnitId: "count" },
    ],
  },

  {
    slug: "olio-extravergine",
    name: "Olio extravergine d'oliva",
    description:
      "Confronta bottiglie e lattine di olio extravergine al prezzo al litro.",
    intro:
      "Bottiglie da 750 ml, da 1 L, lattine da 3 e 5 L, bag-in-box: i formati grandi spesso scendono sotto i 6 €/L mentre la bottiglia da 750 ml in promozione del supermercato resta sui 7-8 €/L. Inserisci volume e prezzo, il sistema dice quale conviene.",
    context: "liquid",
    keywords: ["olio", "olio extravergine", "olio evo", "olio oliva", "olio extra vergine", "olio di oliva", "olio di semi", "olio di girasole", "olio di mais", "olio di arachide", "olio di vinaccioli"],
    levels: [
      { id: "box", label: "cartone", pluralLabel: "cartoni", optional: true, default: 0 },
      { id: "bottle", label: "bottiglia/lattina", pluralLabel: "bottiglie/lattine", default: 1 },
    ],
    sampleEntries: [
      { name: "Bottiglia 750 ml", price: 5.49, counts: { box: 0, bottle: 1 }, measureValue: 750, measureUnitId: "ml" },
      { name: "Bottiglia 1 L", price: 6.99, counts: { box: 0, bottle: 1 }, measureValue: 1, measureUnitId: "L" },
      { name: "Lattina 3 L", price: 18.99, counts: { box: 0, bottle: 1 }, measureValue: 3, measureUnitId: "L" },
      { name: "Lattina 5 L", price: 29.99, counts: { box: 0, bottle: 1 }, measureValue: 5, measureUnitId: "L" },
    ],
  },

  {
    slug: "pasta",
    name: "Pasta, riso e farina",
    description:
      "Confronta pacchi di pasta, riso, farina e legumi al prezzo al kg, indipendentemente dalla grammatura.",
    intro:
      "Una confezione da 500 g a 1,29 € costa meno di una da 1 kg a 2,49 € o di un cartone da 6 × 500 g a 6,99 €? Il prezzo al chilo lo dice in un attimo. Inserisci confezione, peso e prezzo, il sistema normalizza tutto al kg.",
    context: "weight",
    keywords: ["pasta", "spaghetti", "penne", "fusilli", "rigatoni", "farfalle", "linguine", "tagliatelle", "lasagne", "riso", "riso basmati", "riso arborio", "riso carnaroli", "farro", "orzo", "farina", "farina 00", "farina integrale", "legumi", "ceci", "fagioli", "lenticchie", "barilla", "de cecco", "garofalo", "voiello"],
    levels: [
      { id: "box", label: "cartone", pluralLabel: "cartoni", optional: true, default: 0 },
      { id: "pack", label: "confezione", pluralLabel: "confezioni", default: 1 },
    ],
    sampleEntries: [
      { name: "Confezione 500 g", price: 1.29, counts: { box: 0, pack: 1 }, measureValue: 500, measureUnitId: "g" },
      { name: "Cartone 6 × 500 g", price: 6.99, counts: { box: 1, pack: 6 }, measureValue: 500, measureUnitId: "g" },
      { name: "Confezione 1 kg", price: 2.49, counts: { box: 0, pack: 1 }, measureValue: 1, measureUnitId: "kg" },
    ],
  },

  {
    slug: "sacchi-spazzatura",
    name: "Sacchi spazzatura",
    description:
      "Confronta rotoli e confezioni di sacchi al prezzo per singolo sacco.",
    intro:
      "Rotoli da 10, confezioni da 15, multipack risparmio, taglie da 30 a 110 L: il prezzo a confezione si confronta solo a parità di taglia. Inserisci numero sacchi e prezzo, il sistema mostra €/sacco.",
    context: "unit",
    baseLabel: "sacco",
    baseLabelPlural: "sacchi",
    keywords: ["sacchi", "sacchi spazzatura", "sacchetti", "sacchetti spazzatura", "rifiuti", "umido", "indifferenziato", "differenziata", "pattumiera", "spazzatura", "biodegradabili", "compostabili"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "roll", label: "rotolo", pluralLabel: "rotoli", default: 1 },
    ],
    sampleEntries: [
      { name: "Rotolo 10 sacchi 30 L", price: 1.99, counts: { box: 0, roll: 1 }, measureValue: 10, measureUnitId: "count" },
      { name: "Confezione 15 sacchi 50 L", price: 3.49, counts: { box: 0, roll: 1 }, measureValue: 15, measureUnitId: "count" },
      { name: "Multipack 3 × 15 sacchi 110 L", price: 8.99, counts: { box: 1, roll: 3 }, measureValue: 15, measureUnitId: "count" },
    ],
  },

  {
    slug: "shampoo",
    name: "Shampoo e bagnoschiuma",
    description:
      "Confronta flaconi e ricariche di shampoo, balsamo e bagnoschiuma al prezzo al litro.",
    intro:
      "Flacone travel da 250 ml, taglio standard 400 ml, family-size 750 ml, ricariche eco: i prezzi al pezzo sembrano simili ma €/L svela differenze del 30-40%. Inserisci volume e prezzo, il sistema confronta.",
    context: "liquid",
    keywords: ["shampoo", "balsamo", "conditioner", "bagnoschiuma", "doccia gel", "gel doccia", "doccia schiuma", "schiuma da bagno", "sapone liquido", "sapone mani", "head and shoulders", "pantene", "garnier", "schwarzkopf"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "bottle", label: "flacone", pluralLabel: "flaconi", default: 1 },
    ],
    sampleEntries: [
      { name: "Flacone 250 ml", price: 2.99, counts: { box: 0, bottle: 1 }, measureValue: 250, measureUnitId: "ml" },
      { name: "Flacone 400 ml", price: 4.49, counts: { box: 0, bottle: 1 }, measureValue: 400, measureUnitId: "ml" },
      { name: "Family-size 750 ml", price: 6.99, counts: { box: 0, bottle: 1 }, measureValue: 750, measureUnitId: "ml" },
    ],
  },

  {
    slug: "snack-salati",
    name: "Snack salati e patatine",
    description:
      "Patatine, crackers, taralli, popcorn: confronta sacchetti e multipack al prezzo al kg.",
    intro:
      "Sacchetto monoporzione 30 g a 0,99 €, formato famiglia 150 g a 1,89 €, multipack 6 × 25 g a 1,99 €: solo il €/kg dice quale conviene. Inserisci grammatura e prezzo, il sistema normalizza.",
    context: "weight",
    keywords: ["snack", "snack salati", "patatine", "patatine fritte", "crackers", "popcorn", "taralli", "grissini", "lays", "pringles", "san carlo", "amica chips", "pai"],
    levels: [
      { id: "box", label: "multipack", pluralLabel: "multipack", optional: true, default: 0 },
      { id: "pack", label: "sacchetto", pluralLabel: "sacchetti", default: 1 },
    ],
    sampleEntries: [
      { name: "Sacchetto 30 g", price: 0.99, counts: { box: 0, pack: 1 }, measureValue: 30, measureUnitId: "g" },
      { name: "Famiglia 150 g", price: 1.89, counts: { box: 0, pack: 1 }, measureValue: 150, measureUnitId: "g" },
      { name: "Multipack 6 × 25 g", price: 1.99, counts: { box: 1, pack: 6 }, measureValue: 25, measureUnitId: "g" },
    ],
  },

  {
    slug: "succhi-frutta",
    name: "Succhi e nettari di frutta",
    description:
      "Confronta brick, bottiglie e multipack di succhi al prezzo al litro.",
    intro:
      "Brick monodose da 200 ml, bottiglie PET da 1 L, fardelli da 3, brik famiglia 1,5 L: cambia tutto sul €/L. Inserisci volume e prezzo, il sistema confronta.",
    context: "liquid",
    keywords: ["succhi", "succo", "succo di frutta", "nettare", "nettari", "centrifuga", "ace", "smoothie", "estathè", "santal", "yoga", "skipper", "zuegg"],
    levels: [
      { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
      { id: "bottle", label: "brick/bottiglia", pluralLabel: "brick/bottiglie", default: 1 },
    ],
    sampleEntries: [
      { name: "Brick 200 ml", price: 0.69, counts: { box: 0, bottle: 1 }, measureValue: 200, measureUnitId: "ml" },
      { name: "Multipack 3 × 200 ml", price: 1.49, counts: { box: 1, bottle: 3 }, measureValue: 200, measureUnitId: "ml" },
      { name: "Bottiglia PET 1 L", price: 1.49, counts: { box: 0, bottle: 1 }, measureValue: 1, measureUnitId: "L" },
      { name: "Brik famiglia 1,5 L", price: 1.99, counts: { box: 0, bottle: 1 }, measureValue: 1.5, measureUnitId: "L" },
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
    keywords: ["tabs", "tabs lavastoviglie", "tab", "lavastoviglie", "pastiglie", "cialde lavastoviglie", "finish", "fairy lavastoviglie", "all in one", "all-in-one", "calgonit"],
    levels: [
      { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
      { id: "pack", label: "scatola", pluralLabel: "scatole", default: 1 },
    ],
    sampleEntries: [
      { name: "Scatola 30 tab", price: 7.99, counts: { box: 0, pack: 1 }, measureValue: 30, measureUnitId: "count" },
      { name: "Maxipack 60 tab", price: 13.49, counts: { box: 0, pack: 1 }, measureValue: 60, measureUnitId: "count" },
      { name: "Megapack 3 × 40 tab", price: 24.99, counts: { box: 1, pack: 3 }, measureValue: 40, measureUnitId: "count" },
    ],
  },

  {
    slug: "yogurt",
    name: "Yogurt vasetti",
    description:
      "Confronta confezioni di yogurt al prezzo per vasetto.",
    intro:
      "Confezioni 4 × 125 g, multipack 8, vasetti greci da 150 g, edizioni limitate: il €/vasetto è la metrica utile, soprattutto fra brand standard e premium.",
    context: "unit",
    baseLabel: "vasetto",
    baseLabelPlural: "vasetti",
    keywords: ["yogurt", "yogurt greco", "yogurt magro", "yogurt bianco", "yogurt alla frutta", "vasetto yogurt", "danone", "muller", "müller", "activia", "kyr", "fage"],
    levels: [
      { id: "box", label: "confezione esterna", pluralLabel: "confezioni esterne", optional: true, default: 0 },
      { id: "pack", label: "confezione", pluralLabel: "confezioni", default: 1 },
    ],
    sampleEntries: [
      { name: "Confezione 4 × 125 g", price: 2.49, counts: { box: 0, pack: 1 }, measureValue: 4, measureUnitId: "count" },
      { name: "Multipack 8 × 125 g", price: 3.99, counts: { box: 0, pack: 1 }, measureValue: 8, measureUnitId: "count" },
      { name: "Vasetto greco 150 g", price: 1.29, counts: { box: 0, pack: 1 }, measureValue: 1, measureUnitId: "count" },
    ],
  },
];

export function getCategoryBySlug(
  slug: string,
): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
