// Unterkünfte für die Maturareise 2027 nach Ayia Napa
// Recherchiert auf Booking.com, CyprusVillas.com und GetawayVillas.com (Stand: Juni 2026).
//
// Schema pro Eintrag:
// {
//   id:            eindeutiger String (kebab-case)
//   name:          Anzeigename
//   type:          "Villa" | "Apartment" | "Hotel"
//   source:        Domain der Quelle (z.B. "booking.com")
//   link:          Direkter Link zur Buchungsseite
//   image:         Bild-URL (oder null -> zeigt Platzhalter)
//   bedrooms:      Anzahl Schlafzimmer (Zahl oder null)
//   bathrooms:     Anzahl Badezimmer (Zahl oder null)
//   maxGuests:     Max. Gästezahl (Zahl oder null)
//   pool:          true/false
//   beachM:        Entfernung zum Strand in Metern (Zahl oder null, für Sortierung)
//   beachLabel:    Anzeigetext zur Strand-Entfernung
//   stripM:        Entfernung zum Strip/Zentrum in Metern (Zahl oder null, für Sortierung)
//   stripLabel:    Anzeigetext zur Strip/Zentrum-Entfernung
//   priceLabel:    Anzeigetext zum Preis (Originalwährung)
//   priceMinEUR:   geschätzter Mindestpreis/Nacht in EUR (Zahl oder null)
//   priceMaxEUR:   geschätzter Höchstpreis/Nacht in EUR (Zahl oder null)
//   note:          optionaler Hinweis/Caveat
// }
//
// Neue Unterkunft hinzufügen: einfach ein weiteres Objekt unten ins Array kopieren und anpassen.

const listings = [
  {
    id: "villa-lula",
    name: "Villa Lula",
    type: "Villa",
    source: "getawayvillas.com",
    link: "https://www.getawayvillas.com/Villa-Lula/Ayia-Napa-Centre/FAMAGUSTA-DISTRICT/Cyprus/4-Bedrooms/Sleeps-8/1610/",
    image: "https://www.getawayvillas.com/images/properties/1610/Villa-Lula-Ayia-Napa-Centre-Cyprus_ex01.jpg",
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    pool: true,
    beachM: 1000,
    beachLabel: "≈1 km zum Nissi Beach",
    stripM: 2000,
    stripLabel: "≈2 km zum Zentrum (lt. Anbieter, Fußweg zu Läden/Restaurants)",
    priceLabel: "≈ £936–2.059/Woche (≈ 155–345 €/Nacht)",
    priceMinEUR: 155,
    priceMaxEUR: 345,
    note: "Sleeps genau 8 — passt exakt zur Gruppengröße. Günstigste Option, ruhige Wohngegend."
  },
  {
    id: "villa-ocean",
    name: "Villa Ocean",
    type: "Villa",
    source: "cyprusvillas.com",
    link: "https://www.cyprusvillas.com/property/pool-villa-ocean-2953.html",
    image: "https://www.cyprusvillas.com/landscape/02953x1000.jpg",
    bedrooms: 5,
    bathrooms: null,
    maxGuests: 10,
    pool: true,
    beachM: 500,
    beachLabel: "≈500 m (Grundstück reicht fast bis ans Meer)",
    stripM: null,
    stripLabel: "kurze Autofahrt ins Zentrum (genaue Distanz auf Seite prüfen)",
    priceLabel: "≈ $415–777/Nacht (≈ 380–715 €)",
    priceMinEUR: 380,
    priceMaxEUR: 715,
    note: "5 Ensuite-Schlafzimmer. Guter Preis-Leistungs-Kompromiss, Auto/Taxi für Strip empfehlenswert."
  },
  {
    id: "nissi-beach-villa-4bed",
    name: "Beautiful 4-Bed Villa, Nissi Beach",
    type: "Villa",
    source: "booking.com",
    link: "https://www.booking.com/hotel/cy/beautiful-4-bed-villa-in-ayia-napa-nissi-beach.en-gb.html",
    image: null,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    pool: true,
    beachM: 600,
    beachLabel: "≈600 m / 8 Gehminuten zum Nissi Beach",
    stripM: null,
    stripLabel: "nicht angegeben — auf Buchungsseite prüfen",
    priceLabel: "Preis datumsabhängig — auf Buchungsseite prüfen",
    priceMinEUR: null,
    priceMaxEUR: null,
    note: "Sleeps genau 8. Preis konnte nicht zuverlässig automatisiert ausgelesen werden (Booking.com lädt Preise dynamisch je nach Datum)."
  },
  {
    id: "villa-cecelia",
    name: "Villa Cecelia",
    type: "Villa",
    source: "cyprusvillas.com",
    link: "https://www.cyprusvillas.com/property/pool-villa-cecelia-3037.html",
    image: "https://www.cyprusvillas.com/landscape/03037x1000.jpg",
    bedrooms: 6,
    bathrooms: null,
    maxGuests: null,
    pool: true,
    beachM: 160,
    beachLabel: "≈160 m zum Strand",
    stripM: 616,
    stripLabel: "≈616 m zum Stadtzentrum/Strip",
    priceLabel: "≈ $815–1.219/Nacht (≈ 750–1.120 €)",
    priceMinEUR: 750,
    priceMaxEUR: 1120,
    note: "Premium-Villa, 6 Schlafzimmer — über dem geplanten Budget, aber sehr zentral und strandnah. Gäste-Maximum nicht angegeben."
  },
  {
    id: "villa-dione",
    name: "Villa Dione",
    type: "Villa",
    source: "cyprusvillas.com",
    link: "https://www.cyprusvillas.com/property/pool-villa-dione-2955.html",
    image: "https://www.cyprusvillas.com/landscape/02955x1000.jpg",
    bedrooms: 6,
    bathrooms: null,
    maxGuests: 12,
    pool: true,
    beachM: 200,
    beachLabel: "≈200 m zum Strand",
    stripM: 620,
    stripLabel: "≈620 m zum Stadtzentrum/Strip",
    priceLabel: "≈ $895–1.219/Nacht (≈ 825–1.120 €)",
    priceMinEUR: 825,
    priceMaxEUR: 1120,
    note: "Premium-Villa, würde auch für größere Gruppen reichen (bis 12) — über Budget für 8 Personen, ggf. mit anderer Klasse teilen."
  },
  {
    id: "seafront-villa",
    name: "Seafront Villa",
    type: "Villa",
    source: "cyprusvillas.com",
    link: "https://www.cyprusvillas.com/property/pool-seafront-villa-2956.html",
    image: "https://www.cyprusvillas.com/landscape/02956x1000.jpg",
    bedrooms: 6,
    bathrooms: null,
    maxGuests: 12,
    pool: true,
    beachM: 200,
    beachLabel: "≈200 m zum Strand",
    stripM: 620,
    stripLabel: "≈620 m zum Stadtzentrum/Strip",
    priceLabel: "≈ $815–1.219/Nacht (≈ 750–1.120 €)",
    priceMinEUR: 750,
    priceMaxEUR: 1120,
    note: "Premium-Villa direkt am Meer, über Budget für 8 Personen — interessant, falls ihr aufstockt oder euch das Highlight wert ist."
  },
  {
    id: "breeze-seaview-villa",
    name: "Breeze Seaview Villa",
    type: "Villa",
    source: "luxelvillas.com",
    link: "https://luxelvillas.com/property/breeze-seaview-villa-6365/?check_in=19-06-2027&check_out=26-06-2027&adults=8",
    image: "https://cdn.loggia.gr/lodgeContent/2925e6eda932d595faffa6db9ff9fbd2.jpg",
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    pool: true,
    beachM: 190,
    beachLabel: "≈100–190 m zum Strand",
    stripM: 3000,
    stripLabel: "≈3 km zum Nightlife / 4 km zum Zentrum",
    priceLabel: "Preis nur mit Datumsauswahl sichtbar (Link ist bereits auf 19.–26.06.2027, 8 Erwachsene gestellt)",
    priceMinEUR: null,
    priceMaxEUR: null,
    note: "Vom User vorgeschlagen. 4 Ensuite-Schlafzimmer + 1 WC, sleeps genau 8. Meeresblick, aber etwas außerhalb vom Strip — Auto/Taxi nötig."
  },
  {
    id: "anemone-seaview-villa",
    name: "Anemone Seaview Villa (Sea Pearl Beachfront Villas)",
    type: "Villa",
    source: "luxelvillas.com",
    link: "https://luxelvillas.com/property/sea-pearl-beachfront-villas/?check_in=19-06-2027&check_out=26-06-2027&adults=8&kids=&infants=&property_id=7013&webhotelier_book_url=https%3A%2F%2Fluxelvillascyprus.reserve-online.net%2F&webhotelier_room_code=ANEMON",
    image: "https://cdn.loggia.gr/lodgeContent/ba863793dce2a42e28d51452700edaf7.jpg",
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    pool: true,
    beachM: 190,
    beachLabel: "≈190 m zum Strand (Gehweite)",
    stripM: 4000,
    stripLabel: "≈3–5 km zum Strip (≈5–7 Min. Fahrt)",
    priceLabel: "Preis nur mit Datumsauswahl sichtbar (Link ist bereits auf 19.–26.06.2027, 8 Erwachsene gestellt)",
    priceMinEUR: null,
    priceMaxEUR: null,
    note: "Vom User vorgeschlagen. 4 Ensuite-Schlafzimmer + 1 WC, sleeps genau 8. Erdgeschoss-Zimmer mit eigenem Eingang. Achtung: 900 € rückzahlbare Kaution pro Aufenthalt."
  },
  {
    id: "orea-villa-or6",
    name: "Ayia Napa Orea Villa OR6",
    type: "Villa",
    source: "booking.com",
    link: "https://www.booking.com/Share-yzQolvA",
    image: null,
    bedrooms: null,
    bathrooms: null,
    maxGuests: null,
    pool: true,
    beachM: 1200,
    beachLabel: "≈1.2 km zum Nissi Beach (laut Orea-Villas-Komplex)",
    stripM: 400,
    stripLabel: "≈400 m zum Stathis Shopping Center, zentrale Lage nahe Nissi Avenue",
    priceLabel: "Preis nicht automatisiert auslesbar — direkt im Link prüfen",
    priceMinEUR: null,
    priceMaxEUR: null,
    note: "Vom User vorgeschlagen (Link konnte nicht automatisiert ausgelesen werden, Booking.com blockiert den Zugriff). Andere Einheiten im selben Orea-Villas-Komplex haben 4–5 Schlafzimmer, 3–4 Badezimmer, Platz für 9–11 Gäste, Pool — Werte für OR6 unbedingt im Link selbst verifizieren."
  },
  {
    id: "kube-luxury-villas",
    name: "Kube Luxury Villas",
    type: "Villa",
    source: "booking.com",
    link: "https://www.booking.com/Share-dHpiOZQ",
    image: "https://kube-luxury-villas.ayianapabeachhotels.com/data/Pics/OriginalPhoto/11380/1138053/1138053847/kube-luxury-villas-ayia-napa-pic-63.JPEG",
    bedrooms: 5,
    bathrooms: 4,
    maxGuests: 12,
    pool: true,
    beachM: 700,
    beachLabel: "≈700 m zum Pernera Beach",
    stripM: 1700,
    stripLabel: "≈1,7 km zum Celebrities Square (Zentrum)",
    priceLabel: "ab ≈ €229/Nacht (Saison-Deal, Datum auf Seite prüfen)",
    priceMinEUR: 229,
    priceMaxEUR: null,
    note: "Vom User vorgeschlagen. Modernes Design, 5 Schlafzimmer/4 Bäder, Platz für bis zu 12 — größer als nötig, könnte sich aber preislich lohnen. Bewertung lt. Recherche 9.2/10."
  },
  {
    id: "villa-julie-ann",
    name: "Villa Julie Ann",
    type: "Villa",
    source: "booking.com / clickstay.com",
    link: "https://www.booking.com/hotel/cy/villa-julie-ann.html",
    image: "https://d1xwsse20yj78.cloudfront.net/eyJidWNrZXQiOiJjbGlja3N0YXkiLCJrZXkiOiJpbWFnZXMvcHJvcGVydHkvNTAwMzYxLzg5Nng1OTcvNzgzNjcyNzgtYmVhY2gtdmlsbGEtTmlzc2ktQmVhY2gtQ3lwcnVzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ==",
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 10,
    pool: true,
    beachM: 900,
    beachLabel: "≈900 m / 10 Gehminuten zum Nissi Beach",
    stripM: null,
    stripLabel: "\"ein paar Gehminuten zu Bars/Restaurants\" — genaue Distanz auf Seite prüfen",
    priceLabel: "Preis nur mit Datumsauswahl sichtbar",
    priceMinEUR: null,
    priceMaxEUR: null,
    note: "Eigene Recherche (moderne Villa). Mitten in Ayia Napa, fußläufig zu Bars/Restaurants und nah an Nissi Beach. Alternativ buchbar über clickstay.com/p/500361."
  },
  {
    id: "napa-blue-apartment",
    name: "Napa Blue Apartment, XXL Pool",
    type: "Apartment",
    source: "booking.com",
    link: "https://www.booking.com/hotel/cy/napa-blue-apartment-xxl-pool-in-hearth-of-ayia-napa.html",
    image: null,
    bedrooms: null,
    bathrooms: 1,
    maxGuests: null,
    pool: true,
    beachM: 1000,
    beachLabel: "≈13 Gehminuten (≈1 km) zum Pernera Beach",
    stripM: null,
    stripLabel: "lt. Name „im Herzen von Ayia Napa“ — genaue Distanz prüfen",
    priceLabel: "ab ≈ $143/Nacht (≈ 130 €) — kleinere Einheit",
    priceMinEUR: 130,
    priceMaxEUR: null,
    note: "Apartmentanlage mit gemeinsamem XXL-Pool. Kapazität pro Einheit unklar — für 8 Personen vermutlich mehrere Apartments nötig. Günstigste Option, aber Verfügbarkeit/Größe vor Buchung direkt prüfen."
  }
];
