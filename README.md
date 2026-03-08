# charite-analyse

Statische Lernumgebung fuer eine Filmanalyse zu den ersten beiden Folgen von `Charité` Staffel 1 mit Sofortfeedback und direkter Ueberleitung zur Konzeption einer eigenen Serie.

## Enthalten

- Analysefokus fuer `Folge 1: Barmherzigkeit` und `Folge 2: Kaiserwetter`
- Interpretationsmatrix mit vier Spalten:
  - Beobachtung
  - filmisches Mittel
  - Wirkung / Deutung
  - Anschluss an Serienkonzeption
- Sofortfeedback pro Feld, pro Matrixzeile und fuer die Serienkonzept-Phase
- Hintergrundvideo mit dem bereitgestellten `Charité`-Trailer, geblurrt, halbtransparent und in Endlosschleife
- Markdown-Export der gesamten Auswertung
- lokale Speicherung im Browser via `localStorage`

## Quellenbasis

- Folgenhinweise von Das Erste:
  - `Folge 1: Barmherzigkeit`
  - `Folge 2: Kaiserwetter`
  - Staffeluebersicht
- Materialien von Schule BW zu:
  - Erstrezeption
  - visueller Filmsprache
  - akustischer Filmsprache
  - Montage

## Dateien

- `index.html` UI-Struktur
- `styles.css` Gestaltung und Video-Backdrop
- `app.js` Daten, Rendering und Sofortfeedback
- `assets/charite_trailer.mp4` lokales Hintergrundvideo

## Lokal starten

Da das Projekt rein statisch ist, reicht ein einfacher Webserver.

Beispiel:

```bash
npx serve .
```

Dann `index.html` im Browser oeffnen.
