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
    guideTitle: "Guida all'acqua minerale al supermercato",
    longDescription: `Il prezzo dell'acqua minerale in Italia oscilla fra meno di 10 centesimi al litro per i fardelli di marche private label e oltre 1 € al litro per le acque premium in vetro. La differenza in scaffale non riflette quasi mai una differenza nutrizionale o di sicurezza: tutte le acque imbottigliate vendute in Italia sono regolate da limiti stringenti (D.Lgs. 176/2011) e sono potabili.

Quello che fa davvero la differenza al supermercato è il formato. La stessa identica acqua può costare il 60-80% in meno se acquistata in fardello da 6 bottiglie da 1,5 L rispetto alla singola bottiglietta da 50 cl presa al frigo. È qui che il prezzo al litro (€/L) diventa lo strumento decisivo: confrontare il "prezzo etichetta" non basta — bisogna sempre normalizzare al litro per capire cosa si sta davvero pagando.

In Italia il prezzo per unità di misura è obbligatorio in scaffale dal 2005 (Codice del Consumo, art. 14), ma è stampato in carattere piccolo e a colpo d'occhio non risalta. Questo calcolatore ti permette di mettere in fila più prodotti — anche con formati e unità diverse (cl, ml, L) — e di leggere subito il vincitore.`,
    sections: [
      {
        heading: "Come si confronta l'acqua al litro",
        body: `Inserisci ogni prodotto come riga separata: prezzo del pack, numero di bottiglie/lattine contenute e volume di ciascuna. Il calcolatore converte tutto a €/L e ti mostra di quanto risparmi rispetto al miglior prezzo.

Esempio concreto: un fardello da 6 × 1,5 L a 1,99 € costa 0,22 €/L. La stessa marca venduta in singola bottiglia da 1,5 L al frigo costa spesso fra 0,80 e 0,95 € — cioè 0,55-0,65 €/L, quasi tre volte tanto. Il prezzo "comodità" del singolo si paga in modo sistematico.`,
      },
      {
        heading: "Errori comuni quando compri acqua",
        body: `Confrontare a occhio. 6 × 1,5 L sembra "più grande" di 24 × 50 cl, ma sono 9 L vs 12 L: a parità di prezzo è meglio il secondo. Il calcolatore evita questo tipo di abbagli istantaneamente.

Cadere sulle bottigliette piccole. I formati 33-50 cl hanno il €/L peggiore di tutto il reparto. Hanno senso solo per la borsa da palestra o un picnic — non per la spesa settimanale.

Ignorare le promozioni multipack. Spesso le insegne propongono "3 fardelli a un prezzo fisso". Convengono quasi sempre, a patto di avere spazio: un fardello da 9 L pesa 9 kg e occupa fisicamente molto.

Fissarsi su una sola marca. La fedeltà al brand sull'acqua minerale è quella che paga di meno in proporzione: le private label dell'insegna (Coop, Conad, Esselunga, Lidl) offrono acque ottime a 0,10-0,18 €/L contro 0,25-0,40 €/L dei marchi più noti.`,
      },
      {
        heading: "Naturale, frizzante, oligominerale: il prezzo cambia",
        body: `L'acqua frizzante costa in media 5-15 centesimi/L in più della naturale dello stesso brand: aggiungere CO₂ è un costo industriale, non un capriccio del listino.

Le acque oligominerali (basso residuo fisso, sotto i 50 mg/L) hanno spesso un prezzo più alto delle minimamente mineralizzate, perché provengono da sorgenti più rare. Non hanno però proprietà miracolose: sono semplicemente leggere al palato e adatte all'uso quotidiano, inclusa la preparazione di pappe per neonati.

Le acque premium in vetro costano 5-15× le minerali generiche. Hanno una percezione di qualità superiore al ristorante o come regalo, ma per uso quotidiano in casa si pagano molto sopra il valore d'uso reale.`,
      },
      {
        heading: "Quando il fardello non conviene",
        body: `Tre scenari pratici in cui i fardelli non sono la scelta migliore.

Spazio. Se vivi in spazi ridotti e non hai dove stoccare 50-100 litri d'acqua, conviene fare spese più piccole e frequenti, anche al costo di un €/L leggermente più alto.

Consumi bassi. Per single o coppie che mangiano spesso fuori casa, una bottiglia aperta da 1,5 L può restare in frigo qualche giorno: meglio formati piccoli consumati entro 24-48 h.

Acqua del rubinetto buona. In molte aree italiane (Milano, Torino, gran parte del nord) l'acqua di rubinetto è eccellente e costa fra 0,001 e 0,005 €/L: cento volte meno della minerale più economica. Una caraffa filtrante o una bottiglia di vetro riempita la sera basta a coprire un'intera famiglia. La scelta migliore in termini di €/L resta sempre quella di non comprare acqua minerale del tutto.`,
      },
    ],
    faq: [
      { q: "Conviene comprare l'acqua in fardello?", a: "Quasi sempre sì: il €/L scende del 30-50% rispetto alla bottiglia singola e fino al 70-80% rispetto alle bottigliette 50 cl. Verifica il prezzo per litro stampato sul cartellino del supermercato (è obbligo di legge in Italia dal 2005), e considera lo spazio di stoccaggio: un fardello da 9 L occupa fisicamente molto." },
      { q: "Acqua naturale o frizzante: il prezzo cambia?", a: "Sì, ma poco: la frizzante costa in media 5-15 centesimi/L in più della naturale dello stesso brand perché aggiungere CO₂ ha un costo industriale. Se la differenza è minima scegli quella che preferisci senza pensieri." },
      { q: "Quanta acqua serve a una famiglia di 4 persone al mese?", a: "Stima media: 1,5 L pro capite al giorno = circa 180 L/mese per 4 persone. Un fardello da 9 L copre 5 giorni, una decina di fardelli al mese sono sufficienti. Il dato sale del 20-30% in estate o se ci sono sportivi in famiglia." },
      { q: "Le acque premium in vetro valgono il prezzo extra?", a: "Per uso quotidiano in casa, no: costano 5-15× una minerale generica con qualità organolettica nella media. Hanno senso al ristorante, come regalo o quando il vetro è preferito per ragioni di gusto. Per la spesa di tutti i giorni la differenza di prezzo non è giustificata dal punto di vista nutrizionale." },
      { q: "Cosa significa residuo fisso in etichetta?", a: "È la quantità di sali minerali che resta evaporando 1 litro d'acqua a 180°C, espressa in mg/L. Le acque sotto 50 mg/L sono minimamente mineralizzate, fino a 500 mg/L sono oligominerali, sopra 1500 mg/L sono ricche di sali minerali. Non c'è un valore migliore in assoluto: dipende dalle tue esigenze e dal medico, se ne hai segnalate." },
      { q: "Marche private label (Coop, Conad, Lidl, Esselunga) hanno meno qualità?", a: "No: le private label sono imbottigliate dagli stessi stabilimenti delle marche più note (la fonte è dichiarata in etichetta) e rispettano gli stessi limiti di legge. Il risparmio rispetto al brand premium è di solito del 40-60% sul €/L, a parità di caratteristiche dichiarate." },
      { q: "È sicuro bere acqua dal rubinetto in Italia?", a: "Sì: l'acqua di rubinetto in Italia è una delle più controllate d'Europa. Il sapore varia per zona — al sud o vicino al mare può essere più dura, in molte aree del nord è eccellente. Per chi comunque preferisce l'acqua minerale, questo calcolatore aiuta a sceglierla al miglior prezzo: vale però la pena ricordare che il rubinetto a 0,001-0,005 €/L resta in assoluto l'opzione più economica." },
      { q: "Ogni quanto va consumata una bottiglia d'acqua aperta?", a: "Entro 24-48 ore se tenuta in frigo. La bottiglia chiusa ha invece una scadenza di 12-18 mesi indicata sull'etichetta: oltre quel termine l'acqua resta potabile ma il sapore può cambiare leggermente per via dell'interazione con la plastica." },
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
    guideTitle: "Guida alle bevande sportive: prezzo al litro",
    longDescription: `Le bevande sportive e isotoniche sono pensate per reintegrare liquidi e sali minerali dopo attività fisica intensa. Sul mercato italiano i prezzi al litro vanno da meno di 2 € per il formato fardello al supermercato a oltre 5 € per la bottiglietta venduta in palestra o al distributore — una differenza che dipende quasi solo dal formato e dal canale di vendita, non dal contenuto.

Il calcolatore qui sopra normalizza tutto a €/L confrontando bottiglie singole, multipack e fardelli anche fra unità diverse (ml, cl, L). Questo serve in particolare per le bevande sportive perché i formati sono molto frammentati: 250 ml in versione "shot", 500 ml "gym", 750 ml "endurance", 1 L "family".

Vale la pena ricordare che per attività fisica sotto l'ora, l'acqua è sufficiente per la maggior parte delle persone. Le bevande isotoniche entrano in gioco oltre i 60-90 minuti di sforzo intenso o in condizioni di forte calore: per usi sporadici al di sotto, è un acquisto che spesso non si giustifica nemmeno a parità di prezzo.`,
    sections: [
      {
        heading: "Formato singolo, multipack o fardello",
        body: `La bottiglietta da 500 ml è il formato più diffuso ma anche fra i meno convenienti: in media 3,50-4,50 €/L. Il multipack 6 × 500 ml scende intorno a 2,80-3,20 €/L (-20%), e il fardello 12 × 500 ml può arrivare sotto 2,50 €/L (-30%).

Per chi consuma regolarmente (allenamenti settimanali), il fardello è la scelta ovvia. Per chi usa la sport drink in modo occasionale (uscita in bici una volta al mese), il singolo formato resta più razionale per evitare scadenze.`,
      },
      {
        heading: "Pronto in bottiglia o polvere da diluire",
        body: `La polvere da diluire (bustine o barattoli) è il formato più conveniente in assoluto: una bustina che fa 500 ml costa in media 0,30-0,50 €, corrispondenti a 0,60-1,00 €/L finiti. Confrontato con i 3-4 €/L del pronto in bottiglia, il risparmio è 4-6×.

Il vincolo è la praticità: serve un bicchiere, acqua e tempo per scioglierla. Per uso domestico o lavoro in studio funziona benissimo. Per la palestra e l'allenamento outdoor il pronto in bottiglia resta più comodo, e il prezzo extra è il costo della comodità.`,
      },
      {
        heading: "Isotonica, ipotonica o ipertonica: cosa cambia",
        body: `Le bevande sportive si dividono in tre famiglie in base alla concentrazione di soluti rispetto al plasma sanguigno. Le isotoniche (la maggior parte: Powerade, Gatorade standard) hanno una concentrazione simile al sangue e si assorbono bene durante l'esercizio. Le ipotoniche (più diluite, alcune linee Energade) si assorbono ancora più rapidamente. Le ipertoniche (più concentrate, tipo gel energetici) sono pensate per il recupero post-sforzo o per attività di lunga durata.

A scaffale il prezzo non riflette questa categoria tecnica: dipende più dal brand e dal formato. Se non sei un atleta agonista, una isotonica generica al miglior €/L copre la grande maggioranza dei casi.`,
      },
      {
        heading: "Errori comuni",
        body: `Pagare il prezzo "distributore". Un distributore automatico in palestra fa 2-2,50 €/lattina da 33 cl: oltre 7 €/L. Cinque volte il supermercato. Conviene portarsi la bottiglietta da casa, comprata in fardello.

Comprare per "moda". Brand colorati e nuove edizioni stagionali costano spesso il 20-30% in più senza differenze sostanziali nella formulazione. Verifica gli ingredienti: zucchero/maltodestrine, sali minerali, aromi — sono molto simili fra prodotti.

Considerare le isotoniche un'idratazione quotidiana. Contengono 25-40 g di zucchero/L: bere una bottiglia da 500 ml ogni giorno fuori dall'attività sportiva aggiunge calorie senza giustificazione. L'acqua resta la scelta sana per il consumo regolare.`,
      },
    ],
    faq: [
      { q: "Le bevande sportive servono se non faccio sport intenso?", a: "Per attività sotto l'ora generalmente no: l'acqua basta. Le isotoniche aiutano oltre i 60-90 minuti di sforzo intenso, in caldo estremo o in attività con sudorazione profusa. Per uso quotidiano fuori dallo sport sono semplicemente bevande zuccherate (25-40 g zucchero/L), non integratori utili." },
      { q: "Polvere o bottiglia pronta: quale conviene?", a: "La polvere è 3-5× più economica al litro ma richiede preparazione. La bottiglia è comoda da portare in palestra. Decidi in base alla frequenza d'uso: per attività regolari la polvere fa una grande differenza nel budget annuale." },
      { q: "Una lattina 33 cl conviene rispetto a una bottiglia 1 L?", a: "Quasi mai: l'imballaggio piccolo costa di più al litro. Il calcolatore qui sopra normalizza al volo, anche fra unità diverse (cl vs L)." },
      { q: "Isotoniche con zucchero o zero: c'è una scelta migliore?", a: "Dipende dall'uso. Per sport intensi con sudorazione importante lo zucchero (15-30 g/L) è funzionale al reintegro energetico. Per consumi più moderati le versioni zero sono preferibili dal punto di vista calorico, a parità di sali." },
      { q: "Le bevande sportive sostituiscono i sali minerali in bustina?", a: "Quasi: contengono sodio, potassio, magnesio in forma più diluita. Per la maggior parte degli sportivi amatoriali la bevanda isotonica copre il fabbisogno. Le bustine di sali concentrati hanno senso per atleti agonisti o per il recupero da sudorazioni intense (caldo, lunghe distanze)." },
      { q: "Si conservano a temperatura ambiente?", a: "Sì, fino all'apertura della bottiglia, indicato dalla data di scadenza in etichetta (di solito 12-18 mesi). Dopo l'apertura vanno consumate entro 24-36 ore in frigo: i sali e gli zuccheri sono terreno fertile per i batteri." },
      { q: "Quale è il momento giusto per berle?", a: "Durante lo sforzo prolungato (oltre 60-90 minuti) e nelle prime 2 ore dopo. Bere isotoniche prima dello sforzo non offre vantaggi per la maggior parte delle persone; bere acqua basta." },
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
    guideTitle: "Guida alle bibite: come confrontare il prezzo al litro",
    longDescription: `Bibite gassate, tè freddi, energy drink: è uno dei reparti dove il prezzo "al pezzo" inganna di più. La stessa bevanda dello stesso brand può costare 1,80 €/L in bottiglia 1,5 L e 2,80 €/L in lattina 33 cl venduta singola — a parità di contenuto e di marca. Il costo è quasi tutto nell'imballaggio (vetro e alluminio pesano molto di più della plastica PET sul prezzo finale) e nel canale di vendita.

Il calcolatore qui sopra normalizza tutto a €/L su qualunque formato — lattina singola, multipack 6, fardello, bottiglie PET di diverse taglie — anche fra unità diverse (cl, ml, L). È particolarmente utile in questo reparto perché i layout di scaffale mescolano deliberatamente confezioni e taglie per ostacolare il confronto rapido.

Sul piano economico la regola generale è semplice: PET grande > multipack lattine > bottiglia piccola > lattina singola > distributore automatico. La differenza fra il primo e l'ultimo punto della scala è 4-6×.`,
    sections: [
      {
        heading: "Lattina, PET, vetro: come cambia il prezzo",
        body: `A parità di brand e di contenuto, lo stesso prodotto cambia €/L sensibilmente in base al formato:

— PET 1,5 L: 1,50-2,00 €/L (il più conveniente al supermercato)
— Multipack 6 lattine 33 cl: 2,00-2,60 €/L
— Bottiglia vetro 1 L: 2,50-3,20 €/L (preferita per gusto da alcuni)
— Lattina singola 33 cl: 2,70-3,50 €/L
— Distributore automatico/bar: 5-8 €/L

La lattina pesa di più perché l'alluminio è caro da estrudere; il vetro perché trasporto e lavaggio (per il vuoto a rendere, dove esiste) impattano molto. La PET resta lo standard più economico per il consumo casalingo.`,
      },
      {
        heading: "Brand vs private label",
        body: `Nelle bibite gassate la differenza di percezione fra brand storici (Coca-Cola, Pepsi, Fanta) e private label dell'insegna (Coop, Conad, Lidl, Esselunga) è marcata, ma i blind test consumer (Altroconsumo ha pubblicato test ricorrenti) mostrano che il pubblico distingue con difficoltà sopra una soglia di accettabilità.

I prezzi: Coca-Cola PET 1,5 L viaggia intorno a 2,00-2,30 €/L, una cola private label dello stesso formato sta a 0,80-1,20 €/L. Differenza del 50-60% per un prodotto che sul gusto è simile per la gran parte dei consumatori. Per uso quotidiano (pranzi in famiglia, riserva da pranzo) la private label è una scelta razionale; il brand ha senso per momenti più "rituali" se la differenza viene percepita.`,
      },
      {
        heading: "Energy drink: il reparto con i margini più estremi",
        body: `Il segmento energy drink ha la struttura di prezzo più aggressiva. La stessa lattina da 250 ml:

— Multipack supermercato: 0,80-1,20 €
— Lattina singola supermercato: 1,30-1,80 €
— Bar/edicola: 2,50-3,50 €
— Distributore notturno: 4-5 €

Per chi ne consuma regolarmente, il multipack 24 lattine in offerta scende sotto 6 €/L: paragonato ai 14-20 €/L del bar, vale la pena fare scorta. Si conservano a temperatura ambiente per 12 mesi.`,
      },
      {
        heading: "Errori comuni nel reparto bibite",
        body: `Cadere sulle bottiglie 50 cl. Il formato singolo 50 cl per "merenda" ha sempre il €/L peggiore della categoria — anche peggio della lattina. Se ti serve un singolo formato comodo, la lattina batte di solito la mezza bottiglia.

Comprare il "formato party". Le bottiglie 2 L sono pratiche per pranzi numerosi ma una volta aperte perdono la gasatura in 24-48 ore. Per uso normale, due bottiglie 1 L si gestiscono meglio della 2 L.

Sottovalutare le offerte fardello. Le insegne ruotano spesso "3 fardelli a prezzo fisso" su cola, aranciata, tè freddo. Vale la pena fare scorta se hai dove stoccare: la shelf-life è 9-12 mesi.

Pensare che "zero" costi sempre uguale. Le versioni zero (Zero Sugar, Light) costano spesso 5-10% in più della classica per via dei volumi di produzione minori. Il calcolatore aiuta a vedere se conviene fare la scelta zucchero/zero in funzione del prezzo.`,
      },
    ],
    faq: [
      { q: "Conviene il fardello da 6 lattine o la bottiglia 1,5 L?", a: "Le lattine costano in media il 20-30% in più al litro perché l'imballaggio metallico pesa sul prezzo. Calcola sempre €/L con questo strumento: nella stragrande maggioranza dei casi la PET 1,5 L è il formato più economico." },
      { q: "Le marche del supermercato (private label) hanno la stessa qualità?", a: "Su cola, aranciata e tè freddo le private label (Coop, Conad, Lidl, Esselunga) costano il 40-60% in meno con qualità sufficiente per uso quotidiano. I blind test pubblicati da associazioni di consumatori sono spesso inconcludenti sui prodotti carbonati a basso brand recognition." },
      { q: "Energy drink al supermercato vs al bar?", a: "Al supermercato 1-2 €/lattina, al bar 4-6 €. Stesso prodotto, stesso volume, prezzo 3× più alto. Se ne consumi più di una a settimana il multipack supermercato porta a risparmiare 100-200 €/anno." },
      { q: "Le versioni zero/light costano uguale?", a: "Generalmente sì o leggermente di più (5-10% in più) per via dei volumi minori. La differenza è marginale: scegli in base alle preferenze, non al prezzo." },
      { q: "Una bibita aperta quanto si conserva?", a: "Le gassate perdono molta CO₂ in 24-36 ore anche tappate in frigo. I tè freddi e i nettari (non gassati) durano 3-5 giorni in frigo. Le energy drink aperte si comportano come le gassate." },
      { q: "Quanto zucchero contiene una lattina 33 cl?", a: "Una cola classica ne contiene circa 35 g (7 cucchiaini). Le aranciate sui 32-38 g. Le energy drink classiche 27-30 g. Le versioni zero hanno < 1 g. È un dato utile per impostare i tuoi consumi consapevolmente." },
      { q: "Bottiglia in vetro o PET: la bibita ha lo stesso sapore?", a: "In teoria il prodotto è identico. Molti consumatori riportano un sapore più 'pulito' dal vetro, probabilmente per l'assenza di interazione plastica-bevanda e per il fatto che il vetro mantiene meglio le basse temperature. Il prezzo del vetro è 30-50% superiore al PET." },
      { q: "Quando conviene davvero il fardello?", a: "Quando consumi almeno 4-6 litri al mese del formato e hai spazio per stoccare. Sotto questa soglia rischi di non finirlo prima della perdita di freschezza/gusto (specialmente per i formati grandi)." },
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
    guideTitle: "Guida alle capsule caffè: prezzo per capsula",
    longDescription: `Le capsule caffè sono uno dei reparti dove il "prezzo per capsula" varia di più, anche del 200-300% fra il pacchetto più piccolo e il megapack online. Una scatola da 10 capsule al supermercato può costare 5 € (0,50 €/capsula), un megapack da 100 capsule dello stesso brand online viaggia spesso sotto i 25 €, cioè 0,25 €/capsula. A parità di gusto e sistema.

Il calcolatore qui sopra confronta i pacchi di capsule (anche di formati molto diversi) e mostra il €/capsula così sai quale astuccio comprare. Funziona per ogni sistema: Nespresso Original, Dolce Gusto, A Modo Mio, Lavazza Espresso Point, capsule per moka, cialde ESE. La regola è confrontare sempre capsule dello stesso sistema, perché ogni macchina ha un suo formato e il volume di caffè a tazza varia.

Per chi consuma 2 caffè al giorno (60 capsule al mese, 720 all'anno), la differenza fra 0,50 €/capsula e 0,25 €/capsula significa 180 € all'anno di risparmio: vale la pena scegliere bene il canale e il formato.`,
    sections: [
      {
        heading: "Originali vs compatibili: cosa cambia davvero",
        body: `Le capsule "originali" del produttore della macchina (Nespresso, Lavazza A Modo Mio, Nescafé Dolce Gusto) costano in media 0,35-0,55 €/capsula al canale ufficiale o nei negozi monomarca. Le capsule compatibili, prodotte da terzi (Borbone, Kimbo, Pellini, Verzì e centinaia di altri brand), costano 0,15-0,30 €/capsula.

La qualità delle compatibili è migliorata molto negli ultimi 5-7 anni: i blind test pubblicati da Altroconsumo e altre testate consumer mostrano che molte compatibili reggono il confronto con le originali e in alcuni casi le superano. La sceltà fra originale e compatibile dipende da gusto soggettivo e da quanto premi la coerenza del singolo brand vs il prezzo.

Attenzione alla compatibilità reale: per Nespresso, il sistema "Original" (le classiche capsule alluminio) è diverso dal "Vertuo" (capsule più grandi con codici bar). Per Lavazza, "A Modo Mio" ≠ "Espresso Point" ≠ "Firma" (sistema business). Verifica sempre il sistema della tua macchina prima di acquistare.`,
      },
      {
        heading: "Astuccio piccolo, multipack o megapack",
        body: `Lo stesso brand, lo stesso gusto, prezzi per capsula molto diversi a seconda del formato:

— Astuccio 10 capsule: 0,40-0,55 €/capsula (formato "prova" o regalo)
— Astuccio 30-50 capsule: 0,30-0,40 €/capsula (formato standard)
— Megapack 100 capsule: 0,22-0,30 €/capsula
— Multipack 3 × 50 / 4 × 50: 0,18-0,25 €/capsula (offerte ricorrenti)

Per chi consuma con regolarità, il megapack o il multipack è la scelta ovvia: rapporto formato/prezzo migliore, e la shelf-life delle capsule (1,5-2 anni dalla data di tostatura) è ampiamente sufficiente.`,
      },
      {
        heading: "Supermercato, monomarca o online",
        body: `Tre canali con prezzi medi diversi:

— Supermercato: 0,30-0,45 €/capsula sul formato standard. Buono per il singolo astuccio quando finisci la scorta.
— Negozi monomarca/brand store: 0,35-0,50 €/capsula per le originali. Conviene per le edizioni limitate o per i sistemi di reso che alcuni brand offrono.
— Online (Amazon, store brand): 0,18-0,30 €/capsula sul megapack. La scelta più economica in assoluto se ordini almeno 100 capsule alla volta.

Per il consumo domestico regolare, una scorta online ogni 2-3 mesi è la combinazione ottimale fra prezzo e logistica.`,
      },
      {
        heading: "Errori comuni",
        body: `Comprare l'astuccio piccolo "perché sicuri". Se sai che il gusto ti piace già, l'astuccio 10 capsule è il formato più caro al pezzo. Vai sul megapack: la differenza è 40-60%.

Mescolare sistemi diversi. Le capsule Nespresso Original non funzionano sulla Vertuo, le A Modo Mio non funzionano sulla Espresso Point. Compra solo capsule del tuo sistema esatto.

Sopravvalutare la freschezza. Le capsule sigillate mantengono il caffè in azoto e la freschezza è preservata per 12-18 mesi. Non c'è un vantaggio reale ad acquistare 10 capsule "fresche" rispetto a 100 capsule della stessa lotta di produzione.

Ignorare i sistemi alternativi. Le moka classica (caffè macinato) costa 8-15 €/kg, equivalenti a 0,06-0,12 €/tazza: 3-5× meno della migliore capsula. Se hai tempo, la moka resta imbattibile sul €/tazza, mantenendo qualità altissima.`,
      },
    ],
    faq: [
      { q: "Capsule originali o compatibili: cosa conviene?", a: "Le compatibili costano il 30-50% in meno con qualità spesso ottima. Verifica sempre la compatibilità con la tua macchina (Nespresso Original ≠ Vertuo, A Modo Mio ≠ Espresso Point). Se sei alla prima esperienza, prova un astuccio piccolo prima di prendere il megapack." },
      { q: "Online o supermercato per le capsule?", a: "Online (Amazon, brand website) i megapack 100+ scendono sotto i 25 cent/capsula; il supermercato di solito ferma intorno a 30-40 cent. Per chi consuma regolarmente, l'online vince nettamente sul lungo periodo." },
      { q: "Quante capsule consuma una persona al mese?", a: "Media: 2 caffè al giorno × 30 giorni = 60 capsule/mese. Un megapack da 100 dura circa 50 giorni a coppia. Per single regolari, ordini ogni 2 mesi sono la cadenza giusta." },
      { q: "Le capsule scadono?", a: "Hanno una scadenza dichiarata di 12-18 mesi dalla tostatura. Sigillate mantengono il caffè in azoto: anche oltre la data l'aroma può essere ridotto ma non sono pericolose. Per il gusto ottimale, consumale entro 6-9 mesi dall'acquisto." },
      { q: "Sono riciclabili?", a: "Dipende dal materiale. Le Nespresso originali sono in alluminio e Nespresso ha un programma di raccolta gratuito (nei negozi, presso alcuni punti). Le capsule compatibili in plastica vanno spesso nell'indifferenziato, alcune in plastica biodegradabile vanno nell'umido. Leggi sempre l'etichetta per la corretta differenziazione." },
      { q: "Il decaffeinato costa più del normale?", a: "Sì, mediamente il 10-20% in più, per via del processo di decaffeinizzazione. Le compatibili decaffeinato sono il modo più economico per averlo: 0,20-0,30 €/capsula contro i 0,45-0,55 € degli originali." },
      { q: "Caffè in capsula vs moka vs filtro: chi vince sul €/tazza?", a: "La moka resta imbattibile: 0,06-0,12 €/tazza. Le capsule sono 2-5× più care per la praticità. Il filtro (americano) sta nel mezzo. La scelta dipende dal tempo che vuoi dedicare al rito mattutino." },
      { q: "Le capsule \"sconto\" online sono sicure?", a: "Per i grandi marketplace (Amazon, eBay con venditori verificati) sì. Diffida solo da prezzi anomali sotto 15 cent/capsula su brand premium: spesso sono capsule prossime alla scadenza, restock di lotti vecchi o falsificazioni. Compra da venditori con almeno 100 recensioni positive." },
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
    guideTitle: "Guida alla carta igienica: prezzo per strappo",
    longDescription: `La carta igienica è uno dei prodotti dove la confusione fra formati e numero di strappi è più estrema. Lo stesso pacco da "12 rotoli" può contenere 12 × 150 strappi (1.800 strappi totali) o 12 × 250 strappi (3.000 strappi totali) — con uno scarto del 66% sulla quantità reale di prodotto a parità di "numero di rotoli". Il €/rotolo non dice nulla; il €/strappo è l'unico parametro che permette di confrontare seriamente.

Il calcolatore qui sopra prende numero di rotoli e numero di strappi per rotolo e restituisce il €/strappo, anche fra brand, veli e formati molto diversi. È uno dei reparti dove l'app fa la differenza più visibile: due pacchi a prezzo simile possono nascondere il 30-40% di differenza reale sul prodotto.

Le scorte di carta igienica sono uno dei pochi casi dove "fare scorta" è quasi sempre razionale: dura indefinitamente in dispensa, occupa poco peso, le offerte mega-rotolo si ripetono regolarmente.`,
    sections: [
      {
        heading: "Doppio, triplo o quadruplo velo: cosa cambia",
        body: `Il numero di veli determina spessore e morbidezza, ma incide poco sul €/strappo finale. A parità di brand:

— Doppio velo: 150-200 strappi/rotolo, 0,5-0,7 cent/strappo
— Triplo velo: 130-180 strappi/rotolo, 0,6-0,9 cent/strappo
— Quadruplo velo (premium): 100-150 strappi/rotolo, 0,8-1,2 cent/strappo

I rotoli a più veli hanno spesso strappi più corti per mantenere il diametro del rotolo simile. Il calcolo è ingannevole: un quadruplo velo da 120 strappi sembra "più piccolo" del doppio velo da 200, ma il consumo reale dipende dalle abitudini personali. Per la maggior parte degli usi quotidiani, il doppio velo è sufficiente in termini di morbidezza e batte ampiamente sul €/strappo.`,
      },
      {
        heading: "Maxi-rotolo, mega-rotolo, jumbo: quando convengono",
        body: `Le formule "maxi" e "mega" significano semplicemente più strappi per rotolo — non rotoli più grossi nel senso tradizionale. Lavorano sull'effetto psicologico del "comprerò meno spesso":

— Rotolo standard: 150-200 strappi
— Maxi-rotolo: 250-300 strappi (+50%)
— Mega-rotolo / Jumbo: 300-400+ strappi (+100%)
— Mega ultra (formati specialty): fino a 500 strappi

Il €/strappo di un mega-rotolo scende del 15-25% rispetto al pacco standard equivalente. Vincolo: alcuni mega-rotoli non entrano nei portarotolo classici (diametro 12-14 cm vs 10-11 cm dello standard). Misura prima di acquistare un mega.`,
      },
      {
        heading: "Brand vs private label",
        body: `In carta igienica la differenza fra brand storici (Scottex, Foxy, Regina) e private label (Coop, Conad, Lidl, Esselunga) si gioca soprattutto sulla percezione di morbidezza e sulla profumazione, non sulla funzionalità.

Prezzi tipici:
— Brand premium standard: 0,7-1,0 cent/strappo
— Brand premium mega: 0,5-0,7 cent/strappo
— Private label standard: 0,4-0,6 cent/strappo
— Private label mega/offerta: 0,3-0,5 cent/strappo

Per il consumo quotidiano la private label batte sistematicamente sul prezzo, con uno stacco del 30-50%. Le carte profumate o "morbide premium" hanno senso solo se la differenza viene percepita e valorizzata; per uso quotidiano normale la private label copre bene il bisogno.`,
      },
      {
        heading: "Shrinkflation: il trucco invisibile",
        body: `La shrinkflation è la pratica di ridurre silenziosamente la quantità di prodotto mantenendo lo stesso prezzo. La carta igienica è uno dei prodotti più colpiti: un pacco "12 rotoli x 200 strappi" ridiventa "12 rotoli x 180 strappi" mantenendo lo stesso prezzo, il packaging quasi identico e nessuna comunicazione al consumatore.

Solo il €/strappo svela il fenomeno. Se hai una memoria storica di "questa marca a 0,45 cent/strappo" e all'improvviso costa 0,52 cent/strappo a parità di prezzo etichetta, c'è stato uno shrinking del 15%. Questo calcolatore aiuta a tenere il monitoraggio se salvi i confronti che fai mese per mese.

In Italia non c'è obbligo di indicare le variazioni di formato in modo evidente; in alcuni paesi europei (Francia 2023, Spagna 2024) è in discussione l'obbligo di etichetta "shrinkflation".`,
      },
    ],
    faq: [
      { q: "I rotoli più grandi convengono sempre?", a: "Quasi sempre: maxi-rotoli e mega-rotoli scendono sotto 0,4 cent/strappo, contro i 0,6-0,8 cent dei rotoli classici. Calcola con questo strumento. Verifica solo che il diametro entri nel tuo portarotolo (alcuni mega arrivano a 13-14 cm)." },
      { q: "Doppio velo o triplo velo: cambia il numero di strappi?", a: "Sì: a parità di formato esterno, il triplo velo ha tipicamente meno strappi (~150 vs 200 del doppio) per mantenere lo stesso diametro del rotolo. Tienine conto nel calcolo: il prezzo per strappo del triplo velo può essere più alto anche se è 'più premium'." },
      { q: "Cos'è la shrinkflation sulla carta igienica?", a: "È quando il numero di strappi per rotolo cala silenziosamente (es. da 200 a 180) ma il prezzo resta uguale. Solo il €/strappo lo svela. Capita regolarmente sui brand premium: tieni traccia dei confronti che fai mese per mese." },
      { q: "Quanti rotoli usa una persona al mese?", a: "Stima media: 1 rotolo da 200 strappi a settimana per persona, cioè 4-5 rotoli al mese. Una famiglia di 4 persone usa quindi circa 16-20 rotoli/mese, o 200-240 all'anno. Un megapack da 24 mega-rotoli copre 2-3 mesi." },
      { q: "Carta riciclata vs cellulosa vergine: differenza di prezzo?", a: "La riciclata costa il 10-20% in meno della cellulosa vergine ed è meglio per l'ambiente. La morbidezza percepita è leggermente inferiore ma per uso quotidiano la differenza è minima. Brand come Tenderly e linee private label offrono ottime alternative riciclate." },
      { q: "Profumata o senza profumo: cosa scegliere?", a: "Le profumate costano il 5-15% in più. L'efficacia dell'effetto profumato è breve (poche ore) e per alcune persone può causare irritazioni. Per pelli sensibili, scegli versioni senza profumo o ipoallergeniche." },
      { q: "Veline o salviette umidificate: come si confrontano?", a: "Le salviette umidificate non sono comparabili 1:1 con la carta igienica classica: costano 3-5× di più per uso e non sono biodegradabili nello scarico (vanno nell'indifferenziato). Vanno bene come complemento, non come sostituto." },
      { q: "Quanti strappi servono per uso?", a: "Stima media: 6-8 strappi per uso adulto. Le statistiche di mercato indicano un consumo medio di 50-60 strappi/persona/giorno. Sono dati utili per stimare quanti rotoli ti servono prima di fare scorta." },
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
    guideTitle: "Guida al detersivo lavatrice: prezzo per lavaggio",
    longDescription: `Il detersivo per lavatrice è il prodotto dove il "€/L" inganna di più. Un detersivo concentrato da 750 ml che dichiara 44 lavaggi può costare molto meno per lavaggio di uno standard da 1,5 L che ne fa solo 24, anche se il prezzo etichetta è simile. L'unica metrica utile è il €/lavaggio: rapporto fra prezzo della confezione e numero di lavaggi dichiarati.

Il calcolatore qui sopra usa esattamente questa formula. Inserisci prezzo, formato e — campo chiave — il numero di lavaggi dichiarato in confezione. Il sistema ti mostra il €/lavaggio così confronti formati e brand su una base reale di utilizzo.

Sul mercato italiano i prezzi per lavaggio vanno da circa 0,15 €/lavaggio per i concentrati private label in offerta a 0,50-0,60 €/lavaggio per le capsule monodose dei brand premium. Per una famiglia che fa 6-8 lavaggi a settimana (300-400 all'anno), passare da 0,40 a 0,20 €/lavaggio significa 60-80 € di risparmio annuo.`,
    sections: [
      {
        heading: "Liquido standard, concentrato o capsule monodose",
        body: `Tre formati con economie diverse:

— Liquido standard (1,5-3 L, dosaggio ~75 ml/lavaggio): 0,20-0,35 €/lavaggio. Il formato base, sempre disponibile, dosaggio manuale.
— Liquido concentrato (750 ml-1 L, dosaggio ~30-40 ml): 0,18-0,32 €/lavaggio. Meno spazio in lavanderia, stesso costo o lievemente migliore. Va dosato bene perché meno volume significa più sensibilità all'errore.
— Capsule monodose: 0,30-0,55 €/lavaggio. Praticità massima ma €/lavaggio più alto del 30-50%. Hanno senso con bambini, per chi sbaglia spesso il dosaggio o per chi viaggia con la lavatrice condivisa (lavanderie).

Per uso quotidiano in famiglia, il concentrato è il sweet spot fra prezzo, ingombro e affidabilità del dosaggio.`,
      },
      {
        heading: "Quanti lavaggi davvero per confezione",
        body: `Il numero di lavaggi dichiarato in etichetta si riferisce a condizioni standard: carico di 4-5 kg, acqua di durezza media, sporco normale. Nella realtà i lavaggi effettivi possono essere meno del 15-25% in due casi:

— Acqua dura. Nelle zone con acqua a >25 °F (gran parte del nord Italia, alcune zone del centro) il detersivo "lavora" meno e serve un dosaggio extra. In queste aree, aggiungere un addolcitore (Calfort o equivalente) può migliorare le prestazioni con dose ridotta.

— Carichi pieni o capi molto sporchi. Per un carico da 7-8 kg (lavatrici moderne) o per tessuti molto sporchi (lavoro fisico, sport), il dosaggio cresce del 30-50%, quindi il numero di lavaggi reali cala di pari misura.

Per la maggior parte dei casi, calcola il €/lavaggio con il numero dichiarato e considera che il valore reale è il 15-20% peggiore di quello teorico.`,
      },
      {
        heading: "Brand premium vs private label",
        body: `Sul detersivo lavatrice la differenza fra brand premium (Dash, Dixan, Bolt, Perlana) e private label (Coop, Conad, Lidl, Esselunga) è più marcata nella percezione di profumo che nella pulizia effettiva. I test pubblicati da associazioni di consumatori (Altroconsumo, Test-Achats) hanno ripetutamente mostrato che le private label coprono l'80% dei casi d'uso con risultati paragonabili.

Prezzi tipici:
— Brand premium concentrato: 0,28-0,40 €/lavaggio
— Brand premium standard: 0,22-0,32 €/lavaggio
— Private label concentrato: 0,18-0,25 €/lavaggio
— Private label standard: 0,15-0,22 €/lavaggio

Per bucato quotidiano, la private label batte chiaramente. Per capi delicati (lana, seta) o per chi tiene molto alla profumazione finale, alcuni brand specialistici (Perlana, ad esempio, per i delicati) restano un riferimento.`,
      },
      {
        heading: "Ammorbidente: serve davvero?",
        body: `L'ammorbidente è venduto in associazione al detersivo ma è un prodotto separato. Funzioni dichiarate: ammorbidisce le fibre, riduce l'elettrostaticità, profuma il bucato.

Costa 0,05-0,15 €/lavaggio aggiuntivi rispetto al solo detersivo. Per la maggior parte dei tessuti moderni (cotone trattato, sintetici) il vantaggio funzionale è marginale; il valore principale è la profumazione persistente. Se vuoi profumo senza ammorbidente, alcuni detersivi hanno già una profumazione molto persistente.

Vincoli da considerare: l'ammorbidente non va usato su asciugamani in spugna (riduce l'assorbenza), tessuti tecnici sportivi (intasa le fibre) e capi in microfibra. Per chi non lo usa, il risparmio annuale è 15-50 € su una famiglia media.`,
      },
    ],
    faq: [
      { q: "Concentrato o standard: quale conviene?", a: "Quasi sempre il concentrato vince a €/lavaggio, anche se costa di più nominalmente. Confronta sempre i lavaggi dichiarati, non i ml o i litri. Il concentrato è anche più ecologico (meno acqua trasportata, meno plastica)." },
      { q: "Le capsule monodose convengono?", a: "Sono pratiche ma 30-50% più care a lavaggio del liquido. Hanno senso se sprechi spesso il dosaggio liquido, con bambini in casa o in lavanderie condivise. Per uso domestico regolare il liquido concentrato batte." },
      { q: "Posso fidarmi del numero di lavaggi dichiarato?", a: "Indica il valore tipico per 5 kg di carico in acqua di durezza media. Se la tua acqua è dura o il carico è più grande, riduci la stima del 15-20%. Per acqua molto dura (sopra 30 °F) considera di aggiungere un addolcitore al lavaggio." },
      { q: "Detersivo liquido o in polvere?", a: "Il liquido domina ora il mercato per praticità di dosaggio e funzionamento a basse temperature. La polvere ha ancora un vantaggio sul bucato bianco e a temperature alte (60° o più), ed è in genere il 10-15% più economica a lavaggio, ma è poco usata sui carichi moderni a 30-40°." },
      { q: "L'ammorbidente è indispensabile?", a: "No: serve principalmente per profumo e morbidezza percepita. Su asciugamani in spugna e tessuti tecnici è anzi sconsigliato (riduce assorbenza). Saltarlo significa risparmiare 15-50 €/anno per una famiglia media e non ha conseguenze sulla pulizia." },
      { q: "Detersivi 'eco' o bio costano di più?", a: "I detersivi ecologici certificati (Ecolabel UE) costano in media il 15-25% in più per lavaggio. Le prestazioni sui carichi normali sono paragonabili, su sporco intenso possono essere lievemente inferiori. La scelta è prevalentemente etica/ambientale." },
      { q: "Detersivo per colorati vs universale: serve?", a: "Per capi colorati nuovi (primi 3-5 lavaggi) il detersivo specifico riduce lo scarico del colore. Una volta che il capo è 'stabilizzato', l'universale va bene per quasi tutto. Avere due bottiglie ha senso per chi compra spesso capi colorati nuovi." },
      { q: "Quanto detersivo per un carico medio?", a: "Per un carico 5 kg con acqua media usa il dosaggio indicato (~75 ml liquido standard, ~30-40 ml concentrato). Aumenta del 20-30% per carichi 7-8 kg o sporco intenso. Diminuisci del 20% per piccoli carichi 2-3 kg. Il sovra-dosaggio non migliora la pulizia, lascia residui sui tessuti." },
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
    guideTitle: "Guida al detersivo per piatti: prezzo al litro",
    longDescription: `Il detersivo per piatti a mano è uno dei prodotti di consumo più stabili: una famiglia ne usa 1-1,5 L al mese, con un budget annuale di 30-60 €. Il prezzo al litro varia da meno di 2 €/L per le marche economiche o le offerte ricariche a oltre 6 €/L per i formati piccoli premium.

Il calcolatore qui sopra confronta tutti i formati (250 ml fino a 1 L+) e i tipi (standard, concentrato, ecologico) sulla scala uniforme dei €/L. Particolarmente utile perché lo scaffale alterna deliberatamente formati comparabili a prezzo simile ma quantità diverse.

Da tenere a mente: il €/L non racconta tutto quando si confrontano standard e concentrato. I concentrati richiedono meno dose per piatto, quindi possono costare di più al litro ma meno per lavaggio. La regola pratica è verificare la "resa per dose" indicata in etichetta (numero di piatti per bottiglia, dove dichiarato).`,
    sections: [
      {
        heading: "Concentrato, ultra-concentrato, standard",
        body: `Le tre famiglie principali sul mercato italiano:

— Standard: il prodotto tradizionale, dose tipica 5-8 ml per lavata, prezzo 2,50-4,50 €/L.
— Concentrato (es. "Active", "Ultra Power"): formula più densa, dose ridotta a 2-4 ml per lavata, prezzo 4,50-6,50 €/L. €/lavata spesso inferiore allo standard.
— Eco/biodegradabile: tensioattivi vegetali, dose simile allo standard, prezzo 3,50-5,50 €/L. Scelta prevalentemente etica.

Per un confronto serio bisogna stimare il numero di lavate per bottiglia. Una bottiglia standard 750 ml a 2,99 € (= 3,99 €/L) fa circa 100-150 lavate. Un concentrato 500 ml a 3,49 € (= 6,98 €/L) ne fa 150-200. A parità di lavate, il concentrato costa meno o uguale.`,
      },
      {
        heading: "Ricariche eco: convengono davvero",
        body: `Le ricariche (bustine flessibili, doypack) si stanno diffondendo come alternativa al flacone rigido. Vantaggi:

— Prezzo al litro 15-25% inferiore al flacone standard equivalente, perché la plastica usata è meno e il marchio premium ne tiene conto.
— Minor uso di plastica: una bustina ricarica usa 70-80% meno plastica del flacone rigido.
— Stesso prodotto, stessa concentrazione: nessuna differenza qualitativa.

Vincoli: serve un flacone vuoto compatibile in casa, e l'apertura/travaso può essere un po' meno pulito del flacone preformato. Per chi ha già il dosatore, è la scelta più economica e sostenibile.`,
      },
      {
        heading: "Sapone solido per piatti: la nicchia da considerare",
        body: `In crescita negli ultimi anni, il sapone solido per piatti (sapone "tigre", pani concentrati) è la forma più economica in assoluto. Un panetto da 130-150 g costa 2-4 €, ed equivale a 2-3 bottiglie liquide standard in resa.

Vantaggi: prezzo per lavata sotto 1 cent (vs 2-3 cent del liquido medio), zero plastica, dura mesi e mesi. Vincoli: serve abituarsi al gesto (umidire spugna, strofinare sul panetto), risciacquare bene perché sgrassa più aggressivamente del liquido.

Per chi vuole massimizzare il risparmio e ridurre la plastica, è la scelta più radicale.`,
      },
      {
        heading: "Errori comuni",
        body: `Confrontare bottiglie a prezzo etichetta. Una 500 ml a 1,99 € e una 750 ml a 2,49 € sembrano simili: in realtà la seconda costa il 17% meno al litro. Senza calcolatrice è invisibile.

Sopra-dosare per "fare prima". Mettere il triplo del detersivo non lava di più: lascia residui che vanno risciacquati con più acqua. La dose corretta è 3-5 ml (un getto piccolo) per 4-6 piatti.

Pensare che "schiuma = pulito". La schiuma è prevalentemente effetto di tensioattivi schiumogeni aggiunti. I detersivi a bassa schiuma ("low foam") lavano altrettanto bene con meno acqua di risciacquo. È un parametro psicologico, non funzionale.

Comprare formati grandi senza spazio. Le bottiglie 1,5 L convengono al litro ma occupano molto sotto il lavello. Se hai poco spazio, due 750 ml a rotazione possono essere più pratici a parità di consumi.`,
      },
    ],
    faq: [
      { q: "Concentrato vs standard: quale conviene?", a: "I concentrati 'extra' rendono fino al 50% in più per dose. Il €/L sembra alto ma il €/lavaggio è inferiore: per uso quotidiano la scelta razionale è il concentrato, se la marca ti soddisfa." },
      { q: "Quanto detersivo per lavaggio a mano?", a: "1-2 ml per piatto, 3-5 ml per un set completo (4-6 piatti). Una bottiglia 750 ml dura 2-3 mesi per uso quotidiano in famiglia. Sovra-dosare lascia residui e richiede più acqua di risciacquo." },
      { q: "Le ricariche convengono?", a: "Sì: scendono del 15-25% al litro rispetto al flacone equivalente. Usano anche il 70-80% meno plastica. L'unico vincolo è avere già un flacone vuoto compatibile in casa." },
      { q: "Sapone solido per piatti: funziona?", a: "Sì, anche meglio del liquido sui residui grassi. Costa 5-10× meno al lavaggio. Serve abituarsi al gesto (umidire spugna, strofinare sul panetto). È la scelta più economica e meno inquinante in assoluto." },
      { q: "Detersivi 'eco' o tradizionali: differenza pratica?", a: "Sulle prestazioni di pulizia la differenza è minima per uso domestico normale. Sul prezzo gli eco costano il 10-20% in più. Sulla biodegradabilità gli eco impattano meno (tensioattivi vegetali, packaging riciclabile). Scelta prevalentemente etica." },
      { q: "Brand premium o private label?", a: "I private label (Coop, Conad, Lidl, Esselunga) costano la metà o meno dei brand premium con prestazioni paragonabili per uso quotidiano. I brand premium hanno spesso profumi e formule più gradevoli, ma la differenza non giustifica il +100% di prezzo per la maggior parte degli usi." },
      { q: "Il detersivo per piatti si può usare in lavastoviglie?", a: "No, mai: produce troppa schiuma che esce dalla macchina e può danneggiare i componenti elettrici. Le tabs/cialde per lavastoviglie sono formulate specificamente (bassa schiuma, alta alcalinità). Sono prodotti diversi." },
      { q: "Quanto dura il detersivo aperto?", a: "12-24 mesi dopo l'apertura, indicato dal simbolo PAO (Periodo di apertura) sull'etichetta: '12M' = 12 mesi. Oltre questo tempo il prodotto resta funzionale ma può separarsi o perdere profumo. Per uso domestico normale lo si finisce ben prima." },
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
    guideTitle: "Guida al formaggio grattugiato: prezzo al chilo",
    longDescription: `Parmigiano Reggiano, Grana Padano, pecorino grattugiato: lo scaffale alterna formati da 60 g monoporzione a vaschette da 500 g formato famiglia, con prezzi al chilo che variano di un fattore 2× a parità di prodotto. Una bustina da 60 g a 1,79 € costa 29,80 €/kg, una vaschetta da 250 g dello stesso brand a 5,99 € costa 23,96 €/kg, una busta professionale 500 g può scendere sotto 20 €/kg.

Il calcolatore qui sopra normalizza tutto al €/kg, anche fra DOP diverse (Parmigiano Reggiano, Grana Padano, Pecorino Romano) e fra grattugiati e formaggi in pezzo da grattugiare a casa. È particolarmente utile in questo reparto perché il prezzo etichetta gioca sui multipli da 60-100-250 g, formati pensati per ostacolare il confronto rapido.

Da considerare: il Parmigiano Reggiano e il Grana Padano sono prodotti DOP con disciplinari rigorosi. La qualità minima è garantita per legge — la differenza fra brand a parità di DOP è marginale. Quello che cambia davvero è la stagionatura (12, 18, 24, 30, 36 mesi) e il formato di vendita.`,
    sections: [
      {
        heading: "Parmigiano Reggiano DOP vs Grana Padano DOP",
        body: `Due DOP italiane spesso confuse, in realtà diverse per zona, disciplinare e stagionatura:

— Parmigiano Reggiano: zona Emilia (Parma, Reggio Emilia, Modena, Bologna, Mantova), stagionatura minima 12 mesi, tipicamente 24-30 mesi sul mercato. Prezzo grattugiato: 22-30 €/kg.
— Grana Padano: zona Pianura Padana (più ampia), stagionatura minima 9 mesi, tipicamente 14-20 mesi. Prezzo grattugiato: 16-22 €/kg.

A parità di stagionatura il Padano costa 20-30% meno. Per condire pasta o risotti, sono praticamente intercambiabili: la differenza di gusto è percepibile in degustazione mirata ma poco rilevante quando il formaggio è dispereso nella ricetta. Per consumo come "formaggio da pezzo" (cubetti, lamelle, fettine), il Reggiano stagionato lungo merita il prezzo per la sua complessità.`,
      },
      {
        heading: "Bustina, vaschetta o formato professionale",
        body: `I formati e i loro €/kg tipici:

— Bustina 60 g (monoporzione): 25-32 €/kg
— Vaschetta 100 g: 23-28 €/kg
— Vaschetta 250 g: 20-26 €/kg
— Busta professionale 500 g: 18-22 €/kg
— Sacchetto sottovuoto 1 kg: 16-20 €/kg

Lo scarto dal monoporzione al formato 1 kg è del 40-50%: la differenza più ampia di tutto il reparto food. Vincolo: il formaggio grattugiato in vaschetta aperta resta buono 15-30 giorni in frigo. Una famiglia di 4 persone consuma circa 300-500 g/mese, quindi un formato 500 g va consumato in 4-6 settimane.`,
      },
      {
        heading: "Grattugiato pronto vs pezzo da grattugiare",
        body: `Il pezzo intero (cubetto, scaglia, mezza forma piccola) costa il 30-50% in meno del grattugiato pronto a parità di DOP, e ha alcuni vantaggi pratici:

— Si conserva 1-3 mesi sottovuoto in frigo (il grattugiato 15-30 giorni)
— Sapore più fresco (l'aroma si volatilizza dopo la grattugiatura)
— Si può usare anche a pezzettini (cubetti per aperitivo, scaglie su insalata)

Vincolo principale: serve grattugiare al momento, ovvero 2-3 minuti per ogni uso. Per chi cucina spesso pasta o risotti, una piccola grattugia in cucina ripaga in poche settimane. Per consumo sporadico, il grattugiato pronto resta più pratico.`,
      },
      {
        heading: "Errori comuni",
        body: `Comprare la bustina 60 g "per provare". È il formato più caro al kg di tutto il reparto: 50% in più della vaschetta media. Se ti piace già un brand, vai sulla vaschetta 250 g.

Confondere "formaggio grattugiato" con "formaggio per pasta". Le buste private label "formaggio per pasta" sono spesso miscele di Grana Padano + altri formaggi italiani (a base di latte vaccino) — qualitativamente accettabili ma non DOP. Il prezzo è inferiore (12-16 €/kg). Per uso quotidiano funzionano, ma sappi che stai comprando un blend, non un DOP puro.

Sopravvalutare la freschezza del grattugiato pronto. Il grattugiato in vaschetta è stato grattugiato giorni prima, talvolta settimane. Non è "più fresco" del pezzo intero che ti grattugi al momento, è solo più comodo.

Fissarsi sulla stagionatura più lunga. Un Parmigiano Reggiano 36 mesi costa il 30-40% in più del 24 mesi, ma sciolto nella pasta la differenza è minima. Riserva la stagionatura lunga per il consumo "da degustazione" (su crackers, in scaglia su carpaccio, ecc.).`,
      },
    ],
    faq: [
      { q: "Vaschetta o sacchetto: quale conviene?", a: "I sacchetti monoporzione costano il 40-60% in più al kg. Le vaschette grandi (250-500 g) si conservano fino a 30 giorni in frigo dopo l'apertura, quindi anche una famiglia piccola le finisce in tempo." },
      { q: "Parmigiano grattugiato vs in pezzo: cosa scegliere?", a: "Il grattugiato costa il 30-50% in più al kg per la lavorazione e per la perdita di crosta. Se hai una grattugia, il pezzo intero è più economico, dura più a lungo e ha aroma più fresco. Per uso frequente, ripaga in poche settimane." },
      { q: "Grana Padano vs Parmigiano Reggiano: differenza di prezzo?", a: "Il Reggiano costa il 20-35% in più del Padano per la stagionatura più lunga (12+ mesi obbligatori vs 9, tipicamente 24-30 vs 14-20). Per condire pasta sono interscambiabili. Per consumo 'da pezzo' (cubetti, scaglie) il Reggiano merita il prezzo." },
      { q: "Le buste 'formaggio per pasta' sono DOP?", a: "Spesso no: sono miscele di formaggi italiani a base di latte vaccino, possono contenere Grana Padano DOP più altri formaggi. Costano 12-16 €/kg, contro i 18-25 €/kg di un DOP grattugiato puro. Per uso quotidiano funzionano, ma controlla in etichetta se cerchi una DOP precisa." },
      { q: "Quanto dura il grattugiato in frigo dopo l'apertura?", a: "15-30 giorni in frigo a 4°C, in confezione richiusa o trasferito in contenitore ermetico. Se compare muffa superficiale (bianca o verdastra), scartalo. Si può congelare ma cambia la consistenza in cottura." },
      { q: "Pecorino grattugiato: a cosa serve?", a: "Il Pecorino Romano DOP è specifico per ricette del centro Italia (cacio e pepe, amatriciana, gricia) per via del sapore intenso e sapido. Costa in media 20-28 €/kg, simile al Padano. Per altre paste si può usare ma è meno neutro." },
      { q: "Il prezzo del Parmigiano è giustificato?", a: "Tecnicamente sì: il disciplinare DOP impone 1 kg di formaggio = 16 L di latte di vacche allevate in zona, stagionatura minima 12 mesi (con costi di mantenimento), controlli rigorosi. È un prodotto labour-intensive che giustifica il prezzo. Le imitazioni 'parmesan' estere non sono comparabili." },
      { q: "Si può congelare il Parmigiano?", a: "Sì, sia in pezzo che grattugiato. Il sapore si mantiene, la consistenza cambia leggermente (più friabile). Conviene congelarlo già grattugiato in piccoli sacchetti da 50-100 g per usi rapidi. Si conserva 3-6 mesi a -18°C." },
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
    guideTitle: "Guida al latte e alla panna: prezzo al litro",
    longDescription: `Il latte è uno dei prodotti più stabili del carrello: una famiglia italiana media consuma 60-120 L di latte all'anno, con un budget di 80-180 €. Il prezzo al litro varia da meno di 0,90 €/L per il fardello UHT private label a oltre 2,50 €/L per il fresco di alta qualità o le bevande vegetali. Lo stesso strumento serve per la panna fresca e da cucina, che segue dinamiche simili.

Il calcolatore qui sopra normalizza brick UHT, bottiglie PET, formati fardello, brick monodose e bottiglie di latte fresco sulla stessa scala €/L. È utile perché lo scaffale alterna formati ravvicinati (500 ml, 1 L, 1,5 L) con prezzi pensati per non essere confrontabili a colpo d'occhio.

Da considerare: in Italia il prezzo per litro è in etichetta per legge, ma il numero piccolo non aiuta a confronti veloci fra fardello e brick singolo. La differenza fra il fardello migliore e la bottiglia singola peggiore è del 40-60%.`,
    sections: [
      {
        heading: "UHT vs fresco: differenze pratiche",
        body: `Due categorie distinte con prezzi e usi diversi:

— UHT (Ultra Heat Treatment): trattato a 135-150 °C per pochi secondi, può essere conservato a temperatura ambiente per 3-6 mesi prima dell'apertura. Prezzo tipico 0,90-1,40 €/L in fardello, 1,20-1,60 €/L in brick singolo. Una volta aperto: 3-4 giorni in frigo.

— Fresco (pastorizzato): trattato a 72-75 °C per 15-20 secondi, conservato sempre in frigo, shelf-life 4-6 giorni dalla produzione. Prezzo tipico 1,40-2,00 €/L. Una volta aperto: 2-3 giorni in frigo.

— Fresco alta qualità: ulteriore selezione qualitativa, prezzo 1,80-2,30 €/L. Sapore più "pieno" per molti consumatori.

Per uso quotidiano normale (cappuccino, cereali, ricette) l'UHT in fardello batte sul prezzo e sulla logistica (scorta in dispensa, no urgenza di consumo). Il fresco è preferibile per consumo "da bevuta" diretta dove il sapore è più importante.`,
      },
      {
        heading: "Intero, parzialmente scremato, scremato",
        body: `Le tre tipologie di latte vaccino con i loro prezzi tipici (in genere uguali a parità di brand e formato):

— Intero (3,5% di grassi): più sapido, ideale per cappuccino e dolci.
— Parzialmente scremato (1,5-1,8% di grassi): il più venduto, equilibrio fra sapore e leggerezza.
— Scremato (0,1-0,3% di grassi): più liquido al palato, usato in regimi ipocalorici.

Sul prezzo non c'è differenza significativa a parità di brand e formato (5-10% al massimo). La scelta è prevalentemente nutrizionale o di gusto. Per cappuccino di qualità, l'intero è sensibilmente migliore per via della maggiore schiuma.`,
      },
      {
        heading: "Bevande vegetali: come si confrontano",
        body: `Le bevande vegetali (soia, mandorla, avena, riso, cocco) si comportano come "alternative al latte" ma non sono latte: il termine "latte vegetale" è anche vietato in etichetta nell'UE per i prodotti non di origine animale.

Prezzi tipici al litro:
— Soia: 1,50-2,50 €/L
— Avena: 2,00-3,00 €/L
— Mandorla: 2,00-3,00 €/L
— Riso: 1,80-2,50 €/L
— Cocco: 2,50-3,50 €/L

Sono 2-3× il latte vaccino UHT. Hanno senso per chi ha intolleranze (lattosio), allergie (proteine del latte), regimi alimentari specifici (vegano) o forte preferenza di gusto. Sul piano nutrizionale variano molto: le versioni "fortificate" aggiungono calcio e vitamine per avvicinarsi al profilo del latte vaccino; quelle base hanno spesso pochi nutrienti.`,
      },
      {
        heading: "Panna: fresca, da cucina, da montare",
        body: `Lo stesso calcolatore serve per confrontare le panne, anche se i formati sono più piccoli (200 ml, 250 ml, 500 ml). Tre tipologie comuni:

— Panna fresca (35% di grassi): si monta bene, prezzo 4-8 €/L, conservazione frigo 30 giorni.
— Panna da cucina UHT (20-25% di grassi): non si monta, ottima per ricette salate, prezzo 3-6 €/L, conservazione dispensa.
— Panna da montare UHT (30-35% di grassi): si monta dopo refrigerazione, prezzo 4-7 €/L.

Le panne vegetali (soia, riso) costano simile alle vegetali "lattee" e hanno un uso analogo per chi cerca alternative. Per ricette dolci, la panna fresca da montare resta lo standard di riferimento per qualità di lavorazione e sapore.`,
      },
    ],
    faq: [
      { q: "UHT o fresco: differenza di prezzo?", a: "Il fresco costa il 20-40% in più al litro per la catena del freddo e la shelf-life breve. UHT dura mesi in dispensa, il fresco solo 4-6 giorni in frigo. Per uso quotidiano l'UHT in fardello è la scelta più economica; il fresco merita il prezzo se lo bevi puro." },
      { q: "Conviene il fardello da 6 brick?", a: "Sì: scende sotto 1,2 €/L, mentre il brick singolo è spesso 1,4-1,6 €/L. Vincolo: serve spazio in dispensa per 6 L. Il calcolatore lo conferma in un secondo." },
      { q: "Latte vegetale (soia, mandorla) vs vaccino al litro?", a: "Le bevande vegetali costano 2-3× il latte vaccino. Hanno senso per chi ha intolleranze, allergie, regime vegano o forte preferenza di gusto. Sul piano nutrizionale le versioni fortificate si avvicinano al profilo del latte vaccino, le base no." },
      { q: "Latte intero, parzialmente scremato o scremato: cambia il prezzo?", a: "No, o solo marginalmente (5-10% in alcuni casi). La scelta è prevalentemente nutrizionale o di gusto. Per cappuccino di qualità, l'intero è sensibilmente migliore per la schiuma." },
      { q: "Bottiglia PET 1,5 L o brick 1 L?", a: "La bottiglia PET 1,5 L è il formato più conveniente per litro al supermercato (1,15-1,40 €/L vs 1,30-1,60 €/L del brick 1 L). Vincolo: la PET prende meno spazio dei brick a parità di litri ma si stocca meno bene in dispensa (instabile in piedi senza supporto)." },
      { q: "Quanto dura il latte dopo l'apertura?", a: "UHT aperto: 3-4 giorni in frigo a 4°C, ben tappato. Fresco aperto: 2-3 giorni (la pastorizzazione meno aggressiva lascia più batteri lattici). Olfatto: se profuma acido, scartalo. Si congela ma cambia consistenza." },
      { q: "Marche premium o private label?", a: "Per il latte UHT le private label (Coop, Conad, Lidl, Esselunga) offrono ottima qualità a 30-50% in meno dei brand premium. Il latte è regolato da disciplinari sanitari rigorosi, le differenze fra brand sono minime per uso quotidiano. Per latte fresco, alcuni brand locali (caseifici della tua zona) possono valere il prezzo per qualità del latte." },
      { q: "Il latte si può congelare?", a: "Sì: in bottiglia non piena (il latte si espande) o in contenitori ermetici. Dopo lo scongelamento si separa leggermente, basta agitare. Usalo entro 2 settimane dallo scongelamento. Buono per cucina e ricette, meno per cappuccino (struttura cambiata)." },
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
    guideTitle: "Guida al lievito di birra: fresco o secco",
    longDescription: `Il lievito di birra è uno di quei prodotti dove "prezzo etichetta" è poco utile e il €/kg può ingannare a sua volta. Un panetto fresco da 25 g costa 0,25-0,35 € (= 10-14 €/kg), una bustina secca da 7 g costa 0,40-0,60 € (= 57-86 €/kg): sembrerebbe un divario enorme, ma in realtà i due prodotti hanno potere lievitante diverso. Bisogna confrontare quanta farina ciascuno fa lievitare.

Il calcolatore qui sopra normalizza al €/kg, e in queste sezioni ti spieghiamo come fare l'equivalenza fra fresco e secco per un confronto realistico. La regola pratica: 1 bustina di secco (7 g) equivale a 1 panetto fresco (25 g) in potere lievitante. Quindi per un confronto reale, moltiplica il €/kg del secco per circa 3,5 prima di paragonarlo al fresco.

A parità di potere lievitante, il secco e il fresco hanno prezzi sorprendentemente simili — il vero discriminante è l'uso: il fresco serve per ricette dirette, il secco per scorte in dispensa.`,
    sections: [
      {
        heading: "Fresco vs secco: equivalenza pratica",
        body: `Le regole di conversione comuni in panificazione casalinga:

— 1 panetto fresco 25 g ≈ 1 bustina secco 7 g (entrambi lievitano 500 g di farina circa)
— 1 panetto fresco 25 g ≈ 1 bustina secco istantaneo 7 g (versione che si aggiunge direttamente alla farina)

Il fresco va sciolto in acqua tiepida (non sopra i 40 °C, oltre uccide i lieviti). Il secco "classico" va riattivato in acqua tiepida con un pizzico di zucchero per 5-10 minuti. Il secco "istantaneo" si aggiunge direttamente alla farina senza preattivazione, ed è quindi il più pratico.

Per un confronto reale al €/kg, il secco vale 3-3,5× più del fresco. Quindi se il €/kg del secco è 60 € e quello del fresco è 12 €, in pratica il secco "costa" 60/3,5 = 17 €/kg equivalenti — solo il 40% più del fresco. Differenza reale molto più contenuta di quanto sembri.`,
      },
      {
        heading: "Bustina, panetto, multipack",
        body: `I formati sul mercato italiano:

— Panetto fresco 25 g: 0,25-0,35 € (formato singolo, in frigo)
— Tris panetti 3 × 25 g: 0,70-1,00 € (-10-20% per pezzo)
— Bustina secco 7 g: 0,40-0,60 €
— Tris bustine 3 × 7 g: 1,00-1,40 € (-10-20% per pezzo)
— Barattolo lievito istantaneo 100-125 g: 4-7 € (per uso frequente)

Per chi fa pane/pizza occasionale (una volta al mese), le bustine secche sono il formato più pratico: si conservano 12-24 mesi in dispensa, una sola bustina alla volta, nessun spreco. Per chi panifica regolarmente (settimanalmente), il barattolo da 100 g è il più economico per grammo equivalente e va conservato in frigo dopo l'apertura.`,
      },
      {
        heading: "Lievito di birra vs lievito madre",
        body: `Sono due cose diverse. Il lievito di birra (Saccharomyces cerevisiae) è un singolo ceppo di lievito industriale, lievita rapidamente (1-3 ore), prevedibile. Il lievito madre (pasta acida) è una colonia simbiotica di lieviti e batteri, lievita lentamente (8-24 ore), produce sapori più complessi.

Costi: il lievito madre è essenzialmente gratuito (si rinnova in casa con farina e acqua). Tempo: serve gestione continua (rinfresco ogni 5-7 giorni se conservato in frigo). Risultati: il pane fatto con lievito madre ha shelf-life più lunga, sapore più ricco, digeribilità migliore.

Per chi vuole solo praticità, il lievito di birra è la scelta. Per chi ha tempo e curiosità, il lievito madre è una scelta che ripaga in qualità e zero costo. Spesso si combinano: lievito madre per il sapore + un pizzico di lievito di birra come "spinta" per impasti veloci.`,
      },
      {
        heading: "Conservazione: durata reale",
        body: `Lievito fresco. In confezione sigillata in frigo: fino alla data di scadenza (di solito 30-60 giorni). Aperto: 5-7 giorni in frigo, ben coperto. Si può congelare a porzioni: dura 3-6 mesi, ma il potere lievitante può scendere del 10-20% dopo lo scongelamento.

Lievito secco. Bustina sigillata: 12-24 mesi a temperatura ambiente (data sull'etichetta). Aperta: 2-4 mesi in barattolo ermetico in frigo. Il secco "scade" effettivamente: oltre la data, può non lievitare più — testa sempre con un piccolo impasto se in dubbio.

Test di vitalità del lievito secco. Sciogli una bustina in 100 ml di acqua tiepida con un cucchiaino di zucchero, attendi 10-15 minuti. Se forma schiuma sulla superficie, è ancora attivo. Se non succede nulla, va sostituito.`,
      },
    ],
    faq: [
      { q: "Lievito secco o fresco: equivalenza?", a: "1 bustina (7 g) di secco ≈ 1 panetto (25 g) di fresco in potere lievitante. Per confronto realistico al €/kg, moltiplica il €/kg del secco per ~3,5 prima di paragonarlo al fresco." },
      { q: "Quanto rende un panetto di lievito?", a: "Un panetto da 25 g lievita circa 500 g di farina, ovvero una pizza per 4 persone o un pane medio. Per impasti diretti veloci. Per lievitazioni lunghe in frigo (24-48 ore), basta 1/3 di panetto (8-10 g)." },
      { q: "Lievito naturale (madre) sostituisce quello di birra?", a: "Sì ma con tempi diversi (8-24 ore di lievitazione invece di 1-3). Richiede gestione continua (rinfresco settimanale). Per la praticità del lievito di birra, il fresco è la scelta più affidabile per chi panifica saltuariamente." },
      { q: "Il lievito di birra contiene alcol?", a: "Tracce minime, prodotte dalla fermentazione, che evaporano durante la cottura. Il pane lievitato non contiene alcol percepibile. Il nome 'di birra' deriva storicamente dall'industria birraria che usava gli stessi ceppi di Saccharomyces cerevisiae." },
      { q: "Si può fare la pizza senza lievito?", a: "Sì: con lievito chimico (bicarbonato + cremor tartaro) si ottiene una pizza 'veloce' simile alla focaccia. Senza alcun agente lievitante si fa pizza azzima, sottile e croccante. Niente lievitazione, ma anche niente sofficità." },
      { q: "Lievito istantaneo o secco classico?", a: "L'istantaneo si aggiunge direttamente alla farina senza preattivazione: più pratico. Il secco classico va riattivato in acqua tiepida con zucchero per 5-10 minuti: più tradizionale. Stessi risultati finali, l'istantaneo costa il 10-15% in più per la praticità." },
      { q: "Lievito chimico (per dolci) vs di birra: si possono sostituire?", a: "No, sono prodotti diversi. Il lievito chimico (bicarbonato + acido) produce gas immediatamente in cottura, va bene per torte e biscotti. Il lievito di birra fermenta e va lasciato riposare, va bene per pane, pizza, focacce, dolci lievitati (panettone, brioche). Non si sostituiscono fra loro." },
      { q: "Cubetti di lievito sbriciolati nell'impasto: meglio o peggio?", a: "Va sciolto in acqua tiepida prima, mai aggiunto a secco perché il sale o lo zucchero a contatto diretto con il lievito ne riducono l'efficacia. Una volta sciolto, va incorporato all'impasto." },
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
    guideTitle: "Guida alle merendine: prezzo per pezzo",
    longDescription: `Le merendine sono uno dei reparti più affollati e più frammentati del supermercato. Multipack da 6, 8, 10, 24 pezzi, edizioni stagionali, formati "kids", "zero zuccheri", versioni "premium": il prezzo per merendina varia dai 0,15 € della crostatina private label in formato famiglia ai 1,50-2,00 € del brand premium in mini-pack scolastico.

Il calcolatore qui sopra prende il numero di pezzi e il prezzo della confezione e restituisce il €/pezzo (o €/merendina), il modo più chiaro per confrontare formati e brand sulla stessa scala. È utile anche per confronti meno ovvi: un multipack 24 pezzi da 0,40 €/merendina vs sei multipack singoli da 0,60 €/merendina = scelte molto diverse a parità di marchio.

Da considerare: le merendine sono un prodotto a margine elevato per la GDO. Le offerte "3x2" e "promo prima settimana del mese" sono frequenti e portano spesso a sconti del 30-40% sul listino. Vale la pena tenere d'occhio i volantini e fare scorta quando il €/merendina del brand preferito scende.`,
    sections: [
      {
        heading: "Mini-pack scolastico, multipack famiglia, formato risparmio",
        body: `I formati e i loro €/pezzo tipici sui brand storici (Kinder, Mulino Bianco, Fiesta):

— Mini-pack scolastico 3-6 pezzi: 0,50-0,80 €/merendina
— Multipack standard 8-10 pezzi: 0,40-0,55 €/merendina
— Formato famiglia 24+ pezzi: 0,30-0,45 €/merendina
— Promo brand premium (3x2, sotto-costo): 0,25-0,35 €/merendina

Per famiglie con bambini in età scolare (consumo regolare), il formato famiglia 24 pezzi è la scelta naturale: il €/merendina è il più basso, e una scatola dura 1-2 settimane senza problemi di shelf-life.

I mini-pack scolastici hanno senso quando vuoi varietà (provare gusti diversi) o quando il consumo è sporadico e non vuoi rischiare merendine inutilizzate vicine alla scadenza.`,
      },
      {
        heading: "Brand premium vs private label",
        body: `Su merendine e snack dolci la fedeltà al brand è particolarmente forte per via dell'associazione emotiva infanzia-prodotto. I private label (Coop, Conad, Lidl, Esselunga) propongono però alternative ottime a 40-60% di prezzo in meno.

Prezzi tipici per categoria:
— Crostatine al cacao premium: 0,40-0,60 €/pezzo (private label: 0,15-0,25 €)
— Plumcake/saccottini premium: 0,35-0,55 €/pezzo (private label: 0,15-0,28 €)
— Girelle premium: 0,50-0,70 €/pezzo (private label: 0,22-0,35 €)
— Wafer in multipack: 0,15-0,30 €/pezzo (private label: 0,08-0,18 €)

I blind test sulle merendine industriali mostrano una difficoltà di distinzione per molti consumatori — la differenza è spesso sul packaging e sul marketing più che sul prodotto.`,
      },
      {
        heading: "Biscotti come alternativa alle merendine",
        body: `I biscotti tradizionali (frollini, integrali, al cioccolato) sono nettamente più convenienti per peso rispetto alle merendine:

— Biscotti private label per kg: 3-6 €/kg
— Biscotti premium per kg: 5-8 €/kg
— Merendine industriali per kg: 8-18 €/kg

Una "porzione equivalente" di biscotti (30-40 g, 4-6 biscotti) costa 0,10-0,25 €, contro 0,30-0,60 € di una merendina. Differenza 2-3× a parità di apporto energetico.

I biscotti hanno però conservazione e gestione diversa: una volta aperto un pacco si consuma in 1-2 settimane, non si "portano in tasca" altrettanto facilmente. Per la colazione casalinga sono la scelta più economica; per la merenda fuori casa, le merendine restano più pratiche.`,
      },
      {
        heading: "Errori comuni nel reparto",
        body: `Comprare per pubblicità invece che per €/pezzo. Le edizioni stagionali (Natale, Pasqua, Halloween) costano spesso il 30-50% in più con formula identica al prodotto standard.

Cadere sulle "merendine zero zuccheri / kids". Sono spesso le più care al pezzo (0,60-0,90 €) e nutrizionalmente non sempre superiori alle standard. La presenza di "kids" o "junior" sull'etichetta è marketing, non differenza qualitativa.

Comprare il singolo al bar/distributore. Una merendina al distributore automatico costa 1,20-1,80 € contro i 0,30-0,50 € del multipack equivalente. Avere una scorta in borsa o in ufficio risparmia 1-2 €/giorno.

Trascurare le scadenze. I formati famiglia 24+ pezzi durano 2-3 mesi sul packaging, ma i wafer e prodotti con farciture cremose perdono croccantezza dopo 4-6 settimane. Per consumi bassi, meglio scegliere formati più piccoli.`,
      },
    ],
    faq: [
      { q: "Multipack scolastico vs singola merendina al bar?", a: "Il multipack 6 pezzi costa 0,40-0,60 €/merendina, al bar 1-1,50 €. Differenza di 3× a parità di prodotto. Per chi compra una merendina al giorno al lavoro, il risparmio annuo del multipack è 200-300 €." },
      { q: "Le merendine 'kids' / senza zucchero costano di più?", a: "Sì: 20-30% in più rispetto alle versioni standard. Spesso sono le più care al pezzo. Nutrizionalmente non sono sempre superiori: leggi l'etichetta per zuccheri, grassi saturi e fibre se vuoi una scelta più sana." },
      { q: "Biscotti vs merendine: come si confrontano?", a: "I biscotti standard costano 3-6 €/kg, le merendine 8-18 €/kg. Per spesa quotidiana i biscotti sono 2-3× più convenienti se la varietà non ti manca." },
      { q: "Quante merendine al giorno per un bambino?", a: "Le linee guida nutrizionali (LARN, Linee Guida Italiane) suggeriscono di limitare gli snack industriali a 1-2 al giorno, preferendo frutta, yogurt o cracker per gli altri spuntini. Una merendina apporta in media 130-200 kcal." },
      { q: "Le merendine integrali sono più sane?", a: "Spesso solo marginalmente: alcune contengono comunque alti livelli di zuccheri e grassi saturi. Leggi sempre la tabella nutrizionale, non solo il claim sul fronte della confezione. 'Integrale' = ha una piccola percentuale di farina integrale, non vuol dire 'sano'." },
      { q: "Si possono congelare le merendine?", a: "Sì, soprattutto quelle a base di pan brioche, plumcake, croissant. Dura 2-3 mesi in congelatore. Scongelare a temperatura ambiente per 30-60 minuti. Le merendine con creme fresche o ripieni di latte si conservano meno bene." },
      { q: "Edizioni stagionali (panettone, colombe, ovetti): convengono?", a: "I prodotti stagionali hanno il €/kg più alto della categoria perché il consumo è concentrato in poche settimane. I formati grandi (panettoni 1 kg) sono comunque più convenienti dei mini-panettoni 80 g, anche del 30-50%. Per consumo casalingo, scegli sempre il formato 750-1000 g se il prodotto ti piace." },
      { q: "Come gestire la scadenza per formati grandi 24+ pezzi?", a: "Apri la scatola e verifica la data sui singoli incarti (ognuno ha la sua scadenza). I formati grandi durano 60-90 giorni sigillati, una volta aperti i singoli pezzi sono già in atmosfera modificata e durano il dichiarato. Una famiglia di 4 consuma una scatola da 24 in 10-14 giorni: zero rischio scadenza." },
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
    guideTitle: "Guida all'olio extravergine: prezzo al litro",
    longDescription: `L'olio extravergine d'oliva (EVO) è uno dei prodotti italiani con la maggiore dispersione di prezzo: dalla bottiglia 1 L "supermercato discount" a 4 €/L fino agli oli artigianali DOP/IGP che superano i 25 €/L, con una mediana di mercato attorno ai 7-9 €/L per il consumo familiare di buon livello. Le campagne 2022-2023 con scarsità produttiva hanno portato il prezzo medio italiano del 50-80% in più rispetto al biennio precedente.

Il calcolatore qui sopra confronta bottiglie, lattine, bag-in-box e confezioni di formato diverso (250 ml, 750 ml, 1 L, 3 L, 5 L) sulla scala uniforme €/L. È uno dei reparti dove fare il confronto rapido fa la differenza più ampia in valore assoluto.

Da considerare: il prezzo dell'olio EVO ha un "pavimento tecnico". Per produrre 1 L di olio servono in media 5-6 kg di olive, e i costi di raccolta, frangitura, imbottigliamento, distribuzione fanno sì che sotto i 5-6 €/L sia molto difficile avere un EVO 100% italiano di qualità onesta. Sotto questa soglia sono comuni blend con oli comunitari (Spagna, Grecia, Tunisia) — legittimi ma non equivalenti al 100% italiano in termini di filiera e talvolta sapore.`,
    sections: [
      {
        heading: "Bottiglia 1 L vs lattina 5 L: quando conviene",
        body: `I formati grandi (lattine 3 L, 5 L, bag-in-box) offrono €/L significativamente inferiori:

— Bottiglia 750 ml premium: 8-12 €/L
— Bottiglia 1 L standard: 6-9 €/L
— Lattina 3 L: 5-7 €/L
— Lattina 5 L: 4-6 €/L
— Bag-in-box 5 L (frantoi diretti): 5-8 €/L per oli artigianali

Il vincolo è la conservazione. Una volta aperta, la lattina va consumata in 4-6 mesi: l'olio perde aroma e qualità per ossidazione e fotossidazione. Una famiglia di 4 consuma in media 12-18 L/anno: una lattina da 5 L è una scelta razionale. Single e coppie con consumo basso (3-6 L/anno) faticano a finire 5 L in tempo: meglio 1 L per volta.

Trasferire l'olio dalla lattina a un travasatore opaco o a bottiglie da 500 ml ben chiuse aiuta a preservarlo.`,
      },
      {
        heading: "Come leggere l'etichetta",
        body: `Tre elementi chiave da controllare prima dell'acquisto:

— Origine. La dicitura obbligatoria UE distingue "Olio di oliva ottenuto in Italia" (100% italiano), "Olio comunitario" (UE non specificato), "Misto UE/non UE" (peggior trasparenza). I prezzi rispecchiano: il 100% italiano ha sempre un premium del 30-50% sul comunitario non specificato.

— DOP / IGP. Le 47 DOP/IGP italiane (Toscano IGP, Sicilia IGP, Garda DOP, Umbria DOP, ecc.) garantiscono provenienza e processo. Il prezzo è ancora superiore (+30-50% rispetto a un EVO 100% italiano generico) ma la tracciabilità è massima.

— Anno di raccolta. Dal 2024 è obbligatorio in etichetta. L'olio fresco (campagna recente) ha gli aromi al meglio. Oltre i 12-18 mesi dalla raccolta, l'olio resta utilizzabile ma perde la nota piccante e amara (segno di antiossidanti freschi).

— Data di scadenza. Tipica 18 mesi dall'imbottigliamento. Una bottiglia molto in scadenza non è "scaduta", ma è probabilmente meno fresca: scegli sempre l'EVO con la scadenza più lontana possibile.`,
      },
      {
        heading: "EVO 100% italiano vs comunitario: la differenza pratica",
        body: `Le due categorie principali in scaffale:

— EVO 100% italiano. Olive coltivate e frangite in Italia. Prezzo tipico 7-12 €/L per i prodotti di buon livello. Filiera tracciabile. Adatto a tutti gli usi, inclusi quelli "a crudo" dove il sapore conta (insalate, bruschetta, finitura piatti).

— EVO comunitario o miscela UE. Blend con oli da Spagna, Grecia, Tunisia, talvolta Portogallo. Prezzo 4-7 €/L. Qualità variabile: alcuni blend sono ben fatti e sapidi, altri più piatti. Adatto soprattutto a usi in cottura prolungata dove il sapore si trasforma comunque (soffritti, sughi cotti lungo, frittura).

Per uso quotidiano misto, una buona strategia è avere due bottiglie: un EVO 100% italiano per usi "a crudo" (insalate, finiture, condimenti veloci) e un EVO comunitario o "olio di oliva" non extravergine per cotture lunghe e frittura. Si ottimizza il rapporto qualità/prezzo.`,
      },
      {
        heading: "Errori comuni",
        body: `Comprare al miglior prezzo "etichetta" senza guardare il formato. La bottiglia 750 ml a 4,99 € costa 6,65 €/L, una 1 L a 5,99 € costa 5,99 €/L. La seconda è più conveniente del 10%, ma a colpo d'occhio sembra più cara.

Fidarsi dei claim "premium" senza controllare l'etichetta. "Olio italiano", "Selezione", "Riserva", "DOP" sono parole molto diverse. Solo DOP/IGP sono certificate; gli altri sono claim commerciali liberamente apponibili.

Conservare l'olio vicino al fornello. La luce e il calore sono i nemici dell'EVO. Conservalo in un mobile chiuso, lontano dal fornello e dalla finestra. Una bottiglia trasparente esposta perde il 30-50% degli antiossidanti in 2-3 mesi.

Comprare l'olio EVO a 3,99 €/L "perché in offerta". Sotto i 5 €/L è quasi certamente blend non italiano e di qualità modesta. Per cotture prolungate può andare bene, ma sappi cosa stai comprando.`,
      },
    ],
    faq: [
      { q: "Lattina 5 L o bottiglia 1 L: cosa scegliere?", a: "La lattina costa 30-40% in meno al litro ma va consumata in 4-6 mesi dall'apertura. Per single o coppia con basso consumo (3-6 L/anno), la bottiglia 1 L è più gestibile. Per famiglie da 4+ persone, la lattina è quasi sempre la scelta migliore." },
      { q: "Olio EVO sotto 5 €/L: posso fidarmi?", a: "Sotto i 5-6 €/L l'EVO è quasi certamente blend comunitario (Spagna, Grecia, Tunisia), non 100% italiano. Non è scadente o illegale — è semplicemente diverso. Per cottura prolungata va bene, per condimento a crudo conviene salire di fascia." },
      { q: "Olio di oliva vs extravergine: che differenza?", a: "L'extravergine ha acidità < 0,8% e sapori puliti, ottenuto per spremitura meccanica. L'olio di oliva 'classico' (non EVO) è un blend di olio raffinato e una percentuale di vergine, ha sapore più neutro e costa il 30-40% in meno. Adatto per fritti e cotture in cui il sapore si trasforma." },
      { q: "Cos'è la DOP/IGP sull'olio?", a: "Sono certificazioni UE che garantiscono provenienza geografica e processo specifico. L'Italia ha 47 DOP/IGP dell'olio (Toscano IGP, Sicilia IGP, Garda DOP, Umbria DOP, ecc.). Costano il 30-50% in più degli EVO 100% italiani generici ma offrono massima tracciabilità." },
      { q: "Conviene comprare dal frantoio direttamente?", a: "Spesso sì: il €/L del bag-in-box 5 L direttamente in frantoio è del 20-40% inferiore al supermercato a parità di qualità. Il limite è la logistica (bisogna spostarsi) e la stagionalità: l'olio fresco si trova da novembre a marzo, esaurito il quale si torna sui canali distribuiti." },
      { q: "Quanto dura l'olio EVO una volta aperto?", a: "4-6 mesi mantenendo gli aromi al meglio, fino a 12 mesi prima che diventi stantio. L'ossigeno, la luce e il calore sono i nemici principali. Conserva in mobile chiuso, lontano da fornello, in bottiglia ben tappata o sotto vuoto." },
      { q: "Olio extravergine vs oli di semi: per friggere chi è migliore?", a: "Per frittura ad alta temperatura (>180°C) gli oli di semi raffinati hanno un punto di fumo più alto: arachide (~230°C), mais (~230°C), girasole alto-oleico (~230°C) sono buoni. L'EVO ha punto di fumo 200-210°C, è ottimo per frittura veloce, meno adatto a frittura prolungata. Il costo dell'EVO per frittura è 2-3× quello di un olio di semi." },
      { q: "Si può congelare l'olio?", a: "Sì: in piccole porzioni (vaschette di silicone, vasetti) per preservarlo a lungo. A -18°C l'olio si solidifica parzialmente (alcuni componenti cristallizzano) ma ritorna fluido a temperatura ambiente senza perdita di qualità. Pratica usata raramente, utile per oli artigianali pregiati che vuoi conservare in piccole dosi." },
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
    guideTitle: "Guida alla pasta, riso e farina: prezzo al chilo",
    longDescription: `Pasta, riso e farina sono fra i prodotti più stabili del carrello italiano: una famiglia consuma in media 25-35 kg di pasta, 8-15 kg di riso e 10-20 kg di farina all'anno. Il prezzo al chilo varia da meno di 1,30 €/kg per la pasta private label in offerta fino a oltre 5 €/kg per i formati artigianali o premium di nicchia.

Il calcolatore qui sopra normalizza tutto al €/kg, indipendentemente dalla grammatura (500 g, 1 kg, cartoni 6 × 500 g). È utile in questo reparto perché lo scaffale mischia formati e brand con prezzi pensati per confondere il confronto: due pacchi di pasta della stessa marca a prezzo simile possono avere il 30-40% di differenza reale sul €/kg.

Da considerare: la pasta secca ha shelf-life lunghissima (2-3 anni in dispensa), il riso secco simile, la farina 8-12 mesi. Sono tutti prodotti dove fare scorta in offerta ha senso senza rischi di scadenza.`,
    sections: [
      {
        heading: "Brand premium vs private label sulla pasta secca",
        body: `La pasta secca italiana è un prodotto altamente standardizzato. Il disciplinare (D.P.R. 187/2001) impone che la "pasta di semola" sia fatta solo di semola di grano duro e acqua, con processo di estrusione, essiccazione e qualità minima garantita.

Prezzi tipici:
— Private label discount (Lidl, Eurospin): 0,79-1,20 €/kg
— Private label GDO standard (Coop, Conad, Esselunga): 1,00-1,50 €/kg
— Brand storico standard (Barilla, Voiello in offerta): 1,50-2,20 €/kg
— Brand premium "artigianale" (De Cecco, Garofalo, Rummo): 2,20-3,50 €/kg
— Pasta artigianale trafilata al bronzo (Benedetto Cavalieri, Felicetti): 4-8 €/kg

Per uso quotidiano la differenza qualitativa fra private label e brand storico è marginale per il consumatore medio. La pasta trafilata al bronzo ha effettivamente una superficie più ruvida che trattiene meglio il sugo — è una differenza percepibile, vale il prezzo se il sugo è importante nel tuo modo di cucinare.`,
      },
      {
        heading: "Riso: tipologie e prezzi",
        body: `Il reparto riso italiano è ampio. Le principali categorie:

— Riso comune (originario): 1,20-1,80 €/kg. Per minestre, riso al latte, dolci. Cottura 14-16 minuti.
— Riso semifino (vialone nano, S. Andrea): 1,80-2,80 €/kg. Per risotti delicati, minestre dense.
— Riso fino (ribe, padano): 1,50-2,20 €/kg. Per insalate di riso, contorni.
— Riso superfino (carnaroli, arborio): 2,50-4,50 €/kg. Per risotti, mantiene la cottura al dente meglio.
— Risi esotici (basmati, jasmine, venere): 3,50-7 €/kg. Per cucina etnica e accompagnamenti.

Il riso scotti (parboiled) costa il 10-20% in più del comune ma è "indistruttibile" in cottura — utile per chi cucina in fretta.

Per uso quotidiano alterna: carnaroli/arborio per risotti, basmati per ricette etniche, fino per insalate di riso. Una scorta di 3-5 kg copre 2-3 mesi per una famiglia.`,
      },
      {
        heading: "Farina: 00, 0, integrale, manitoba",
        body: `La farina di grano tenero italiana è classificata per granulosità e contenuto di crusca:

— Farina 00: la più fine, prevalentemente amido. Per dolci, sfoglie, fritti. Prezzo 0,80-1,40 €/kg.
— Farina 0: leggermente meno raffinata. Per pane, pizza. Prezzo 0,90-1,50 €/kg.
— Farina 1, 2, integrale: contengono più crusca e germe, fibre più alte. Per pani rustici e pizza alta idratazione. Prezzo 1,20-2,00 €/kg.
— Manitoba (farina di grano forte ad alto W): per lievitati lunghi (panettone, brioche). Prezzo 1,40-2,50 €/kg.

La farina può essere conservata fino a 8-12 mesi a temperatura ambiente in luogo asciutto, in barattolo ermetico. Le integrali hanno shelf-life più breve (6-8 mesi) per via dei grassi del germe. Per uso saltuario, la confezione 1 kg è il formato giusto. Per chi panifica regolarmente, i sacchi 5 kg dei brand professionali (Caputo, Spadoni, Petra) sono il modo più economico.`,
      },
      {
        heading: "Legumi secchi: la scorta più conveniente",
        body: `I legumi secchi (ceci, fagioli, lenticchie, fave) sono fra i prodotti più convenienti per nutriente apportato:

— Lenticchie comuni: 2-4 €/kg
— Ceci: 2,50-4,50 €/kg
— Fagioli (vari): 2-5 €/kg
— Lenticchie umbre IGP, ceci di Cicerale: 6-12 €/kg (formati premium)

A parità di peso secco, i legumi raddoppiano in cottura: 1 kg secco = 2-2,5 kg cotti. Il €/kg cotto scende quindi a 0,80-2 €/kg, contro i 1,50-3 €/kg dei legumi in barattolo già cotti. Il vincolo è il tempo: i secchi richiedono ammollo (8-12 ore) e cottura (45-90 min in pentola, 15-25 in pentola a pressione).

Per chi non ha tempo, i legumi in barattolo restano comodi ma 2-3× più cari. Una via intermedia: cuocere 1 kg di secchi e congelare in porzioni — costo finale 50% in meno, praticità simile.`,
      },
    ],
    faq: [
      { q: "Marca premium vs private label per la pasta secca?", a: "La differenza di qualità è minima per la pasta standard. Le marche premium (De Cecco, Garofalo, Rummo) costano il 50-100% in più per benefici percepibili soprattutto su sughi importanti. Per uso quotidiano la private label copre bene." },
      { q: "Cartoni 6 × 500 g convengono?", a: "Spesso sì: scendono sotto 1,80 €/kg, mentre la singola può arrivare a 2,30 €/kg. Verifica il €/kg in promozione settimanale. La pasta secca dura 2-3 anni in dispensa: zero rischio scadenza." },
      { q: "Riso vs pasta: come si confrontano?", a: "Stesso strumento (€/kg) ma il riso è meno saziante a parità di peso secco. Considera il rendimento (1 kg pasta = 4 kg cotta; 1 kg riso = 3 kg cotto). Il costo per pasto è simile fra pasta standard e riso comune." },
      { q: "Pasta integrale vs raffinata: differenza di prezzo?", a: "L'integrale costa il 20-40% in più della classica per via dei processi di lavorazione e dei volumi minori. Nutrizionalmente apporta più fibre e ha indice glicemico più basso. Vale la pena alternare per varietà nella dieta." },
      { q: "Cosa significa 'trafilata al bronzo' sulla pasta?", a: "Indica che la pasta è stata estrusa attraverso trafile in bronzo invece che teflon. Risultato: superficie più ruvida che trattiene meglio il sugo. È un parametro qualitativo reale, percepibile in piatti con sughi importanti. Costa 30-50% in più della pasta a trafila teflon." },
      { q: "Si possono conservare farina e pasta a lungo?", a: "Sì. Pasta secca: 2-3 anni in dispensa, indefinitamente in pratica se chiusa bene. Farina: 8-12 mesi, le integrali 6-8 (i grassi del germe diventano stantii). Riso bianco: 2-3 anni. Riso integrale: 6-12 mesi. Conserva in barattoli ermetici per evitare insetti." },
      { q: "Legumi secchi vs in barattolo: convengono?", a: "I secchi costano il 50-70% meno per peso netto cotto. Il vincolo è il tempo (ammollo 8-12 ore + cottura 45-90 min). Una via intermedia: cuocere 1 kg di secchi e congelare in porzioni. Per chi non ha tempo affatto, i barattoli restano comodi ma sensibilmente più cari." },
      { q: "Pasta fresca vs secca: convenienza?", a: "La pasta fresca all'uovo costa 6-12 €/kg, contro 1-3 €/kg della secca. È un prodotto diverso (più ricca, più strutturata), adatta a piatti specifici (tagliatelle al ragù, lasagne, ravioli). Per uso quotidiano la secca resta la scelta razionale; la fresca per occasioni." },
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
    guideTitle: "Guida ai sacchi spazzatura: prezzo per sacco",
    longDescription: `I sacchi per la spazzatura sono uno dei prodotti dove la confusione fra formati è massima. Le taglie variano da 30 L (cestino piccolo) a 110 L (formato giardino), il numero per confezione da 10 a 60, e il materiale spazia da PE standard a bioplastica compostabile. Il prezzo per sacco va da 0,03 € per i rotoli economici di taglia piccola fino a 0,40-0,60 € per i compostabili certificati di taglia grande.

Il calcolatore qui sopra normalizza tutto al €/sacco, indipendentemente dalla taglia e dal materiale. Per un confronto realistico vai sempre a parità di taglia (litri) e materiale: confrontare un 30 L plastica con un 110 L compostabile non ha senso pratico.

Da considerare: una famiglia italiana consuma in media 4-6 sacchi a settimana fra umido, indifferenziato e plastica (200-300 sacchi all'anno). Una scelta efficiente del formato porta a risparmi di 30-60 €/anno.`,
    sections: [
      {
        heading: "Quale taglia per quale rifiuto",
        body: `Le taglie tipiche e i loro usi:

— 10 L: cestino bagno, scrivania, raccolta piccola.
— 30 L: umido (la taglia ideale per la maggior parte dei bidoni umido casa).
— 50 L: indifferenziato, plastica, carta in cucina (standard per bidoni cucina medio-grandi).
— 70 L: cestini condominio, raccolta a piano.
— 110-120 L: giardino, taverna, raccolta voluminosa (foglie, sfalci).

Una famiglia media a Milano/Roma con raccolta differenziata: 4 sacchi/settimana umido 30 L + 2 sacchi/settimana indifferenziato 50 L + 1 sacco/settimana plastica 50 L. Volume annuale: circa 200 sacchi.

Per i bidoni cucina classici, misura sempre la capacità in litri prima di comprare: un sacco troppo piccolo si rompe, uno troppo grande sporca i bordi del bidone.`,
      },
      {
        heading: "Biodegradabili e compostabili: quando sono obbligatori",
        body: `Per la raccolta dell'umido, in Italia dal 2018 (D.Lgs 152/2006 e norme regionali) i sacchi devono essere certificati compostabili EN 13432. Non si possono usare sacchi in polietilene standard per l'umido: contaminano il compostaggio. Verifica sempre la certificazione EN 13432 sulla confezione.

Tre famiglie di materiali compostabili:
— Mater-Bi (Novamont, lo standard italiano): più resistente, prezzo medio-alto.
— PLA puro (acido polilattico): meno resistente, prezzo medio.
— Polpa di cellulosa + amido: il più "verde", prezzo più alto.

I compostabili costano 2-4× la plastica standard (0,10-0,20 €/sacco vs 0,03-0,08 €/sacco). Hanno shelf-life limitata (12-18 mesi sigillati): non fare scorte enormi.

Per indifferenziato, plastica, vetro, carta i sacchi in polietilene restano ammessi (e nettamente più convenienti). Verifica le regole del tuo comune: alcune realtà richiedono colori specifici (giallo per plastica, blu per carta, ecc.).`,
      },
      {
        heading: "Brand vs private label",
        body: `Sui sacchi spazzatura la differenza fra brand storici e private label è marcata sul packaging ma minima sulla funzionalità:

Brand premium (Cuki, Domopak, Tante Migliori): 0,10-0,25 €/sacco per il formato standard. Profumati anti-odore, dispenser integrato, etichette "extra resistenti".

Private label discount (Eurospin, Lidl): 0,03-0,08 €/sacco per il formato equivalente. Materiale spesso identico, nessun profumo.

Per uso casalingo normale la differenza è minima. I sacchi private label sono spessi 12-15 micron, sufficienti per il peso domestico tipico (1-3 kg per sacco). Solo per umido molto liquido (frutta marcia, brodi) un sacco più spesso (18-20 micron) o doppio strato giustifica il prezzo.`,
      },
      {
        heading: "Errori comuni",
        body: `Comprare la taglia sbagliata. Sacchi 50 L in bidoni da 30 L sporcano i bordi, sacchi 30 L in bidoni da 50 L si rompono sotto il peso. Misura il bidone.

Usare sacchi non compostabili per l'umido. Anche un sacco "bio-degradabile" non certificato EN 13432 non è ammesso per l'umido: contamina il compostaggio. Cerca sempre la certificazione esplicita.

Caricare troppo i sacchi grandi. Un sacco 110 L pieno di umido può pesare 15-20 kg: si rompe nel trasporto, sporca la scala. Per umido tieni il sacco 30 L o riempi il 110 L solo a metà.

Pagare il profumato. I sacchi profumati hanno efficacia di poche ore. Meglio un buon coperchio sul bidone e svuotamento regolare (umido ogni 2-3 giorni). I sacchi profumati costano 20-40% in più senza beneficio reale.`,
      },
    ],
    faq: [
      { q: "Quale taglia per la cucina di una famiglia?", a: "30 L per umido, 50 L per indifferenziato, 110 L per giardino e svuoti grandi. I formati famiglia da 110 L costano in media 30-50% meno al sacco di quelli da 30 L, ma servono solo dove ci sono volumi importanti." },
      { q: "Biodegradabili vs plastica: differenza di prezzo?", a: "I biodegradabili (per umido) costano 2-4× la plastica standard. Sono obbligatori per la raccolta umido in tutti i comuni italiani: il polietilene non è ammesso perché contamina il compostaggio. Verifica sempre la certificazione EN 13432 sulla confezione." },
      { q: "Sacchi profumati o anti-odore: ne vale la pena?", a: "Costano il 20-40% in più. L'efficacia è limitata a poche ore. Meglio un buon contenitore con coperchio chiuso e svuotamento regolare (umido ogni 2-3 giorni). I sacchi profumati sono prevalentemente marketing." },
      { q: "Sacchi 'extra resistenti' valgono il prezzo?", a: "Per uso domestico normale (1-3 kg per sacco) i sacchi standard 12-15 micron bastano. Gli 'extra resistenti' (18-20 micron) hanno senso solo per umido molto liquido, rifiuti taglienti (vetri rotti, ossa) o sacchi che vanno trasportati per piani senza ascensore." },
      { q: "Si possono usare sacchi della spesa per la spazzatura?", a: "Sì per indifferenziato (le buste della spesa in polietilene). No per umido (i 'shopper' biodegradabili per la spesa hanno certificazione diversa, spesso non EN 13432 per compost). È una strategia anti-spreco interessante per ridurre i costi sui sacchi indifferenziato." },
      { q: "Sacco trasparente o nero/colorato: cambia qualcosa?", a: "Funzionalmente no. Alcuni comuni richiedono sacchi trasparenti per la differenziata (per controllo visivo del contenuto), altri richiedono colori specifici. Verifica le regole del tuo comune sul sito o sulla bolletta TARI." },
      { q: "Quanti sacchi all'anno per una famiglia di 4?", a: "Stima: 4 umido + 2 indifferenziato + 1 plastica + 1 carta a settimana = 8 sacchi/settimana = circa 400 sacchi all'anno. Spesa annuale 30-80 € a seconda della scelta del materiale (più alta se tanti compostabili) e del formato (multipack risparmio)." },
      { q: "I sacchi del supermercato discount sono affidabili?", a: "Sì per uso quotidiano. Eurospin, Lidl, Aldi propongono sacchi che sono spesso prodotti dagli stessi stabilimenti dei brand di marca. Materiale e spessore sono garantiti dalla normativa europea (EN 13592 per i sacchi rifiuti). Risparmio sostanziale sul budget annuale." },
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
    guideTitle: "Guida a shampoo e bagnoschiuma: prezzo al litro",
    longDescription: `Shampoo, balsamo, bagnoschiuma e doccia gel sono prodotti di consumo regolare con prezzi al litro che variano del 300-400% fra il formato travel e il family-size, e del 200-300% fra brand premium e private label. Lo stesso prodotto della stessa marca può costare 3,50 €/L in family-size 750 ml e 12 €/L in formato travel 100 ml — a parità di formulazione.

Il calcolatore qui sopra normalizza al €/L tutti i formati: bottiglie travel (50-100 ml), standard (250-400 ml), family-size (500-750 ml), ricariche eco (sacchetti, doypack). È utile in questo reparto perché lo scaffale alterna deliberatamente formati ravvicinati con prezzi che ostacolano il confronto rapido.

Da considerare: il bagno e doccia è uno dei reparti dove il marketing pesa di più (linee specialistiche, ingredienti "premium" come argan, biotina, cheratina). I dermatologi tendono a concordare che per pelli e capelli normali la differenza fra prodotti standard ben formulati è minima.`,
    sections: [
      {
        heading: "Formato travel, standard, family-size",
        body: `Lo stesso brand, lo stesso prodotto, prezzi al litro molto diversi:

— Travel 100 ml: 10-15 €/L (per viaggi, palestra, bagaglio a mano).
— Standard 250 ml: 6-10 €/L (formato "single").
— Standard 400 ml: 4-7 €/L (formato "famiglia piccola").
— Family-size 750 ml: 3-5 €/L (formato "famiglia").
— Bottiglia professionale 1 L: 3-5 €/L (alcuni brand, formato barbershop/saloni).

Il salto fra travel e family-size è circa 4×: per uso quotidiano vai sempre sul family-size se il prodotto ti soddisfa. I formati travel hanno senso solo per il bagaglio a mano (limite 100 ml) o per provare un nuovo prodotto senza rischio.

Se viaggi spesso, conviene comprare bottiglie da viaggio riutilizzabili (2-5 €) e riempirle dal family-size: ammortizzi in 2-3 viaggi.`,
      },
      {
        heading: "Ricariche eco: il formato più economico",
        body: `Le ricariche (doypack, sacchetti) sono il formato in più rapida crescita per shampoo e bagnoschiuma. Caratteristiche:

— Prezzo al litro 20-30% inferiore al family-size equivalente
— Uso il 70-80% meno plastica della bottiglia rigida
— Stesso prodotto, stessa formula

Esempi tipici: shampoo Garnier family 750 ml a 4,99 € (= 6,65 €/L), ricarica 700 ml a 3,99 € (= 5,70 €/L). Risparmio del 14% al litro, plus minore impatto plastico.

Il vincolo è avere già il flacone vuoto in casa. Per chi prima lo butta sistematicamente, conviene tenere uno-due flaconi e usarli a rotazione con le ricariche. Sul lungo termine è la scelta più conveniente e sostenibile.`,
      },
      {
        heading: "Shampoo specialistici: quando valgono il prezzo",
        body: `Le linee specialistiche (anti-forfora, anti-caduta, capelli colorati, capelli grassi) costano in media il 30-80% in più rispetto agli shampoo "uso quotidiano". Vale la pena pagarli?

— Anti-forfora con piritione zinco o ketoconazolo: sì, l'efficacia è dimostrata per forfora persistente.
— Capelli colorati: parzialmente sì, riducono lo scarico del colore nei primi lavaggi dopo la colorazione.
— Anti-caduta: l'efficacia è molto discussa. I trattamenti scientificamente validati (minoxidil, finasteride) sono altra cosa rispetto agli shampoo "anti-caduta" da supermercato.
— Capelli grassi: parzialmente sì, contengono surfattanti più efficaci sui residui sebacei.
— Cute sensibile/ipoallergenico: sì per chi ha allergie note, marginale per chi non ne ha.

Per il consumo quotidiano normale (capelli sani), uno shampoo standard di buon livello copre bene il bisogno. Le linee premium hanno senso per esigenze specifiche documentate.`,
      },
      {
        heading: "Errori comuni",
        body: `Comprare per pubblicità invece che per €/L. I brand più pubblicizzati (Pantene, Garnier, Head & Shoulders) costano spesso il 30-50% in più di alternative equivalenti.

Cadere sui formati "limited edition". Le edizioni stagionali (estate, Natale, profumazioni speciali) costano spesso il 20-30% in più con formula identica al prodotto standard.

Sopra-dosare. Una noce di shampoo (3-5 ml) basta per capelli corti, 5-8 ml per capelli lunghi. Il doppio non lava meglio: produce solo più schiuma. Una bottiglia 250 ml dura circa 50-60 lavaggi, una 750 ml circa 150-180.

Comprare due-tre shampoo "specializzati" diversi. Per uso quotidiano basta uno shampoo neutro di buon livello, eventualmente alternato a uno specifico (esempio: anti-forfora una volta a settimana). Avere troppe bottiglie in bagno significa che alcune scadono prima di essere finite.`,
      },
    ],
    faq: [
      { q: "Family-size 750 ml vs 250 ml: quanto si risparmia?", a: "Tipicamente 30-50% al litro. Se la marca ti soddisfa, vai sul grande senza esitare. Una famiglia di 4 finisce un family-size in 6-8 settimane: zero rischio scadenza." },
      { q: "Le ricariche eco convengono?", a: "Sì: 20-30% in meno della bottiglia + il 70-80% meno plastica usata. La qualità del prodotto è identica. È la scelta più conveniente e sostenibile per shampoo e bagnoschiuma di uso regolare." },
      { q: "Marche del supermercato vs branded: vale la differenza?", a: "Le private label costano la metà o meno. Per uso quotidiano (capelli normali) la differenza è impercettibile; per esigenze specifiche (forfora persistente, capelli colorati post-trattamento) il branded specialistico può valere la pena." },
      { q: "Shampoo 2-in-1 (con balsamo): convengono?", a: "Sì come prezzo (40-50% meno della coppia separata), no come efficacia. Il balsamo per fare effetto deve restare 1-2 minuti, il 2-in-1 si risciacqua subito. Per capelli normali corti può andare, per capelli lunghi/secchi è meglio separare." },
      { q: "Sapone solido per il corpo: alternativa al bagnoschiuma?", a: "Sì: una saponetta da 100 g costa 0,80-2,00 € e dura 30-60 docce. Equivalente in €/uso a bagnoschiuma molto economici, batte tutti i premium. Vantaggi: zero plastica, niente conservanti, formato compatto. Vincoli: serve un porta-saponetta che dreni." },
      { q: "Shampoo solido: funziona davvero?", a: "Sì, e ha avuto grande crescita negli ultimi 5 anni. Un panetto da 50-80 g dura 60-80 lavaggi, equivalente a 2-3 flaconi 250 ml. Costa 6-12 €/panetto. €/lavaggio 8-15 cent — paragonabile o migliore dello shampoo liquido standard. Plus: zero plastica, formato bagaglio a mano." },
      { q: "Quanto dura uno shampoo aperto?", a: "12-24 mesi dopo l'apertura, indicato dal simbolo PAO (periodo di apertura) sull'etichetta: 12M, 24M, ecc. Oltre questo termine il prodotto resta funzionale ma può separarsi o perdere profumazione. Per uso domestico normale lo si finisce ben prima." },
      { q: "Bagnoschiuma 'pelli sensibili' o ipoallergenici: valgono il prezzo?", a: "Per chi ha allergie da contatto o dermatiti note, sì. Riducono profumi, parabeni, SLS. Per pelli normali la differenza è impercettibile e il prezzo è 30-60% superiore. Scegli in base a esigenze reali, non per il claim generico." },
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
    guideTitle: "Guida agli snack salati: prezzo al chilo",
    longDescription: `Patatine, crackers, taralli, grissini, popcorn, snack ai cereali: il reparto degli snack salati è uno dei più frammentati del supermercato per formati e prezzi al chilo. Lo stesso tipo di patatine può costare 5 €/kg in formato famiglia 200 g e oltre 20 €/kg in formato monoporzione 25 g — a parità di brand e gusto.

Il calcolatore qui sopra normalizza al €/kg qualunque formato (sacchetti singoli, multipack, tubi rigidi, formati famiglia, monoporzioni). È uno dei reparti dove fare il confronto fa la differenza maggiore, perché lo scaffale è progettato per ostacolare il confronto fra formati: gli stessi 100 g di prodotto possono essere venduti in 4-5 formati diversi a prezzi molto diversi.

Da considerare: gli snack salati sono prodotti a consumo "voluttuario" — non sono nella spesa di prima necessità. Per chi li compra regolarmente, scegliere il formato giusto fa risparmiare 50-150 €/anno facilmente.`,
    sections: [
      {
        heading: "Sacchetto, monoporzione, multipack, formato famiglia",
        body: `Lo stesso brand, lo stesso gusto, prezzi molto diversi:

— Monoporzione 25-30 g: 13-20 €/kg (la più cara, formato distributore/scuola)
— Sacchetto standard 100-150 g: 6-12 €/kg (formato classico aperitivo)
— Multipack 6-8 × 25-30 g: 8-14 €/kg (formato "famiglia con bambini")
— Formato famiglia 200-300 g: 4-8 €/kg (il più economico)

Per consumi familiari regolari il formato famiglia 200-300 g batte chiaramente. Per evitare di mangiare tutto in una serata, puoi riporzionare in piccoli sacchetti riutilizzabili.

Le monoporzioni hanno senso solo per controllo delle dosi (diete, scuola) o per momenti specifici (ufficio, picnic). Per uso casalingo sono il formato peggiore in assoluto sul €/kg.`,
      },
      {
        heading: "Brand premium vs private label",
        body: `Le marche storiche (San Carlo, Amica Chips, Pai, Lay's, Pringles) propongono qualità riconoscibile. Le private label (Coop, Conad, Lidl, Esselunga) sono spesso ottime alternative a metà del prezzo.

Prezzi tipici per patatine classiche:
— Brand premium 150 g: 1,60-2,20 € (= 10-15 €/kg)
— Private label 150 g: 0,80-1,20 € (= 5-8 €/kg)
— Discount 200 g: 0,80-1,50 € (= 4-7 €/kg)

I blind test pubblicati da associazioni di consumatori mostrano spesso che i consumatori distinguono con difficoltà fra brand storici e private label di buona fattura nel segmento patatine classiche. Le linee "ricetta speciale" o "gourmet" (truffle, peperoncino calabrese, ecc.) hanno spesso reale differenza di qualità ma a prezzi più alti.`,
      },
      {
        heading: "Patatine in sacchetto vs in tubo rigido",
        body: `Le patatine "tube" (Pringles è il riferimento storico) hanno una struttura diversa: sono "snack di patata" ricomposti da farina di patate, non patate intere affettate. Il formato tubo:

— Mantiene meglio l'integrità delle patatine (zero rotte)
— Si conserva più a lungo dopo l'apertura grazie al tappo rigido
— Costa il 30-50% in più al kg rispetto al sacchetto classico
— Genera più packaging non riciclabile (il tubo è di solito cartone + alluminio + plastica)

Per gusti specifici (paprika, sour cream) e per consumi controllati (tappo rigido) i tubi hanno il loro pubblico. Per il consumo principale di patatine classiche, i sacchetti restano più convenienti.`,
      },
      {
        heading: "Snack salati al supermercato vs distributore",
        body: `La differenza di prezzo fra canali è una delle più estreme del food:

— Supermercato monoporzione: 0,40-0,80 €
— Distributore automatico: 1,50-2,00 €
— Bar/snack bar: 1,20-2,00 €
— Stadio/cinema: 3-5 € per la stessa monoporzione

Per chi compra spesso snack fuori casa, una scorta in borsa o in ufficio risparmia 1-2 €/giorno. In un anno lavorativo (220 giorni) il calcolo si fa serio: 220-440 €/anno.

Conviene preparare una "scorta da ufficio" comprando un formato famiglia o un multipack e tenendolo nel cassetto. Si compra una volta ogni 4-6 settimane, ognuno si serve, costo per snack 1/3 del distributore.`,
      },
    ],
    faq: [
      { q: "Sacchetti monoporzione o formato famiglia?", a: "Il formato famiglia costa 2-3× meno al kg ma porta a mangiarne di più (effetto 'pacchetto aperto'). Le monoporzioni aiutano il controllo delle quantità, utili per chi vuole dosare. Per consumi casalinghi regolari, il formato famiglia vince sul prezzo." },
      { q: "Patatine al supermercato vs distributore?", a: "Al supermercato 1-1,5 €/100g, al distributore automatico 3-4 €/100g. Differenza 3×. Una scorta in borsa o ufficio risparmia 1-2 €/giorno." },
      { q: "Patatine in tubo (Pringles) vs in sacchetto: cosa cambia?", a: "Le tube costano 30-50% in più al kg per il packaging più costoso. Le patatine classiche restano più convenienti a parità di gusto. I tubi hanno il loro pubblico per gusti specifici e per il tappo richiudibile, non per il €/kg." },
      { q: "Cracker e grissini sono più sani delle patatine?", a: "Marginalmente: cracker e grissini hanno meno grassi (15-20% vs 30-35% delle patatine fritte) ma livelli di sale simili o superiori. Le patatine al forno (non fritte) hanno profilo simile ai cracker. Le scelte 'sane' dipendono soprattutto dalle quantità." },
      { q: "Snack 'integrali' o 'multicereali': valgono il prezzo?", a: "Costano il 20-40% in più dei classici. L'apporto di fibre è generalmente leggermente superiore ma non sostituiscono frutta o verdura. La scelta è etica/percepita più che nutrizionale reale." },
      { q: "Pop corn al microonde vs in pentola: differenza?", a: "I pop corn da fare in casa (mais secco da pop) costano 3-5 €/kg, equivalenti a 0,20-0,40 €/porzione. I pop corn al microonde costano 8-15 €/kg, le buste pronte 12-20 €/kg. Il fai-da-te è il modo più economico in assoluto: 1 kg di mais secco fa 30-40 porzioni." },
      { q: "Quanto durano gli snack salati aperti?", a: "Patatine in sacchetto aperto: 2-3 giorni mantenendo croccantezza, 5-7 giorni accettabile. Cracker, grissini: 1-2 settimane in scatola ermetica. Patatine in tubo rigido: 5-7 giorni con tappo chiuso. Pop corn fatti in casa: meglio entro la giornata." },
      { q: "Snack salati al posto del pane: si può?", a: "Per un pasto occasionale (panino veloce), cracker e grissini sostituiscono il pane in emergenza. Nutrizionalmente sono simili sul piano calorico (350-450 kcal/100g) ma più ricchi di sodio. Non sono una sostituzione regolare." },
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
    guideTitle: "Guida ai succhi di frutta: prezzo al litro",
    longDescription: `I succhi di frutta hanno una struttura di prezzo molto frammentata: brick monodose 125-200 ml, bottiglie 1 L, brik famiglia 1,5 L, multipack scolastici 3-6 brick. Il €/L varia da meno di 1,20 € per i nettari private label in formato grande fino a oltre 6 €/L per le spremute fresche al frigo.

Il calcolatore qui sopra normalizza tutto al €/L confrontando brick, bottiglie e fardelli anche fra unità diverse (ml, cl, L). È utile in questo reparto perché lo scaffale alterna deliberatamente nettari e succhi 100% a parità di formato, con prezzi vicini che mascherano differenze qualitative importanti.

Da considerare: il segmento "succhi di frutta" in Italia comprende prodotti molto diversi sul piano qualitativo e nutrizionale. La distinzione 100% frutta / nettare / succo è regolata da norma (D.Lgs 151/2014) ma a colpo d'occhio non sempre è leggibile.`,
    sections: [
      {
        heading: "100% frutta, nettare, bevanda alla frutta",
        body: `Tre categorie ben distinte:

— Succo 100% frutta: ottenuto dalla sola spremitura/estrazione, nessun zucchero aggiunto. Prezzo 2,50-4,50 €/L. Esempio: arancia 100%, mela 100%.

— Nettare: 25-50% di succo + acqua + zucchero/dolcificanti. Prezzo 1,80-3,20 €/L. La maggior parte dei nettari di pera, pesca, albicocca, ananas sono in questa categoria perché i frutti puri sono troppo densi/aspri per essere bevuti tal quali.

— Bevanda alla frutta: meno del 25% di succo, prevalentemente acqua + zucchero + aromi. Prezzo 1,50-2,80 €/L. Sono in pratica bibite con un'aggiunta di succo.

Leggi sempre la lista ingredienti e la percentuale di frutta in etichetta (obbligatoria). Per uso quotidiano in famiglia il 100% frutta è la scelta nutrizionalmente migliore; i nettari sono accettabili per varietà; le bevande alla frutta sono sostanzialmente bibite.`,
      },
      {
        heading: "Brick monodose, bottiglia, brik famiglia",
        body: `I formati e i loro €/L tipici:

— Brick monodose 125-200 ml: 3,00-5,00 €/L (per scuola, picnic, ufficio)
— Multipack 3-6 × 200 ml: 2,50-4,00 €/L
— Bottiglia 1 L PET: 1,50-3,00 €/L
— Brik famiglia 1,5 L: 1,20-2,50 €/L (il più economico)
— Bottiglia vetro 750 ml premium: 4,00-6,50 €/L

Per consumo casalingo regolare, il brik famiglia 1,5 L o la bottiglia 1 L sono le scelte razionali. I brick monodose hanno senso solo per la praticità (zaino scolastico, viaggi, ufficio) — sul prezzo perdono nettamente.

Da considerare: una volta aperto, un brick/bottiglia di succo va consumato in 4-7 giorni in frigo (UHT) o 2-4 giorni (fresco). Per famiglie con consumo lento, il formato 1 L è preferibile per evitare sprechi.`,
      },
      {
        heading: "UHT, frescati, spremute fresche",
        body: `Sul piano della lavorazione esistono tre categorie:

— UHT (lunga conservazione): trattati a 130-140 °C per pochi secondi, shelf-life 6-12 mesi a temperatura ambiente sigillati. Sapore standardizzato. Prezzo 1,50-3,50 €/L.

— Frescati / non da concentrato: pastorizzati a temperatura più bassa, conservati in frigo, shelf-life 30-90 giorni. Sapore più "fresco". Prezzo 3,00-5,00 €/L.

— Spremute fresche al banco frigo: pastorizzazione minima o assente, shelf-life 5-15 giorni. Sapore vicino alla spremuta fatta in casa. Prezzo 5,00-8,00 €/L.

Per uso quotidiano l'UHT 100% frutta resta il miglior rapporto qualità/prezzo. Le spremute fresche hanno senso per occasioni specifiche o per chi preferisce il sapore "fatto al momento" — il prezzo è 2-3× l'UHT.`,
      },
      {
        heading: "Errori comuni",
        body: `Confondere "nettare" con "succo 100%". Il claim "frutto X" a centro pagina sull'etichetta non distingue: leggi sotto la percentuale di frutta. 50% frutta = nettare, 100% frutta = succo puro.

Comprare brick monodose per casa. Per il consumo casalingo è il formato peggiore al €/L. Conviene comprare 1 L o 1,5 L e versare in bicchiere/borraccia.

Sottovalutare lo zucchero. Un succo 100% frutta arancia ha circa 8-10 g di zucchero/100 ml — naturale ma comunque calorico. I nettari aggiungono altri 3-7 g/100 ml di zucchero. Per chi controlla il regime alimentare, succhi e nettari sono fra le bevande più zuccherate al supermercato.

Pagare il "premium" per ingredienti esotici. Succhi con superfrutti (acai, melograno, baobab) costano spesso il 50-100% in più dei classici. I benefici nutrizionali addizionali sono in genere modesti rispetto al costo.`,
      },
    ],
    faq: [
      { q: "100% frutta vs nettare: che differenza?", a: "Il succo 100% non ha zuccheri aggiunti né diluizione, costa 30-50% in più al litro. Il nettare è 25-50% frutta + acqua + zucchero (legalmente regolato). Per uso quotidiano il 100% frutta è la scelta nutrizionalmente migliore. Leggi sempre l'etichetta." },
      { q: "Brick 200 ml o bottiglia 1 L: cosa scegliere?", a: "La bottiglia costa il 40-60% meno al litro. Il brick monodose si paga la praticità (zaino scuola, ufficio, picnic) e zero spreco con consumo singolo. Per uso casalingo regolare conviene il 1 L o 1,5 L." },
      { q: "Spremute fresche al supermercato convengono?", a: "Le 'fresche' costano 5-8 €/L, contro i 2-3,5 €/L dei succhi UHT 100% frutta. Hanno shelf-life di pochi giorni: convengono solo per consumo immediato o quando il sapore 'spremuta fresca' è prioritario." },
      { q: "Quanto zucchero contiene un succo di frutta?", a: "Un succo 100% frutta arancia contiene 8-10 g di zucchero/100 ml (naturale). Un nettare aggiunge 3-7 g/100 ml di zucchero. Una bottiglia 1 L di nettare = 100-150 g di zuccheri totali. Anche i succhi 'naturali' contribuiscono significativamente all'apporto calorico." },
      { q: "Succo di frutta o frutta intera: cosa è meglio?", a: "La frutta intera è preferibile dal punto di vista nutrizionale: stessa frutta + fibre (che il succo non ha) + più sazietà. Le linee guida nutrizionali italiane suggeriscono di limitare i succhi a un bicchiere occasionale e privilegiare la frutta fresca." },
      { q: "Marche premium o private label?", a: "Per succhi 100% frutta classici (arancia, mela, pera) le private label dei principali supermercati offrono ottima qualità al 30-50% in meno dei brand premium. Per nettari di frutti più rari (frutto della passione, mango) le marche specializzate possono valere il prezzo extra." },
      { q: "Si possono congelare i succhi?", a: "Sì, in bottiglia non piena (il liquido si espande) o in vaschette per ghiaccio per porzioni piccole. Dura 6-12 mesi a -18°C. Si scongelano in frigo. Pratica utile per succhi premium acquistati in offerta." },
      { q: "Succhi 'ACE' o vitaminizzati valgono il prezzo extra?", a: "I succhi 'ACE' aggiungono vitamine A, C, E sintetiche al succo di base (arancia, carota, limone). Costano il 10-20% in più. Per chi ha una dieta equilibrata l'apporto vitaminico aggiuntivo è marginale; per altri (anziani, dieta povera di frutta/verdura) può avere un senso." },
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
    guideTitle: "Guida alle tabs lavastoviglie: prezzo per tab",
    longDescription: `Le tabs per lavastoviglie sono uno dei prodotti dove il "€/scatola" inganna di più: la stessa tab dello stesso brand può costare 0,15 €/tab in un megapack 120 pezzi online e oltre 0,40 €/tab in scatola da 30 al supermercato. Per chi fa 5-7 lavaggi a settimana (260-360 all'anno), passare da 0,30 a 0,18 €/tab significa risparmiare 40-60 €/anno.

Il calcolatore qui sopra normalizza tutto al €/tab, indipendentemente dal formato (scatole 15, 30, 40, 60, 100, 150). È utile in questo reparto perché le confezioni grandi non sempre sono in vista nello scaffale, e il €/tab della maxi-confezione è in media il 30-40% inferiore al pacco standard.

Da considerare: una scorta di tabs ha shelf-life 2-3 anni: zero rischio scadenza anche con i megapack 150+ pezzi.`,
    sections: [
      {
        heading: "All-in-one, tab base, gel-cap",
        body: `Tre famiglie principali sul mercato:

— Tab base (pastiglie semplici): solo detersivo, vanno completate con brillantante e sale separati. Prezzo 0,12-0,25 €/tab. Più economiche al pezzo ma richiedono prodotti aggiuntivi e dosaggi manuali.

— All-in-one (12-funzioni, 14-funzioni, ecc.): contengono detersivo + brillantante + sale + altri ingredienti in unica tab. Prezzo 0,20-0,45 €/tab. Più pratiche, ma per acqua dura serve comunque sale rigenerante separato (nessuna tab lo sostituisce).

— Gel-cap (capsule liquide): formulazione più recente, formato in gel solubile. Prezzo 0,30-0,55 €/tab. Vantaggio percepito: si sciolgono più rapidamente. Differenze pratiche modeste.

Per uso quotidiano in famiglia l'all-in-one è la scelta più diffusa per la praticità. Per chi ottimizza il budget e non ha problemi a tenere brillantante e sale separati, la tab base in megapack scende sotto 0,15 €/tab — il modo più economico.`,
      },
      {
        heading: "Megapack, multipack, scatola standard",
        body: `I formati e i loro €/tab tipici:

— Scatola standard 25-30 tab: 0,30-0,45 €/tab (formato supermercato classico)
— Scatola 40-50 tab: 0,25-0,35 €/tab
— Maxipack 60-80 tab: 0,20-0,30 €/tab
— Megapack 100-120 tab: 0,18-0,28 €/tab
— Megapack 150-200 tab (online): 0,15-0,22 €/tab
— Multipack 3 × 40 = 120 tab (offerta supermercato): 0,17-0,25 €/tab

Per consumo familiare regolare il megapack 100+ tab è la scelta ovvia: shelf-life 2-3 anni, zero rischio scadenza, prezzo per tab inferiore del 40-50% rispetto al pacco da 30. Per consumo basso (single con lavastoviglie poco usata), la scatola 40-50 tab è il sweet spot.`,
      },
      {
        heading: "Brand vs private label",
        body: `I brand storici (Finish, Fairy, Cura&Casa, Calgonit) propongono prodotti con formule "premium" — più funzioni dichiarate, profumazioni, additivi anti-calcare. I private label (Coop, Conad, Lidl, Esselunga) propongono alternative funzionalmente paragonabili al 30-50% in meno.

Prezzi tipici:
— Finish Quantum Ultimate: 0,30-0,45 €/tab (megapack)
— Finish All-in-One: 0,20-0,35 €/tab (megapack)
— Private label all-in-one: 0,12-0,22 €/tab (megapack)
— Discount tab base (Eurospin, Lidl): 0,08-0,15 €/tab

I blind test pubblicati da associazioni di consumatori mostrano spesso che le private label "12 funzioni" o "All-in-One" raggiungono pulizia paragonabile ai brand premium nelle condizioni di uso quotidiano. La differenza si percepisce su sporco molto incrostato, dove i brand premium con tensioattivi più aggressivi possono vincere.`,
      },
      {
        heading: "Sale, brillantante e accortezze per acqua dura",
        body: `Anche con tab all-in-one, in zone con acqua dura (sopra 25 °F) bisogna aggiungere sale rigenerante separato. Le tab all-in-one promettono "anche calcare" ma di fatto contengono solo piccole dosi di addolcenti — non sostituiscono l'addolcitore della lavastoviglie.

Costo del sale rigenerante: 0,50-1,00 €/kg. Una lavastoviglie ne consuma 0,5-1 kg/anno per acqua media, 1-2 kg/anno per acqua dura. Spesa annuale 2-5 €.

Il brillantante separato (per chi usa tab base): 0,80-2,00 €/L, durata 200-400 lavaggi per litro. Spesa annuale 5-15 €.

In zone con acqua molto dura (> 35 °F, gran parte del nord Italia urbano), aggiungere periodicamente "lavaggi a vuoto" con prodotti specifici anti-calcare (Calgonit, Fairy intensive) prolunga la vita dell'elettrodomestico. Una bustina ogni 2-3 mesi, costo annuale 8-15 €.`,
      },
    ],
    faq: [
      { q: "All-in-one vs detersivo + brillantante separati?", a: "All-in-one più caro ma più semplice e veloce. Per acqua dura aggiungi comunque sale rigenerante: nessun tab lo sostituisce, le tab 'anche calcare' hanno solo additivi modesti. Per chi vuole ottimizzare il budget, le tab base + brillantante separato + sale costano meno." },
      { q: "Megapack 100+ tab convengono?", a: "Quasi sempre: scendono sotto 0,20 €/tab, contro 0,30-0,45 della scatola da 30. La shelf-life 2-3 anni elimina il rischio scadenza. Per consumo familiare regolare è la scelta ovvia." },
      { q: "Tabs senza fosfati: differenza di prezzo?", a: "Marginalmente più care (5-10%). I fosfati sono limitati per legge UE dal 2017 al massimo 0,3 g per dose: tutte le tab moderne sono già a basso contenuto. Il claim 'no fosfati' è ormai un differenziatore di marketing più che pratico." },
      { q: "Quanta lavastoviglia carico per usare 1 tab?", a: "Una tab è dosata per un carico standard (12-14 coperti). Per mezzi carichi (4-6 coperti) puoi spezzare la tab a metà se è del tipo morbido (gel-cap), o usare il programma 'metà carico' della lavastoviglie. Le tab compatte non si rompono bene." },
      { q: "Brand premium o private label?", a: "Per uso quotidiano i private label danno risultati paragonabili al 30-50% in meno. I brand premium (Finish Quantum, Fairy Platinum) hanno il loro pubblico per sporco intenso o per la profumazione particolare. Per spesa media familiare le private label sono spesso la scelta razionale." },
      { q: "Le tab compostabili o eco esistono?", a: "Sì: alcuni brand (Ecover, Eco-Tabs, alcune linee Sonett) propongono formulazioni con tensioattivi vegetali e packaging compostabile. Costano 30-50% in più delle tab standard. Sono una scelta etica/ambientale; sulla pulizia sono paragonabili o leggermente inferiori sui sporchi più ostinati." },
      { q: "Quante tab servono per un anno?", a: "Stima media: 1 lavaggio al giorno per coppia = 365 tab/anno. 5-7 lavaggi a settimana per famiglia 4 persone = 260-360 tab/anno. Un megapack 150 tab copre 5-7 mesi a coppia, 4-5 mesi a famiglia." },
      { q: "Conservazione delle tab: precauzioni?", a: "Tenere la confezione ben chiusa in luogo asciutto. L'umidità (es. mobile sotto il lavello) può far appiccicare le tab fra loro o farle gonfiare prima dell'uso. Se la lavastoviglie è in un mobile umido, conviene mettere le tab in un barattolo ermetico in cucina." },
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
    guideTitle: "Guida agli yogurt: prezzo per vasetto",
    longDescription: `Lo yogurt è uno dei reparti più affollati del banco frigo: confezioni da 2, 4, 6, 8, 12 vasetti, formato singolo premium, yogurt greco, magro, alla frutta, "kids", versioni proteiche, kefir, varianti vegetali. Il prezzo per vasetto va da meno di 0,25 € per il multipack base private label fino a oltre 1,50 € per i singoli premium o le linee specialistiche.

Il calcolatore qui sopra normalizza tutto al €/vasetto indipendentemente dalla grammatura (le confezioni mischiano 100, 125, 150 g spesso a parità di prezzo). È utile in questo reparto perché lo scaffale alterna formati e brand con prezzi pensati per ostacolare il confronto: due multipack da 4 vasetti possono nascondere il 30-50% di differenza al vasetto.

Da considerare: lo yogurt ha shelf-life relativamente breve (15-30 giorni dalla produzione), quindi va comprato in quantità realistica rispetto al consumo familiare. Una famiglia media consuma 12-20 vasetti a settimana.`,
    sections: [
      {
        heading: "Yogurt naturale, alla frutta, greco, kefir",
        body: `Le principali categorie sul mercato italiano:

— Naturale (intero o magro): solo latte fermentato. Prezzo 0,25-0,55 €/vasetto. La base nutrizionale più semplice.

— Alla frutta: con polpa o aromi di frutta + zucchero. Prezzo 0,30-0,70 €/vasetto. Contiene 8-15 g di zuccheri totali per vasetto (di cui parte naturali del latte, parte aggiunti).

— Greco (Total, Fage, Activia Yogurt, Kyr): drenato per ridurre il siero, denso e ricco di proteine (8-10 g vs 4-5 g del naturale). Prezzo 0,60-1,20 €/vasetto.

— Kefir: yogurt liquido fermentato con kefir grains, contiene anche lieviti oltre ai lattobacilli. Prezzo 1,50-3,00 €/L.

— Skyr (yogurt islandese): simile al greco ma ancora più drenato, 10-12 g proteine, 0% grassi. Prezzo 0,80-1,40 €/vasetto.

Per chi cerca proteine, il greco e lo skyr sono nettamente superiori. Per uso "merenda" o colazione standard, il naturale o alla frutta basta.`,
      },
      {
        heading: "Multipack vs vasetti singoli premium",
        body: `Lo stesso brand, prezzo per vasetto molto diverso:

— Multipack 8-12 × 125 g: 0,25-0,45 €/vasetto
— Multipack 4 × 125 g standard: 0,40-0,65 €/vasetto
— Vasetti singoli premium (artigianale, biologico): 0,80-1,80 €/vasetto

Per consumo regolare in famiglia, il multipack 8 è il sweet spot fra prezzo e gestione delle scadenze. Una famiglia di 4 lo consuma in 4-6 giorni: zero rischio scadenza.

I vasetti singoli premium hanno senso solo per occasioni specifiche: assaggi di linee artigianali, regali, edizioni limitate. Per la merenda quotidiana, il multipack standard è razionale.`,
      },
      {
        heading: "Brand premium vs private label",
        body: `Sui yogurt la differenza fra brand premium (Danone, Müller, Activia, Yomo, Vipiteno) e private label (Coop, Conad, Lidl, Esselunga) è più nel marketing che nella formulazione. Molti private label sono prodotti dagli stessi stabilimenti dei brand premium (la dicitura "prodotto da" in etichetta a volte lo conferma).

Prezzi tipici per multipack 8 × 125 g:
— Brand premium: 3,00-4,50 € (= 0,38-0,56 €/vasetto)
— Private label GDO: 1,80-2,80 € (= 0,23-0,35 €/vasetto)
— Discount: 1,50-2,20 € (= 0,19-0,28 €/vasetto)

Per yogurt naturale e alla frutta classici, la private label batte chiaramente sul prezzo con qualità paragonabile. Per linee specialistiche (probiotici dedicati, formulazioni anti-colesterolo come i pro-attivi) i brand premium hanno claim regolamentati che le private label non offrono — la differenza vale per chi cerca quei benefici specifici.`,
      },
      {
        heading: "Yogurt kids, proteici, vegetali",
        body: `Tre nicchie con dinamiche di prezzo specifiche:

— Yogurt kids (con personaggi colorati): contengono spesso più zuccheri e meno frutta dei normali, packaging studiato per attirare i bambini. Prezzo 0,40-0,80 €/vasetto. Leggi la lista ingredienti: spesso yogurt + zucchero + aromi è il pattern. Le alternative "yogurt naturale + frutta vera" sono più sane e più economiche.

— Yogurt proteici (HiPro, Müller Protein, linee fitness): 15-20 g di proteine per vasetto, dedicati a chi fa sport. Prezzo 1,00-1,80 €/vasetto. Per chi davvero ha bisogno di proteine extra possono avere senso, ma uno skyr o uno yogurt greco intero apporta 10-12 g di proteine a metà prezzo.

— Yogurt vegetali (soia, cocco, mandorla, avena): per chi ha intolleranze al lattosio o segue regimi vegani. Prezzo 0,70-1,50 €/vasetto (2-3× il vaccino standard). Le versioni fortificate (con calcio e vitamine) si avvicinano al profilo nutrizionale del vaccino.`,
      },
    ],
    faq: [
      { q: "Yogurt greco vs naturale: ne vale il prezzo?", a: "Il greco costa il 30-50% in più ma ha 2× le proteine. Per la stessa proteina, lo yogurt greco a 150 g batte il naturale 125 g + integratore. Per chi cerca proteine (sport, dieta), il greco o lo skyr sono la scelta più efficiente." },
      { q: "Multipack 8 vs vasetti singoli premium?", a: "Il multipack 8 vasetti scende sotto 0,40 €/vasetto, mentre i singoli premium costano 1+ €. Differenza 3×. Per consumo regolare il multipack è la scelta ovvia." },
      { q: "Yogurt 'kids' colorati: cosa c'è dentro?", a: "Spesso più zucchero e meno frutta dei normali. Costano il 20-30% in più. Leggi la lista ingredienti: yogurt + zucchero + aromi è il pattern tipico. Una alternativa più sana: yogurt naturale + frutta vera (anche mela tagliata o frutti rossi)." },
      { q: "Quanto dura uno yogurt aperto?", a: "Già aperto: 2-3 giorni in frigo a 4°C, ben coperto con pellicola o coperchio. Oltre, può sviluppare muffe superficiali (visibili). Lo yogurt non aperto dura fino alla data di scadenza in etichetta (15-30 giorni dalla produzione)." },
      { q: "Yogurt vegetali (soia, cocco): nutrizionalmente equivalenti?", a: "No: le versioni base hanno meno proteine e meno calcio del vaccino. Le versioni 'fortificate' (con calcio aggiunto, vitamine D, B12) si avvicinano. Costano 2-3× il vaccino. Hanno senso per intolleranti al lattosio o dieta vegana." },
      { q: "Si possono congelare gli yogurt?", a: "Sì, ma la consistenza cambia (diventa granulosa, separazione del siero). Per uso 'a smoothie' o 'tipo gelato' il congelamento è ottimo. Per consumo classico al cucchiaio meno indicato. Pratica utile per usare yogurt vicini alla scadenza che non si finiscono in tempo." },
      { q: "Probiotici vs fermenti lattici: c'è differenza?", a: "Tutti gli yogurt contengono fermenti lattici (Lactobacillus, Streptococcus). I 'probiotici' sono ceppi specifici (Activia ha B. animalis lactis, Yakult ha L. casei Shirota) con studi che ne validano l'efficacia su funzionalità intestinale. Per chi ha problemi digestivi specifici, le linee probiotiche dedicate hanno senso." },
      { q: "Yogurt 0% grassi: sostituisce il normale?", a: "Sì come fonte di proteine, no come 'completo' nutrizionale. I grassi del latte intero veicolano vitamine liposolubili (A, D). Per uso quotidiano alterna intero e 0% in base alle esigenze. Lo 0% è ottimo per regimi ipocalorici." },
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

/**
 * Adjacent categories in the CATEGORIES array (the order curated above —
 * groups bevande, snack, igiene, casa, etc.). Wraps around so the last
 * category's "next" is the first, and vice versa.
 */
export function getAdjacentCategories(category: CategoryDefinition): {
  prev: CategoryDefinition;
  next: CategoryDefinition;
} {
  const i = CATEGORIES.findIndex((c) => c.slug === category.slug);
  const total = CATEGORIES.length;
  const prevIdx = (i - 1 + total) % total;
  const nextIdx = (i + 1) % total;
  return { prev: CATEGORIES[prevIdx], next: CATEGORIES[nextIdx] };
}
