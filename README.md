# Bona Fachry Adam (Santro): portfolio

A bilingual (Indonesian / English) personal site built around one idea:
**questions, taken seriously, become things**: articles, a waste-bank system, videos, essays, and this site.

The reasoning behind every design decision is in [`DESIGN_DIRECTION.md`](./DESIGN_DIRECTION.md).

## Run it

```bash
npm install
npm run dev        # local development server
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint       # oxlint
```

## Edit the content

All copy lives in `src/content/`. Every text is a `{ id, en }` pair (Indonesian, English).

| File | What it holds |
|---|---|
| `site.ts` | name, e-mail, social links, section names, "updated" date |
| `questions.ts` | the six questions in the hero, and which archive entry each opens |
| `works.ts` | the archive: what / why / what I did / findings for each piece of work |
| `lab.ts` | lab notes (ongoing, renamed, archived experiments) |
| `now.ts` | the "Now" list, including the job search |
| `cv.ts` | the printable CV at `/cv.html` |

The About text is in `src/components/About.tsx` because it contains highlighter marks and sidenotes.
When something changes (a paper is accepted, a job is found), update `now.ts` and the `updated` date in `site.ts`.

## Deploy

`netlify.toml` is included (same setup as GEMAH): connect the repo on Netlify and it builds `dist/`.
`/cv` redirects to the printable CV.

## Stack

React 19, Vite, TypeScript. No UI or animation libraries. Fonts (Newsreader, Archivo, Amiri) are self-hosted via Fontsource.
Built in conversation with AI coding assistants.
