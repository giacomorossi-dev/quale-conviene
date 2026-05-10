import type { CategoryDefinition } from "#/lib/pricing.ts";

/**
 * All categories sorted alphabetically by slug.
 *
 * - `keywords` powers the home-page search (synonyms + brand names).
 * - `faq` surfaces 3 Q&A per category, rendered on page and emitted as
 *   FAQPage JSON-LD for SERP rich results.
 * - `related` lists slugs of related categories for internal linking
 *   blocks at the bottom of the comparator page.
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
    related: ["bibite", "succhi-frutta", "bevande-sportive"],
    faq: [
      { q: "Conviene comprare l'acqua in fardello?", a: "Quasi sempre sì: il €/L scende del 30-50% rispetto alla bottiglia singola. Verifica però il prezzo per litro stampato sull'etichetta del supermercato (è obbligo di legge in Italia)." },
      { q: "Acqua naturale o frizzante: il prezzo cambia?", a: "Raramente di più di 5-10 cent/L. Se la differenza è minima, scegli quella che ti piace di più senza preoccuparti del calcolo." },
      { q: "Quanta acqua serve a una famiglia di 4 persone al mese?", a: "Stima media: 1,5 L pro capite al giorno = circa 180 L/mese per 4 persone. Un fardello da 9 L copre 5 giorni, una decina di fardelli al mese sono sufficienti." },
    ],
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
    description: "Confronta bottigliette e fardelli di bevande sportive (Powerade, Gatorade…) al prezzo al litro.",
    intro: "Le bevande sportive arrivano in formati molto diversi (singoli 500 ml, fardelli da 6, formato gym 1 L). Riduci tutto a €/L per scegliere il formato che paga meno per la stessa idratazione.",
    context: "liquid",
    keywords: ["bevanda sportiva", "isotonica", "powerade", "gatorade", "energade", "sport drink", "elettroliti"],
    related: ["acqua", "bibite"],
    faq: [
      { q: "Le bevande sportive servono se non faccio sport intenso?", a: "Per attività < 1 ora generalmente no: l'acqua basta. Le isotoniche aiutano oltre i 60-90 minuti di sforzo intenso o in caldo estremo." },
      { q: "Polvere o bottiglia pronta: quale conviene?", a: "La polvere è 3-5× più economica al litro ma richiede preparazione. La bottiglia è comoda da portare in palestra. Decidi in base alla frequenza d'uso." },
      { q: "Una lattina 33 cl conviene rispetto a una bottiglia 1 L?", a: "Quasi mai: l'imballaggio piccolo costa di più al litro. Il calcolatore qui sopra normalizza al volo, anche fra unità diverse (cl vs L)." },
    ],
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
    description: "Cola, aranciata, energy drink: confronta lattine, bottiglie e fardelli al prezzo al litro.",
    intro: "Bottiglie da 1,5 L, fardelli di lattine da 33 cl, mini-bottiglie da 45 cl: il prezzo in scaffale non si confronta a colpo d'occhio. Inserisci formato e prezzo, il sistema normalizza al litro.",
    context: "liquid",
    keywords: ["coca cola", "coca-cola", "pepsi", "aranciata", "fanta", "sprite", "chinotto", "ginger", "tè freddo", "the freddo", "tea", "energy drink", "redbull", "red bull", "monster", "estathè", "lipton"],
    related: ["acqua", "succhi-frutta", "bevande-sportive"],
    faq: [
      { q: "Conviene il fardello da 6 lattine o la bottiglia 1,5 L?", a: "Le lattine costano in media il 20-30% in più al litro perché l'imballaggio metallico pesa sul prezzo. Calcola sempre €/L con questo strumento." },
      { q: "Le marche del supermercato (private label) hanno la stessa qualità?", a: "Su cola, aranciata e tè freddo le private label costano il 40-60% in meno con qualità sufficiente per uso quotidiano. Il blind test è spesso inconcludente." },
      { q: "Energy drink al supermercato vs al bar?", a: "Al supermercato 1-2 €/lattina, al bar 4-6 €. Stesso prodotto, stesso volume, prezzo 3× più alto." },
    ],
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
    description: "Confronta confezioni di capsule caffè al prezzo per singola capsula. Confronta sempre capsule dello stesso tipo di macchina.",
    intro: "Le capsule sono vendute in astucci da 10, 50, 100 e oltre, con sconti sui multipack non sempre evidenti. Inserisci numero capsule e prezzo: il sistema mostra €/capsula così sai quale pacco ti dà davvero il miglior prezzo. Confronta sempre capsule dello stesso tipo di macchina (Nespresso, Dolce Gusto, A Modo Mio…).",
    context: "unit",
    baseLabel: "capsula",
    baseLabelPlural: "capsule",
    keywords: ["caffè", "caffe", "capsule", "capsule caffè", "cialde", "nespresso", "dolce gusto", "lavazza", "a modo mio", "lavazza espresso point"],
    related: ["yogurt", "merendine"],
    faq: [
      { q: "Capsule originali o compatibili: cosa conviene?", a: "Le compatibili costano il 30-50% in meno con qualità spesso ottima. Verifica sempre la compatibilità con la tua macchina (Nespresso Original ≠ Vertuo)." },
      { q: "Online o supermercato per le capsule?", a: "Online (Amazon, brand websites) i megapack 100+ scendono sotto i 25 cent/capsula; il supermercato di solito ferma intorno a 30-40 cent." },
      { q: "Quante capsule consuma una persona al mese?", a: "Media: 2 caffè al giorno × 30 giorni = 60 capsule/mese. Un megapack da 100 dura circa 50 giorni a coppia." },
    ],
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
    description: "Confronta confezioni di carta igienica per scoprire quale costa meno per strappo. Inserisci numero rotoli e strappi per rotolo.",
    intro: "Le confezioni di carta igienica usano formati molto diversi (rotoli singoli, maxi-rotoli, megapack), e il prezzo al rotolo non basta a dire quale conviene davvero. Questa utility riduce tutto al prezzo per strappo, l'unica unità di misura comparabile fra prodotti.",
    context: "unit",
    baseLabel: "strappo",
    baseLabelPlural: "strappi",
    keywords: ["carta igienica", "carta wc", "carta igienic", "rotolone", "rotoli wc", "veline wc", "papercart"],
    related: ["sacchi-spazzatura", "shampoo"],
    faq: [
      { q: "I rotoli più grandi convengono sempre?", a: "Quasi sempre: maxi-rotoli e mega-rotoli scendono sotto 0,4 cent/strappo, contro i 0,6-0,8 cent dei rotoli classici. Calcola con questo strumento." },
      { q: "Doppio velo o triplo velo: cambia il numero di strappi?", a: "Sì: a parità di formato esterno, il triplo velo ha tipicamente meno strappi (~150 vs 200 del doppio). Tienine conto nel calcolo." },
      { q: "Cos'è la shrinkflation sulla carta igienica?", a: "È quando il numero di strappi per rotolo cala silenziosamente (es. da 200 a 180) ma il prezzo resta uguale. Solo il €/strappo lo svela." },
    ],
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
    description: "Confronta detersivi liquidi e in capsule per la lavatrice al prezzo per lavaggio. Funziona anche con detersivi concentrati.",
    intro: "Il numero che conta è il prezzo per lavaggio, non al litro: un concentrato da 750 ml che fa 44 lavaggi quasi sempre vince contro uno standard da 1,5 L che ne fa solo 24. Inserisci numero lavaggi dichiarati in confezione e prezzo: il sistema fa i conti.",
    context: "dosage",
    keywords: ["detersivo", "detersivo lavatrice", "detersivo bucato", "bucato", "lavaggio", "ammorbidente", "dash", "dixan", "perlana", "vernel", "scala", "ace lavatrice", "capsule lavatrice"],
    related: ["detersivo-piatti", "tabs-lavastoviglie"],
    faq: [
      { q: "Concentrato o standard: quale conviene?", a: "Quasi sempre il concentrato vince a €/lavaggio, anche se costa di più nominalmente. Confronta sempre i lavaggi dichiarati, non i ml." },
      { q: "Le capsule monodose convengono?", a: "Sono pratiche ma 30-40% più care a lavaggio del liquido. Hanno senso se sprechi spesso il dosaggio liquido o con bambini in casa." },
      { q: "Posso fidarmi del numero di lavaggi dichiarato?", a: "Indica il valore tipico per 5 kg di carico in acqua di durezza media. Se la tua acqua è dura o il carico più grande, riduci la stima del 15-20%." },
    ],
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
    description: "Confronta detersivi piatti liquidi in formati diversi (500 ml, 750 ml, 1 L) al prezzo al litro.",
    intro: "Concentrati ed extra-concentrati cambiano i conti: un flacone 750 ml a €3,99 può costare meno per lavata di uno standard da 1 L a €3,49. Inserisci volume e prezzo, il sistema riduce tutto a €/L.",
    context: "liquid",
    keywords: ["detersivo piatti", "lava piatti", "lavapiatti", "fairy", "winni's", "nelsen", "svelto", "ava"],
    related: ["detersivo-lavatrice", "tabs-lavastoviglie"],
    faq: [
      { q: "Concentrato vs standard: quale conviene?", a: "I concentrati 'extra' rendono fino al 50% in più per dose. Il €/L sembra alto ma il €/lavaggio è inferiore." },
      { q: "Quanto detersivo per lavaggio a mano?", a: "1-2 ml per piatto. Una bottiglia 750 ml dura 2-3 mesi per uso quotidiano in famiglia." },
      { q: "Le ricariche convengono?", a: "Quando disponibili sì, scendono del 15-25% al litro. Inoltre riducono la plastica usata." },
    ],
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
    description: "Parmigiano, grana e formaggi grattugiati: confronta vaschette e barattoli al prezzo al kg.",
    intro: "Le confezioni di formaggio grattugiato vanno dai 60 g del pacchetto monoporzione ai 500 g della busta risparmio, con grossi sconti sui formati grandi. Inserisci grammatura e prezzo, il sistema normalizza al kg.",
    context: "weight",
    keywords: ["formaggio", "formaggio grattugiato", "parmigiano", "parmigiano reggiano", "grana", "grana padano", "pecorino", "padano", "reggiano", "grattugiato"],
    related: ["pasta", "olio-extravergine"],
    faq: [
      { q: "Vaschetta o sacchetto: quale conviene?", a: "I sacchetti monoporzione costano il 40-60% in più al kg. Le vaschette grandi (250-500 g) si conservano fino a 30 giorni in frigo dopo l'apertura." },
      { q: "Parmigiano grattugiato vs in pezzo: cosa scegliere?", a: "Il grattugiato costa il 30-50% in più al kg per la lavorazione e il consumo della crosta. Se hai una grattugia, il pezzo intero è più economico e fresco." },
      { q: "Grana Padano vs Parmigiano Reggiano: differenza di prezzo?", a: "Il Reggiano costa il 20-35% in più del Padano per la stagionatura più lunga (24+ mesi vs 9-16 mesi). Per la pasta sono interscambiabili." },
    ],
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
    description: "Confronta brick, bottiglie e fardelli di latte (e panna da cucina) al prezzo al litro.",
    intro: "Brick da 500 ml, da 1 L, bottiglie PET da 1,5 L, fardelli 6 × 1 L: il prezzo per brick varia ma €/L è l'unico numero che conta. Lo stesso strumento serve anche per la panna fresca, da montare o da cucina: stesso volume, formato uguale.",
    context: "liquid",
    keywords: ["latte", "latte uht", "latte fresco", "latte parzialmente scremato", "latte intero", "latte scremato", "panna", "panna fresca", "panna da cucina", "panna da montare", "panna vegetale", "yogurt liquido", "yogurt da bere", "kefir", "latte di mandorla", "latte di soia", "bevanda vegetale"],
    related: ["yogurt", "succhi-frutta"],
    faq: [
      { q: "UHT o fresco: differenza di prezzo?", a: "Il fresco costa il 20-40% in più al litro per la catena del freddo. UHT dura mesi in dispensa, il fresco solo 4-6 giorni in frigo." },
      { q: "Conviene il fardello da 6 brick?", a: "Sì: scende sotto 1,2 €/L, mentre il brick singolo è spesso 1,4-1,6 €/L. Il calcolatore lo conferma in un secondo." },
      { q: "Latte vegetale (soia, mandorla) vs vaccino al kg?", a: "Le bevande vegetali costano 2-3× il latte vaccino. Hanno senso solo per chi ha esigenze specifiche (intolleranze, vegan) o forte preferenza di gusto." },
    ],
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
    description: "Confronta panetti freschi e bustine di lievito secco al prezzo al kg.",
    intro: "Panetti freschi da 25 g, bustine di lievito secco da 7 g, multipack: il €/kg è l'unico modo per confrontare formati diversi sulla stessa scala. Tieni a mente che 7 g di secco ≈ 25 g di fresco in potere lievitante.",
    context: "weight",
    keywords: ["lievito", "lievito di birra", "lievito secco", "lievito istantaneo", "lievito pizza", "bertolini", "mastrofornaio", "paneangeli"],
    related: ["pasta", "olio-extravergine"],
    faq: [
      { q: "Lievito secco o fresco: equivalenza?", a: "1 bustina (7 g) di secco ≈ 1 panetto (25 g) di fresco. Per confronto realistico al kg, moltiplica il €/kg del secco per ~3,5." },
      { q: "Quanto rende un panetto di lievito?", a: "Un panetto da 25 g lievita 500 g di farina, ovvero una pizza per 4 persone o un pane medio." },
      { q: "Lievito naturale (madre) sostituisce quello di birra?", a: "Sì ma con tempi diversi (8-12 ore invece di 1-2). Se vuoi la praticità del lievito di birra, conviene il fresco per la migliore tenuta sul lungo." },
    ],
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
    description: "Confronta multipack di merendine, crostatine e biscotti al prezzo per pezzo.",
    intro: "Multipack 6, 8, 24 pezzi, formati famiglia, edizioni limitate: il prezzo per merendina è l'unico modo per scoprire se il multipack conviene davvero o se i singoli pezzi al bar costano meno.",
    context: "unit",
    baseLabel: "merendina",
    baseLabelPlural: "merendine",
    keywords: ["merendine", "merendina", "biscotti", "biscotti per la colazione", "snack dolci", "kinder", "kinder brioss", "kinder delice", "crostatine", "girelle", "tegolino", "saccottino", "fiesta", "buondì", "mulino bianco", "ferrero", "barrette", "wafer"],
    related: ["snack-salati", "yogurt", "capsule-caffe"],
    faq: [
      { q: "Multipack scolastico vs singola merendina al bar?", a: "Il multipack 6 pezzi costa 0,40-0,60 €/merendina, al bar 1-1,50 €. Differenza di 3× a parità di prodotto." },
      { q: "Le merendine 'kids' / senza zucchero costano di più?", a: "Sì: 20-30% in più rispetto alle versioni standard. Sono spesso le più care a parità di grammatura." },
      { q: "Biscotti vs merendine: come si confrontano?", a: "I biscotti standard costano 3-5 €/kg, le merendine 8-15 €/kg. Per spesa quotidiana i biscotti sono più convenienti se la varietà non ti manca." },
    ],
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
    description: "Confronta bottiglie e lattine di olio extravergine al prezzo al litro.",
    intro: "Bottiglie da 750 ml, da 1 L, lattine da 3 e 5 L, bag-in-box: i formati grandi spesso scendono sotto i 6 €/L mentre la bottiglia da 750 ml in promozione del supermercato resta sui 7-8 €/L. Inserisci volume e prezzo, il sistema dice quale conviene.",
    context: "liquid",
    keywords: ["olio", "olio extravergine", "olio evo", "olio oliva", "olio extra vergine", "olio di oliva", "olio di semi", "olio di girasole", "olio di mais", "olio di arachide", "olio di vinaccioli"],
    related: ["pasta", "formaggio-grattugiato"],
    faq: [
      { q: "Lattina 5 L o bottiglia 1 L: cosa scegliere?", a: "La lattina costa 30-40% in meno al litro ma va consumata in 6 mesi dall'apertura. Per single o coppia, la bottiglia 1 L è più gestibile." },
      { q: "Olio EVO sotto 5 €/L: posso fidarmi?", a: "Diffida. L'EVO 100% italiano costa minimo 6-7 €/L per coprire i costi. Sotto è probabilmente blend con olio importato." },
      { q: "Olio di oliva vs extravergine: che differenza?", a: "L'extravergine ha acidità < 0,8% e sapori puliti. L'olio di oliva (non EVO) è raffinato e meno aromatico, costa il 30-40% in meno e va bene per fritti e cottura prolungata." },
    ],
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
    description: "Confronta pacchi di pasta, riso, farina e legumi al prezzo al kg, indipendentemente dalla grammatura.",
    intro: "Una confezione da 500 g a 1,29 € costa meno di una da 1 kg a 2,49 € o di un cartone da 6 × 500 g a 6,99 €? Il prezzo al chilo lo dice in un attimo. Inserisci confezione, peso e prezzo, il sistema normalizza tutto al kg.",
    context: "weight",
    keywords: ["pasta", "spaghetti", "penne", "fusilli", "rigatoni", "farfalle", "linguine", "tagliatelle", "lasagne", "riso", "riso basmati", "riso arborio", "riso carnaroli", "farro", "orzo", "farina", "farina 00", "farina integrale", "legumi", "ceci", "fagioli", "lenticchie", "barilla", "de cecco", "garofalo", "voiello"],
    related: ["olio-extravergine", "formaggio-grattugiato", "lievito"],
    faq: [
      { q: "Marca premium vs private label per la pasta secca?", a: "La differenza di qualità è minima per la pasta standard. Le marche premium (De Cecco, Garofalo) costano il 50-80% in più per benefici percepibili solo da palati esperti." },
      { q: "Cartoni 6 × 500 g convengono?", a: "Spesso sì: scendono sotto 2 €/kg, mentre la singola può arrivare a 2,50 €/kg. Verifica il €/kg in promozione settimanale." },
      { q: "Riso vs pasta: come si confrontano?", a: "Stesso strumento (€/kg) ma il riso è meno saziante a parità di peso secco. Considera il rendimento (1 kg pasta = 4 kg cotta; 1 kg riso = 3 kg cotto)." },
    ],
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
    description: "Confronta rotoli e confezioni di sacchi al prezzo per singolo sacco.",
    intro: "Rotoli da 10, confezioni da 15, multipack risparmio, taglie da 30 a 110 L: il prezzo a confezione si confronta solo a parità di taglia. Inserisci numero sacchi e prezzo, il sistema mostra €/sacco.",
    context: "unit",
    baseLabel: "sacco",
    baseLabelPlural: "sacchi",
    keywords: ["sacchi", "sacchi spazzatura", "sacchetti", "sacchetti spazzatura", "rifiuti", "umido", "indifferenziato", "differenziata", "pattumiera", "spazzatura", "biodegradabili", "compostabili"],
    related: ["carta-igienica"],
    faq: [
      { q: "Quale taglia per la cucina di una famiglia?", a: "30 L per umido, 50 L per indifferenziato, 110 L per giardino e svuoti grandi. I formati famiglia da 110 L costano in media 30-50% meno al sacco di quelli da 30 L." },
      { q: "Biodegradabili vs plastica: differenza di prezzo?", a: "I biodegradabili (per umido) costano 2-3× la plastica standard, ma sono obbligatori in molti comuni per il compostaggio." },
      { q: "Sacchi profumati o anti-odore: ne vale la pena?", a: "Costano il 20-40% in più. L'efficacia è limitata: meglio un buon contenitore con coperchio chiuso e svuotamento regolare." },
    ],
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
    description: "Confronta flaconi e ricariche di shampoo, balsamo e bagnoschiuma al prezzo al litro.",
    intro: "Flacone travel da 250 ml, taglio standard 400 ml, family-size 750 ml, ricariche eco: i prezzi al pezzo sembrano simili ma €/L svela differenze del 30-40%. Inserisci volume e prezzo, il sistema confronta.",
    context: "liquid",
    keywords: ["shampoo", "balsamo", "conditioner", "bagnoschiuma", "doccia gel", "gel doccia", "doccia schiuma", "schiuma da bagno", "sapone liquido", "sapone mani", "head and shoulders", "pantene", "garnier", "schwarzkopf"],
    related: ["detersivo-piatti", "carta-igienica"],
    faq: [
      { q: "Family-size 750 ml vs 250 ml: quanto si risparmia?", a: "Tipicamente 30-40% al litro. Se la marca ti soddisfa, vai sul grande senza esitare." },
      { q: "Le ricariche eco convengono?", a: "Sì: 20-30% in meno della bottiglia + meno plastica usata. La qualità del prodotto è identica." },
      { q: "Marche del supermercato vs branded: vale la differenza?", a: "Le private label costano la metà o meno. Per uso quotidiano (capelli normali) la differenza è impercettibile; per esigenze specifiche (forfora, capelli colorati) il branded può valere la pena." },
    ],
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
    description: "Patatine, crackers, taralli, popcorn: confronta sacchetti e multipack al prezzo al kg.",
    intro: "Sacchetto monoporzione 30 g a 0,99 €, formato famiglia 150 g a 1,89 €, multipack 6 × 25 g a 1,99 €: solo il €/kg dice quale conviene. Inserisci grammatura e prezzo, il sistema normalizza.",
    context: "weight",
    keywords: ["snack", "snack salati", "patatine", "patatine fritte", "crackers", "popcorn", "taralli", "grissini", "lays", "pringles", "san carlo", "amica chips", "pai"],
    related: ["merendine", "bibite"],
    faq: [
      { q: "Sacchetti monoporzione o formato famiglia?", a: "Il formato famiglia costa 2-3× meno al kg ma porta a mangiarne di più. Le monoporzioni aiutano il controllo delle quantità." },
      { q: "Patatine al supermercato vs distributore?", a: "Al supermercato 1-1,5 €/100g, al distributore automatico 3-4 €/100g. Differenza 3×." },
      { q: "Patatine in tubo (Pringles) vs in sacchetto: cosa cambia?", a: "Le Pringles costano 30-50% in più al kg per il packaging più costoso. Le patatine classiche restano più convenienti a parità di gusto." },
    ],
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
    description: "Confronta brick, bottiglie e multipack di succhi al prezzo al litro.",
    intro: "Brick monodose da 200 ml, bottiglie PET da 1 L, fardelli da 3, brik famiglia 1,5 L: cambia tutto sul €/L. Inserisci volume e prezzo, il sistema confronta.",
    context: "liquid",
    keywords: ["succhi", "succo", "succo di frutta", "nettare", "nettari", "centrifuga", "ace", "smoothie", "estathè", "santal", "yoga", "skipper", "zuegg"],
    related: ["bibite", "acqua", "latte-uht"],
    faq: [
      { q: "100% frutta vs nettare: che differenza?", a: "Il 100% non ha zuccheri aggiunti, costa 30-50% in più al litro. Il nettare è fino al 50% acqua + zucchero — leggi sempre la lista ingredienti." },
      { q: "Brick 200 ml o bottiglia 1 L: cosa scegliere?", a: "La bottiglia costa il 40-60% meno al litro. Il brick si paga la praticità (zaino scuola, picnic) e meno spreco con bambini piccoli." },
      { q: "Spremute fresche al supermercato convengono?", a: "Le 'fresche' costano 5-8 €/L, contro i 2-3 €/L dei succhi UHT 100% frutta. Hanno una shelf-life di pochi giorni: convengono solo per consumo immediato." },
    ],
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
    description: "Confronta confezioni di tabs / cialde per lavastoviglie al prezzo per singolo tab.",
    intro: "Le tabs per lavastoviglie sono vendute in formati molto diversi (scatole singole da 30, multipack, mega-confezioni da 100+). Questa utility normalizza tutto al prezzo per tab così da confrontare formati eterogenei in un colpo d'occhio.",
    context: "unit",
    baseLabel: "tab",
    baseLabelPlural: "tab",
    keywords: ["tabs", "tabs lavastoviglie", "tab", "lavastoviglie", "pastiglie", "cialde lavastoviglie", "finish", "fairy lavastoviglie", "all in one", "all-in-one", "calgonit"],
    related: ["detersivo-lavatrice", "detersivo-piatti"],
    faq: [
      { q: "All-in-one vs detersivo + brillantante separati?", a: "All-in-one più caro ma più semplice. Per acqua dura aggiungi comunque sale rigenerante: nessun tab lo sostituisce." },
      { q: "Megapack 100+ tab convengono?", a: "Quasi sempre: scendono sotto 20 cent/tab, contro i 30-40 cent della scatola da 30. Verifica con questo strumento." },
      { q: "Tabs senza fosfati: differenza di prezzo?", a: "Marginalmente più care (5-10%). Sono obbligatorie nell'UE dal 2017, quindi tutte le tab vendute lo sono — non è più un differenziatore." },
    ],
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
    description: "Confronta confezioni di yogurt al prezzo per vasetto.",
    intro: "Confezioni 4 × 125 g, multipack 8, vasetti greci da 150 g, edizioni limitate: il €/vasetto è la metrica utile, soprattutto fra brand standard e premium.",
    context: "unit",
    baseLabel: "vasetto",
    baseLabelPlural: "vasetti",
    keywords: ["yogurt", "yogurt greco", "yogurt magro", "yogurt bianco", "yogurt alla frutta", "vasetto yogurt", "danone", "muller", "müller", "activia", "kyr", "fage"],
    related: ["latte-uht", "merendine"],
    faq: [
      { q: "Yogurt greco vs naturale: ne vale il prezzo?", a: "Il greco costa il 30-50% in più ma ha 2× le proteine. Per la stessa proteina, lo yogurt greco a 150 g batte il naturale 125 g + integratore." },
      { q: "Multipack 8 vs vasetti singoli premium?", a: "Il multipack 8 vasetti scende sotto 0,40 €/vasetto, mentre i singoli premium costano 1+ €. Differenza 3×." },
      { q: "Yogurt 'kids' colorati: cosa c'è dentro?", a: "Spesso più zucchero e meno frutta dei normali. Costano il 20-30% in più. Leggi la lista ingredienti: yogurt + zucchero + aromi è il pattern tipico." },
    ],
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

/** Resolves `related` slugs to full category definitions, skipping invalid ones. */
export function getRelatedCategories(category: CategoryDefinition) {
  return (category.related ?? [])
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is CategoryDefinition => c !== undefined);
}
