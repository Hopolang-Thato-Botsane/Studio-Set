# Studio & Set

> **High-Fidelity Film Equipment Rental & Production Logistics Platform**
> A premium, data-driven digital storefront and checkout infrastructure engineered around curated production kits and technical on-set assistance, built to streamline premium media logistics.

**Live Deployment:** https://studio-set.vercel.app/

---

## Project Profile & Role

* **Title:** Studio & Set: Architecture of an Advanced Next.js Headless E-Commerce System
* **Role:** Lead UX/UI Designer & Lead Frontend Developer
* **Timeline:** Project Development Lifecycle (June - July)
* **Stack:** Next.js, React, TypeScript, Sanity CMS v6, GROQ API, Tailwind CSS / CSS Modules, Vercel

---

## The Objective

The core business challenge was replacing traditional, fragmented equipment rental processes with an integrated, highly cinematic rental funnel. 

Guided by a UX philosophy of eliminating equipment selection anxiety through curated kit bundling, the platform translates complex, technical hardware inventories into a fluid, responsive e-commerce experience. The ultimate metric of success was making production gear logistics transparent, allowing filmmakers to select curated hardware kits and seamlessly step through a unified checkout pipeline with zero friction.

---

## The Journey (Design Phase)

The visual architecture strikes a balance between cinematic mood and raw engineering precision, featuring deep obsidian tones contrasted against minimalist layout lines to mirror the professional aesthetic of high-end camera equipment and film sets.

### Core Interaction Mechanics

1. **The Dynamic Cinematic Hero Layout:** Inspired by high-end media layouts like A24, designed a multi-stage scroll-reveal structure. Translating this to mobile demanded overcoming aspect-ratio clipping by engineering depth-based scaling and custom bezier curves to lock panels cleanly into the viewport.
2. **Snappy Mobile Viewport Snapping:** Developed strict layout constraints using a multi-frame drag system in Figma to prototype fluid, vertical scroll-snapping. This allows mobile users to swipe through major project and gear showcases with immediate, tactile feedback.
3. **Optimized Project Architecture:** Designed a highly structured four-card inventory display arranged across a clean, balanced grid system, prioritizing maximum scannability for fast-moving production managers on both desktop and tight mobile viewports.

---

## The Destination (Code Implementation)

Bringing the platform to life required bridging a modern, typed React framework with a robust headless content layer while battling runtime environment optimization barriers:

* **Strictly Typed Sanity-to-DOM Integration:** Implemented a robust TypeScript schema model utilizing asynchronous GROQ queries. Resolved complex type assignment discrepancies (such as strict undefined vs null data payloads) inside highly responsive components like the modular site footer.
* **Turbopack Dev-Build Optimization:** Overcame deep local runtime environment file locking errors (such as Next.js build-manifest EPERM renaming loops) by streamlining local compilation pipelines inside a unified Windows development environment.
* **Zero-Lag State Engines & Layout Fidelity:** Constructed an explicit, highly performant layout model utilizing native CSS properties over bloated external UI libraries. Leveraged localized sticky containers, customized media queries, and optimized flex-grids to maintain responsive visual parity down to standard mobile breakdowns.

---

## Impact & Key Learnings

This project served as a definitive proof of concept for the power of modern headless architectures tied to typed React development. 

By separating the digital asset management engine (Sanity) from the application presentation layer (Vercel), the platform guarantees swift server-side rendering and static optimization while allowing full operational autonomy over content changes. It proved that managing a technical media rental platform does not require visual compromise—it requires strict data typing, structural alignment, and disciplined layout execution.

---

Developed with energy by [Thato Hopolang Botsane (THB)](https://github.com/hopolang-thato-botsane)


# Studio-

/**
 * @file CartContext.tsx
 * @architecture Designed by Thato Hopolang Botsane (THB)
 * @implementation Syntactically engineered with assistance from Gemini AI (June 2026)
 * * DESIGN NOTES:
 * This context serves as the global state ledger for the unified application ecosystem,
 * providing decoupled shopping basket state access to client components while 
 * maintaining sharp boundaries with server-rendered layout trees.
 */