# Working rules for this repo

SLOP1163: Experience Subjective Consciousness. 12 teaching weeks, one session
(practicum) and one lecture per week, fixed narrative order — do not
reshuffle the four units (Immediate Sensation / The Idling Mind / Memory &
Others / Scale & Release) without deliberately updating the syllabus
accordion on the home page and the arc described in `PROCESS.md`.

- Run `pnpm check` before every commit. It typechecks, builds (a11y, link,
  and dangling-reference checks all run as part of the build), and runs
  `spec/*.test.ts`.
- Assessment `weight` fields must sum to exactly 100 across
  `src/content/assessments/` — `spec/course-shape.test.ts` enforces this.
- Every week 1-12 needs exactly one file in `src/content/sessions/` and one in
  `src/content/lectures/` — also enforced by `spec/course-shape.test.ts`.
- `teachers:` references (`wren-okafor`, `sef-amaral`) must resolve against
  `src/content/people/` — an unresolved reference fails the build, not just a
  test.
- Imagery (`src/assets/images/hero-home.avif`, `card.png`) is hand-authored
  SVG (flat two-ink gold/black shapes on the paper background), rasterized
  with `sharp` as a one-off step. Regenerate both together if either changes,
  keep them thematically matched, and don't commit the SVG source or the
  rasterize script — only the final images.
- The grief practicum (week 11) always needs its opt-out/alternative path
  live on `/policies/` before it can be treated as ready — check that page
  hasn't drifted if week 11's content changes.
- The experience grant ($100 on weeks 1, 3, 5, 7, 9, 11; receipts required;
  spend is deferrable to any of the twelve experiences but must all be
  accounted for by week 12) is documented in full on `/policies/`, with a
  one-line pointer in every session and a spec line on the noticing log.
  Keep the funded-week list in sync across all three if it ever changes.
