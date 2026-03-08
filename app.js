const STORAGE_KEY = "charite_analyse_v2";

const CONNECTORS = ["weil", "dadurch", "indem", "wodurch", "deshalb", "damit", "so dass", "auf diese weise", "hierdurch"];
const FILM_TERMS = [
  "nahaufnahme", "grossaufnahme", "großaufnahme", "detail", "totale", "halbtotale", "amerikanisch", "aufsicht", "untersicht",
  "normalperspektive", "kamera", "kamerafahrt", "schwenk", "zoom", "licht", "farbe", "kadrierung", "tiefenschaerfe",
  "tiefenschärfe", "schnitt", "montage", "parallelmontage", "geraeusch", "geräusch", "musik", "stille", "ton", "dialog"
];
const THEME_TERMS = [
  "macht", "hierarchie", "wissenschaft", "barmherzigkeit", "karriere", "armut", "status", "ordnung", "autoritaet", "autorität",
  "geschlecht", "pflege", "forschung", "medizin", "staat", "politik", "kaiserreich", "klasse", "konflikt", "institution"
];
const SERIAL_TERMS = [
  "folge", "staffel", "serie", "wiederkehr", "offen", "spaeter", "später", "weiter", "entwicklung", "konfliktachse",
  "dauerkonflikt", "cliffhanger", "mehrere folgen", "episoden", "serielle"
];
const EPISODE_ANCHORS = {
  ep1: ["ida", "lenze", "bering", "ehrlich", "koch", "virchow", "kronprinz", "hoersaal", "hörsaal", "operation", "appendektomie", "charite"],
  ep2: ["ida", "therese", "bering", "koch", "tischendorf", "kitasato", "tuberkulose", "diphtherie", "labor", "kaiser", "charite"]
};

const SOURCES = [
  {
    label: "Folge 1 in Dropbox",
    url: "https://www.dropbox.com/scl/fi/e42zk5vr0iicc291ebj8v/Folge-1-Barmherzigkeit-S01E01.mp4?rlkey=etck8r642javgz2habtl2lc5e&st=r4nt04m0&dl=0"
  },
  {
    label: "Folge 2 in Dropbox",
    url: "https://www.dropbox.com/scl/fi/anohh9fcbs75yp1bxxfrt/Folge-2-Kaiserwetter-S01E02.mp4?rlkey=rj0pbmebj7blwlvtjfgrf254f&st=nvos969x&dl=0"
  },
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
  }
];

const METHOD_MODULES = [
  {
    key: "method_erstrezeption",
    title: "1. Erstrezeption sauber sichern",
    intro:
      "Die erste Notiz darf noch tastend sein, aber sie darf nicht bloss Stimmung behaupten. Sie muss mindestens einen konkreten Moment, eine Leitfrage und eine erste Hypothese enthalten.",
    criteria: [
      "Nenne einen genauen Moment oder eine genaue Konstellation der Folge.",
      "Formuliere eine Leitfrage, die mit der Folge weiterarbeitet.",
      "Begründe den Eindruck mit einem ersten Deutungssatz."
    ],
    prompt:
      "Verfasse 4-5 Sätze zu deinem ersten Gesamteindruck von Folge 1 oder 2. Benenne eine auffällige Szene, formuliere eine Leitfrage und erkläre, was diese Folge nach deinem Eindruck grundsätzlich verhandelt.",
    example:
      "Satzanfangshilfe: Schon in der Eröffnung wirkt ... / Auffällig ist, dass ... / Daraus ergibt sich die Leitfrage ...",
    minWords: 45,
    requiredTerms: ["szene", "frage", "wirkt", "folge"],
    anchorTerms: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2],
    themeTerms: THEME_TERMS,
    correctionTemplate:
      "Schon in der Szene [konkreter Moment] wirkt die Folge [Adjektiv], weil [konkrete Beobachtung]. Auffällig ist, dass [Figur/Institution] hier [Handlung] und damit [Konflikt] sichtbar wird. Daraus ergibt sich die Leitfrage, ob [Leitfrage]. Insgesamt verhandelt die Folge also [Thema] und nicht bloss [Inhaltsangabe]."
  },
  {
    key: "method_visuell",
    title: "2. Visuelle Mittel nicht nur aufzählen",
    intro:
      "Eine gute Analyse benennt das Mittel und erklärt dann, was dieses Mittel in dieser konkreten Szene leistet. 'Dunkel' oder 'dramatisch' reicht nicht.",
    criteria: [
      "Benenne mindestens zwei filmsprachliche Begriffe.",
      "Verknüpfe die Bildgestaltung mit Macht, Hierarchie oder Nähe/Distanz.",
      "Formuliere in ganzen Sätzen, nicht in Stichworten."
    ],
    prompt:
      "Analysiere in 4-6 Sätzen eine visuelle Konstellation aus den ersten beiden Folgen: Bildgröße, Perspektive, Licht, Raum oder Blickführung. Erkläre, welche soziale Ordnung dadurch sichtbar wird.",
    example:
      "Satzanfangshilfe: Die Szene arbeitet mit einer [Nahaufnahme/Totale], wodurch ... / Das Licht macht sichtbar, dass ...",
    minWords: 50,
    requiredTerms: FILM_TERMS,
    anchorTerms: ["raum", "licht", "blick", "kamera", ...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2],
    themeTerms: ["macht", "hierarchie", "status", "ordnung", "naehe", "nähe", "distanz"],
    correctionTemplate:
      "In der Szene [Ort/Moment] arbeitet die Folge mit [filmischem Mittel 1] und [filmischem Mittel 2]. Dadurch wirkt [Figur/Gruppe] [nah/fern/überlegen/unterlegen]. Besonders das [Licht/der Raum/die Perspektive] macht sichtbar, dass [soziale Ordnung]. Die visuelle Gestaltung zeigt also nicht nur ein Bild, sondern organisiert [Machtverhältnis]."
  },
  {
    key: "method_akustik",
    title: "3. Akustische Gestaltung deuten",
    intro:
      "Auch Ton muss präzise beschrieben werden. Gute Analysen unterscheiden Geräusche, Sprechweise, Musik und Stille und erklären, welche Wirkung daraus entsteht.",
    criteria: [
      "Benenne mindestens einen akustischen Befund konkret.",
      "Erkläre die Wirkung mit einem Kausalzusammenhang.",
      "Verknüpfe Ton mit Konflikt oder Atmosphäre."
    ],
    prompt:
      "Beschreibe in 4-5 Sätzen, wie Sprache, Geräusch, Musik oder Stille in einer Szene der Folgen 1 oder 2 Spannung oder Haltung erzeugen.",
    example:
      "Satzanfangshilfe: Die Szene wirkt bedrängend, weil ... / Gerade die Stille nach ... verstärkt, dass ...",
    minWords: 40,
    requiredTerms: ["geraeusch", "geräusch", "musik", "stille", "sprache", "stimme", "ton"],
    anchorTerms: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2],
    themeTerms: ["spannung", "konflikt", "macht", "angst", "druck", "härte", "haerte"],
    correctionTemplate:
      "Akustisch fällt in der Szene [Moment] vor allem [Geräusch/Musik/Stille/Sprechweise] auf. Das wirkt nicht zufällig, sondern verstärkt [Atmosphäre/Konflikt], weil [Kausalzusammenhang]. Gerade im Zusammenspiel mit [Figur/Situation] zeigt der Ton, dass [Deutung]."
  },
  {
    key: "method_montage",
    title: "4. Montage als Bedeutungssteuerung",
    intro:
      "Montage ist mehr als 'es wird geschnitten'. Analysiert werden muss, welche Szenenfolge hergestellt wird und welche Bedeutung erst durch diese Reihung entsteht.",
    criteria: [
      "Nenne mindestens zwei aufeinander bezogene Momente oder Szenen.",
      "Beschreibe den Schnitt- oder Rhythmuseffekt.",
      "Erkläre, welche übergeordnete Aussage daraus entsteht."
    ],
    prompt:
      "Erkläre in 4-6 Sätzen, wie eine Szenenfolge oder Montage in Folge 1 oder 2 private Handlung und gesellschaftliche Dimension miteinander verknüpft.",
    example:
      "Satzanfangshilfe: Der Schnitt von ... zu ... bewirkt, dass ... / Erst die Reihung zeigt, wie ...",
    minWords: 45,
    requiredTerms: ["schnitt", "montage", "folge", "rhythmus", "parallel", "wechsel"],
    anchorTerms: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2],
    themeTerms: ["gesellschaft", "reich", "politik", "institution", "konflikt", "macht"],
    correctionTemplate:
      "Entscheidend ist die Abfolge von [Szene A] zu [Szene B]. Durch diesen Schnitt/Wechsel entsteht [Wirkung], weil beide Momente aufeinander bezogen werden. So zeigt die Montage, dass [private Handlung] immer auch mit [gesellschaftlicher Bedeutung] verbunden ist."
  }
];

const EPISODES = [
  {
    id: "ep1",
    title: "Folge 1: Barmherzigkeit",
    focus: "Einführung in Figuren, Machtverhältnisse und medizinische Hierarchien",
    hook:
      "Ida Lenze wird als arme Patientin in die Charité eingeliefert. Parallel konkurrieren Chirurgie, Forschung und staatspolitische Interessen um Deutungshoheit.",
    sceneAnchors: [
      "Idas Aufnahme: Wer spricht über sie, bevor sie selbst sprechen kann?",
      "Appendektomie im Hörsaal: Wie wird die Patientin zum Lehrmaterial?",
      "Kronprinz-Diskurs: Wie verschiebt die Folge vom Krankenbett zur Reichspolitik?"
    ],
    tasks: [
      {
        key: "ep1_figur",
        title: "Ida Lenze als Einführung einer Serienfigur",
        prompt:
          "Erkläre in 4-6 Sätzen, wie Ida in Folge 1 eingeführt wird. Zeige, wie Armut, Geschlecht und Blick der Institution ihre Figur prägen.",
        criteria: [
          "Ida konkret benennen",
          "mindestens eine Szene der Einführung nennen",
          "Armut, Status oder Geschlecht deuten"
        ],
        minWords: 50,
        requiredTerms: ["ida", "lenze"],
        anchorTerms: ["aufnahme", "patientin", "charite", "hoersaal", "hörsaal", "arzt", "wärterin", "waerterin"],
        themeTerms: ["armut", "status", "geschlecht", "macht", "hierarchie", "blick"],
        correctionTemplate:
          "Ida wird in Folge 1 nicht als neutrale Hauptfigur eingeführt, sondern als [Patientin/arme Frau/Beobachterin]. Schon in der Szene [Moment] zeigt sich, dass andere über sie verfügen, weil [konkrete Beobachtung]. Dadurch wird sichtbar, wie [Armut/Status/Geschlecht] ihre Position bestimmen. Genau das macht Ida als Serienfigur interessant."
      },
      {
        key: "ep1_institution",
        title: "Institutioneller Konflikt",
        prompt:
          "Analysiere in 4-6 Sätzen den Gegensatz von Barmherzigkeit, Karriere und Wissenschaft in Folge 1. Benenne, wer welche Logik verkörpert.",
        criteria: [
          "mindestens zwei Figuren oder Institutionen gegeneinander stellen",
          "den Konflikt nicht nur aufzählen, sondern deuten",
          "zeigen, warum dieser Konflikt seriell tragfähig ist"
        ],
        minWords: 55,
        requiredTerms: ["konflikt", "wissenschaft", "barmherzigkeit", "karriere"],
        anchorTerms: ["bering", "ehrlich", "koch", "virchow", "pflege", "charite", "hoersaal", "hörsaal"],
        themeTerms: ["macht", "hierarchie", "ordnung", "medizin", "institution"],
        correctionTemplate:
          "Folge 1 stellt [Figur/Institution A] und [Figur/Institution B] gegeneinander. Während [A] vor allem [Logik 1] vertritt, steht [B] für [Logik 2]. In der Szene [Moment] wird dieser Gegensatz sichtbar, weil [Beobachtung]. Daraus entsteht ein Dauerkonflikt zwischen [Werten/Interessen]."
      },
      {
        key: "ep1_serie",
        title: "Serielle Leitfrage",
        prompt:
          "Formuliere in 4-5 Sätzen, welche serielle Leitfrage die erste Folge eröffnet und warum diese nicht schon am Ende von Folge 1 erledigt ist.",
        criteria: [
          "eine klare Leitfrage formulieren",
          "mindestens ein offenes Konfliktmoment nennen",
          "die Serienfunktion ausdrücklich benennen"
        ],
        minWords: 45,
        requiredTerms: ["frage", "folge", "serie", "offen"],
        anchorTerms: [...EPISODE_ANCHORS.ep1],
        themeTerms: ["konflikt", "entwicklung", "macht", "wissenschaft", "pflege"],
        correctionTemplate:
          "Die Folge eröffnet die serielle Leitfrage, ob [Leitfrage]. Diese Frage bleibt offen, weil [offenes Konfliktmoment] am Ende nicht gelöst ist. Gerade darin liegt die Serienfunktion: In weiteren Folgen kann sich zeigen, wie [Figur/Institution] auf diesen Dauerkonflikt reagiert."
      }
    ],
    links: [
      {
        label: "Folge 1 in Dropbox",
        url: "https://www.dropbox.com/scl/fi/e42zk5vr0iicc291ebj8v/Folge-1-Barmherzigkeit-S01E01.mp4?rlkey=etck8r642javgz2habtl2lc5e&st=r4nt04m0&dl=0"
      }
    ]
  },
  {
    id: "ep2",
    title: "Folge 2: Kaiserwetter",
    focus: "Vertiefung von Forschungsdrama, Geschlechterordnung und institutioneller Gewalt",
    hook:
      "Ida arbeitet nun in der Charité, Therese denkt über ein Medizinstudium nach und Forschung, Pflege und Politik geraten noch direkter aneinander.",
    sceneAnchors: [
      "Tuberkulose- und Diphtherie-Szenen: Wie erzeugt die Folge Entscheidungsdruck?",
      "Therese und Studium: Wie wird Geschlechterordnung sichtbar?",
      "Kaiserbesuch im Labor: Wie wird Wissenschaft politisch inszeniert?"
    ],
    tasks: [
      {
        key: "ep2_pflege_forschung",
        title: "Pflege, Forschung und Politik verschränken",
        prompt:
          "Erkläre in 4-6 Sätzen, wie Folge 2 Pflegealltag, Forschung und politische Repräsentation aufeinander bezieht. Zeige mindestens zwei Übergänge zwischen diesen Ebenen.",
        criteria: [
          "mindestens zwei Ebenen konkret verbinden",
          "eine Szene aus Pflege/Forschung und eine aus dem politischen Bereich nennen",
          "den Zusammenhang deuten"
        ],
        minWords: 55,
        requiredTerms: ["pflege", "forschung", "politik"],
        anchorTerms: ["ida", "therese", "koch", "bering", "kaiser", "labor", "station", "tuberkulose", "diphtherie"],
        themeTerms: ["macht", "institution", "ordnung", "status", "wissenschaft"],
        correctionTemplate:
          "Folge 2 verbindet [Pflegeszene] und [Forschungs-/Politikszene] gezielt miteinander. Dadurch wird sichtbar, dass [Pflege/Forschung/Politik] nicht getrennte Bereiche sind, sondern sich gegenseitig bestimmen. In der Szene [Moment] zeigt sich das besonders deutlich, weil [Beobachtung]."
      },
      {
        key: "ep2_figuren",
        title: "Figurenachsen zuspitzen",
        prompt:
          "Untersuche in 4-6 Sätzen, wie Folge 2 die Figurenachsen von Therese, Ida, Bering oder Tischendorf verschärft. Entscheide dich für mindestens zwei Figuren.",
        criteria: [
          "mindestens zwei Figuren ausdrücklich vergleichen",
          "Interessen oder Ziele benennen",
          "zeigen, wie daraus weiterer Konflikt entsteht"
        ],
        minWords: 50,
        requiredTerms: ["figur", "ziel", "konflikt"],
        anchorTerms: ["therese", "ida", "bering", "tischendorf", "koch"],
        themeTerms: ["geschlecht", "status", "haerte", "härte", "empathie", "wissenschaft", "pflege"],
        correctionTemplate:
          "[Figur A] verfolgt in Folge 2 [Ziel], während [Figur B] auf [Gegenziel/Haltung] festgelegt wird. In der Szene [Moment] prallen diese Achsen aufeinander. Dadurch verschärft die Folge nicht nur den Einzelkonflikt, sondern bereitet [weiteren Dauerkonflikt] vor."
      },
      {
        key: "ep2_seriell",
        title: "Warum Folge 2 das Weitersehen erzwingt",
        prompt:
          "Formuliere in 4-5 Sätzen, welche offenen Konflikte Folge 2 so anlegt, dass die Serie nach vorne geöffnet wird.",
        criteria: [
          "mindestens zwei offene Konflikte nennen",
          "deren Zukunftspotenzial erklären",
          "die serielle Funktion ausdrücklich benennen"
        ],
        minWords: 45,
        requiredTerms: ["offen", "folge", "serie"],
        anchorTerms: ["therese", "ida", "bering", "koch", "kaiser", "labor"],
        themeTerms: ["entwicklung", "konflikt", "staffel", "wiederkehr", "ordnung"],
        correctionTemplate:
          "Folge 2 zwingt zum Weitersehen, weil [Konflikt 1] und [Konflikt 2] bewusst offen bleiben. Diese Konflikte tragen seriell, da sie in späteren Folgen weiter eskalieren koennen: [kurze Erklärung]. Genau dadurch wird aus Einzelhandlung eine Staffelachse."
      }
    ],
    links: [
      {
        label: "Folge 2 in Dropbox",
        url: "https://www.dropbox.com/scl/fi/anohh9fcbs75yp1bxxfrt/Folge-2-Kaiserwetter-S01E02.mp4?rlkey=rj0pbmebj7blwlvtjfgrf254f&st=nvos969x&dl=0"
      }
    ]
  }
];

const MATRIX_ROWS = [
  {
    key: "opening",
    title: "Eröffnung und Leitfrage",
    prompt: "Wie setzt die Folge ihre Grundspannung bereits in der Eröffnung oder in einem sehr frühen Schlüsselbild?",
    observationHint: "Konkreter Eröffnungsmoment, Figuren, Raum oder Handlung",
    mediumHint: "Filmisches Mittel: Bildgröße, Perspektive, Raum, Licht, Ton oder Montage",
    effectHint: "Was zeigt das über Macht, Konflikt, Haltung oder Welt?",
    serialHint: "Warum ist diese Eröffnung seriell tragfähig und nicht bloß Auftakt einer Einzelepisode?",
    mediumTerms: ["eröffnung", "totale", "nahaufnahme", "kamera", "licht", "raum", "ton", "schnitt"],
    themeTerms: ["macht", "ordnung", "hierarchie", "konflikt", "welt"],
    anchors: ["eroeffnung", "eröffnung", ...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2]
  },
  {
    key: "figureConflict",
    title: "Figurenziel und Widerstand",
    prompt: "Welche Figur will etwas, wer blockiert sie und wie macht die Folge diesen Widerstand sichtbar?",
    observationHint: "Figur, Ziel, Gegenkraft, Schlüsselmoment",
    mediumHint: "Nahaufnahme, Gegenschnitt, Dialog, Blickführung, Distanz, Raumordnung",
    effectHint: "Welche Hierarchie oder Sympathielenkung entsteht?",
    serialHint: "Wie wird daraus eine Konfliktachse für weitere Folgen?",
    mediumTerms: ["nahaufnahme", "dialog", "gegenschnitt", "blick", "raum", "distanz", "kamera"],
    themeTerms: ["ziel", "widerstand", "macht", "sympathie", "hierarchie", "konflikt"],
    anchors: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2]
  },
  {
    key: "spacePower",
    title: "Raum als soziale Ordnung",
    prompt: "Wie erzählt ein Raum der Folge soziale Ordnung, Ausschluss oder Überlegenheit?",
    observationHint: "Nenne den genauen Raum und was dort geschieht",
    mediumHint: "Totale, Halbtotale, Aufsicht, Licht, Wege, Kadrierung",
    effectHint: "Welche gesellschaftliche Ordnung wird dadurch sichtbar?",
    serialHint: "Warum kann dieser Raum in der Serie immer wieder Konflikte produzieren?",
    mediumTerms: ["totale", "halbtotale", "aufsicht", "untersicht", "licht", "kadrierung", "raum"],
    themeTerms: ["ordnung", "ausschluss", "hierarchie", "status", "institution"],
    anchors: ["charite", "labor", "hoersaal", "hörsaal", "station", "operationssaal", "zimmer"]
  },
  {
    key: "soundRhythm",
    title: "Ton, Geräusch und Druck",
    prompt: "Wie arbeiten Ton und Geräusch mit, damit Situationen bedrängend, kalt oder konflikthaft wirken?",
    observationHint: "Konkretes Geräusch, Sprechweise, Musik oder Stille",
    mediumHint: "Sprache, Geräusch, Stille, Musik, Geräuschkulisse, Rhythmus",
    effectHint: "Welche Atmosphäre oder Haltung entsteht daraus?",
    serialHint: "Welche wiedererkennbare Tonlogik lässt sich für die Serie erkennen?",
    mediumTerms: ["geraeusch", "geräusch", "musik", "stille", "sprache", "stimme", "ton", "rhythmus"],
    themeTerms: ["druck", "angst", "haerte", "härte", "ordnung", "konflikt"],
    anchors: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2]
  },
  {
    key: "montagePolitics",
    title: "Montage zwischen Privatfall und großer Geschichte",
    prompt: "Wo verbindet die Folge einen privaten Konflikt mit einer größeren institutionellen oder politischen Dimension?",
    observationHint: "Mindestens zwei aufeinander bezogene Momente nennen",
    mediumHint: "Schnitt, Montage, Parallelisierung, Szenenfolge, Rhythmus",
    effectHint: "Welche Aussage entsteht erst durch die Reihung?",
    serialHint: "Wie öffnet diese Verknüpfung die Serie auf weitere gesellschaftliche Konflikte?",
    mediumTerms: ["schnitt", "montage", "parallel", "wechsel", "folge", "rhythmus"],
    themeTerms: ["politik", "reich", "staat", "institution", "gesellschaft", "macht"],
    anchors: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2]
  },
  {
    key: "serialCore",
    title: "Serielle Kernspannung",
    prompt: "Was ist nach dieser Folge noch nicht gelöst und warum trägt genau das mehrere Episoden?",
    observationHint: "Offener Konflikt, ungelöste Frage, Figurendilemma",
    mediumHint: "Cliffhanger, offene Szenenfolge, wiederkehrende Konstellation, Blick in die Zukunft",
    effectHint: "Welche Erwartungshaltung wird beim Publikum aufgebaut?",
    serialHint: "Erkläre ausdrücklich, warum dies serielle und nicht bloß episodische Spannung ist.",
    mediumTerms: ["cliffhanger", "offen", "folge", "staffel", "wiederkehr", "konstellation"],
    themeTerms: ["entwicklung", "dauerkonflikt", "staffel", "serie", "wiederkehr"],
    anchors: [...EPISODE_ANCHORS.ep1, ...EPISODE_ANCHORS.ep2]
  }
];

const TAKEAWAYS = [
  "Gute Filmanalyse beginnt nicht mit Wertungen, sondern mit präziser Beobachtung eines konkreten Moments.",
  "Ein filmisches Mittel ist erst dann analysiert, wenn seine Wirkung auf Konflikt, Macht, Haltung oder Figurenbeziehung erklärt wird.",
  "Serielle Analyse fragt immer mit: Was bleibt offen, was wiederholt sich, was trägt mehrere Folgen?",
  "Besonders tragfähig für spätere Serienkonzeptionen sind Befunde zu Dauerkonflikten, Räumen mit Konfliktpotenzial und wiederkehrenden audiovisuellen Regeln."
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
  renderTakeaways();
  renderGlobalFeedback();
  bindActions();
}

function createInitialState() {
  return {
    method: Object.fromEntries(METHOD_MODULES.map((module) => [module.key, ""])),
    focus: Object.fromEntries(
      EPISODES.map((episode) => [episode.id, Object.fromEntries(episode.tasks.map((task) => [task.key, ""]))])
    ),
    matrix: Object.fromEntries(
      EPISODES.map((episode) => [
        episode.id,
        Object.fromEntries(MATRIX_ROWS.map((row) => [row.key, { observation: "", medium: "", effect: "", serial: "" }]))
      ])
    )
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    return mergeState(parsed);
  } catch (error) {
    return createInitialState();
  }
}

function mergeState(parsed) {
  const initial = createInitialState();
  METHOD_MODULES.forEach((module) => {
    initial.method[module.key] = String(parsed?.method?.[module.key] || "");
  });
  EPISODES.forEach((episode) => {
    episode.tasks.forEach((task) => {
      initial.focus[episode.id][task.key] = String(parsed?.focus?.[episode.id]?.[task.key] || "");
    });
    MATRIX_ROWS.forEach((row) => {
      const next = parsed?.matrix?.[episode.id]?.[row.key];
      if (next && typeof next === "object") {
        initial.matrix[episode.id][row.key] = {
          observation: String(next.observation || ""),
          medium: String(next.medium || ""),
          effect: String(next.effect || ""),
          serial: String(next.serial || "")
        };
      }
    });
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
  box.innerHTML = METHOD_MODULES.map((module) => renderStandaloneTaskCard("method", module.key, module, state.method[module.key])).join("");
  bindDynamicInputs();
  bindSuggestionButtons();
}

function renderEpisodeCards() {
  const box = document.getElementById("episode-grid");
  box.innerHTML = EPISODES.map((episode) => {
    const taskHtml = episode.tasks
      .map((task) => renderStandaloneTaskCard("focus", `${episode.id}:${task.key}`, task, state.focus[episode.id][task.key]))
      .join("");

    return `
      <article class="episode-card episode-card-dense">
        <header>
          <div>
            <h3>${escapeHtml(episode.title)}</h3>
            <p class="episode-meta">${escapeHtml(episode.focus)}</p>
          </div>
        </header>
        <p>${escapeHtml(episode.hook)}</p>
        <div class="support-box">
          <strong>Beobachtungsschneisen</strong>
          <ul>${episode.sceneAnchors.map((anchor) => `<li>${escapeHtml(anchor)}</li>`).join("")}</ul>
        </div>
        <div class="episode-links">
          ${episode.links.map((link) => `<a class="source-pill" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
        </div>
        <div class="task-stack">${taskHtml}</div>
      </article>
    `;
  }).join("");
  bindDynamicInputs();
  bindSuggestionButtons();
}

function renderStandaloneTaskCard(kind, id, task, value) {
  const evaluation = evaluateStandaloneTask(task, value);
  const domId = sanitizeId(`${kind}-${id}`);
  return `
    <article class="task-card" data-task-card="${domId}">
      <div class="task-head">
        <div>
          <h4>${escapeHtml(task.title)}</h4>
          <p>${escapeHtml(task.intro || task.prompt)}</p>
        </div>
        <span class="status-badge ${evaluation.tone}" data-task-status="${domId}">${escapeHtml(evaluation.label)}</span>
      </div>
      <div class="support-box">
        <strong>Arbeitsauftrag</strong>
        <p>${escapeHtml(task.prompt)}</p>
        <ul>${(task.criteria || []).map((criterion) => `<li>${escapeHtml(criterion)}</li>`).join("")}</ul>
        ${task.example ? `<p class="support-example">${escapeHtml(task.example)}</p>` : ""}
      </div>
      <label>
        Freitextantwort
        <textarea data-standalone-kind="${kind}" data-standalone-id="${id}" placeholder="${escapeHtml(task.prompt)}">${escapeHtml(value || "")}</textarea>
      </label>
      <div class="task-tools">
        <button type="button" class="ghost helper-button" data-suggest-standalone="${kind}:${id}">Korrekturhilfe anzeigen</button>
      </div>
      <div class="feedback-block ${evaluation.tone}" data-task-feedback="${domId}">
        ${renderFeedbackInner(evaluation)}
      </div>
      <div class="suggestion-box" data-task-suggestion="${domId}"></div>
    </article>
  `;
}

function renderEpisodeSwitch() {
  const box = document.getElementById("episode-switch");
  box.innerHTML = EPISODES.map((episode) => {
    const activeClass = episode.id === activeEpisodeId ? "active" : "";
    const summary = summarizeMatrixEpisode(episode.id);
    return `<button type="button" class="episode-tab ${activeClass}" data-episode-tab="${episode.id}" role="tab" aria-selected="${episode.id === activeEpisodeId}">${escapeHtml(episode.title)} · ${summary.label}</button>`;
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
  const summary = summarizeMatrixEpisode(activeEpisodeId);

  box.innerHTML = `
    <div class="matrix-meta">
      <span>Aktive Folge: ${escapeHtml(episode.title)}</span>
      <span>Qualitätsstand: ${escapeHtml(summary.label)}</span>
      <span>${escapeHtml(summary.detail)}</span>
    </div>
    <div class="matrix-grid">
      ${MATRIX_ROWS.map((row) => renderMatrixRow(activeEpisodeId, row)).join("")}
    </div>
  `;

  box.querySelectorAll("textarea[data-matrix-episode]").forEach((area) => {
    area.addEventListener("input", onMatrixInput);
  });
  bindSuggestionButtons();
}

function renderMatrixRow(episodeId, row) {
  const value = state.matrix[episodeId][row.key];
  const evaluation = evaluateMatrixRow(episodeId, row, value);
  const rowId = sanitizeId(`${episodeId}-${row.key}`);
  return `
    <article class="row-card" data-row-card="${rowId}">
      <div class="row-head">
        <div>
          <h3>${escapeHtml(row.title)}</h3>
          <p>${escapeHtml(row.prompt)}</p>
        </div>
        <span class="status-badge ${evaluation.tone}" data-row-status="${rowId}">${escapeHtml(evaluation.label)}</span>
      </div>
      <div class="field-grid">
        ${renderMatrixField(episodeId, row, "observation", "Beobachtung", row.observationHint, value.observation)}
        ${renderMatrixField(episodeId, row, "medium", "Filmisches Mittel", row.mediumHint, value.medium)}
        ${renderMatrixField(episodeId, row, "effect", "Wirkung / Deutung", row.effectHint, value.effect)}
        ${renderMatrixField(episodeId, row, "serial", "Serielle Funktion", row.serialHint, value.serial)}
      </div>
      <div class="row-feedback" data-row-feedback="${rowId}">
        ${renderFeedbackBlockCollection(evaluation)}
      </div>
    </article>
  `;
}

function renderMatrixField(episodeId, row, field, label, hint, value) {
  const evaluation = evaluateMatrixField(episodeId, row, field, value);
  const fieldId = sanitizeId(`${episodeId}-${row.key}-${field}`);
  return `
    <label class="matrix-field">
      ${escapeHtml(label)}
      <textarea
        data-matrix-episode="${episodeId}"
        data-matrix-row="${row.key}"
        data-matrix-field="${field}"
        placeholder="${escapeHtml(hint)}"
      >${escapeHtml(value || "")}</textarea>
      <div class="task-tools">
        <button type="button" class="ghost helper-button" data-suggest-matrix="${episodeId}:${row.key}:${field}">Korrekturhilfe anzeigen</button>
      </div>
      <div class="feedback-block ${evaluation.tone}" data-matrix-feedback="${fieldId}">
        ${renderFeedbackInner(evaluation)}
      </div>
      <div class="suggestion-box" data-matrix-suggestion="${fieldId}"></div>
    </label>
  `;
}

function renderTakeaways() {
  const box = document.getElementById("takeaway-grid");
  box.innerHTML = TAKEAWAYS.map(
    (item) => `<article class="takeaway-card"><p>${escapeHtml(item)}</p></article>`
  ).join("");
}

function renderGlobalFeedback() {
  const box = document.getElementById("global-feedback");
  const methodStats = summarizeStandaloneGroup(METHOD_MODULES, "method");
  const focusStats = summarizeFocusGroup();
  const matrixStats = summarizeMatrixAll();

  const priorities = collectPriorities().slice(0, 4);

  box.innerHTML = `
    <div class="feedback-chip ${methodStats.tone}">
      <strong>Methodischer Rahmen</strong>
      ${escapeHtml(methodStats.summary)}
    </div>
    <div class="feedback-chip ${focusStats.tone}">
      <strong>Folgen im Fokus</strong>
      ${escapeHtml(focusStats.summary)}
    </div>
    <div class="feedback-chip ${matrixStats.tone}">
      <strong>Interpretationsmatrix</strong>
      ${escapeHtml(matrixStats.summary)}
    </div>
    <div class="feedback-chip ${priorities.length === 0 ? "good" : "medium"}">
      <strong>Nächste Prioritäten</strong>
      ${priorities.length === 0 ? "Die Einheit ist in allen Kernbereichen bereits qualifiziert bearbeitet." : escapeHtml(priorities.join(" | "))}
    </div>
  `;
}

function bindActions() {
  document.getElementById("reset-state").addEventListener("click", () => {
    if (!window.confirm("Alle Eingaben in dieser Einheit wirklich löschen?")) return;
    const next = createInitialState();
    state.method = next.method;
    state.focus = next.focus;
    state.matrix = next.matrix;
    saveState();
    renderMethodCards();
    renderEpisodeCards();
    renderEpisodeSwitch();
    renderMatrix();
    renderGlobalFeedback();
    bindDynamicInputs();
    bindSuggestionButtons();
  });

  document.getElementById("export-markdown").addEventListener("click", exportMarkdown);
  bindDynamicInputs();
  bindSuggestionButtons();
}

function bindDynamicInputs() {
  document.querySelectorAll("textarea[data-standalone-kind]").forEach((area) => {
    area.oninput = onStandaloneInput;
  });
  document.querySelectorAll("textarea[data-matrix-episode]").forEach((area) => {
    area.oninput = onMatrixInput;
  });
}

function bindSuggestionButtons() {
  document.querySelectorAll("[data-suggest-standalone]").forEach((button) => {
    button.onclick = onStandaloneSuggest;
  });
  document.querySelectorAll("[data-suggest-matrix]").forEach((button) => {
    button.onclick = onMatrixSuggest;
  });
  document.querySelectorAll("[data-apply-suggestion]").forEach((button) => {
    button.onclick = onApplySuggestion;
  });
}

function onStandaloneInput(event) {
  const kind = event.target.dataset.standaloneKind;
  const id = event.target.dataset.standaloneId;
  const value = event.target.value;

  if (kind === "method") {
    state.method[id] = value;
    updateStandaloneCard("method", id);
  } else {
    const [episodeId, taskKey] = id.split(":");
    state.focus[episodeId][taskKey] = value;
    updateStandaloneCard("focus", id);
  }

  saveState();
  renderEpisodeSwitch();
  renderGlobalFeedback();
}

function onMatrixInput(event) {
  const episodeId = event.target.dataset.matrixEpisode;
  const rowKey = event.target.dataset.matrixRow;
  const field = event.target.dataset.matrixField;
  state.matrix[episodeId][rowKey][field] = event.target.value;
  saveState();
  updateMatrixUI(episodeId, rowKey, field);
  renderEpisodeSwitch();
  renderGlobalFeedback();
}

function updateStandaloneCard(kind, id) {
  const { task, value, domId } = resolveStandaloneTask(kind, id);
  const evaluation = evaluateStandaloneTask(task, value);
  const status = document.querySelector(`[data-task-status="${domId}"]`);
  if (status) {
    status.className = `status-badge ${evaluation.tone}`;
    status.textContent = evaluation.label;
  }
  const feedback = document.querySelector(`[data-task-feedback="${domId}"]`);
  if (feedback) {
    feedback.className = `feedback-block ${evaluation.tone}`;
    feedback.innerHTML = renderFeedbackInner(evaluation);
  }
  const suggestion = document.querySelector(`[data-task-suggestion="${domId}"]`);
  if (suggestion) suggestion.innerHTML = "";
}

function updateMatrixUI(episodeId, rowKey, field) {
  if (episodeId !== activeEpisodeId) return;
  const row = MATRIX_ROWS.find((entry) => entry.key === rowKey);
  if (!row) return;
  const fieldId = sanitizeId(`${episodeId}-${rowKey}-${field}`);
  const rowId = sanitizeId(`${episodeId}-${rowKey}`);
  const fieldEvaluation = evaluateMatrixField(episodeId, row, field, state.matrix[episodeId][rowKey][field]);
  const fieldNode = document.querySelector(`[data-matrix-feedback="${fieldId}"]`);
  if (fieldNode) {
    fieldNode.className = `feedback-block ${fieldEvaluation.tone}`;
    fieldNode.innerHTML = renderFeedbackInner(fieldEvaluation);
  }
  const suggestion = document.querySelector(`[data-matrix-suggestion="${fieldId}"]`);
  if (suggestion) suggestion.innerHTML = "";

  const rowEvaluation = evaluateMatrixRow(episodeId, row, state.matrix[episodeId][rowKey]);
  const status = document.querySelector(`[data-row-status="${rowId}"]`);
  if (status) {
    status.className = `status-badge ${rowEvaluation.tone}`;
    status.textContent = rowEvaluation.label;
  }
  const feedback = document.querySelector(`[data-row-feedback="${rowId}"]`);
  if (feedback) feedback.innerHTML = renderFeedbackBlockCollection(rowEvaluation);
}

function onStandaloneSuggest(event) {
  const [kind, id] = event.target.dataset.suggestStandalone.split(":");
  const { task, value, domId } = resolveStandaloneTask(kind, id);
  const suggestion = buildStandaloneSuggestion(task, value);
  const box = document.querySelector(`[data-task-suggestion="${domId}"]`);
  if (!box) return;
  box.innerHTML = renderSuggestionBox(`${kind}:${id}`, suggestion);
  bindSuggestionButtons();
}

function onMatrixSuggest(event) {
  const [episodeId, rowKey, field] = event.target.dataset.suggestMatrix.split(":");
  const row = MATRIX_ROWS.find((entry) => entry.key === rowKey);
  if (!row) return;
  const suggestion = buildMatrixSuggestion(episodeId, row, field, state.matrix[episodeId][rowKey][field]);
  const fieldId = sanitizeId(`${episodeId}-${rowKey}-${field}`);
  const box = document.querySelector(`[data-matrix-suggestion="${fieldId}"]`);
  if (!box) return;
  box.innerHTML = renderSuggestionBox(`matrix:${episodeId}:${rowKey}:${field}`, suggestion);
  bindSuggestionButtons();
}

function onApplySuggestion(event) {
  const target = event.target.dataset.applySuggestion;
  if (target.startsWith("matrix:")) {
    const [, episodeId, rowKey, field] = target.split(":");
    const row = MATRIX_ROWS.find((entry) => entry.key === rowKey);
    const suggestion = buildMatrixSuggestion(episodeId, row, field, state.matrix[episodeId][rowKey][field]).replacement;
    const area = document.querySelector(`textarea[data-matrix-episode="${episodeId}"][data-matrix-row="${rowKey}"][data-matrix-field="${field}"]`);
    if (!area) return;
    area.value = suggestion;
    state.matrix[episodeId][rowKey][field] = suggestion;
    saveState();
    updateMatrixUI(episodeId, rowKey, field);
  } else {
    const [kind, id] = target.split(":");
    const { task } = resolveStandaloneTask(kind, id);
    const suggestion = buildStandaloneSuggestion(task, kind === "method" ? state.method[id] : state.focus[id.split(":")[0]][id.split(":")[1]]).replacement;
    const area = document.querySelector(`textarea[data-standalone-kind="${kind}"][data-standalone-id="${id}"]`);
    if (!area) return;
    area.value = suggestion;
    if (kind === "method") state.method[id] = suggestion;
    else {
      const [episodeId, taskKey] = id.split(":");
      state.focus[episodeId][taskKey] = suggestion;
    }
    saveState();
    updateStandaloneCard(kind, id);
  }
  renderEpisodeSwitch();
  renderGlobalFeedback();
}

function resolveStandaloneTask(kind, id) {
  if (kind === "method") {
    const task = METHOD_MODULES.find((module) => module.key === id);
    return { task, value: state.method[id], domId: sanitizeId(`${kind}-${id}`) };
  }
  const [episodeId, taskKey] = id.split(":");
  const episode = EPISODES.find((entry) => entry.id === episodeId);
  const task = episode.tasks.find((entry) => entry.key === taskKey);
  return { task, value: state.focus[episodeId][taskKey], domId: sanitizeId(`${kind}-${id}`) };
}

function evaluateStandaloneTask(task, value) {
  const analysis = analyzeLongAnswer(value, task);
  const tone = analysis.issues.length === 0 ? "good" : analysis.issues.length <= 2 ? "medium" : "weak";
  const label = tone === "good" ? "Qualifiziert" : tone === "medium" ? "Teilweise tragfähig" : "Noch zu pauschal";
  const messages = [];
  if (analysis.strengths.length > 0) messages.push(`Stark: ${analysis.strengths.join(" ")}`);
  if (analysis.issues.length > 0) messages.push(`Noch nachschärfen: ${analysis.issues.join(" ")}`);
  if (messages.length === 0) messages.push("Die Antwort erfüllt die Anforderungen.");
  return { tone, label, messages };
}

function evaluateMatrixField(episodeId, row, field, value) {
  const config = buildMatrixFieldConfig(episodeId, row, field);
  const analysis = analyzeLongAnswer(value, config);
  const tone = analysis.issues.length === 0 ? "good" : analysis.issues.length <= 2 ? "medium" : "weak";
  const label = tone === "good" ? "Präzise" : tone === "medium" ? "Ansatz erkennbar" : "Unzureichend";
  const messages = [];
  if (analysis.strengths.length > 0) messages.push(`Stark: ${analysis.strengths.join(" ")}`);
  if (analysis.issues.length > 0) messages.push(`Korrekturhinweis: ${analysis.issues.join(" ")}`);
  if (messages.length === 0) messages.push("Das Feld ist bereits qualifiziert formuliert.");
  return { tone, label, messages };
}

function evaluateMatrixRow(episodeId, row, value) {
  const fieldNames = ["observation", "medium", "effect", "serial"];
  const evaluations = fieldNames.map((field) => evaluateMatrixField(episodeId, row, field, value[field]));
  const weak = evaluations.filter((entry) => entry.tone === "weak").length;
  const medium = evaluations.filter((entry) => entry.tone === "medium").length;
  let tone = "good";
  let label = "Qualifiziert";
  if (weak >= 2 || !fieldNames.every((field) => normalize(value[field]))) {
    tone = "weak";
    label = "Noch nicht tragfähig";
  } else if (weak === 1 || medium >= 2) {
    tone = "medium";
    label = "Teilweise tragfähig";
  }

  const messages = [];
  if (!normalize(value.observation)) messages.push({ tone: "weak", text: "Die Zeile braucht zuerst eine konkrete Szene oder Konstellation, nicht nur ein allgemeines Thema." });
  if (!normalize(value.medium)) messages.push({ tone: "weak", text: "Es fehlt ein sauber benanntes filmisches Mittel; ohne dieses bleibt die Analyse bloße Inhaltsangabe." });
  if (!normalize(value.effect)) messages.push({ tone: "weak", text: "Die Deutung muss explizit formulieren, was die Gestaltung über Macht, Konflikt oder Haltung sichtbar macht." });
  if (!normalize(value.serial)) messages.push({ tone: "weak", text: "Erkläre ausdrücklich, warum diese Beobachtung serielle Spannung erzeugt." });
  if (messages.length === 0) {
    if (tone === "good") {
      messages.push({ tone: "good", text: "Die Zeile verbindet Beobachtung, filmisches Mittel, Deutung und serielle Funktion bereits auf Analyse-Niveau." });
    } else {
      messages.push({ tone: "medium", text: "Die Grundstruktur stimmt, aber einzelne Felder müssen noch präziser und begründeter werden." });
    }
  }

  return { tone, label, messages };
}

function buildMatrixFieldConfig(episodeId, row, field) {
  const anchors = [...row.anchors, ...EPISODE_ANCHORS[episodeId]];
  if (field === "observation") {
    return {
      minWords: 22,
      requiredTerms: anchors,
      anchorTerms: anchors,
      themeTerms: [],
      requiredConnectors: [],
      correctionTemplate:
        "In der Szene [konkreter Moment] sieht man, wie [Figur/Institution] [Handlung] im Raum [Ort] organisiert. Auffällig ist dabei [präzise Beobachtung], sodass der Konflikt schon hier konkret sichtbar wird."
    };
  }
  if (field === "medium") {
    return {
      minWords: 16,
      requiredTerms: [...FILM_TERMS, ...row.mediumTerms],
      anchorTerms: row.mediumTerms,
      themeTerms: [],
      requiredConnectors: [],
      correctionTemplate:
        "Filmisch arbeitet die Szene mit [Nahaufnahme/Totale/Perspektive/Licht/Ton/Schnitt]. Dieses Mittel ist hier wichtig, weil [konkrete Bild- oder Tonwirkung]."
    };
  }
  if (field === "effect") {
    return {
      minWords: 24,
      requiredTerms: row.themeTerms,
      anchorTerms: [],
      themeTerms: [...row.themeTerms, ...THEME_TERMS],
      requiredConnectors: CONNECTORS,
      correctionTemplate:
        "Dadurch wirkt die Szene [Wirkung], weil [Kausalbegründung]. Sichtbar wird vor allem [Machtverhältnis/Konflikt/Haltung], nicht bloß [Inhaltsnacherzählung]."
    };
  }
  return {
    minWords: 22,
    requiredTerms: SERIAL_TERMS,
    anchorTerms: SERIAL_TERMS,
    themeTerms: [...row.themeTerms, ...SERIAL_TERMS],
    requiredConnectors: CONNECTORS,
    correctionTemplate:
      "Für die Serie ist dieser Moment wichtig, weil [offener Konflikt] nach der Folge nicht gelöst ist. Gerade dadurch kann in späteren Folgen [Entwicklung/Wiederkehr] weitergeführt werden."
  };
}

function analyzeLongAnswer(value, config) {
  const normalized = normalize(value);
  const words = countWords(normalized);
  const issues = [];
  const strengths = [];
  const matchedRequired = getMatchedTerms(normalized, config.requiredTerms || []);
  const matchedTheme = getMatchedTerms(normalized, config.themeTerms || []);
  const matchedConnectors = getMatchedTerms(normalized, config.requiredConnectors || []);
  const matchedAnchors = getMatchedTerms(normalized, config.anchorTerms || []);

  if (!normalized) {
    return { issues: ["Das Feld ist noch leer. Schreibe mehrere vollständige Sätze, nicht nur Stichworte."], strengths: [] };
  }

  if (words < Number(config.minWords || 0)) {
    issues.push(`Der Text bleibt mit ${words} Wörtern zu kurz; nötig sind eher ${config.minWords}+ Wörter in zusammenhängenden Sätzen.`);
  } else {
    strengths.push(`Der Umfang ist mit ${words} Wörtern tragfähig.`);
  }

  if ((config.requiredTerms || []).length > 0 && matchedRequired.length === 0) {
    issues.push("Es fehlt ein passender Fach- oder Leitbegriff, der die Antwort inhaltlich scharf macht.");
  } else if (matchedRequired.length > 0) {
    strengths.push(`Passende Leitbegriffe sind vorhanden (${matchedRequired.slice(0, 3).join(", ")}).`);
  }

  if ((config.anchorTerms || []).length > 0 && matchedAnchors.length === 0) {
    issues.push("Die Antwort bleibt zu allgemein; nenne eine Figur, einen Ort oder einen konkreten Szenenmoment.");
  } else if (matchedAnchors.length > 0) {
    strengths.push(`Die Antwort verankert sich konkret in der Folge (${matchedAnchors.slice(0, 3).join(", ")}).`);
  }

  if ((config.themeTerms || []).length > 0 && matchedTheme.length === 0) {
    issues.push("Die Deutung benennt noch keinen klaren Konflikt-, Macht- oder Themenaspekt.");
  } else if (matchedTheme.length > 0) {
    strengths.push(`Thematische Schärfe ist erkennbar (${matchedTheme.slice(0, 3).join(", ")}).`);
  }

  if ((config.requiredConnectors || []).length > 0 && matchedConnectors.length === 0) {
    issues.push("Es fehlt ein kausaler Zusammenhang; formuliere ausdrücklich, warum oder wodurch eine Wirkung entsteht.");
  } else if (matchedConnectors.length > 0) {
    strengths.push("Die Antwort begründet ihre Deutung sprachlich nachvollziehbar.");
  }

  if (!/[.!?]/.test(String(value || ""))) {
    issues.push("Formuliere in vollständigen Sätzen; derzeit wirkt der Eintrag noch notizartig.");
  }

  if (words > 0 && words < 18 && !/[.!?]/.test(String(value || ""))) {
    issues.push("So wirkt der Eintrag wie Stichwortsammlung statt Analyse.");
  }

  return { issues, strengths };
}

function buildStandaloneSuggestion(task, value) {
  const analysis = analyzeLongAnswer(value, task);
  const steps = [];
  if (analysis.issues.some((issue) => issue.includes("zu kurz"))) steps.push("Baue die Antwort auf mindestens vier zusammenhängende Sätze aus.");
  if (analysis.issues.some((issue) => issue.includes("zu allgemein"))) steps.push("Verankere die Antwort an einer konkreten Szene, Figur oder Raumkonstellation.");
  if (analysis.issues.some((issue) => issue.includes("Fach- oder Leitbegriff"))) steps.push("Verwende mindestens einen passenden Analysebegriff oder Themenbegriff.");
  if (analysis.issues.some((issue) => issue.includes("kausaler Zusammenhang"))) steps.push("Füge einen Satz mit 'weil', 'dadurch' oder 'indem' ein.");
  return {
    steps,
    replacement: task.correctionTemplate
  };
}

function buildMatrixSuggestion(episodeId, row, field, value) {
  const config = buildMatrixFieldConfig(episodeId, row, field);
  const analysis = analyzeLongAnswer(value, config);
  const steps = [];
  if (analysis.issues.some((issue) => issue.includes("zu kurz"))) steps.push("Erweitere das Feld zu einem vollständigen Analyseabschnitt mit mindestens zwei bis drei Sätzen.");
  if (analysis.issues.some((issue) => issue.includes("zu allgemein"))) steps.push("Binde die Aussage an Figur, Raum oder exakten Moment der Folge.");
  if (analysis.issues.some((issue) => issue.includes("Fach- oder Leitbegriff"))) steps.push("Verwende einen passenden filmsprachlichen oder thematischen Fachbegriff.");
  if (analysis.issues.some((issue) => issue.includes("kausaler Zusammenhang"))) steps.push("Begründe die Wirkung ausdrücklich mit einem Kausalzusammenhang.");
  return {
    steps,
    replacement: config.correctionTemplate
  };
}

function renderSuggestionBox(target, suggestion) {
  return `
    <div class="support-box support-box-suggestion">
      <strong>Korrekturhilfe</strong>
      <ul>${suggestion.steps.length > 0 ? suggestion.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("") : "<li>Die Antwort ist bereits tragfähig; nutze den Vorschlag nur bei Bedarf zur sprachlichen Schärfung.</li>"}</ul>
      <p class="support-example">${escapeHtml(suggestion.replacement)}</p>
      <button type="button" class="ghost helper-button" data-apply-suggestion="${escapeHtml(target)}">Vorschlag übernehmen</button>
    </div>
  `;
}

function renderFeedbackInner(evaluation) {
  return evaluation.messages.map((message) => `<p>${escapeHtml(message)}</p>`).join("");
}

function renderFeedbackBlockCollection(evaluation) {
  return evaluation.messages
    .map((message) => `<div class="feedback-block ${message.tone}"><p>${escapeHtml(message.text)}</p></div>`)
    .join("");
}

function summarizeStandaloneGroup(modules, kind) {
  const evaluations = modules.map((module) => evaluateStandaloneTask(module, state[kind][module.key]));
  return summarizeEvaluationSet(evaluations, modules.length, "Von den methodischen Freitextaufgaben");
}

function summarizeFocusGroup() {
  const defs = EPISODES.flatMap((episode) =>
    episode.tasks.map((task) => ({ task, value: state.focus[episode.id][task.key] }))
  );
  const evaluations = defs.map(({ task, value }) => evaluateStandaloneTask(task, value));
  return summarizeEvaluationSet(evaluations, defs.length, "Bei den episodenbezogenen Aufgaben");
}

function summarizeMatrixAll() {
  const evaluations = EPISODES.flatMap((episode) =>
    MATRIX_ROWS.map((row) => evaluateMatrixRow(episode.id, row, state.matrix[episode.id][row.key]))
  );
  return summarizeEvaluationSet(evaluations, evaluations.length, "In der Interpretationsmatrix");
}

function summarizeEvaluationSet(evaluations, total, prefix) {
  const good = evaluations.filter((entry) => entry.tone === "good").length;
  const medium = evaluations.filter((entry) => entry.tone === "medium").length;
  const weak = evaluations.filter((entry) => entry.tone === "weak").length;
  let tone = "good";
  if (weak > Math.ceil(total / 3)) tone = "weak";
  else if (medium > 0 || weak > 0) tone = "medium";
  const summary = `${prefix} sind ${good} von ${total} bereits qualifiziert, ${medium} teilweise tragfähig und ${weak} noch deutlich zu pauschal.`;
  return { tone, summary };
}

function summarizeMatrixEpisode(episodeId) {
  const rows = MATRIX_ROWS.map((row) => evaluateMatrixRow(episodeId, row, state.matrix[episodeId][row.key]));
  const good = rows.filter((row) => row.tone === "good").length;
  const weak = rows.filter((row) => row.tone === "weak").length;
  const label = weak === 0 && good >= 4 ? "qualifiziert" : weak <= 2 ? "teilweise tragfähig" : "noch unscharf";
  const detail = `${good}/${rows.length} Zeilen arbeiten bereits wirklich interpretierend.`;
  return { label, detail };
}

function collectPriorities() {
  const priorities = [];
  METHOD_MODULES.forEach((module) => {
    const evaluation = evaluateStandaloneTask(module, state.method[module.key]);
    if (evaluation.tone === "weak") priorities.push(`Methodik nachschärfen: ${module.title}`);
  });
  EPISODES.forEach((episode) => {
    episode.tasks.forEach((task) => {
      const evaluation = evaluateStandaloneTask(task, state.focus[episode.id][task.key]);
      if (evaluation.tone === "weak") priorities.push(`${episode.title}: ${task.title}`);
    });
  });
  EPISODES.forEach((episode) => {
    MATRIX_ROWS.forEach((row) => {
      const evaluation = evaluateMatrixRow(episode.id, row, state.matrix[episode.id][row.key]);
      if (evaluation.tone === "weak") priorities.push(`${episode.title}: Matrix "${row.title}"`);
    });
  });
  return priorities;
}

function exportMarkdown() {
  const chunks = [];
  chunks.push("# Charité Analyseübung");
  chunks.push("");
  chunks.push("## Methodischer Rahmen");
  chunks.push("");
  METHOD_MODULES.forEach((module) => {
    chunks.push(`### ${module.title}`);
    chunks.push(state.method[module.key] || "-");
    chunks.push("");
  });
  EPISODES.forEach((episode) => {
    chunks.push(`## ${episode.title}`);
    chunks.push("");
    episode.tasks.forEach((task) => {
      chunks.push(`### ${task.title}`);
      chunks.push(state.focus[episode.id][task.key] || "-");
      chunks.push("");
    });
    MATRIX_ROWS.forEach((row) => {
      const entry = state.matrix[episode.id][row.key];
      chunks.push(`### Matrix: ${row.title}`);
      chunks.push(`- Beobachtung: ${entry.observation || "-"}`);
      chunks.push(`- Filmisches Mittel: ${entry.medium || "-"}`);
      chunks.push(`- Wirkung / Deutung: ${entry.effect || "-"}`);
      chunks.push(`- Serielle Funktion: ${entry.serial || "-"}`);
      chunks.push("");
    });
  });
  chunks.push("## Merksätze");
  chunks.push("");
  TAKEAWAYS.forEach((item) => chunks.push(`- ${item}`));

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

function getMatchedTerms(value, terms) {
  return [...new Set((terms || []).filter((term) => normalize(value).includes(normalize(term))))];
}

function countWords(value) {
  return normalize(value).split(/\s+/).filter(Boolean).length;
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function sanitizeId(value) {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "_");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
