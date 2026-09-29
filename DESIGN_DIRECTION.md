# Design Direction — Bona Fachry Adam (Santro)

This document records the thinking behind the portfolio before and while it was built.
It is written for Fahry, and for whoever edits this site next (human or AI).

---

## 0. Sources

Everything on the site comes from three sources. Nothing else was invented.

1. **The profile brief** Fahry wrote (identity, education, projects, contacts).
2. **Fahry's own documents**: the English abstract and findings of the deep-ecology
   article (written as his individual PPL output at Balai Litbang Agama Semarang,
   July 2026), and a short self-description he wrote in 2026 (digital economy,
   Web 3.0, community lead).
3. **The photo** he attached (in class, by a window, olive-green wall).

The Pinterest UI reference (`pin.it/2f9h5WS9K`) could not be opened from the build
environment (the network policy blocks it), so it did not influence this version.

Where the site interprets rather than reports, for example a sentence about *why* he
works a certain way, the line is listed in §9 so Fahry can confirm or rewrite it.

---

## 1. Who is Fahry when the labels are removed?

Take away "philosophy student", "developer", "content creator" and look at what he
actually does. The same move repeats:

> **He takes a question seriously for long enough that it turns into something.**

- *When did the sea become a "yield"?* became an article that reads a government
  regulation word by word (Arne Naess, deep ecology, PP 26/2023).
- *Can a village's rubbish be kept like savings?* became **GEMAH**, a working
  waste-bank system for Desa Jati Kulon.
- *What does someone raised by nature know that we've forgotten?* became a journal
  article on Ibn Tufayl's *Hayy ibn Yaqzan*.
- *When the created starts creating, where does that leave the creator?* became an
  essay on God, humans and AI.
- *What sounds impossible but actually happened?* became a channel of 60-second videos.
- *Can someone who doesn't write code build a website like this?* became this site.

There is a second, quieter thread underneath: **value, and who assigns it**.
The sea-sand article is about a policy that renames seabed into a commodity.
GEMAH is literally a system that assigns value to what was thrown away.
The gender essay, the digital-discourse essay and the Kant critique circle the same
thing: how words and norms decide what something is worth.

And a third: **the autodidact**. His main work starts from *Hayy ibn Yaqzan*, the
12th-century novel about a boy who reaches knowledge alone, by watching and trying.
Its 1671 Latin translation was titled *Philosophus Autodidactus*. Fahry builds working
software without writing code by hand, by describing, judging and deciding. The
parallel is not decoration. It is his method.

So the site should not *say* "multidisciplinary". It should show one mind
moving between forms: article, database, video, essay, website.

---

## 2. Creative concept: "Pertanyaan yang jadi benda" (Questions that became things)

The homepage opens with a **ledger of questions**, not a name in giant type.
Each question is paired with the thing it became. Visitors understand in five seconds
that this person thinks in questions *and* ships things, without a single job title.

The rest of the site is organised like the documents Fahry actually writes:
an academic paper with **numbered sections (§)**, **footnotes/sidenotes**,
a **table of contents with dot leaders**, a **figure caption** for the photo, and a
closing **letter** instead of a contact form. An academic's habits become
the interface.

Supporting metaphor: **light**. Illuminationist philosophy (Suhrawardi, Mulla Sadra)
reads reality as degrees of light. On this site that becomes a lamp switch
(light/dark), a highlighter that marks what matters, and in the dark theme
a faint lamp that follows the reader's pointer. The site's own footnote admits the
joke: Suhrawardi had infinite degrees of light; this site has two.

---

## 3. Visual language

### Typography
- **Newsreader** (Production Type), a variable serif with optical sizes, designed
  for reading. Used for everything that is *thought*: questions, body text,
  titles. Large sizes use its display optical size, so headlines stay sharp.
- **Archivo** (Omnibus-Type), a variable grotesque with a **width axis (62–125%)**.
  Used for everything that is *metadata*: labels, numbers, dates, status.
  Labels are set wide (expanded), index numbers narrow (condensed). On hover
  the numbers stretch: a small, purposeful variable-font interaction.
- **Amiri**, used once, for حي بن يقظان (*Hayy ibn Yaqzan*) in its original script,
  loaded only when that entry is opened.
- Deliberately **no monospace font**. Fahry is not presenting himself as a
  programmer, and a terminal look would misrepresent how he builds.

### Colour
Two atmospheres rather than one palette inverted.

| Token | Siang (day, paper) | Malam (night, lamp) | Use |
|---|---|---|---|
| `--bg` | `#EFEBE2` warm paper | `#10130F` olive-black | page |
| `--bg-2` | `#E6E1D5` | `#171B16` | panels, specimens |
| `--ink` | `#16150F` | `#EAE5D6` lamplit paper | text |
| `--ink-2` | `#45423A` | `#BDB8A9` | secondary text |
| `--muted` | `#696558` | `#949083` | captions, meta (≥ 4.5:1) |
| `--rule` | `#CBC4B4` | `#2E342C` | hairlines |
| `--mark` | `#D6E09F` highlighter | `#3A4523` olive glow | marked phrases |
| `--wall` | `#8FA164` | `#A9BC76` | the only graphic accent |

The single accent, `--wall`, is **sampled from the olive-green classroom wall in
Fahry's photo**. The highlighter derives from it. No gradients, no neon.
Paper grain is a static, low-opacity SVG noise, so it costs no animation frames.

### Layout
- 12-column editorial grid, hairline rules, generous margins.
- Asymmetry by content, not decoration: About has a photo column, a text column and a
  margin column for sidenotes, as a printed book would.
- Scale contrast: huge serif questions against small, wide, uppercase metadata.
- No rounded cards. Projects are **rows in an index**, experiments are **columns
  in a lab log** separated by vertical rules.

### Images
Only one photograph, used once, as **Gbr. 1 / Fig. 1** with an academic caption.
GEMAH could not be screenshotted from the build environment, so it gets a small
**diagram of how it actually works** (RW-level access, savings book, public
transparency page), not a fake screenshot. Articles get **typographic specimens**
built from their real title, keywords and abstract.

---

## 4. Information architecture

Numbered like a paper (§), in Indonesian and English:

| § | ID | EN | Purpose |
|---|---|---|---|
| 01 | Pertanyaan | Questions | Hero. Six questions → six things. |
| 02 | Cara berpikir | How I think | About, without a résumé voice. Photo + sidenotes. |
| 03 | Arsip | Archive | Every piece of work: what / why / what I did / findings. Filterable. |
| 04 | Laboratorium | Lab | Unfinished, ongoing, renamed, abandoned. The playful part. |
| 05 | Sekarang | Now | What he is writing, waiting on, making, and looking for (work). |
| 06 | Surat | Letter | Contact written as a letter, signed "Santro". |
| — | Kolofon | Colophon | How the site was made, honestly (built with AI, fonts, no trackers). |
| — | CV | CV | Separate print-ready page (`/cv.html`), generated from the same data. |

The CV is deliberately *not* the centre. The letter calls it
"the official, more boring version".

---

## 5. Interaction system

| Interaction | Purpose |
|---|---|
| **Question ledger** (hero) | The "lamp" slowly moves between questions while idle; hover/focus takes over; clicking opens the matching archive entry. Stops for good after the first interaction; has a pause button. |
| **Highlighter marks** | Key phrases get marked as they scroll into view, the way a student marks a reading. |
| **Sidenotes** | Superscript numbers; notes live in the margin on wide screens and expand inline on phones. Facts go in the notes, so the main text can stay human. |
| **Archive index + specimen** | Hover/focus a row → specimen panel on the right shows a diagram or typographic page. Click → row expands with the full write-up. Deep-linkable (`#karya-gemah`). |
| **Filter** | Semua / Tulisan / Buatan / Video with real counts. Announced to screen readers. |
| **Lab strip** | Native horizontal scroll with snap and prev/next buttons. No scroll-jacking. One lab note *is* the lamp switch. |
| **Lamp (theme)** | Light spreads from the switch (View Transitions API, circular reveal). Falls back to a crossfade. |
| **ID / EN** | Full bilingual content. The English note admits it is a translation: "every translation is an interpretation" (hermeneutics). |
| **Table of contents** | The menu is a thesis-style *Daftar Isi* with dot leaders. |
| **Section marker** | The header shows the current §, so navigation is always one glance away. |
| **Live Kudus time** | In the letter: "In Kudus it is 21.04 WIB (UTC+7)". Useful for remote employers. |
| **Copy e-mail** | One click, with an announced confirmation. |

---

## 6. Motion system

- One easing curve (`cubic-bezier(.2,.7,.1,1)`), three durations: 180 ms (feedback),
  450 ms (reveal), 800 ms (hero/section).
- Motion is used for **reading order** (reveals follow the text), **emphasis**
  (highlighter), **orientation** (section marker, lamp spreading from the switch)
  and **feedback** (hover, copy).
- No scroll-jacking, parallax only where it helps, no WebGL, no animation library.
  CSS transitions + IntersectionObserver only.
- `prefers-reduced-motion`: no auto-rotation, no reveals, no lamp glow, no view
  transition; everything is visible immediately.

---

## 7. Content hierarchy

1. The pattern (questions → things). Understood in 5 seconds.
2. The person (how he thinks, where he comes from, how he builds). 1 minute.
3. The evidence (archive with real findings). As long as the visitor wants.
4. The curiosity (lab). Proof that he explores without needing a finished product.
5. The present (now). Including that he is **looking for work**.
6. The door (letter, e-mail, CV).

---

## 8. Technical decisions

- **React 19 + Vite + TypeScript.** No router (two HTML entries: `index.html`, `cv.html`).
- **No animation or UI libraries.** Fonts self-hosted via Fontsource (no Google requests).
- Content lives in `src/content/*.ts(x)`, typed and bilingual, so it can be edited
  without touching components.
- Accessibility: landmarks, skip link, real buttons/links, `aria-expanded`,
  `aria-pressed`, focus trap in the table of contents, visible focus rings,
  `lang` switching (including `lang="ar" dir="rtl"` for Arabic), WCAG AA contrast
  checked for every text token in both themes.
- Deployed like GEMAH: Netlify (`netlify.toml` included).

---

## 9. Lines to confirm (interpretations, not facts from the brief)

These were written in Fahry's voice by the builder, from the evidence above.
They are all in `src/content/`. Change them freely.

- About: the "value, and who assigns it" reading that links the sea-sand article to GEMAH.
- About: the Hayy ibn Yaqzan method being "also how I learn things outside class".
- GEMAH: "a waste bank can only be trusted if everyone can see the records" (inferred
  from the public transparency page).
- Hayy article, "why": "step back from policy to how we know nature" (inferred from the title).
- AI essay, "why" (inferred from the title and the brief).
- Shorts: "strange-but-true is epistemology in disguise" and "choosing the stories".
- Lab: the Web 3.0 note (from his own 2026 self-description; trading was left out
  because no source describes it).
- Lab: "my English is still on its way" (from the brief: beginner–intermediate).
- Letter: the "argue about Kant" line.
- Now: "waiting to hear from Kalimah" (the brief says *submitted*).

Unknown, left out rather than guessed: the YouTube channel URL, the skripsi topic,
years for GEMAH, the Hayy article and the AI essay, and HMPS dates.
