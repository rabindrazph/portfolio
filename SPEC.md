# Portfolio Website Spec

## Goal

Build a one-page portfolio website for Rabindra Adhikari that feels visually distinctive, production-ready, and easy to host as a Vite application.

## Source of Truth

All visible professional content is based on the resume file:

- `/home/rabindra-adhikari/Downloads/Rabindra_Adhikari_Resume.pdf`

Embedded URLs were extracted from the PDF to avoid inventing profile links:

- LinkedIn: `https://www.linkedin.com/in/rabindra-a-457aa41b3/`
- GitHub: `https://github.com/raj242adk`
- GitHub: `https://github.com/rabindrazph`
- Medium: `https://medium.com/@rajadhikari_99253`
- Banking Service project: `https://github.com/rabindrazph/banking-service/tree/kafka-configuration`

## Stack

- Vite `8.1.3`
- React `19.2.7`
- React DOM `19.2.7`
- `@vitejs/plugin-react` `6.0.3`
- Node engine target: `>=20.19.0`

These versions were chosen against current package metadata on July 17, 2026.

## Site Structure

The site is intentionally a single-page portfolio with anchored navigation:

1. Hero
2. Quick impact strip
3. Experience
4. Toolkit
5. Featured project
6. Profiles
7. Contact CTA

## Design Direction

- Tone: senior-backend-engineering, not generic freelancer template
- Visual language: deep navy background, warm amber highlights, cool blue and mint accents
- Typography: Fraunces for display headlines, Manrope for interface and body copy
- Motion: soft aurora drift only, with reduced-motion fallback
- Layout: asymmetrical hero, dense signal cards, strong card system, responsive grids
- No runtime UI dependencies beyond React and React DOM

## Content Decisions

- The phone number and email are included because they are present in the source resume.
- The copy is sharpened for presentation, but stays anchored to stated experience and skills.
- No fake metrics, fake clients, or fabricated years were added.
- The featured project section is centered on `Banking Service` because it is the strongest explicit project in the resume.

## Files Added

- `package.json`
- `vite.config.js`
- `index.html`
- `public/favicon.svg`
- `src/main.jsx`
- `src/App.jsx`
- `src/data/profile.js`
- `src/styles.css`
- `SPEC.md`

## Hosting Notes

- Resume download expects `public/Rabindra-Adhikari-Resume.pdf`
- Standard Vite commands:
  - `npm install`
  - `npm run dev`
  - `npm run build`
  - `npm run preview`

## Verification Target

- Clean dependency install
- Successful production build
- No missing asset references
- Responsive layout on desktop and mobile widths
