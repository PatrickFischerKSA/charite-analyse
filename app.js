const STORAGE_KEY = "charite_analyse_v1";

const SOURCES = [
  {
    label: "Das Erste: Folgenübersicht",
    url: "https://www.daserste.de/unterhaltung/serie/charite/sendung-staffel-1/charite-staffel-1-filter-alle-folgen100.html"
  },
  {
    label: "Schule BW: Film im Deutschunterricht",
    url: "https://www.schule-bw.de/faecher-und-schularten/sprachen-und-literatur/deutsch/unterrichtseinheiten/film"
  },
  {
    label: "Schule BW: Visuelle Mittel",
    url: "https://www.schule-bw.de/faecher-und-schularten/sprachen-und-literatur/deutsch/unterrichtseinheiten/film/filmkanon/filmsprache-visuell"
  },
  {
    label: "Schule BW: Akustische Mittel",
    url: "https://www.schule-bw.de/faecher-und-schularten/sprachen-und-literatur/deutsch/unterrichtseinheiten/film/filmkanon/filmsprache-akustisch"
  },
  {
    label: "Schule BW: Montage",
    url: "https://www.schule-bw.de/faecher-und-schularten/sprachen-und-literatur/deutsch/unterrichtseinheiten/film/filmkanon/montage"
  },
  {
    label: "Schule BW: Erstrezeption",
    url: "https://www.schule-bw.de/faecher-und-schularten/sprachen-und-literatur/deutsch/unterrichtseinheiten/film/filmanalyse"
  }
];

const METHOD_CARDS = [
  {
    title: "Erstrezeption",
    body: "Der erste Zugriff bündelt spontane Seheindrücke, irritierende Momente und Leitfragen, bevor Details einzeln untersucht werden.",
    bullets: ["Seheindruck sichern", "Konfliktvermutung formulieren", "erste Wirkung notieren"]
  },
  {
    title: "Visuelle Mittel",
    body: "Die Analyse richtet den Blick auf Einstellungsgrößen, Kameraperspektive, Kamerabewegung, Licht, Farbe, Raum und Blickführung.",
    bullets: ["Bildgröße benennen", "Raumfunktion deuten", "Blickregie und Macht lesen"]
  },
  {
    title: "Akustische Mittel",
    body: "Geräusche, Sprache, Musik und Stille werden nicht dekorativ behandelt, sondern als Träger von Atmosphäre, Haltung und Konflikt.",
    bullets: ["Geräusche isolieren", "Sprachhaltung prüfen", "Musik oder Stille deuten"]
  },
  {
    title: "Montage",
    body: "Schnitt und Szenenfolge ordnen Aufmerksamkeit, beschleunigen Konflikte und verknüpfen private Handlungen mit gesellschaftlichen Folgen.",
    bullets: ["Anschlüsse beobachten", "Parallelisierung prüfen", "Rhythmus bewerten"]
  }
];

const EPISODES = [
  {
    id: "ep1",
    title: "Folge 1: Barmherzigkeit",
    hook: "Aus dem Ersten-Snippet: Ida wird als arme Patientin in die Charité eingeliefert, Ärzte müssen über sie entscheiden und parallel erschüttert die Krankheit des Kronprinzen die Ärzteschaft.",
    focus: "Einführung in Figuren, Machtverhältnisse und medizinische Hierarchien",
    prompts: [
      "Wie wird Ida Lenze als Figur eingeführt: als Patientin, Beobachterin oder sozialer Störfaktor?",
      "Wie macht die Folge den Gegensatz zwischen Barmherzigkeit, Karriere und wissenschaftlichem Fortschritt sichtbar?",
      "Welche serielle Leitfrage ist nach Folge 1 bereits etabliert?"
    ],
    scenes: [
      "Idas Aufnahme und die Entscheidung über Behandlung, Geld und Status",
      "Appendektomie im Hörsaal als Verbindung von Wissen, Spektakel und Macht",
      "Gespräche über Kronprinz Friedrich als Brücke von Klinik zum Reich"
    ],
    links: [
      {
        label: "Folge 1 bei Das Erste",
        url: "https://www.daserste.de/unterhaltung/serie/charite/sendung-staffel-1/charite-folge-1-folge-1-barmherzigkeit-100.html"
      }
    ]
  },
  {
    id: "ep2",
    title: "Folge 2: Kaiserwetter",
    hook: "Aus dem Ersten-Snippet: Ida beginnt als Hilfswärterin, Therese träumt vom Medizinstudium und Robert Koch forscht mit seinen Assistenten an einem Heilmittel gegen Tuberkulose.",
    focus: "Vertiefung von Forschungsdrama, Geschlechterordnung und institutioneller Gewalt",
    prompts: [
      "Wie verbindet die Folge Pflegealltag, Forschung und politische Repräsentation?",
      "Wie werden Therese, Ida, Bering und Koch als Figuren mit gegensätzlichen Interessen weiterentwickelt?",
      "Welche Konflikte tragen mehrere Folgen und öffnen damit die Serie nach vorne?"
    ],
    scenes: [
      "Tuberkulose- und Diphtherie-Szenen als Druckraum für Entscheidungen",
      "Tischendorfs Unsicherheit und Berings Härte in der Lehrsituation",
      "Kaiserbesuch und Labor als politische Bühne der Wissenschaft"
    ],
    links: [
      {
        label: "Folge 2 bei Das Erste",
        url: "https://www.daserste.de/unterhaltung/serie/charite/sendung-staffel-1/charite-folge-2-folge-2-kaiserwetter-100.html"
      }
    ]
  }
];

const MATRIX_ROWS = [
  {
    key: "firstImpression",
    title: "Erstrezeption und Leitfrage",
    prompt: "Welche erste Gesamtwirkung erzeugt die Folge und welche Leitfrage drängt sich auf?",
    observationHint: "Konkrete Seheindrücke, irritierende Momente, auffällige Kontraste",
    mediumHint: "z. B. Eröffnung, Bildaufbau, Tempo, Kontrast von Räumen",
    effectHint: "Was zeigt die Folge damit über Welt, Konflikt oder Haltung?",
    conceptHint: "Welche Leitfrage könnte eure eigene Serie ähnlich stark eröffnen?",
    keywords: ["eröffnung", "kontrast", "welt", "leitfrage", "tempo", "eindruck"]
  },
  {
    key: "figures",
    title: "Figuren und Konflikt",
    prompt: "Welche Figur will was, wer blockiert sie und wie wird das als Konflikt organisiert?",
    observationHint: "mindestens eine Figur + ein konkreter Konfliktmoment",
    mediumHint: "z. B. Blickführung, Nahaufnahme, Dialog, Gegenschnitt",
    effectHint: "Wie verschiebt sich Sympathie, Macht oder Wissen?",
    conceptHint: "Was lernt ihr daraus für Protagonist:in, Antagonismus und Konfliktnetz?",
    keywords: ["nahaufnahme", "dialog", "blick", "gegen", "ziel", "widerstand", "konflikt"]
  },
  {
    key: "spaceVisual",
    title: "Raum, Bild und Macht",
    prompt: "Wie erzählen Raum, Licht, Farbe und Kadrierung soziale Ordnung?",
    observationHint: "konkreter Ort, Bildwirkung, räumliche Anordnung",
    mediumHint: "z. B. Totale, Halbtotale, Aufsicht, Licht, Farbe, Tiefe",
    effectHint: "Wie wird Macht räumlich sichtbar gemacht?",
    conceptHint: "Welche Raumregel soll eure eigene Serie übernehmen oder variieren?",
    keywords: ["totale", "halbtotale", "licht", "farbe", "raum", "aufsicht", "untersicht", "kadrierung"]
  },
  {
    key: "cameraMovement",
    title: "Kamera und Blickregie",
    prompt: "Wie steuert die Kamera Aufmerksamkeit, Nähe und Distanz?",
    observationHint: "konkrete Bewegung oder Perspektive nennen",
    mediumHint: "z. B. Kamerafahrt, Schwenk, Perspektive, Einstellungsgröße",
    effectHint: "Warum fühlt sich die Szene so kontrolliert, hektisch oder bedrängend an?",
    conceptHint: "Welche Kameraregel würde eurer eigenen Serie eine klare Haltung geben?",
    keywords: ["kamera", "perspektive", "schwenk", "fahrt", "nah", "totale", "einstellung"]
  },
  {
    key: "sound",
    title: "Akustische Gestaltung",
    prompt: "Welche Rolle spielen Sprache, Geräusche, Musik oder Stille?",
    observationHint: "Tonmoment benennen, nicht nur allgemein 'dramatisch'",
    mediumHint: "z. B. Geräuschkulisse, Sprechweise, Musik, Stille",
    effectHint: "Wie beeinflusst der Ton Atmosphäre, Spannung oder Deutung?",
    conceptHint: "Welche Tonregel sollte eure Serie wiedererkennbar machen?",
    keywords: ["geräusch", "musik", "stille", "sprache", "stimme", "ton", "kulisse"]
  },
  {
    key: "montage",
    title: "Montage und Erzählrhythmus",
    prompt: "Wie verknüpfen Schnitt und Szenenfolge private Handlung und gesellschaftliche Bedeutung?",
    observationHint: "Schnittfolge, Parallelisierung oder Rhythmus benennen",
    mediumHint: "z. B. Montage, Parallelmontage, Schnitt, Rhythmus",
    effectHint: "Welche Bedeutung entsteht erst durch die Anordnung der Szenen?",
    conceptHint: "Wie soll eure eigene Serie zwischen persönlichem Konflikt und großer Welt schneiden?",
    keywords: ["montage", "schnitt", "parallel", "rhythmus", "folge", "wechsel"]
  },
  {
    key: "seriality",
    title: "Serielle Anlage",
    prompt: "Was in der Folge trägt über die Einzelszene hinaus und macht daraus eine Serie?",
    observationHint: "offene Konflikte, wiederkehrende Dilemmata, Figurenachsen",
    mediumHint: "z. B. Cliffhanger, Staffelkonflikt, wiederkehrende Konstellation",
    effectHint: "Warum erzeugt die Folge das Bedürfnis weiterzusehen?",
    conceptHint: "Welche Engine soll eure eigene Serie über mehrere Episoden tragen?",
    keywords: ["cliffhanger", "staffel", "episode", "serie", "achse", "wiederkehr", "engine"]
  }
];

const CONCEPT_FIELDS = [
  {
    key: "premise",
    label: "Serienprämisse",
    hint: "Formuliert in 2-4 Sätzen: Worum geht es, welcher Konflikt steht im Zentrum und warum trägt er eine Serie?",
    keywords: ["konflikt", "serie", "welt", "figur", "dilemma", "entscheidung"]
  },
  {
    key: "protagonist",
    label: "Hauptfigur und Gegenspiel",
    hint: "Wer ist die Hauptfigur, was will sie, was blockiert sie und welche Gegenkraft ist dauerhaft wirksam?",
    keywords: ["hauptfigur", "ziel", "gegner", "widerstand", "angst", "institution"]
  },
  {
    key: "engine",
    label: "Serielle Engine",
    hint: "Welche wiederkehrende Entscheidung, welches Dilemma oder welche Arbeitswelt produziert immer neue Episoden?",
    keywords: ["episode", "staffel", "wiederkehr", "entscheidung", "dilemma", "konsequenz"]
  },
  {
    key: "style",
    label: "Visuelle und akustische Handschrift",
    hint: "Welche Regeln zu Kamera, Raum, Licht, Geräusch, Musik oder Stille strukturieren eure Serie?",
    keywords: ["kamera", "licht", "raum", "geräusch", "musik", "stille", "farbe"]
  }
];

const state = loadState();
let activeEpisodeId = EPISODES[0].id;

init();

function init() {
  renderSourceStrip();
  renderMethodCards();
  renderEpisodeCards();
  renderEpisodeSwitch();
  renderMatrix();
  renderConceptFields();
  renderGlobalFeedback();
  bindActions();
}

function createInitialState() {
  return {
    matrix: Object.fromEntries(
      EPISODES.map((episode) => [
        episode.id,
        Object.fromEntries(MATRIX_ROWS.map((row) => [row.key, { observation: "", medium: "", effect: "", concept: "" }]))
      ])
    ),
    concept: Object.fromEntries(CONCEPT_FIELDS.map((field) => [field.key, ""]))
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? mergeState(parsed) : createInitialState();
  } catch (error) {
    return createInitialState();
  }
}

function mergeState(parsed) {
  const initial = createInitialState();
  EPISODES.forEach((episode) => {
    MATRIX_ROWS.forEach((row) => {
      const next = parsed?.matrix?.[episode.id]?.[row.key];
      if (next && typeof next === "object") {
        initial.matrix[episode.id][row.key] = {
          observation: String(next.observation || ""),
          medium: String(next.medium || ""),
          effect: String(next.effect || ""),
          concept: String(next.concept || "")
        };
      }
    });
  });
  CONCEPT_FIELDS.forEach((field) => {
    initial.concept[field.key] = String(parsed?.concept?.[field.key] || "");
  });
  return initial;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderSourceStrip() {
  const box = document.getElementById("source-strip");
  box.innerHTML = SOURCES.map(
    (source) => `<a class="source-pill" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`
  ).join("");
}

function renderMethodCards() {
  const box = document.getElementById("method-grid");
  box.innerHTML = METHOD_CARDS.map(
    (card) => `
      <article class="method-card">
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.body)}</p>
        <ul>${card.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
      </article>
    `
  ).join("");
}

function renderEpisodeCards() {
  const box = document.getElementById("episode-grid");
  box.innerHTML = EPISODES.map(
    (episode) => `
      <article class="episode-card">
        <header>
          <div>
            <h3>${escapeHtml(episode.title)}</h3>
            <p class="episode-meta">${escapeHtml(episode.focus)}</p>
          </div>
        </header>
        <p>${escapeHtml(episode.hook)}</p>
        <ul>${episode.scenes.map((scene) => `<li>${escapeHtml(scene)}</li>`).join("")}</ul>
        <ul>${episode.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}</ul>
        <div class="episode-links">
          ${episode.links.map((link) => `<a class="source-pill" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </article>
    `
  ).join("");
}

function renderEpisodeSwitch() {
  const box = document.getElementById("episode-switch");
  box.innerHTML = EPISODES.map((episode) => {
    const activeClass = episode.id === activeEpisodeId ? "active" : "";
    const score = getEpisodeScore(episode.id);
    return `<button type="button" class="episode-tab ${activeClass}" data-episode-tab="${episode.id}" role="tab" aria-selected="${episode.id === activeEpisodeId}">${escapeHtml(episode.title)} · ${score}%</button>`;
  }).join("");

  box.querySelectorAll("[data-episode-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeEpisodeId = button.dataset.episodeTab;
      renderEpisodeSwitch();
      renderMatrix();
    });
  });
}

function renderMatrix() {
  const box = document.getElementById("matrix-panel");
  const episode = EPISODES.find((entry) => entry.id === activeEpisodeId);
  const score = getEpisodeScore(activeEpisodeId);

  box.innerHTML = `
    <div class="matrix-meta">
      <span>Aktive Folge: ${escapeHtml(episode.title)}</span>
      <span>Fortschritt: ${score}%</span>
      <span>Fokus: ${escapeHtml(episode.focus)}</span>
    </div>
    <div class="matrix-grid">
      ${MATRIX_ROWS.map((row) => renderRowCard(activeEpisodeId, row)).join("")}
    </div>
  `;

  box.querySelectorAll("textarea[data-episode]").forEach((area) => {
    area.addEventListener("input", onMatrixInput);
  });
}

function renderRowCard(episodeId, row) {
  const value = state.matrix[episodeId][row.key];
  const evaluation = evaluateRow(row, value);
  return `
    <article class="row-card" data-row-card="${row.key}">
      <div class="row-head">
        <div>
          <h3>${escapeHtml(row.title)}</h3>
          <p>${escapeHtml(row.prompt)}</p>
        </div>
        <span class="status-badge ${evaluation.tone}" data-row-status="${row.key}">${escapeHtml(evaluation.label)}</span>
      </div>
      <div class="field-grid">
        ${renderMatrixField(episodeId, row, "observation", "Beobachtung", row.observationHint, value.observation)}
        ${renderMatrixField(episodeId, row, "medium", "Filmisches Mittel", row.mediumHint, value.medium)}
        ${renderMatrixField(episodeId, row, "effect", "Wirkung / Deutung", row.effectHint, value.effect)}
        ${renderMatrixField(episodeId, row, "concept", "Anschluss an Serienkonzeption", row.conceptHint, value.concept)}
      </div>
      <div class="row-feedback" data-row-feedback="${row.key}">${evaluation.messages.map((message) => `<div class="feedback-block ${evaluation.tone}"><p>${escapeHtml(message)}</p></div>`).join("")}</div>
    </article>
  `;
}

function renderMatrixField(episodeId, row, field, label, hint, value) {
  const micro = evaluateField(row, field, value);
  return `
    <label>
      ${escapeHtml(label)}
      <textarea
        data-episode="${episodeId}"
        data-row="${row.key}"
        data-field="${field}"
        placeholder="${escapeHtml(hint)}"
      >${escapeHtml(value || "")}</textarea>
      <div class="micro-feedback" data-micro="${row.key}:${field}"><strong>${escapeHtml(micro.title)}:</strong> ${escapeHtml(micro.text)}</div>
    </label>
  `;
}

function renderConceptFields() {
  const box = document.getElementById("concept-grid");
  box.innerHTML = CONCEPT_FIELDS.map((field) => {
    const value = state.concept[field.key];
    const micro = evaluateConceptField(field, value);
    return `
      <label class="concept-field">
        <h3>${escapeHtml(field.label)}</h3>
        <p>${escapeHtml(field.hint)}</p>
        <textarea data-concept="${field.key}" placeholder="${escapeHtml(field.hint)}">${escapeHtml(value)}</textarea>
        <div class="micro-feedback" data-concept-micro="${field.key}"><strong>${escapeHtml(micro.title)}:</strong> ${escapeHtml(micro.text)}</div>
      </label>
    `;
  }).join("");

  box.querySelectorAll("textarea[data-concept]").forEach((area) => {
    area.addEventListener("input", onConceptInput);
  });

  renderConceptFeedback();
}

function renderConceptFeedback() {
  const box = document.getElementById("concept-feedback");
  const evaluation = evaluateConcept();
  box.innerHTML = evaluation.messages
    .map((message) => `<div class="feedback-block ${evaluation.tone}"><p>${escapeHtml(message)}</p></div>`)
    .join("");
}

function renderGlobalFeedback() {
  const box = document.getElementById("global-feedback");
  const episodeCards = EPISODES.map((episode) => {
    const score = getEpisodeScore(episode.id);
    const tone = score >= 75 ? "good" : score >= 45 ? "medium" : "weak";
    const text =
      score >= 75
        ? "Die Matrix arbeitet schon interpretierend und verbindet Filmmittel mit Serienkonzept."
        : score >= 45
          ? "Die Analyse ist angelegt, braucht aber an mehreren Stellen präzisere Begriffe und stärkere Deutungen."
          : "Noch dominieren Stichworte. Mehr konkrete Beobachtung und klar benannte filmische Mittel sind nötig.";
    return `<div class="feedback-chip ${tone}"><strong>${escapeHtml(episode.title)} · ${score}%</strong>${escapeHtml(text)}</div>`;
  }).join("");

  const concept = evaluateConcept();
  box.innerHTML = episodeCards + `<div class="feedback-chip ${concept.tone}"><strong>Eigene Serie</strong>${escapeHtml(concept.summary)}</div>`;
}

function bindActions() {
  document.getElementById("reset-state").addEventListener("click", () => {
    if (!window.confirm("Alle Eingaben in dieser Einheit wirklich löschen?")) return;
    const next = createInitialState();
    state.matrix = next.matrix;
    state.concept = next.concept;
    saveState();
    renderEpisodeSwitch();
    renderMatrix();
    renderConceptFields();
    renderGlobalFeedback();
  });

  document.getElementById("export-markdown").addEventListener("click", () => {
    exportMarkdown();
  });
}

function onMatrixInput(event) {
  const episodeId = event.target.dataset.episode;
  const rowKey = event.target.dataset.row;
  const field = event.target.dataset.field;
  state.matrix[episodeId][rowKey][field] = event.target.value;
  saveState();
  renderEpisodeSwitch();
  updateMatrixFieldUI(episodeId, rowKey, field);
  renderGlobalFeedback();
}

function onConceptInput(event) {
  const key = event.target.dataset.concept;
  state.concept[key] = event.target.value;
  saveState();
  updateConceptFieldUI(key);
  renderConceptFeedback();
  renderGlobalFeedback();
}

function updateMatrixFieldUI(episodeId, rowKey, field) {
  if (episodeId !== activeEpisodeId) return;
  const row = MATRIX_ROWS.find((entry) => entry.key === rowKey);
  if (!row) return;

  const value = state.matrix[episodeId][rowKey];
  const fieldEval = evaluateField(row, field, value[field]);
  const micro = document.querySelector(`[data-micro="${rowKey}:${field}"]`);
  if (micro) {
    micro.innerHTML = `<strong>${escapeHtml(fieldEval.title)}:</strong> ${escapeHtml(fieldEval.text)}`;
  }

  const rowEval = evaluateRow(row, value);
  const status = document.querySelector(`[data-row-status="${rowKey}"]`);
  if (status) {
    status.className = `status-badge ${rowEval.tone}`;
    status.textContent = rowEval.label;
  }

  const feedback = document.querySelector(`[data-row-feedback="${rowKey}"]`);
  if (feedback) {
    feedback.innerHTML = rowEval.messages
      .map((message) => `<div class="feedback-block ${rowEval.tone}"><p>${escapeHtml(message)}</p></div>`)
      .join("");
  }
}

function updateConceptFieldUI(key) {
  const field = CONCEPT_FIELDS.find((entry) => entry.key === key);
  if (!field) return;
  const micro = document.querySelector(`[data-concept-micro="${key}"]`);
  if (!micro) return;
  const evaluation = evaluateConceptField(field, state.concept[key]);
  micro.innerHTML = `<strong>${escapeHtml(evaluation.title)}:</strong> ${escapeHtml(evaluation.text)}`;
}

function evaluateField(row, field, value) {
  const normalized = normalize(value);
  const wordCount = countWords(normalized);
  if (!normalized) {
    return { title: "Fehlt", text: "Noch leer. Formuliere mindestens einen vollständigen Beobachtungssatz." };
  }

  if (field === "observation") {
    if (wordCount >= 8 && hasAny(normalized, ["szene", "ida", "therese", "bering", "koch", "raum", "patient", "labor", "hörsaal", "hoersaal", "kaiser"])) {
      return { title: "Treffend", text: "Die Beobachtung ist konkret genug, um daraus eine Deutung abzuleiten." };
    }
    return { title: "Zu allgemein", text: "Nenne eine Figur, einen Raum oder einen exakten Moment der Folge." };
  }

  if (field === "medium") {
    if (wordCount >= 3 && hasAny(normalized, row.keywords)) {
      return { title: "Benannt", text: "Das filmische Mittel ist erkennbar und anschlussfähig." };
    }
    return { title: "Unscharf", text: "Verwende einen filmsprachlichen Begriff wie Totale, Geräusch, Montage oder Perspektive." };
  }

  if (field === "effect") {
    if (wordCount >= 8 && hasAny(normalized, ["zeigt", "wirkt", "verdeutlicht", "macht", "dadurch", "so", "weil", "konflikt", "macht", "ordnung"])) {
      return { title: "Deutung vorhanden", text: "Beobachtung und Wirkung werden schon sinnvoll verbunden." };
    }
    return { title: "Mehr Deutung", text: "Formuliere explizit, was die Gestaltung über Konflikt, Macht oder Haltung aussagt." };
  }

  if (wordCount >= 7 && hasAny(normalized, ["serie", "staffel", "episode", "figur", "welt", "konzept", "konflikt", "prämisse", "praemisse", "engine"])) {
    return { title: "Transfer gelingt", text: "Die Analyse wird produktiv in eine eigene Serie überführt." };
  }
  return { title: "Transfer ausbauen", text: "Leite aus der Beobachtung eine konkrete Regel für eure eigene Serie ab." };
}

function evaluateRow(row, value) {
  const fields = ["observation", "medium", "effect", "concept"];
  const complete = fields.filter((field) => normalize(value[field]).length > 0).length;
  const strong = fields.filter((field) => evaluateField(row, field, value[field]).title !== "Fehlt" && !evaluateField(row, field, value[field]).title.includes("Zu allgemein") && !evaluateField(row, field, value[field]).title.includes("Unscharf") && !evaluateField(row, field, value[field]).title.includes("Mehr Deutung") && !evaluateField(row, field, value[field]).title.includes("Transfer ausbauen")).length;

  let tone = "weak";
  let label = "Noch roh";
  if (complete === 4 && strong >= 3) {
    tone = "good";
    label = "Interpretierend";
  } else if (complete >= 3) {
    tone = "medium";
    label = "Auf dem Weg";
  }

  const messages = [];
  if (!normalize(value.observation)) messages.push("Beginne mit einer präzisen Beobachtung aus der Folge, nicht mit einer allgemeinen Wertung.");
  if (!normalize(value.medium)) messages.push("Benenne dann das filmische Mittel klar, damit die Analyse nicht im Eindruck stecken bleibt.");
  if (!normalize(value.effect)) messages.push("Formuliere anschließend die Wirkung: Was zeigt oder kritisiert die Szene dadurch?");
  if (!normalize(value.concept)) messages.push("Schließe mit einem Transfer in eine eigene Serie ab, damit Analyse und Konzeption verbunden bleiben.");
  if (messages.length === 0) {
    if (tone === "good") {
      messages.push("Diese Zeile funktioniert bereits als vollständiger Mini-Analysegang von Beobachtung über Deutung bis zur eigenen Serienregel.");
    } else {
      messages.push("Die Zeile ist gefüllt. Jetzt einzelne Formulierungen schärfen: weniger Nacherzählung, mehr Filmbegriff und klarere Wirkung.");
    }
  }

  return { tone, label, messages };
}

function evaluateConceptField(field, value) {
  const normalized = normalize(value);
  const wordCount = countWords(normalized);
  if (!normalized) {
    return { title: "Fehlt", text: "Noch leer. Formuliere mindestens 2-3 zusammenhängende Sätze." };
  }
  if (wordCount >= 18 && hasAny(normalized, field.keywords)) {
    return { title: "Tragfähig", text: "Das Feld enthält genug Stoff, um eine Serienkonzeption zu tragen." };
  }
  return { title: "Ausbauen", text: "Mehr Konfliktlogik, Figurenziel oder audiovisuelle Regel ergänzen." };
}

function evaluateConcept() {
  const values = CONCEPT_FIELDS.map((field) => state.concept[field.key]);
  const strong = CONCEPT_FIELDS.filter((field) => evaluateConceptField(field, state.concept[field.key]).title === "Tragfähig").length;
  const filled = values.filter((value) => normalize(value)).length;

  let tone = "weak";
  let summary = "Die Analyse ist noch nicht in ein belastbares Serienkonzept überführt.";
  if (filled === CONCEPT_FIELDS.length && strong >= 3) {
    tone = "good";
    summary = "Die Analyse liefert bereits ein tragfähiges Fundament für eine eigene Serie.";
  } else if (filled >= 3) {
    tone = "medium";
    summary = "Die Brücke zur eigenen Serie ist angelegt, braucht aber noch präzisere Konflikt- und Stilregeln.";
  }

  const messages = [];
  if (!normalize(state.concept.premise)) messages.push("Die Serienprämisse fehlt noch oder bleibt zu abstrakt.");
  if (!normalize(state.concept.protagonist)) messages.push("Hauptfigur und Gegenkraft sollten als dauerhafter Konflikt beschrieben werden.");
  if (!normalize(state.concept.engine)) messages.push("Die serielle Engine muss erklären, warum mehrere Episoden entstehen.");
  if (!normalize(state.concept.style)) messages.push("Die eigene audiovisuelle Handschrift sollte mit klaren Regeln beschrieben werden.");
  if (messages.length === 0) {
    messages.push(summary);
  }

  return { tone, summary, messages };
}

function getEpisodeScore(episodeId) {
  const rows = MATRIX_ROWS.map((row) => evaluateRow(row, state.matrix[episodeId][row.key]));
  const points = rows.reduce((sum, row) => sum + (row.tone === "good" ? 3 : row.tone === "medium" ? 2 : 1), 0);
  const max = MATRIX_ROWS.length * 3;
  return Math.round((points / max) * 100);
}

function exportMarkdown() {
  const chunks = [];
  chunks.push("# Charité Analyseübung");
  chunks.push("");
  EPISODES.forEach((episode) => {
    chunks.push(`## ${episode.title}`);
    chunks.push("");
    MATRIX_ROWS.forEach((row) => {
      const entry = state.matrix[episode.id][row.key];
      chunks.push(`### ${row.title}`);
      chunks.push(`- Beobachtung: ${entry.observation || "-"}`);
      chunks.push(`- Filmisches Mittel: ${entry.medium || "-"}`);
      chunks.push(`- Wirkung / Deutung: ${entry.effect || "-"}`);
      chunks.push(`- Anschluss an Serienkonzeption: ${entry.concept || "-"}`);
      chunks.push("");
    });
  });

  chunks.push("## Eigene Serie");
  chunks.push("");
  CONCEPT_FIELDS.forEach((field) => {
    chunks.push(`### ${field.label}`);
    chunks.push(state.concept[field.key] || "-");
    chunks.push("");
  });

  const blob = new Blob([chunks.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "charite-analyseuebung-auswertung.md";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function countWords(value) {
  return normalize(value).split(/\s+/).filter(Boolean).length;
}

function hasAny(value, terms) {
  return terms.some((term) => normalize(value).includes(normalize(term)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
