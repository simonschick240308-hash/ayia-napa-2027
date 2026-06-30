# Ayia Napa 2027 — Unterkunfts-Vergleich

Statisches Tool zum Vergleichen von Unterkünften für die Maturareise 2027 (8 Personen, Budget ≈ 400–650 €/Nacht).
Kein Build nötig — `index.html` einfach im Browser öffnen oder per `python3 -m http.server` lokal hosten.

## Dateien

| Datei | Inhalt |
|-------|--------|
| `index.html` | Die eigentliche Seite: Filter, Sortierung, Karten-Ansicht |
| `data.js` | Die Unterkunfts-Daten (Liste, leicht erweiterbar) |

## Features

- Karten mit Bild, Link zur Buchungsseite, Schlafzimmer, Badezimmer, max. Gäste, Pool ja/nein
- Entfernung zum Strand & zum Strip/Zentrum
- Preis-Schätzung in EUR + Budget-Ampel (im Budget / günstiger / über Budget / Preis prüfen)
- Filter: nur mit Pool, max. Preis, nur Favoriten
- Sortierung: Preis, Strand-Distanz, Strip-Distanz, Schlafzimmer
- Favoriten (★) werden lokal im Browser gespeichert (`localStorage`), um in der Klasse eine Vorauswahl zu treffen

## Eigene Unterkünfte ergänzen (z.B. eure Villen-Links)

In `data.js` einfach ein neues Objekt ins `listings`-Array kopieren und ausfüllen. Schema steht als Kommentar
am Dateianfang. Pflichtfelder sind `id`, `name`, `link`; alle anderen Felder dürfen `null` sein, wenn unbekannt
(zeigt dann „–“ bzw. einen Hinweistext statt falscher Daten).

## Wichtiger Hinweis

Alle Preise sind **Richtwerte aus einer Recherche im Juni 2026** und können sich je nach Reisedatum stark
ändern. Vor jeder Buchung/Entscheidung unbedingt Preis & Verfügbarkeit direkt auf der verlinkten Seite
prüfen. USD/GBP wurden grob in Euro umgerechnet (kein Live-Wechselkurs).
