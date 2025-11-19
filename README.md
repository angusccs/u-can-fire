# U CAN FIRE  
*A simple, Canadian-focused personal finance guide.*

---

## Overview  
**U CAN FIRE** is a lightweight, fully static educational website designed to help Canadians understand personal finance in a simple, structured, and non-overwhelming way.

The site uses a stage-based system (Stages 1–6) to guide users from building stability all the way to understanding long-term investing and financial independence. A questionnaire helps visitors identify their stage and receive curated guidance.

The project is intentionally:
- minimalist  
- mobile-friendly  
- accessible  
- fast  
- easy to maintain  
- free and open  

Built with **HTML**, **CSS**, and **vanilla JavaScript**. No frameworks, no build tools.

---

## Features  

### Stage-Based Financial Framework  
Clear, beginner-friendly steps from emergency savings to long-term investing and FIRE concepts.

### Interactive Questionnaire  
Users answer a few simple questions to determine their current stage.  
One question at a time, friendly tone, mobile-first.

### Clean, Minimalist Design  
Inspired by Minimalist Design — clean spacing, readable typography, calm flow.

### Canadian-Specific Context  
Covers TFSAs, RRSPs, FHSAs, Canadian ETFs, and uniquely Canadian financial situations.

### Glossary  
Simple explanations for terms like “snowball method,” “ETF,” “index fund,” “Coast FI,” and more.

### Static + Fast  
Fully static hosting via GitHub Pages. No backend required.

### Expandable  
Future articles and tools (e.g., FI calculators, portfolio explainers) can be added easily.

---

## Tech Stack  
- **HTML5**  
- **CSS3** (custom, no frameworks)  
- **JavaScript (ES6)** for questionnaire logic and transitions  
- Optional future enhancements:
  - fade transitions between pages  
  - JSON-driven question configuration  
  - localStorage “remember your stage” feature  

---

## Project Structure  

```
/
├── index.html
├── start.html
├── about.html
├── resources.html
├── glossary.html
├── support.html          (optional, future)
├── connect.html          (optional, future)
│
├── stages/
│   ├── stage1.html
│   ├── stage2.html
│   ├── stage3.html
│   ├── stage4.html
│   ├── stage5.html
│   └── stage6.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── assets/
    └── logo.svg
```

---

## Local Development  

Clone the repository:

```
git clone https://github.com/yourname/ucanfire.git
cd ucanfire
```

Open `index.html` in your browser or use a local server (e.g., VS Code Live Server).

---

## Deployment (GitHub Pages)  

1. Go to **Settings → Pages**  
2. Under “Source,” select:  
   - **Branch:** `main`  
   - **Folder:** `/`  
3. Click **Save**  
4. After a minute, your site will be available at:  
   `https://yourusername.github.io/ucanfire/`

---

## Roadmap  

### Phase 1 — MVP (Completed)  
- Core pages  
- Questionnaire  
- Stage descriptions  
- About + Resources pages  
- Glossary  
- Minimalist visual design  

### Phase 2 — Content Expansion (Next)  
- Deep-dive articles (RRSP withdrawals, 4% rule, 60/40 portfolio, etc.)  
- Canadian-specific investing explainers  
- More detailed examples  

### Phase 3 — UX Enhancements  
- Fade transitions  
- Improved typography  
- Light/dark mode  
- LocalStorage stage memory  
- Mobile spacing improvements  

### Phase 4 — Interactive Tools  
- FI calculator  
- Savings rate calculator  
- Simple retirement projections  
- TFSA room tracker  
- Portfolio visualizations  

### Phase 5 — Optional Extras  
- Support/Donate page  
- Connect page (LinkedIn + email)  
- Referral page (Wealthsimple, Koho, EQ Bank)  
- React SPA version (portfolio expansion)

---

## Disclaimer  
This website is for educational purposes only and is not financial, investment, or tax advice.

---

## Designed In  
**Designed in New Westminster, BC.**

