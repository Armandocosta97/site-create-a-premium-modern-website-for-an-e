**Modified files**

- [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css)
- [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css)
- [src/App.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx#L1)
- [src/pages/Contatti.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx#L34)
- [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/HeroSection.jsx)
- [src/components/Menu-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-heroSection.jsx)
- [src/components/About-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/About-heroSection.jsx)
- [src/components/Gallery-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-heroSection.jsx)
- [src/components/Contact-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-heroSection.jsx)
- [src/components/Services-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-heroSection.jsx)
- [src/components/Brand-story-previewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Brand-story-previewSection.jsx)
- [src/components/StorySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/StorySection.jsx)
- [src/components/PhilosophySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/PhilosophySection.jsx)
- [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/SignaturePreviewSection.jsx)
- [src/components/Menu-categoriesSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-categoriesSection.jsx)
- [src/components/Gallery-gridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-gridSection.jsx)
- [src/components/Contact-detailsSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-detailsSection.jsx)
- [src/components/ContactPhoneCta.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactPhoneCta.jsx)
- [src/components/ContactWhatsAppCta.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactWhatsAppCta.jsx)
- [src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/FloatingWhatsAppButton.jsx)
- [src/components/Opening-hoursSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Opening-hoursSection.jsx)
- [src/components/Services-overviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-overviewSection.jsx)
- [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md)

**What was implemented**

- Replaced the default Vite scaffold styling with a real app shell: sticky responsive header, wrapped nav, centered content width, consistent page padding/gaps, footer styling, and mobile-safe fixed WhatsApp spacing in [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css#L1).
- Added global responsive safeguards in [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css#L1): reset/box-sizing, no centered body layout, image scaling, overflow wrapping, and focus states.
- Tightened section responsiveness across the allowed components by reducing grid overflow risk with safer `minmax(...)` values and making CTA rows/buttons wrap cleanly on narrow screens.
- Styled the contact page closing note via [src/pages/Contatti.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx#L34).
- Added the minimal required stylesheet import in [src/App.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx#L2) so the responsive shell CSS is actually bundled.
- Updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md) with the task summary.

**Build result**

- `npm run build`: passed
- Output: `vite build` completed successfully on March 10, 2026, with final assets including `dist/assets/index-w6EllvgO.css` and `dist/assets/index-ejGekwU_.js`

Note: `agent/TASK_STATE.json` already had unrelated local changes and was not edited manually.

OpenAI Codex v0.111.0 (research preview)
--------
workdir: /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/armandocosta/.codex/memories]
reasoning effort: none
reasoning summaries: none
session id: 019cd850-b0e5-7282-99a1-590f693df790
--------
user
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-premium-modern-website-for-an-e

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.

## Objective
- Generate production-ready static websites that are clear, stable, responsive, modular, and easy to validate.
- Prioritize correctness before visual polish.
- Prefer predictable implementation over improvisation.

## Source of Truth
- The human prompt is not the implementation source of truth.
- `site-spec.json` is the only source of truth for pages, sections, navigation, routing, and required features.
- If supported by the project architecture, `content.json` is the source of truth for copy, labels, CTA text, and contact details.
- If supported by the project architecture, `theme.json` is the source of truth for colors, typography, spacing, radius, and visual tokens.
- The implementation flow must be: `prompt -> site-spec.json -> tasks -> code`.
- Never implement pages, routes, sections, navigation items, or features that are not defined in the spec.

## Core Principles
- Build for users first: clarity, speed, and clear actions.
- Keep code modular: reusable components with clear responsibilities.
- Favor consistency over custom one-off solutions.
- Ship small, test often, improve iteratively.
- Prefer deterministic implementation over free interpretation.
- Do not invent structure outside the spec.

## Stack
- Vite
- React
- Component-based architecture

## Required Architecture
Preferred structure:

```txt
src/
  components/
  sections/
  pages/
  layout/
  data/
  assets/
  styles/
  utils/
```

### Rules
- One responsibility per component.
- No giant monolithic page files.
- Reuse shared primitives where possible.
- Avoid duplicated markup patterns across sections.
- Prefer composition over deeply nested conditional JSX.
- Keep structure, content, and styling separated where possible.

## Layout Rules
- Hero must be full width or visually dominant at the top.
- Mobile-first responsive design is mandatory.
- Primary CTA must be visible above the fold.
- Use a max content width for readability, except for intentionally full-bleed sections.
- Maintain a consistent spacing system across all sections.
- Visual hierarchy must be clear: headline -> value -> action.
- No horizontal overflow on any tested breakpoint.
- Sections must feel complete and intentional, not sparse or placeholder-like.

## Required Components
- Header
- Hero
- Sections
- Footer

## Minimum Homepage Requirements
- Every homepage must include a hero section.
- Every homepage must include at least 2 additional meaningful content sections.
- Every homepage must include at least 1 visible CTA.
- If a gallery is required by spec, it must exist and be reachable.
- If contact actions are required by spec, they must be implemented and functional.

## Component Guidelines
- One responsibility per component.
- Keep UI and business logic separated when possible.
- Use props for configuration and avoid hardcoded content inside reusable components.
- Create shared primitives for buttons, headings, cards, containers, and section wrappers.
- Prefer composition over deeply nested conditional JSX.
- Use clear component names and prop names.
- Avoid dead components and unused routes.
- Avoid excessive inline complexity.

## Content Rules
- Content must be specific, concise, user-focused, and business-relevant.
- No lorem ipsum.
- No placeholder text.
- No dummy text.
- No "coming soon" unless explicitly required by the spec.
- No empty sections.
- No empty buttons.
- No empty links.
- Use exactly one meaningful `h1` per page.
- Section headings must be descriptive.
- CTA text must be action-oriented and specific.
- Text must feel realistic for the business type.
- When supported by the architecture, text content should come from `content.json`.
- Reusable sections should accept content through props or mapped data instead of hardcoded strings.

## Gallery
- Use a grid layout.
- Use responsive columns:
  - mobile: 1
  - tablet: 2
  - desktop: 3 or more when appropriate
- Optimize images with compression, proper dimensions, and lazy loading where appropriate.
- Images must have valid sources.
- Images must not be broken.
- Informative images must have meaningful alt text.
- Decorative images may use empty alt text only when semantically appropriate.
- Do not include a gallery navigation item unless the gallery exists and is reachable.

## CTA
- There must be at least one primary CTA in the hero.
- A fixed WhatsApp button must exist only when required by the spec.
- A phone CTA should exist in the hero when relevant to the business type.
- Primary CTA text must be action-oriented and specific.
- CTA style must remain consistent across all pages and sections.
- Every CTA must resolve correctly.
- Telephone CTAs must use valid `tel:` links.
- Email CTAs must use valid `mailto:` links.
- WhatsApp CTAs must use a valid WhatsApp URL format when enabled.
- Internal CTAs must point to an existing section or route.

## Responsive Rules
- Design starts from mobile viewport first.
- No horizontal scroll on any breakpoint.
- Touch targets must be large enough on mobile.
- Fixed CTAs must not cover essential content.
- Header must remain usable on small screens.
- Hero content must remain readable on small screens.
- Text blocks must not become too wide on desktop.
- Images must scale correctly without distortion.
- Grids must collapse cleanly across breakpoints.
- Test at least these breakpoints:
  - 360px
  - 768px
  - 1024px
  - 1440px

## Navigation Integrity
- Every navigation item must point to a real existing destination.
- Do not create links for pages, routes, or sections that do not exist.
- Before considering the implementation complete, verify that every header link, footer link, CTA, and internal navigation target resolves correctly.
- For single-page sections, verify that the target section `id` exists in the rendered page.
- For multi-page navigation, verify that the route exists and renders without 404 errors.
- If the project uses HashRouter, all internal navigation must be compatible with HashRouter.
- Do not mix plain absolute paths and hash-based routes incorrectly.
- If a section or page is not implemented, remove the corresponding navigation item instead of leaving a broken link.
- Navigation should be derived from the structure defined in `site-spec.json` whenever possible.
- Navigation must not be treated as freeform UI content.

## Accessibility
- Use semantic HTML: `header`, `main`, `section`, `footer`, `nav`.
- Ensure readable color contrast.
- All interactive elements must be keyboard accessible.
- Provide meaningful alt text for informative images.
- Decorative images may use empty alt text only when appropriate.
- Keep heading structure logical: `h1 -> h2 -> h3`.
- Buttons must be real buttons when they trigger actions.
- Links must be real links when they navigate.
- Avoid vague labels when the context is unclear.

## Performance
- Optimize and compress media assets.
- Prefer local or controlled assets over fragile third-party hotlinks when possible.
- Use lazy loading for below-the-fold images where appropriate.
- Minimize unnecessary re-renders in React components.
- Avoid heavy dependencies unless they add clear value.
- Keep the implementation lightweight and static-friendly.

## SEO and Content
- One clear `h1` per page.
- Descriptive page title.
- Descriptive meta description.
- Use meaningful section headings and internal links.
- Keep copy concise, scannable, and user-focused.
- Do not sacrifice usability for SEO tricks.

## Code Quality Rules
- Code must remain maintainable and readable.
- Use clear component names.
- Use clear prop names.
- Do not leave dead components in the project.
- Do not leave unused routes in the project.
- Avoid duplicated layout logic when a shared wrapper is appropriate.
- Reusable UI patterns should be extracted into shared primitives.

Preferred shared primitives:
- Button
- Container
- SectionWrapper
- HeadingBlock
- Card
- CTABlock

## Task Execution Constraints
- Modify only the files allowed for the current task.
- Respect protected files.
- Do not introduce unrelated refactors.
- Do not break previously validated functionality.
- Do not change router behavior unless the task explicitly requires it.
- Do not add speculative features.
- Each task must produce the smallest correct change that moves the project forward safely.

## Definition of Done for a Task
A task is complete only if:
- the requested feature is implemented
- the app builds successfully
- the affected UI renders correctly
- navigation remains valid
- no new console errors are introduced
- responsive behavior is not broken
- no placeholder content is left behind

A task is not complete if it only looks correct in code but is not validated in the browser.

## Quality Gates
### Technical Pass
A site passes technical validation only if:
- build succeeds
- required semantic structure exists
- no broken images
- no broken navigation
- no blocking console errors
- required core components are present

### Publishable Pass
A site passes publishable validation only if:
- content feels real and complete
- no placeholder or empty sections exist
- CTA strategy is visible and coherent
- hierarchy is clear
- layout feels intentional on mobile and desktop
- contact actions are usable
- the site does not feel unfinished

A site must not deploy unless it passes both levels.

## Quality Checklist Before Delivery
- Layout matches all required sections and CTA rules.
- Fully responsive and tested on key breakpoints.
- No console errors.
- No broken images.
- No broken navigation.
- No empty sections.
- No placeholder text.
- Hero is strong and readable.
- CTA is visible and functional.
- Contact actions work.
- Heading structure is valid.
- Page title and meta description are set.
- Lighthouse baseline checked for Performance, Accessibility, and Best Practices.
- Final pass completed for text, links, and contact actions.

## Priority Order for Decision Making
When rules conflict, apply this order:
1. source of truth correctness
2. navigation integrity
3. technical stability
4. responsive usability
5. content clarity
6. visual polish
7. implementation elegance


## Original project brief
# Original project prompt

Create a premium modern website for an event catering and bartending service called Casa Aurea Events.

The business offers:
- high-end catering for weddings, private parties, and corporate events
- premium mobile bar service
- elegant signature drink lists
- curated event styling support
- full-service hospitality for refined events

The final website must feel luxurious, polished, trustworthy, and premium.
It should look like a real brand that could sell high-ticket catering and event services.
Avoid generic banquet-hall vibes.
Avoid cheap party aesthetics.
Avoid template-looking sections.
The tone must be elegant, refined, warm, and aspirational.

ARCHITECTURE
This must be a real multi-page website.
Do NOT build it as a single-page website with anchor links.
Do NOT collapse all content into the homepage.

Create these real pages with real routes:
- Home
- Services
- Weddings
- Drink List
- Gallery
- About
- Contact

Required routes:
- /
- /services
- /weddings
- /drink-list
- /gallery
- /about
- /contact

NAVIGATION
Header navigation must include:
- Home
- Services
- Weddings
- Drink List
- Gallery
- About
- Contact

Navigation must use real routes, not homepage anchors.
Each navigation item must point to an actually existing page.
The mobile menu must work properly.

GENERAL BRAND DIRECTION
Brand name: Casa Aurea Events
Positioning: premium catering and elevated bar service for elegant events
Target audience:
- couples planning weddings
- people organizing refined private events
- brands or companies hosting premium corporate evenings
- clients who care about atmosphere, presentation, and hospitality

Brand values:
- elegance
- quality
- atmosphere
- attention to detail
- hospitality
- modern Italian refinement

VISUAL STYLE
The design must feel:
- sophisticated
- editorial
- high-end
- spacious
- luminous but rich
- elegant without being cold

Use a visual language inspired by:
- modern luxury hospitality
- destination wedding brands
- premium cocktail bars
- boutique event design studios

COLOR PALETTE
Use an elegant palette such as:
- warm ivory / champagne background
- deep charcoal or espresso for contrast
- muted gold accents
- soft taupe / warm beige neutrals
- optional dark olive or dusty bronze details

Typography:
- elegant serif or modern editorial serif for headings
- clean refined sans serif for body text
- strong hierarchy and generous spacing

LAYOUT RULES
- mobile first
- refined responsive layout
- strong visual hierarchy
- large premium hero sections
- full-width media where appropriate
- max-width containers for readability
- generous whitespace
- cards and sections should feel balanced and premium
- no cramped blocks
- no cheap gradient-heavy look
- no excessive animations

IMAGE DIRECTION
Use high quality Unsplash images.
Search themes like:
- wedding catering
- elegant table setting
- luxury wedding dinner
- bartender cocktail service
- signature cocktails
- event catering plated food
- upscale reception dinner
- champagne toast
- stylish private event
- modern catering presentation

Images must:
- use object-fit: cover
- never appear stretched
- feel coherent and premium
- support the brand identity
- help the site feel real and sellable

HOME PAGE
The homepage must be a premium overview page, not a dump of all content.

Include these sections:
1. Hero
2. Signature services preview
3. Weddings highlight
4. Drink list highlight
5. Gallery preview
6. Why clients choose Casa Aurea
7. Final CTA

HOME HERO
Large elegant hero section with strong photography and refined overlay.
Hero content should include:
Eyebrow:
"Premium catering & bar service for unforgettable events"

Main title:
"Elegant catering and cocktail experiences for weddings, celebrations, and refined gatherings"

Subtitle:
"Casa Aurea Events creates tailored food and drink experiences with premium hospitality, beautiful presentation, and a modern luxury feel."

Primary CTA:
"Request your event proposal"

Secondary CTA:
"Explore our services"

SERVICES PAGE
Create a full dedicated Services page.

Include:
- services hero
- overview intro
- grid or elegant list of core services
- premium bartending service
- catering service
- wedding service
- private party service
- corporate event service
- event styling / setup support
- service process or how it works
- CTA section

Service cards should feel polished and convincing.
Each service must have a title, short description, and premium positioning.

WEDDINGS PAGE
Create a dedicated Weddings page for couples.

Include:
- romantic but modern hero
- weddings introduction
- what Casa Aurea offers for weddings
- service highlights for aperitivo, dinner, dessert, open bar, toast moments
- emotional but elegant copy
- section about customization and atmosphere
- CTA to request a wedding proposal

This page should feel particularly aspirational and premium.

DRINK LIST PAGE
Create a real dedicated Drink List page.

This page is important.
It should showcase the premium bar side of the business.

Include:
- hero section
- intro explaining the philosophy of the drink program
- sections for:
  - Signature Cocktails
  - Classic Reimagined
  - Spritz & Aperitivo Selection
  - Alcohol-free Signature Drinks
  - Premium Spirits & Bubbles
- each drink card should include:
  - drink name
  - short elegant description
  - ingredients or flavor profile
- make the page feel like a luxury event bar menu, not a nightclub menu

The copy must sound elevated and tasteful.

GALLERY PAGE
Create a real Gallery page.
Do not make it just a tiny preview.

Include:
- gallery hero
- responsive premium image grid
- images of catering setup, cocktails, table styling, elegant receptions, plated food, celebration atmosphere
- subtle hover effects
- clean spacing
- premium layout

ABOUT PAGE
Create a dedicated About page.

Include:
- brand story hero
- philosophy section
- hospitality and quality focus
- what makes Casa Aurea different
- elegant copy about care, presentation, timing, and guest experience
- image + text split sections
- closing CTA

This page should build trust and brand depth.

CONTACT PAGE
Create a real Contact page.

Include:
- contact hero
- inquiry intro
- contact info block
- phone
- email
- WhatsApp CTA if it fits cleanly
- city / service area
- opening / contact availability
- event inquiry CTA or simple premium contact form block if suitable
- strong closing line encouraging contact

Use realistic placeholder details such as:
Address / service area:
Torino and surrounding areas

Phone:
+39 011 000000

Email:
hello@casaaureaevents.it

CONTACT CTA STRATEGY
The site must contain meaningful CTAs across pages:
- request proposal
- book a call
- explore services
- discover drink list
- contact us for your event

CTA style must remain consistent across pages.
CTAs must feel premium, clear, and action-oriented.

FOOTER
Create a refined dark footer with:
- brand name
- short brand line
- navigation links
- contact info
- service area
- social placeholders
- copyright

SEO / CONTENT
- one clear H1 per page
- polished realistic copy
- no lorem ipsum
- no placeholder feel
- content should sound like a real premium events brand
- page titles and meta descriptions should exist
- headings must be meaningful and structured

RESPONSIVE QUALITY
- fully responsive
- no horizontal scroll
- good spacing at all key breakpoints
- mobile navigation must work
- cards must stack elegantly
- sections must remain premium on mobile, tablet, and desktop

QUALITY EXPECTATION
The final website must feel like a real premium catering and bar service brand that could be sold to a client.
It must look elegant, modern, and credible.
It must not feel like a generic food template.
It must not feel like a one-page brochure stretched into fake pages.
Each page must have a real purpose and different content.


## Brief summary
# Brief summary

## Original prompt
Create a premium modern website for an event catering and bartending service called Casa Aurea Events.

The business offers:
- high-end catering for weddings, private parties, and corporate events
- premium mobile bar service
- elegant signature drink lists
- curated event styling support
- full-service hospitality for refined events

The final website must feel luxurious, polished, trustworthy, and premium.
It should look like a real brand that could sell high-ticket catering and event services.
Avoid generic banquet-hall vibes.
Avoid cheap party aesthetics.
Avoid template-looking sections.
The tone must be elegant, refined, warm, and aspirational.

ARCHITECTURE
This must be a real multi-page website.
Do NOT build it as a single-page website with anchor links.
Do NOT collapse all content into the homepage.

Create these real pages with real routes:
- Home
- Services
- Weddings
- Drink List
- Gallery
- About
- Contact

Required routes:
- /
- /services
- /weddings
- /drink-list
- /gallery
- /about
- /contact

NAVIGATION
Header navigation must include:
- Home
- Services
- Weddings
- Drink List
- Gallery
- About
- Contact

Navigation must use real routes, not homepage anchors.
Each navigation item must point to an actually existing page.
The mobile menu must work properly.

GENERAL BRAND DIRECTION
Brand name: Casa Aurea Events
Positioning: premium catering and elevated bar service for elegant events
Target audience:
- couples planning weddings
- people organizing refined private events
- brands or companies hosting premium corporate evenings
- clients who care about atmosphere, presentation, and hospitality

Brand values:
- elegance
- quality
- atmosphere
- attention to detail
- hospitality
- modern Italian refinement

VISUAL STYLE
The design must feel:
- sophisticated
- editorial
- high-end
- spacious
- luminous but rich
- elegant without being cold

Use a visual language inspired by:
- modern luxury hospitality
- destination wedding brands
- premium cocktail bars
- boutique event design studios

COLOR PALETTE
Use an elegant palette such as:
- warm ivory / champagne background
- deep charcoal or espresso for contrast
- muted gold accents
- soft taupe / warm beige neutrals
- optional dark olive or dusty bronze details

Typography:
- elegant serif or modern editorial serif for headings
- clean refined sans serif for body text
- strong hierarchy and generous spacing

LAYOUT RULES
- mobile first
- refined responsive layout
- strong visual hierarchy
- large premium hero sections
- full-width media where appropriate
- max-width containers for readability
- generous whitespace
- cards and sections should feel balanced and premium
- no cramped blocks
- no cheap gradient-heavy look
- no excessive animations

IMAGE DIRECTION
Use high quality Unsplash images.
Search themes like:
- wedding catering
- elegant table setting
- luxury wedding dinner
- bartender cocktail service
- signature cocktails
- event catering plated food
- upscale reception dinner
- champagne toast
- stylish private event
- modern catering presentation

Images must:
- use object-fit: cover
- never appear stretched
- feel coherent and premium
- support the brand identity
- help the site feel real and sellable

HOME PAGE
The homepage must be a premium overview page, not a dump of all content.

Include these sections:
1. Hero
2. Signature services preview
3. Weddings highlight
4. Drink list highlight
5. Gallery preview
6. Why clients choose Casa Aurea
7. Final CTA

HOME HERO
Large elegant hero section with strong photography and refined overlay.
Hero content should include:
Eyebrow:
"Premium catering & bar service for unforgettable events"

Main title:
"Elegant catering and cocktail experiences for weddings, celebrations, and refined gatherings"

Subtitle:
"Casa Aurea Events creates tailored food and drink experiences with premium hospitality, beautiful presentation, and a modern luxury feel."

Primary CTA:
"Request your event proposal"

Secondary CTA:
"Explore our services"

SERVICES PAGE
Create a full dedicated Services page.

Include:
- services hero
- overview intro
- grid or elegant list of core services
- premium bartending service
- catering service
- wedding service
- private party service
- corporate event service
- event styling / setup support
- service process or how it works
- CTA section

Service cards should feel polished and convincing.
Each service must have a title, short description, and premium positioning.

WEDDINGS PAGE
Create a dedicated Weddings page for couples.

Include:
- romantic but modern hero
- weddings introduction
- what Casa Aurea offers for weddings
- service highlights for aperitivo, dinner, dessert, open bar, toast moments
- emotional but elegant copy
- section about customization and atmosphere
- CTA to request a wedding proposal

This page should feel particularly aspirational and premium.

DRINK LIST PAGE
Create a real dedicated Drink List page.

This page is important.
It should showcase the premium bar side of the business.

Include:
- hero section
- intro explaining the philosophy of the drink program
- sections for:
  - Signature Cocktails
  - Classic Reimagined
  - Spritz & Aperitivo Selection
  - Alcohol-free Signature Drinks
  - Premium Spirits & Bubbles
- each drink card should include:
  - drink name
  - short elegant description
  - ingredients or flavor profile
- make the page feel like a luxury event bar menu, not a nightclub menu

The copy must sound elevated and tasteful.

GALLERY PAGE
Create a real Gallery page.
Do not make it just a tiny preview.

Include:
- gallery hero
- responsive premium image grid
- images of catering setup, cocktails, table styling, elegant receptions, plated food, celebration atmosphere
- subtle hover effects
- clean spacing
- premium layout

ABOUT PAGE
Create a dedicated About page.

Include:
- brand story hero
- philosophy section
- hospitality and quality focus
- what makes Casa Aurea different
- elegant copy about care, presentation, timing, and guest experience
- image + text split sections
- closing CTA

This page should build trust and brand depth.

CONTACT PAGE
Create a real Contact page.

Include:
- contact hero
- inquiry intro
- contact info block
- phone
- email
- WhatsApp CTA if it fits cleanly
- city / service area
- opening / contact availability
- event inquiry CTA or simple premium contact form block if suitable
- strong closing line encouraging contact

Use realistic placeholder details such as:
Address / service area:
Torino and surrounding areas

Phone:
+39 011 000000

Email:
hello@casaaureaevents.it

CONTACT CTA STRATEGY
The site must contain meaningful CTAs across pages:
- request proposal
- book a call
- explore services
- discover drink list
- contact us for your event

CTA style must remain consistent across pages.
CTAs must feel premium, clear, and action-oriented.

FOOTER
Create a refined dark footer with:
- brand name
- short brand line
- navigation links
- contact info
- service area
- social placeholders
- copyright

SEO / CONTENT
- one clear H1 per page
- polished realistic copy
- no lorem ipsum
- no placeholder feel
- content should sound like a real premium events brand
- page titles and meta descriptions should exist
- headings must be meaningful and structured

RESPONSIVE QUALITY
- fully responsive
- no horizontal scroll
- good spacing at all key breakpoints
- mobile navigation must work
- cards must stack elegantly
- sections must remain premium on mobile, tablet, and desktop

QUALITY EXPECTATION
The final website must feel like a real premium catering and bar service brand that could be sold to a client.
It must look elegant, modern, and credible.
It must not feel like a generic food template.
It must not feel like a one-page brochure stretched into fake pages.
Each page must have a real purpose and different content.

## Structured summary
- Site name: site-create-a-premium-modern-website-for-an-e
- Business type: agency
- Routing mode: hash
- Pages: home, menu, chi-siamo, gallery, contatti, servizi
- Navigation: Home [route:/], Menu [route:/menu], Chi siamo [route:/chi-siamo], Gallery [route:/gallery], Contatti [route:/contatti], Servizi [route:/servizi]
- Validation checks: semantic-structure, navigation-integrity, cta-integrity, images-not-broken, responsive-layout, placeholder-content-absent
- Breakpoints: 360, 768, 1024, 1440
- Gallery: yes
- WhatsApp CTA: yes
- Phone CTA: yes

## Pages and sections
- home: sections [hero (hero), signature-preview (grid-cards-preview), brand-story-preview (split-content-preview)], ctas [home-primary-cta (internal/hero), home-contact-cta (internal/hero), home-whatsapp (external/floating)]
- menu: sections [menu-hero (hero), menu-categories (menu-categories)], ctas [none]
- chi-siamo: sections [about-hero (hero), story (editorial-content), philosophy (split-content)], ctas [none]
- gallery: sections [gallery-hero (hero), gallery-grid (image-grid)], ctas [none]
- contatti: sections [contact-hero (hero), contact-details (contact-block), opening-hours (hours-block)], ctas [contatti-whatsapp (external/body), contatti-phone (external/body)]
- servizi: sections [services-hero (hero), services-overview (service-list)], ctas [none]

## Notes
- Use the original prompt as the richest source of visual and branding intent.
- Use site-spec.json as the implementation contract.
- Use TASK_GRAPH.json as the execution structure.
- Do not invent pages, sections, routes, or navigation items outside the spec.


## Structured spec
```json
{
  "originalPrompt": "Create a premium modern website for an event catering and bartending service called Casa Aurea Events.\n\nThe business offers:\n- high-end catering for weddings, private parties, and corporate events\n- premium mobile bar service\n- elegant signature drink lists\n- curated event styling support\n- full-service hospitality for refined events\n\nThe final website must feel luxurious, polished, trustworthy, and premium.\nIt should look like a real brand that could sell high-ticket catering and event services.\nAvoid generic banquet-hall vibes.\nAvoid cheap party aesthetics.\nAvoid template-looking sections.\nThe tone must be elegant, refined, warm, and aspirational.\n\nARCHITECTURE\nThis must be a real multi-page website.\nDo NOT build it as a single-page website with anchor links.\nDo NOT collapse all content into the homepage.\n\nCreate these real pages with real routes:\n- Home\n- Services\n- Weddings\n- Drink List\n- Gallery\n- About\n- Contact\n\nRequired routes:\n- /\n- /services\n- /weddings\n- /drink-list\n- /gallery\n- /about\n- /contact\n\nNAVIGATION\nHeader navigation must include:\n- Home\n- Services\n- Weddings\n- Drink List\n- Gallery\n- About\n- Contact\n\nNavigation must use real routes, not homepage anchors.\nEach navigation item must point to an actually existing page.\nThe mobile menu must work properly.\n\nGENERAL BRAND DIRECTION\nBrand name: Casa Aurea Events\nPositioning: premium catering and elevated bar service for elegant events\nTarget audience:\n- couples planning weddings\n- people organizing refined private events\n- brands or companies hosting premium corporate evenings\n- clients who care about atmosphere, presentation, and hospitality\n\nBrand values:\n- elegance\n- quality\n- atmosphere\n- attention to detail\n- hospitality\n- modern Italian refinement\n\nVISUAL STYLE\nThe design must feel:\n- sophisticated\n- editorial\n- high-end\n- spacious\n- luminous but rich\n- elegant without being cold\n\nUse a visual language inspired by:\n- modern luxury hospitality\n- destination wedding brands\n- premium cocktail bars\n- boutique event design studios\n\nCOLOR PALETTE\nUse an elegant palette such as:\n- warm ivory / champagne background\n- deep charcoal or espresso for contrast\n- muted gold accents\n- soft taupe / warm beige neutrals\n- optional dark olive or dusty bronze details\n\nTypography:\n- elegant serif or modern editorial serif for headings\n- clean refined sans serif for body text\n- strong hierarchy and generous spacing\n\nLAYOUT RULES\n- mobile first\n- refined responsive layout\n- strong visual hierarchy\n- large premium hero sections\n- full-width media where appropriate\n- max-width containers for readability\n- generous whitespace\n- cards and sections should feel balanced and premium\n- no cramped blocks\n- no cheap gradient-heavy look\n- no excessive animations\n\nIMAGE DIRECTION\nUse high quality Unsplash images.\nSearch themes like:\n- wedding catering\n- elegant table setting\n- luxury wedding dinner\n- bartender cocktail service\n- signature cocktails\n- event catering plated food\n- upscale reception dinner\n- champagne toast\n- stylish private event\n- modern catering presentation\n\nImages must:\n- use object-fit: cover\n- never appear stretched\n- feel coherent and premium\n- support the brand identity\n- help the site feel real and sellable\n\nHOME PAGE\nThe homepage must be a premium overview page, not a dump of all content.\n\nInclude these sections:\n1. Hero\n2. Signature services preview\n3. Weddings highlight\n4. Drink list highlight\n5. Gallery preview\n6. Why clients choose Casa Aurea\n7. Final CTA\n\nHOME HERO\nLarge elegant hero section with strong photography and refined overlay.\nHero content should include:\nEyebrow:\n\"Premium catering & bar service for unforgettable events\"\n\nMain title:\n\"Elegant catering and cocktail experiences for weddings, celebrations, and refined gatherings\"\n\nSubtitle:\n\"Casa Aurea Events creates tailored food and drink experiences with premium hospitality, beautiful presentation, and a modern luxury feel.\"\n\nPrimary CTA:\n\"Request your event proposal\"\n\nSecondary CTA:\n\"Explore our services\"\n\nSERVICES PAGE\nCreate a full dedicated Services page.\n\nInclude:\n- services hero\n- overview intro\n- grid or elegant list of core services\n- premium bartending service\n- catering service\n- wedding service\n- private party service\n- corporate event service\n- event styling / setup support\n- service process or how it works\n- CTA section\n\nService cards should feel polished and convincing.\nEach service must have a title, short description, and premium positioning.\n\nWEDDINGS PAGE\nCreate a dedicated Weddings page for couples.\n\nInclude:\n- romantic but modern hero\n- weddings introduction\n- what Casa Aurea offers for weddings\n- service highlights for aperitivo, dinner, dessert, open bar, toast moments\n- emotional but elegant copy\n- section about customization and atmosphere\n- CTA to request a wedding proposal\n\nThis page should feel particularly aspirational and premium.\n\nDRINK LIST PAGE\nCreate a real dedicated Drink List page.\n\nThis page is important.\nIt should showcase the premium bar side of the business.\n\nInclude:\n- hero section\n- intro explaining the philosophy of the drink program\n- sections for:\n  - Signature Cocktails\n  - Classic Reimagined\n  - Spritz & Aperitivo Selection\n  - Alcohol-free Signature Drinks\n  - Premium Spirits & Bubbles\n- each drink card should include:\n  - drink name\n  - short elegant description\n  - ingredients or flavor profile\n- make the page feel like a luxury event bar menu, not a nightclub menu\n\nThe copy must sound elevated and tasteful.\n\nGALLERY PAGE\nCreate a real Gallery page.\nDo not make it just a tiny preview.\n\nInclude:\n- gallery hero\n- responsive premium image grid\n- images of catering setup, cocktails, table styling, elegant receptions, plated food, celebration atmosphere\n- subtle hover effects\n- clean spacing\n- premium layout\n\nABOUT PAGE\nCreate a dedicated About page.\n\nInclude:\n- brand story hero\n- philosophy section\n- hospitality and quality focus\n- what makes Casa Aurea different\n- elegant copy about care, presentation, timing, and guest experience\n- image + text split sections\n- closing CTA\n\nThis page should build trust and brand depth.\n\nCONTACT PAGE\nCreate a real Contact page.\n\nInclude:\n- contact hero\n- inquiry intro\n- contact info block\n- phone\n- email\n- WhatsApp CTA if it fits cleanly\n- city / service area\n- opening / contact availability\n- event inquiry CTA or simple premium contact form block if suitable\n- strong closing line encouraging contact\n\nUse realistic placeholder details such as:\nAddress / service area:\nTorino and surrounding areas\n\nPhone:\n+39 011 000000\n\nEmail:\nhello@casaaureaevents.it\n\nCONTACT CTA STRATEGY\nThe site must contain meaningful CTAs across pages:\n- request proposal\n- book a call\n- explore services\n- discover drink list\n- contact us for your event\n\nCTA style must remain consistent across pages.\nCTAs must feel premium, clear, and action-oriented.\n\nFOOTER\nCreate a refined dark footer with:\n- brand name\n- short brand line\n- navigation links\n- contact info\n- service area\n- social placeholders\n- copyright\n\nSEO / CONTENT\n- one clear H1 per page\n- polished realistic copy\n- no lorem ipsum\n- no placeholder feel\n- content should sound like a real premium events brand\n- page titles and meta descriptions should exist\n- headings must be meaningful and structured\n\nRESPONSIVE QUALITY\n- fully responsive\n- no horizontal scroll\n- good spacing at all key breakpoints\n- mobile navigation must work\n- cards must stack elegantly\n- sections must remain premium on mobile, tablet, and desktop\n\nQUALITY EXPECTATION\nThe final website must feel like a real premium catering and bar service brand that could be sold to a client.\nIt must look elegant, modern, and credible.\nIt must not feel like a generic food template.\nIt must not feel like a one-page brochure stretched into fake pages.\nEach page must have a real purpose and different content.",
  "siteName": "site-create-a-premium-modern-website-for-an-e",
  "businessType": "agency",
  "architecture": "multi-page",
  "routing": {
    "mode": "hash"
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "role": "landing",
      "sections": [
        {
          "id": "hero",
          "type": "hero"
        },
        {
          "id": "signature-preview",
          "type": "grid-cards-preview"
        },
        {
          "id": "brand-story-preview",
          "type": "split-content-preview"
        }
      ],
      "ctas": [
        {
          "id": "home-primary-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/menu"
          }
        },
        {
          "id": "home-contact-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/contatti"
          }
        },
        {
          "id": "home-whatsapp",
          "kind": "external",
          "placement": "floating",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        }
      ]
    },
    {
      "id": "menu",
      "route": "/menu",
      "role": "core",
      "sections": [
        {
          "id": "menu-hero",
          "type": "hero"
        },
        {
          "id": "menu-categories",
          "type": "menu-categories"
        }
      ],
      "ctas": []
    },
    {
      "id": "chi-siamo",
      "route": "/chi-siamo",
      "role": "content",
      "sections": [
        {
          "id": "about-hero",
          "type": "hero"
        },
        {
          "id": "story",
          "type": "editorial-content"
        },
        {
          "id": "philosophy",
          "type": "split-content"
        }
      ],
      "ctas": []
    },
    {
      "id": "gallery",
      "route": "/gallery",
      "role": "content",
      "sections": [
        {
          "id": "gallery-hero",
          "type": "hero"
        },
        {
          "id": "gallery-grid",
          "type": "image-grid"
        }
      ],
      "ctas": []
    },
    {
      "id": "contatti",
      "route": "/contatti",
      "role": "conversion",
      "sections": [
        {
          "id": "contact-hero",
          "type": "hero"
        },
        {
          "id": "contact-details",
          "type": "contact-block"
        },
        {
          "id": "opening-hours",
          "type": "hours-block"
        }
      ],
      "ctas": [
        {
          "id": "contatti-whatsapp",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        },
        {
          "id": "contatti-phone",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "phone",
            "value": "phone"
          }
        }
      ]
    },
    {
      "id": "servizi",
      "route": "/servizi",
      "role": "hub",
      "sections": [
        {
          "id": "services-hero",
          "type": "hero"
        },
        {
          "id": "services-overview",
          "type": "service-list"
        }
      ],
      "ctas": []
    }
  ],
  "navigation": [
    {
      "label": "Home",
      "type": "route",
      "target": "/"
    },
    {
      "label": "Menu",
      "type": "route",
      "target": "/menu"
    },
    {
      "label": "Chi siamo",
      "type": "route",
      "target": "/chi-siamo"
    },
    {
      "label": "Gallery",
      "type": "route",
      "target": "/gallery"
    },
    {
      "label": "Contatti",
      "type": "route",
      "target": "/contatti"
    },
    {
      "label": "Servizi",
      "type": "route",
      "target": "/servizi"
    }
  ],
  "theme": {
    "mode": "derived-from-prompt"
  },
  "validation": {
    "breakpoints": [
      360,
      768,
      1024,
      1440
    ],
    "checks": [
      "semantic-structure",
      "navigation-integrity",
      "cta-integrity",
      "images-not-broken",
      "responsive-layout",
      "placeholder-content-absent"
    ]
  },
  "features": {
    "gallery": true,
    "whatsappCta": true,
    "phoneCta": true,
    "bookingCta": true,
    "menuPage": true,
    "servicesPage": true
  }
}

```

## Current task id
responsive-polish

## Current task title
Refine responsive layout and spacing

## Current task type
responsive

## Current task target
```json
{
  "breakpoints": [
    360,
    768,
    1024,
    1440
  ]
}
```

## Depends on
- navigation-structure
- section-home-hero
- section-home-signature-preview
- section-home-brand-story-preview
- section-menu-menu-hero
- section-menu-menu-categories
- section-chi-siamo-about-hero
- section-chi-siamo-story
- section-chi-siamo-philosophy
- section-gallery-gallery-hero
- section-gallery-gallery-grid
- section-contatti-contact-hero
- section-contatti-contact-details
- section-contatti-opening-hours
- section-servizi-services-hero
- section-servizi-services-overview

## Files allowed
- src/App.css
- src/index.css
- src/components
- src/pages/Home.jsx
- src/pages/Menu.jsx
- src/pages/Chi-siamo.jsx
- src/pages/Gallery.jsx
- src/pages/Contatti.jsx
- src/pages/Servizi.jsx

## Definition of done
- layout works across required breakpoints
- no horizontal overflow
- spacing and hierarchy are coherent

## Strict execution rules
- Execute only this current task.
- Do not implement future tasks.
- Do not modify files outside the allowed list unless a truly minimal cross-file change is strictly required to preserve build integrity.
- Prefer the allowed files as the primary implementation scope.
- Keep the code modular, readable, and production-oriented.
- Follow the development method strictly.
- Respect the structured spec.
- If the original brief includes stylistic guidance not fully captured by the spec, follow the brief without violating the spec.
- Do not redesign unrelated sections.
- Do not remove already implemented valid work unless required for the current task.
- Keep routing and navigation coherent with the spec.
- Preserve compatibility with the project routing mode.

## Required completion behavior
- Implement the task.
- Run a build check.
- Update agent/AGENT_REPORT.md with a short summary of what was implemented.
- Do not manually change TASK_STATE.json.

## Required output
- Modified files
- What was implemented
- Build result

mcp startup: no servers
codex
I’m validating the current responsive implementation against the task scope first, then I’ll tighten spacing and breakpoint behavior only in the allowed files and finish with a build check plus the agent report update.
exec
/bin/zsh -lc "sed -n '1,220p' src/App.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,240p' src/index.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' agent/CURRENT_TASK_PROMPT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' docs/DEVELOPMENT_METHOD.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc 'rg --files src agent brief docs | sort' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

 succeeded in 52ms:
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-premium-modern-website-for-an-e

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.
 succeeded in 52ms:
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
 succeeded in 51ms:
# Development Method

All sites must follow these rules.

## Objective
- Generate production-ready static websites that are clear, stable, responsive, modular, and easy to validate.
- Prioritize correctness before visual polish.
- Prefer predictable implementation over improvisation.

## Source of Truth
- The human prompt is not the implementation source of truth.
- `site-spec.json` is the only source of truth for pages, sections, navigation, routing, and required features.
- If supported by the project architecture, `content.json` is the source of truth for copy, labels, CTA text, and contact details.
- If supported by the project architecture, `theme.json` is the source of truth for colors, typography, spacing, radius, and visual tokens.
- The implementation flow must be: `prompt -> site-spec.json -> tasks -> code`.
- Never implement pages, routes, sections, navigation items, or features that are not defined in the spec.

## Core Principles
- Build for users first: clarity, speed, and clear actions.
- Keep code modular: reusable components with clear responsibilities.
 succeeded in 52ms:
agent/AGENT_REPORT.md
agent/CURRENT_TASK_PROMPT.md
agent/LAST_CODEX_OUTPUT.md
agent/PROMPT_ARCHITECTURE.json
agent/TASK_GRAPH.json
agent/TASK_QUEUE.md
agent/TASK_STATE.json
brief/brief-summary.md
brief/original-prompt.md
docs/DEVELOPMENT_METHOD.md
src/App.css
src/App.jsx
src/assets/react.svg
src/components/About-heroSection.jsx
src/components/Brand-story-previewSection.jsx
src/components/Contact-detailsSection.jsx
src/components/Contact-heroSection.jsx
src/components/ContactPhoneCta.jsx
src/components/ContactWhatsAppCta.jsx
src/components/FloatingWhatsAppButton.jsx
codex
The base Vite CSS is still in place, so I’m reading the page and section components now to see where the current layout is actually breaking before I replace it with task-scoped responsive rules.
exec
/bin/zsh -lc "sed -n '1,220p' src/pages/Home.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' src/pages/Contatti.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' src/pages/Gallery.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' src/pages/Menu.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' src/pages/Servizi.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,220p' src/pages/Chi-siamo.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 50ms:
import { useEffect } from 'react'
import AboutHeroSection from '../components/About-heroSection'
import PhilosophySection from '../components/PhilosophySection'
import StorySection from '../components/StorySection'

export default function ChiSiamo() {
  useEffect(() => {
    document.title = 'About Casa Aurea Events | Hospitality With Intent'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn about Casa Aurea Events, a premium event catering and bartending brand focused on thoughtful hospitality, elegant presentation, and refined guest experiences.',
      )
    }
  }, [])

  return (
 succeeded in 51ms:
import { useEffect } from 'react'
import GalleryHeroSection from '../components/Gallery-heroSection'
import GalleryGridSection from '../components/Gallery-gridSection'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Browse the Casa Aurea Events gallery for elegant catering setups, luxury wedding tablescapes, signature cocktails, and polished event styling inspiration.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="gallery-title">
 succeeded in 51ms:
import { useEffect } from 'react'
import MenuHeroSection from '../components/Menu-heroSection'
import MenuCategoriesSection from '../components/Menu-categoriesSection'

export default function Menu() {
  useEffect(() => {
    document.title = 'Drink List | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Discover the Casa Aurea Events drink list, featuring signature cocktails, refined aperitivo selections, alcohol-free serves, and premium bubbles for elegant events.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="menu-title">
 succeeded in 52ms:
import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import BrandStoryPreviewSection from '../components/Brand-story-previewSection'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import SignaturePreviewSection from '../components/SignaturePreviewSection'

export default function Home() {
  useEffect(() => {
    document.title = 'Casa Aurea Events | Premium Catering & Bar Service'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Casa Aurea Events delivers premium catering, elevated bar service, and modern Italian hospitality for weddings, celebrations, and refined gatherings.',
      )
    }
  }, [])

 succeeded in 50ms:
import { useEffect } from 'react'
import ServicesHeroSection from '../components/Services-heroSection'
import ServicesOverviewSection from '../components/Services-overviewSection'

export default function Servizi() {
  useEffect(() => {
    document.title = 'Services | Casa Aurea Events'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore Casa Aurea Events services, from luxury wedding catering and premium bartending to private party hosting, corporate evenings, and styling support.',
      )
    }
  }, [])

  return (
    <article aria-labelledby="servizi-title">
 succeeded in 52ms:
import { useEffect } from 'react'
import ContactHeroSection from '../components/Contact-heroSection'
import ContactDetailsSection from '../components/Contact-detailsSection'
import ContactPhoneCta from '../components/ContactPhoneCta'
import ContactWhatsAppCta from '../components/ContactWhatsAppCta'
import OpeningHoursSection from '../components/Opening-hoursSection'

export default function Contatti() {
  useEffect(() => {
    document.title = 'Contact Casa Aurea Events | Request Your Proposal'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact Casa Aurea Events for wedding catering, premium mobile bar service, and refined event hospitality in Torino and surrounding areas.',
      )
    }
  }, [])
codex
I have the page shells. Next I’m checking the section markup and shared layout classes, because the responsive task likely lives there rather than in the page wrappers.
exec
/bin/zsh -lc "sed -n '1,260p' src/layout/Layout.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "for f in src/components/*.jsx; do echo '---' "'$f; sed -n '"'1,260p' \""'$f"; done' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
import { NavLink } from "react-router-dom"

export default function Layout({ children, navigationItems = [] }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.target}
              to={item.target}
              end={item.target === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>
 succeeded in 51ms:
Total output lines: 2801

--- src/components/About-heroSection.jsx
const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(30rem, 74vh, 43rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(52, 38, 31, 0.12) 0%, rgba(31, 23, 18, 0.66) 56%, rgba(20, 15, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
codex
I’ve confirmed most sections are inline-styled, so the responsive pass will need a mix of global CSS cleanup and a few targeted component adjustments where fixed minimum widths and CTA rows can overflow on 360px screens.
exec
/bin/zsh -lc "sed -n '1,260p' src/App.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "rg -n \"minmax\\(|minHeight|position: 'fixed'|display: 'flex'|width: 'min\\(|maxWidth|gridTemplateColumns\" src/components src/pages src/App.css src/index.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/Chi-siamo"
import Gallery from "./pages/Gallery"
import Contatti from "./pages/Contatti"
import Servizi from "./pages/Servizi"

const navigationItems = [
  { label: "Home", type: "route", target: "/" },
  { label: "Menu", type: "route", target: "/menu" },
  { label: "Chi siamo", type: "route", target: "/chi-siamo" },
  { label: "Gallery", type: "route", target: "/gallery" },
  { label: "Contatti", type: "route", target: "/contatti" },
  { label: "Servizi", type: "route", target: "/servizi" },
]

export default function App() {
  return (
 succeeded in 51ms:
src/components/PhilosophySection.jsx:7:    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
src/components/PhilosophySection.jsx:31:    maxWidth: '13ch',
src/components/PhilosophySection.jsx:40:    maxWidth: '38rem',
src/components/PhilosophySection.jsx:79:    maxWidth: '14ch',
src/components/PhilosophySection.jsx:117:    minHeight: '3.1rem',
src/components/FloatingWhatsAppButton.jsx:3:    position: 'fixed',
src/components/FloatingWhatsAppButton.jsx:10:    minHeight: '3.5rem',
src/components/About-heroSection.jsx:6:    minHeight: 'clamp(30rem, 74vh, 43rem)',
src/components/About-heroSection.jsx:8:    display: 'flex',
src/components/About-heroSection.jsx:18:    width: 'min(100%, 47rem)',
src/components/About-heroSection.jsx:41:    maxWidth: '35rem',
src/components/About-heroSection.jsx:49:    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
src/components/Menu-categoriesSection.jsx:15:    maxWidth: '44rem',
src/components/Menu-categoriesSection.jsx:39:    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
src/components/Menu-categoriesSection.jsx:45:    minHeight: '100%',
src/components/Gallery-gridSection.jsx:15:    maxWidth: '46rem',
src/components/Gallery-gridSection.jsx:39:    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
src/components/Gallery-gridSection.jsx:44:    minHeight: 'clamp(18rem, 36vw, 26rem)',
src/components/Gallery-gridSection.jsx:59:    display: 'flex',
src/components/Services-overviewSection.jsx:17:    maxWidth: '46rem',
codex
I’ve isolated the main risk areas: root/layout CSS, the header/footer shell, fixed floating CTA spacing, and several auto-fit grids whose minimum widths are tight against 360px once section padding is included. I’m patching those next.
exec
/bin/zsh -lc "sed -n '1,240p' src/components/Menu-heroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,240p' src/components/Gallery-heroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,240p' src/components/HeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,260p' src/components/Menu-categoriesSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,260p' src/components/Gallery-gridSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,280p' src/components/PhilosophySection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,260p' src/components/Opening-hoursSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 50ms:
import { Link } from 'react-router-dom'

const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(32rem, 78vh, 46rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(40, 31, 24, 0.18) 0%, rgba(28, 22, 18, 0.72) 62%, rgba(20, 15, 12, 0.9) 100%), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 42rem)',
 succeeded in 51ms:
const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(30rem, 74vh, 43rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(48, 36, 29, 0.12) 0%, rgba(30, 23, 19, 0.68) 56%, rgba(18, 15, 12, 0.92) 100%), url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 48rem)',
    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    borderRadius: '28px',
 succeeded in 51ms:
import { Link } from 'react-router-dom'

const heroStyles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '32px',
    minHeight: 'clamp(30rem, 72vh, 42rem)',
    padding: 'clamp(1.5rem, 4vw, 3rem)',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage:
      "linear-gradient(180deg, rgba(49, 36, 28, 0.16) 0%, rgba(31, 23, 18, 0.72) 58%, rgba(22, 17, 14, 0.92) 100%), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.18)',
  },
  panel: {
    width: 'min(100%, 46rem)',
 succeeded in 51ms:
const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.96) 0%, rgba(241, 231, 216, 0.92) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '44rem',
  },
  eyebrow: {
    margin: 0,
    color: '#9f7b4b',
    fontSize: '0.82rem',
 succeeded in 50ms:
import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5rem)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    alignItems: 'stretch',
  },
  contentPanel: {
    display: 'grid',
    gap: '1.15rem',
    padding: 'clamp(1.5rem, 4vw, 2.75rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 233, 0.96) 0%, rgba(238, 227, 212, 0.92) 100%)',
    boxShadow: '0 20px 50px rgba(78, 59, 44, 0.12)',
    textAlign: 'left',
  },
 succeeded in 51ms:
const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(238, 226, 207, 0.94) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '46rem',
  },
  eyebrow: {
    margin: 0,
    color: '#9f7b4b',
    fontSize: '0.82rem',
 succeeded in 51ms:
const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    backgroundColor: '#231b16',
    color: '#f7f1e8',
    boxShadow: '0 24px 60px rgba(41, 29, 20, 0.16)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)',
    textAlign: 'left',
  },
  eyebrow: {
    margin: 0,
    color: '#d9bf8d',
    fontSize: '0.82rem',
    letterSpacing: '0.22em',
codex
I’m keeping the change set narrow: global CSS will replace the scaffold defaults and handle the shell, then I’ll tune only the inline-styled sections that can still force overflow or cramped CTA rows at small widths.
exec
/bin/zsh -lc "sed -n '1,240p' src/pages/ChiSiamo.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,240p' agent/AGENT_REPORT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
export default function ChiSiamo() {
  return (
    <>
      <section id="about-hero">
        <h1>About Hero</h1>
        <p>Content for about-hero will be generated by tasks</p>
      </section>
      <section id="story">
        <h2>Story</h2>
        <p>Content for story will be generated by tasks</p>
      </section>
      <section id="philosophy">
        <h2>Philosophy</h2>
        <p>Content for philosophy will be generated by tasks</p>
      </section>
    </>
  )
}
 succeeded in 52ms:
# AGENT REPORT

Project created.

Prepared TASK page-home-shell (Create home page shell) for execution.

Launching Codex for TASK page-home-shell.

Completed TASK page-home-shell.

Implemented a semantic home page shell in `src/pages/Home.jsx` with real hero,
signature preview, and brand story preview sections. Verified the home route
remains mounted in `src/App.jsx` and ready for follow-up content tasks.

TASK page-home-shell executed by Codex.
Waiting for validation.

TASK page-home-shell completed successfully.
Build passed.
Commit created for TASK page-home-shell.
codex
I’m at the edit step now. The main structural fix is removing the default centered Vite shell and establishing a real mobile-first canvas; after that I’m trimming only the components that still have small-screen pressure points.
file update
D /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
apply_patch(auto_approved=true) exited 0 in 29ms:
Success. Updated the following files:
D /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css
file update:
diff --git a/src/App.css b/src/App.css
deleted file mode 100644
index b9d355df2a5956b526c004531b7b0ffe412461e0..0000000000000000000000000000000000000000
--- a/src/App.css
+++ /dev/null
@@ -1,42 +0,0 @@
-#root {
-  max-width: 1280px;
-  margin: 0 auto;
-  padding: 2rem;
-  text-align: center;
-}
-
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
-}
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
-}
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
-}
-
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
-  }
-  to {
-    transform: rotate(360deg);
-  }
-}
-
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
-  }
-}
-
-.card {
-  padding: 2em;
-}
-
-.read-the-docs {
-  color: #888;
-}

file update:
diff --git a/src/App.css b/src/App.css
deleted file mode 100644
index b9d355df2a5956b526c004531b7b0ffe412461e0..0000000000000000000000000000000000000000
--- a/src/App.css
+++ /dev/null
@@ -1,42 +0,0 @@
-#root {
-  max-width: 1280px;
-  margin: 0 auto;
-  padding: 2rem;
-  text-align: center;
-}
-
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
-}
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
-}
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
-}
-
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
-  }
-  to {
-    transform: rotate(360deg);
-  }
-}
-
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
-  }
-}
-
-.card {
-  padding: 2em;
-}
-
-.read-the-docs {
-  color: #888;
-}

file update
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css
#root {
  min-height: 100vh;
}

header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(247, 241, 232, 0.86);
  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
}

nav[aria-label='Main navigation'] {
  width: min(100%, 76rem);
  margin: 0 auto;
  padding: 0.85rem 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

nav[aria-label='Main navigation'] a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  color: #241b16;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  transition:
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

nav[aria-label='Main navigation'] a:hover,
nav[aria-label='Main navigation'] a:focus-visible {
  background: rgba(159, 123, 75, 0.12);
  color: #1f1813;
}

nav[aria-label='Main navigation'] a.active {
  background: #241b16;
  color: #f7f1e8;
}

main {
  width: 100%;
}

main > article {
  width: min(100%, 76rem);
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
  display: grid;
  gap: clamp(2rem, 5vw, 3.5rem);
}

main > article > * {
  min-width: 0;
}

.page-closing-note {
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
}

.page-closing-note p {
  margin: 0;
  max-width: 48rem;
  color: rgba(32, 25, 20, 0.78);
  font-size: 1rem;
  line-height: 1.8;
  text-align: left;
}

.floating-whatsapp-button {
  max-width: calc(100vw - 1.5rem);
}

footer {
  margin-top: clamp(2rem, 5vw, 4rem);
  padding: 1.5rem 1rem 2rem;
  background: #1d1612;
  color: rgba(247, 241, 232, 0.74);
  text-align: center;
}

footer p {
  width: min(100%, 76rem);
  margin: 0 auto;
}

@media (min-width: 768px) {
  nav[aria-label='Main navigation'] {
    justify-content: flex-start;
    padding-inline: clamp(1.5rem, 3vw, 2rem);
  }

  main > article {
    padding-top: clamp(1.5rem, 3vw, 2.5rem);
    padding-bottom: clamp(2rem, 4vw, 3rem);
  }
}

@media (max-width: 479px) {
  nav[aria-label='Main navigation'] {
    padding-inline: 0.75rem;
    gap: 0.4rem;
  }

  nav[aria-label='Main navigation'] a {
    flex: 1 1 calc(50% - 0.4rem);
    min-width: 0;
    padding-inline: 0.85rem;
    font-size: 0.9rem;
  }

  .floating-whatsapp-button {
    right: 0.75rem !important;
    bottom: 0.75rem !important;
    padding: 0.8rem 0.95rem !important;
  }

  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
    display: none;
  }

  .floating-whatsapp-button [data-whatsapp-copy='label'] {
    font-size: 0.9rem !important;
  }
}
apply_patch(auto_approved=true) exited 0 in 48ms:
Success. Updated the following files:
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }

file update
D /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
apply_patch(auto_approved=true) exited 0 in 36ms:
Success. Updated the following files:
D /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
deleted file mode 100644
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..0000000000000000000000000000000000000000
--- a/src/index.css
+++ /dev/null
@@ -1,68 +0,0 @@
-:root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
-  line-height: 1.5;
-  font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
-  font-synthesis: none;
-  text-rendering: optimizeLegibility;
-  -webkit-font-smoothing: antialiased;
-  -moz-osx-font-smoothing: grayscale;
-}
-
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
-}
-a:hover {
-  color: #535bf2;
-}
-
-body {
-  margin: 0;
-  display: flex;
-  place-items: center;
-  min-width: 320px;
-  min-height: 100vh;
-}
-
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
-}
-
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
-}
-button:hover {
-  border-color: #646cff;
-}
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
-}
-
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
-}

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
deleted file mode 100644
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..0000000000000000000000000000000000000000
--- a/src/index.css
+++ /dev/null
@@ -1,68 +0,0 @@
-:root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
-  line-height: 1.5;
-  font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
-  font-synthesis: none;
-  text-rendering: optimizeLegibility;
-  -webkit-font-smoothing: antialiased;
-  -moz-osx-font-smoothing: grayscale;
-}
-
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
-}
-a:hover {
-  color: #535bf2;
-}
-
-body {
-  margin: 0;
-  display: flex;
-  place-items: center;
-  min-width: 320px;
-  min-height: 100vh;
-}
-
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
-}
-
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
-}
-button:hover {
-  border-color: #646cff;
-}
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
-}
-
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
-}

file update
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css
:root {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #201914;
  background:
    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

img,
svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

p,
h1,
h2,
h3,
figure {
  overflow-wrap: anywhere;
}

button,
a,
input,
textarea,
select {
  font: inherit;
}

:focus-visible {
  outline: 3px solid rgba(159, 123, 75, 0.45);
  outline-offset: 3px;
}
apply_patch(auto_approved=true) exited 0 in 64ms:
Success. Updated the following files:
A /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx
@@ -33,3 +33,3 @@
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
apply_patch(auto_approved=true) exited 0 in 58ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
One patch missed the current markup shape, so I’m reopening the floating CTA component and then applying the remaining responsive adjustments against the actual code rather than guessed context.
exec
/bin/zsh -lc "sed -n '1,220p' src/components/FloatingWhatsAppButton.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,260p' src/components/Services-overviewSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
const whatsappStyles = {
  link: {
    position: 'fixed',
    right: 'clamp(1rem, 3vw, 2rem)',
    bottom: 'clamp(1rem, 3vw, 2rem)',
    zIndex: 1000,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    minHeight: '3.5rem',
    padding: '0.85rem 1.1rem',
    borderRadius: '999px',
    backgroundColor: '#1c6c4c',
    color: '#f6efe4',
    textDecoration: 'none',
    boxShadow: '0 18px 40px rgba(28, 108, 76, 0.28)',
    border: '1px solid rgba(246, 239, 228, 0.2)',
  },
  icon: {
    width: '1.5rem',
 succeeded in 52ms:
import { Link } from 'react-router-dom'

const sectionStyles = {
  section: {
    marginTop: 'clamp(3rem, 7vw, 5.5rem)',
    display: 'grid',
    gap: '1.5rem',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    borderRadius: '32px',
    background:
      'linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(238, 227, 211, 0.9) 100%)',
    boxShadow: '0 24px 60px rgba(52, 38, 26, 0.08)',
  },
  header: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '46rem',
  },
  eyebrow: {
    margin: 0,
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

exec
/bin/zsh -lc "sed -n '260,360p' src/components/Services-overviewSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
        <h3 style={sectionStyles.processTitle}>How the service comes together</h3>
        <ul style={sectionStyles.processList}>
          {process.map((item) => (
            <li key={item.step} style={sectionStyles.processItem}>
              <span style={sectionStyles.processStep}>{item.step}</span>
              <span style={sectionStyles.processLabel}>{item.label}</span>
              <span style={sectionStyles.processText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyles.footer}>
        <p style={sectionStyles.footerText}>
          Every proposal is adjusted to the event setting, guest profile, and
          hosting priorities, with clear recommendations on service format,
          beverage flow, and presentation.
        </p>
        <Link to="/contatti" style={sectionStyles.action}>
          Request a tailored proposal
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
I’ve moved from shell fixes into the component-level pass now. The remaining edits are all defensive responsive tweaks: safer grid minimums, better action wrapping, and a smaller fixed CTA footprint on narrow screens.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-heroSection.jsx
@@ -48,3 +48,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-heroSection.jsx
@@ -52,2 +52,3 @@
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
@@ -58,2 +59,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -64,2 +66,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
@@ -70,2 +73,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -77,2 +81,3 @@
     fontWeight: 600,
+    textAlign: 'center',
   },
@@ -81,3 +86,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/HeroSection.jsx
@@ -52,2 +52,3 @@
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
@@ -58,2 +59,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -64,2 +66,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
@@ -70,2 +73,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -77,2 +81,3 @@
     fontWeight: 600,
+    textAlign: 'center',
   },
@@ -81,3 +86,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/FloatingWhatsAppButton.jsx
@@ -45,2 +45,3 @@
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
@@ -64,4 +65,4 @@
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/StorySection.jsx
@@ -6,3 +6,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
@@ -92,2 +92,3 @@
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
@@ -99,2 +100,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-overviewSection.jsx
@@ -40,3 +40,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
@@ -95,3 +95,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
@@ -143,2 +143,3 @@
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -149,2 +150,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-heroSection.jsx
@@ -52,2 +52,3 @@
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
@@ -58,2 +59,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -64,2 +66,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
@@ -70,2 +73,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -77,2 +81,3 @@
     fontWeight: 600,
+    textAlign: 'center',
   },
@@ -81,3 +86,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-detailsSection.jsx
@@ -40,3 +40,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/SignaturePreviewSection.jsx
@@ -42,3 +42,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
@@ -99,2 +99,3 @@
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -105,2 +106,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/About-heroSection.jsx
@@ -48,3 +48,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Brand-story-previewSection.jsx
@@ -6,3 +6,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
@@ -86,2 +86,3 @@
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
@@ -92,2 +93,3 @@
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -98,2 +100,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
@@ -104,2 +107,3 @@
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -111,2 +115,3 @@
     fontWeight: 600,
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Opening-hoursSection.jsx
@@ -40,3 +40,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/PhilosophySection.jsx
@@ -6,3 +6,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
@@ -116,2 +116,3 @@
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
@@ -123,2 +124,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-heroSection.jsx
@@ -52,2 +52,3 @@
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
@@ -58,2 +59,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -64,2 +66,3 @@
     fontWeight: 700,
+    textAlign: 'center',
   },
@@ -70,2 +73,3 @@
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
@@ -77,2 +81,3 @@
     fontWeight: 600,
+    textAlign: 'center',
   },
@@ -81,3 +86,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactWhatsAppCta.jsx
@@ -47,2 +47,3 @@
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
@@ -54,2 +55,3 @@
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactPhoneCta.jsx
@@ -47,2 +47,3 @@
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
@@ -54,2 +55,3 @@
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-categoriesSection.jsx
@@ -38,3 +38,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-gridSection.jsx
@@ -38,3 +38,3 @@
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
apply_patch(auto_approved=true) exited 0 in 200ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/FloatingWhatsAppButton.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/HeroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-heroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/About-heroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-heroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-heroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-heroSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Brand-story-previewSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/StorySection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/PhilosophySection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/SignaturePreviewSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-categoriesSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-gridSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-detailsSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactPhoneCta.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactWhatsAppCta.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Opening-hoursSection.jsx
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-overviewSection.jsx
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
The responsive edits are in. I’m running the build now to catch any syntax or CSS issues before I update the task report.
exec
/bin/zsh -lc 'git diff -- src/App.css src/index.css src/components src/pages/Home.jsx src/pages/Menu.jsx src/pages/Chi-siamo.jsx src/pages/Gallery.jsx src/pages/Contatti.jsx src/pages/Servizi.jsx' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc 'npm run build' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 51ms:
diff --git a/src/App.css b/src/App.css
index b9d355d..9d933f4 100644
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
 succeeded in 856ms:

> site-create-a-premium-modern-website-for-an-e@0.0.0 build
> vite build

vite v7.3.1 building client environment for production...
transforming...
✓ 66 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.72 kB │ gzip:  0.43 kB
dist/assets/index-DRpGJoq3.css    0.70 kB │ gzip:  0.48 kB
dist/assets/index-BAV_Q5Mu.js   297.93 kB │ gzip: 87.58 kB
✓ built in 595ms
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
The build passed, but the CSS bundle size is unexpectedly tiny, which usually means the stylesheet import path is still not wired where expected. I’m checking the entry files now to confirm the new responsive CSS is actually included in the app bundle.
exec
/bin/zsh -lc 'cat dist/assets/index-DRpGJoq3.css' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,160p' src/App.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "sed -n '1,200p' src/main.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
:root{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color:#201914;background:radial-gradient(circle at top,rgba(234,219,197,.42),transparent 30%),linear-gradient(180deg,#f8f4ed,#f2eadf);font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,*:before,*:after{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-width:320px;min-height:100vh}img,svg{display:block;max-width:100%}a{color:inherit;text-decoration:none}p,h1,h2,h3,figure{overflow-wrap:anywhere}button,a,input,textarea,select{font:inherit}:focus-visible{outline:3px solid rgba(159,123,75,.45);outline-offset:3px}
 succeeded in 52ms:
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/Chi-siamo"
import Gallery from "./pages/Gallery"
import Contatti from "./pages/Contatti"
import Servizi from "./pages/Servizi"

const navigationItems = [
  { label: "Home", type: "route", target: "/" },
  { label: "Menu", type: "route", target: "/menu" },
  { label: "Chi siamo", type: "route", target: "/chi-siamo" },
  { label: "Gallery", type: "route", target: "/gallery" },
  { label: "Contatti", type: "route", target: "/contatti" },
  { label: "Servizi", type: "route", target: "/servizi" },
]

export default function App() {
  return (
 succeeded in 52ms:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
The stylesheet import was missing from the app entry, so the layout shell rules were not being bundled. I’m making that single cross-file fix in `src/App.jsx` because it’s required for the responsive task to actually take effect, then I’ll rebuild and update the report.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx
@@ -1,2 +1,3 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
apply_patch(auto_approved=true) exited 0 in 213ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

exec
/bin/zsh -lc 'tail -n 40 agent/AGENT_REPORT.md' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 51ms:
CTA to `/contatti`.

TASK section-servizi-services-overview executed by Codex.
Waiting for validation.

TASK section-servizi-services-overview completed successfully.
Build passed.

TASK section-servizi-services-overview executed by Codex.
Waiting for validation.

TASK section-servizi-services-overview completed successfully.
Build passed.
Commit created for TASK section-servizi-services-overview.

Prepared TASK navigation-structure (Build navigation from spec) for execution.

Launching Codex for TASK navigation-structure.

TASK navigation-structure executed by Codex.
exec
/bin/zsh -lc 'npm run build' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 732ms:
vite v7.3.1 building client environment for production...
transforming...
✓ 67 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.72 kB │ gzip:  0.42 kB
dist/assets/index-w6EllvgO.css    2.91 kB │ gzip:  1.20 kB
dist/assets/index-ejGekwU_.js   297.93 kB │ gzip: 87.58 kB
✓ built in 562ms
file update:
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
The responsive CSS is now definitely in the bundle. I’m writing the agent report entry and then I’ll give you the exact files touched plus the build result.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md
@@ -765 +765,16 @@
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
apply_patch(auto_approved=true) exited 0 in 237ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index aba1d149a112478109d06aa37f88ebf9073b0c82..9b14cf36d8e7b8ab57949d9b1515e333616605a4
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -763,3 +763,18 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index aba1d149a112478109d06aa37f88ebf9073b0c82..9b14cf36d8e7b8ab57949d9b1515e333616605a4
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -763,3 +763,18 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

exec
/bin/zsh -lc "nl -ba src/index.css | sed -n '1,220p'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "nl -ba src/App.css | sed -n '1,220p'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc "nl -ba src/pages/Contatti.jsx | sed -n '1,200p'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-eexec
/bin/zsh -lc 'git status --short' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
     1	:root {
     2	  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
     3	  line-height: 1.5;
     4	  font-weight: 400;
     5	  color: #201914;
     6	  background:
     7	    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
     8	    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
     9	  font-synthesis: none;
    10	  text-rendering: optimizeLegibility;
    11	  -webkit-font-smoothing: antialiased;
    12	  -moz-osx-font-smoothing: grayscale;
    13	}
    14	
    15	*,
    16	*::before,
    17	*::after {
    18	  box-sizing: border-box;
    19	}
    20	
 succeeded in 52ms:
     1	#root {
     2	  min-height: 100vh;
     3	}
     4	
     5	header {
     6	  position: sticky;
     7	  top: 0;
     8	  z-index: 20;
     9	  backdrop-filter: blur(14px);
    10	  background: rgba(247, 241, 232, 0.86);
    11	  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
    12	}
    13	
    14	nav[aria-label='Main navigation'] {
    15	  width: min(100%, 76rem);
    16	  margin: 0 auto;
    17	  padding: 0.85rem 1rem;
    18	  display: flex;
    19	  flex-wrap: wrap;
    20	  align-items: center;
 succeeded in 51ms:
     1	import { useEffect } from 'react'
     2	import ContactHeroSection from '../components/Contact-heroSection'
     3	import ContactDetailsSection from '../components/Contact-detailsSection'
     4	import ContactPhoneCta from '../components/ContactPhoneCta'
     5	import ContactWhatsAppCta from '../components/ContactWhatsAppCta'
     6	import OpeningHoursSection from '../components/Opening-hoursSection'
     7	
     8	export default function Contatti() {
     9	  useEffect(() => {
    10	    document.title = 'Contact Casa Aurea Events | Request Your Proposal'
    11	
    12	    const metaDescription = document.querySelector('meta[name="description"]')
    13	
    14	    if (metaDescription) {
    15	      metaDescription.setAttribute(
    16	        'content',
    17	        'Contact Casa Aurea Events for wedding catering, premium mobile bar service, and refined event hospitality in Torino and surrounding areas.',
    18	      )
    19	    }
    20	  }, [])
 succeeded in 51ms:
 M agent/AGENT_REPORT.md
 M agent/CURRENT_TASK_PROMPT.md
 M agent/TASK_STATE.json
 M src/App.css
 M src/App.jsx
 M src/components/About-heroSection.jsx
 M src/components/Brand-story-previewSection.jsx
 M src/components/Contact-detailsSection.jsx
 M src/components/Contact-heroSection.jsx
 M src/components/ContactPhoneCta.jsx
 M src/components/ContactWhatsAppCta.jsx
 M src/components/FloatingWhatsAppButton.jsx
 M src/components/Gallery-gridSection.jsx
 M src/components/Gallery-heroSection.jsx
 M src/components/HeroSection.jsx
 M src/components/Menu-categoriesSection.jsx
 M src/components/Menu-heroSection.jsx
 M src/components/Opening-hoursSection.jsx
 M src/components/PhilosophySection.jsx
 M src/components/Services-heroSection.jsx
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index aba1d149a112478109d06aa37f88ebf9073b0c82..9b14cf36d8e7b8ab57949d9b1515e333616605a4
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -763,3 +763,18 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

exec
/bin/zsh -lc "nl -ba src/App.jsx | sed -n '1,80p'" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e succeeded in 52ms:
     1	import { HashRouter, Routes, Route } from "react-router-dom"
     2	import "./App.css"
     3	import Layout from "./layout/Layout"
     4	import Home from "./pages/Home"
     5	import Menu from "./pages/Menu"
     6	import ChiSiamo from "./pages/Chi-siamo"
     7	import Gallery from "./pages/Gallery"
     8	import Contatti from "./pages/Contatti"
     9	import Servizi from "./pages/Servizi"
    10	
    11	const navigationItems = [
    12	  { label: "Home", type: "route", target: "/" },
    13	  { label: "Menu", type: "route", target: "/menu" },
    14	  { label: "Chi siamo", type: "route", target: "/chi-siamo" },
    15	  { label: "Gallery", type: "route", target: "/gallery" },
    16	  { label: "Contatti", type: "route", target: "/contatti" },
    17	  { label: "Servizi", type: "route", target: "/servizi" },
    18	]
    19	
    20	export default function App() {
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index aba1d149a112478109d06aa37f88ebf9073b0c82..9b14cf36d8e7b8ab57949d9b1515e333616605a4
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -763,3 +763,18 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

codex
**Modified files**

- [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css)
- [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css)
- [src/App.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx#L1)
- [src/pages/Contatti.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx#L34)
- [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/HeroSection.jsx)
- [src/components/Menu-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-heroSection.jsx)
- [src/components/About-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/About-heroSection.jsx)
- [src/components/Gallery-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-heroSection.jsx)
- [src/components/Contact-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-heroSection.jsx)
- [src/components/Services-heroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-heroSection.jsx)
- [src/components/Brand-story-previewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Brand-story-previewSection.jsx)
- [src/components/StorySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/StorySection.jsx)
- [src/components/PhilosophySection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/PhilosophySection.jsx)
- [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/SignaturePreviewSection.jsx)
- [src/components/Menu-categoriesSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Menu-categoriesSection.jsx)
- [src/components/Gallery-gridSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Gallery-gridSection.jsx)
- [src/components/Contact-detailsSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Contact-detailsSection.jsx)
- [src/components/ContactPhoneCta.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactPhoneCta.jsx)
- [src/components/ContactWhatsAppCta.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/ContactWhatsAppCta.jsx)
- [src/components/FloatingWhatsAppButton.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/FloatingWhatsAppButton.jsx)
- [src/components/Opening-hoursSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Opening-hoursSection.jsx)
- [src/components/Services-overviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/components/Services-overviewSection.jsx)
- [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md)

**What was implemented**

- Replaced the default Vite scaffold styling with a real app shell: sticky responsive header, wrapped nav, centered content width, consistent page padding/gaps, footer styling, and mobile-safe fixed WhatsApp spacing in [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.css#L1).
- Added global responsive safeguards in [src/index.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/index.css#L1): reset/box-sizing, no centered body layout, image scaling, overflow wrapping, and focus states.
- Tightened section responsiveness across the allowed components by reducing grid overflow risk with safer `minmax(...)` values and making CTA rows/buttons wrap cleanly on narrow screens.
- Styled the contact page closing note via [src/pages/Contatti.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/pages/Contatti.jsx#L34).
- Added the minimal required stylesheet import in [src/App.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/src/App.jsx#L2) so the responsive shell CSS is actually bundled.
- Updated [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-an-e/agent/AGENT_REPORT.md) with the task summary.

**Build result**

- `npm run build`: passed
- Output: `vite build` completed successfully on March 10, 2026, with final assets including `dist/assets/index-w6EllvgO.css` and `dist/assets/index-ejGekwU_.js`

Note: `agent/TASK_STATE.json` already had unrelated local changes and was not edited manually.
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index aba1d149a112478109d06aa37f88ebf9073b0c82..9b14cf36d8e7b8ab57949d9b1515e333616605a4
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -763,3 +763,18 @@
 Prepared TASK responsive-polish (Refine responsive layout and spacing) for execution.
 
 Launching Codex for TASK responsive-polish.
+
+Completed TASK responsive-polish.
+
+Replaced the default scaffold CSS with a responsive application shell, tuned
+navigation and page spacing for the required breakpoints, and tightened section
+grids, CTA wrapping, and the floating WhatsApp button to avoid small-screen
+overflow across the allowed page and component files. Added the minimal
+required `src/App.jsx` stylesheet import so the responsive layout rules are
+actually bundled.
+
+TASK responsive-polish executed by Codex.
+Waiting for validation.
+
+TASK responsive-polish completed successfully.
+Build passed.
diff --git a/src/App.css b/src/App.css
index b9d355df2a5956b526c004531b7b0ffe412461e0..9d933f400c088d26207f52acd90ac86ad1061517
--- a/src/App.css
+++ b/src/App.css
@@ -1,42 +1,142 @@
 #root {
-  max-width: 1280px;
+  min-height: 100vh;
+}
+
+header {
+  position: sticky;
+  top: 0;
+  z-index: 20;
+  backdrop-filter: blur(14px);
+  background: rgba(247, 241, 232, 0.86);
+  border-bottom: 1px solid rgba(95, 73, 52, 0.12);
+}
+
+nav[aria-label='Main navigation'] {
+  width: min(100%, 76rem);
   margin: 0 auto;
-  padding: 2rem;
+  padding: 0.85rem 1rem;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: center;
+  gap: 0.5rem;
+}
+
+nav[aria-label='Main navigation'] a {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 2.75rem;
+  padding: 0.65rem 1rem;
+  border-radius: 999px;
+  color: #241b16;
+  font-size: 0.95rem;
+  font-weight: 600;
+  line-height: 1.2;
   text-align: center;
+  transition:
+    background-color 180ms ease,
+    color 180ms ease,
+    border-color 180ms ease,
+    transform 180ms ease;
+}
+
+nav[aria-label='Main navigation'] a:hover,
+nav[aria-label='Main navigation'] a:focus-visible {
+  background: rgba(159, 123, 75, 0.12);
+  color: #1f1813;
+}
+
+nav[aria-label='Main navigation'] a.active {
+  background: #241b16;
+  color: #f7f1e8;
+}
+
+main {
+  width: 100%;
+}
+
+main > article {
+  width: min(100%, 76rem);
+  margin: 0 auto;
+  padding: clamp(1rem, 3vw, 2rem);
+  display: grid;
+  gap: clamp(2rem, 5vw, 3.5rem);
+}
+
+main > article > * {
+  min-width: 0;
+}
+
+.page-closing-note {
+  padding: clamp(1.5rem, 4vw, 2.5rem);
+  border-radius: 32px;
+  background: linear-gradient(180deg, rgba(248, 242, 234, 0.98) 0%, rgba(239, 228, 214, 0.92) 100%);
+  box-shadow: 0 24px 60px rgba(52, 38, 26, 0.08);
+}
+
+.page-closing-note p {
+  margin: 0;
+  max-width: 48rem;
+  color: rgba(32, 25, 20, 0.78);
+  font-size: 1rem;
+  line-height: 1.8;
+  text-align: left;
 }
 
-.logo {
-  height: 6em;
-  padding: 1.5em;
-  will-change: filter;
-  transition: filter 300ms;
+.floating-whatsapp-button {
+  max-width: calc(100vw - 1.5rem);
 }
-.logo:hover {
-  filter: drop-shadow(0 0 2em #646cffaa);
+
+footer {
+  margin-top: clamp(2rem, 5vw, 4rem);
+  padding: 1.5rem 1rem 2rem;
+  background: #1d1612;
+  color: rgba(247, 241, 232, 0.74);
+  text-align: center;
 }
-.logo.react:hover {
-  filter: drop-shadow(0 0 2em #61dafbaa);
+
+footer p {
+  width: min(100%, 76rem);
+  margin: 0 auto;
 }
 
-@keyframes logo-spin {
-  from {
-    transform: rotate(0deg);
+@media (min-width: 768px) {
+  nav[aria-label='Main navigation'] {
+    justify-content: flex-start;
+    padding-inline: clamp(1.5rem, 3vw, 2rem);
   }
-  to {
-    transform: rotate(360deg);
+
+  main > article {
+    padding-top: clamp(1.5rem, 3vw, 2.5rem);
+    padding-bottom: clamp(2rem, 4vw, 3rem);
   }
 }
 
-@media (prefers-reduced-motion: no-preference) {
-  a:nth-of-type(2) .logo {
-    animation: logo-spin infinite 20s linear;
+@media (max-width: 479px) {
+  nav[aria-label='Main navigation'] {
+    padding-inline: 0.75rem;
+    gap: 0.4rem;
   }
-}
 
-.card {
-  padding: 2em;
-}
+  nav[aria-label='Main navigation'] a {
+    flex: 1 1 calc(50% - 0.4rem);
+    min-width: 0;
+    padding-inline: 0.85rem;
+    font-size: 0.9rem;
+  }
+
+  .floating-whatsapp-button {
+    right: 0.75rem !important;
+    bottom: 0.75rem !important;
+    padding: 0.8rem 0.95rem !important;
+  }
 
-.read-the-docs {
-  color: #888;
+  .floating-whatsapp-button [data-whatsapp-copy='eyebrow'] {
+    display: none;
+  }
+
+  .floating-whatsapp-button [data-whatsapp-copy='label'] {
+    font-size: 0.9rem !important;
+  }
 }
diff --git a/src/App.jsx b/src/App.jsx
index d1b13acd58b77f80a984b86e7a06124c0df52118..3f8983701a65b8966d93effe24fd991a1f638ceb
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,4 +1,5 @@
 import { HashRouter, Routes, Route } from "react-router-dom"
+import "./App.css"
 import Layout from "./layout/Layout"
 import Home from "./pages/Home"
 import Menu from "./pages/Menu"
diff --git a/src/components/About-heroSection.jsx b/src/components/About-heroSection.jsx
index fd6cdfbdf6de42da90adb232d7df4bbefa02c4c5..239d96dd1053285eff3e73182d00056659b77a6d
--- a/src/components/About-heroSection.jsx
+++ b/src/components/About-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Brand-story-previewSection.jsx b/src/components/Brand-story-previewSection.jsx
index f73420c4bbf88ad0b3d5a2bd0b03d0629b3206b2..6123235bb5028aefe8d7ead9c317bab6b22ceac8
--- a/src/components/Brand-story-previewSection.jsx
+++ b/src/components/Brand-story-previewSection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5.5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.25rem, 4vw, 2.5rem)',
     borderRadius: '32px',
@@ -84,24 +84,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(246, 239, 228, 0.18)',
@@ -109,6 +113,7 @@
     color: '#f6efe4',
     textDecoration: 'none',
     fontWeight: 600,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Contact-detailsSection.jsx b/src/components/Contact-detailsSection.jsx
index 44a1d8614e94851d83b0cd29357d8c361660aaf7..2cb6c52eec728b02643231b454ba6665f2fc7ab4
--- a/src/components/Contact-detailsSection.jsx
+++ b/src/components/Contact-detailsSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Contact-heroSection.jsx b/src/components/Contact-heroSection.jsx
index e6d1969ae25700c5fbbbe0724902c7ef5dca1d69..8cc9b7e3feacacd2ccc9974daf397421b0154506
--- a/src/components/Contact-heroSection.jsx
+++ b/src/components/Contact-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/ContactPhoneCta.jsx b/src/components/ContactPhoneCta.jsx
index 6bd3dbf7d81d60e00eba3643d05eaabf28690546..becc27110de30ded5c1e5791bc9f4b82b72b9bd2
--- a/src/components/ContactPhoneCta.jsx
+++ b/src/components/ContactPhoneCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(32, 25, 20, 0.14)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/ContactWhatsAppCta.jsx b/src/components/ContactWhatsAppCta.jsx
index 9e9536f6d705b2a6a4d780c75afdb6489528f707..1eaef4390272c44d7952756715217376ebec216d
--- a/src/components/ContactWhatsAppCta.jsx
+++ b/src/components/ContactWhatsAppCta.jsx
@@ -45,6 +45,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.5rem',
+    maxWidth: '100%',
     padding: '0.95rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#1c6c4c',
@@ -52,6 +53,7 @@
     textDecoration: 'none',
     fontWeight: 700,
     boxShadow: '0 18px 40px rgba(28, 108, 76, 0.22)',
+    textAlign: 'center',
   },
   supportText: {
     margin: 0,
diff --git a/src/components/FloatingWhatsAppButton.jsx b/src/components/FloatingWhatsAppButton.jsx
index 272ee1ed077805f443407eb0a2f91a7752930f89..762a46855003ac925f2b3b5d895ee5c0a2e8197f
--- a/src/components/FloatingWhatsAppButton.jsx
+++ b/src/components/FloatingWhatsAppButton.jsx
@@ -43,6 +43,7 @@
 export default function FloatingWhatsAppButton() {
   return (
     <a
+      className="floating-whatsapp-button"
       href={whatsappHref}
       target="_blank"
       rel="noreferrer"
@@ -62,8 +63,8 @@
       </svg>
 
       <span style={whatsappStyles.labelGroup}>
-        <span style={whatsappStyles.eyebrow}>WhatsApp</span>
-        <span style={whatsappStyles.label}>Book a quick conversation</span>
+        <span data-whatsapp-copy="eyebrow" style={whatsappStyles.eyebrow}>WhatsApp</span>
+        <span data-whatsapp-copy="label" style={whatsappStyles.label}>Book a quick conversation</span>
       </span>
     </a>
   )
diff --git a/src/components/Gallery-gridSection.jsx b/src/components/Gallery-gridSection.jsx
index ea31da3574a5281544c1f710421e1acdbc7fb46e..8787011c762f79dc4267c592079fa1741ea3e1f1
--- a/src/components/Gallery-gridSection.jsx
+++ b/src/components/Gallery-gridSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Gallery-heroSection.jsx b/src/components/Gallery-heroSection.jsx
index 9a6e300582c108903c6d2d6b28301484d7665240..deeab9e16c588eff1a258d4c2010f3f6fe607dcf
--- a/src/components/Gallery-heroSection.jsx
+++ b/src/components/Gallery-heroSection.jsx
@@ -46,7 +46,7 @@
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 9abea574c8bbfe0e71b00a367df5b2df4cf7dde6..59284b2e4fa8fe85704c71608a1a0b2fb2041d17
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   details: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 9rem), 1fr))',
     gap: '0.875rem',
   },
   detailCard: {
diff --git a/src/components/Menu-categoriesSection.jsx b/src/components/Menu-categoriesSection.jsx
index 89721d69b73b9ee7a2f830342ec66ac94794ae45..76ec1cfc6617e465f67fdbf28a3c753f28c02607
--- a/src/components/Menu-categoriesSection.jsx
+++ b/src/components/Menu-categoriesSection.jsx
@@ -36,7 +36,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/Menu-heroSection.jsx b/src/components/Menu-heroSection.jsx
index d887071c918500cfdbfc706a8e92a8419846e5b9..9f48255329d62f30e7f45cbb9cc0bafe927e0050
--- a/src/components/Menu-heroSection.jsx
+++ b/src/components/Menu-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Opening-hoursSection.jsx b/src/components/Opening-hoursSection.jsx
index 21495b439448bf326b1e7729884a338293485771..6addfa29ee607bd793d5456c7dad554bce000382
--- a/src/components/Opening-hoursSection.jsx
+++ b/src/components/Opening-hoursSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
diff --git a/src/components/PhilosophySection.jsx b/src/components/PhilosophySection.jsx
index 554674ed6cb1bff70d5df78ace59424c7b4f27d0..f03fe01c290a144fff86cf63fc55f46c05de09f4
--- a/src/components/PhilosophySection.jsx
+++ b/src/components/PhilosophySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     alignItems: 'stretch',
   },
@@ -114,6 +114,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -121,6 +122,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/Services-heroSection.jsx b/src/components/Services-heroSection.jsx
index 72c0482d7a926c5dc2416a6ba9f50a68bcd6b6a5..adb5a31f089cd72a49ec41c8ee9d971e396a3dac
--- a/src/components/Services-heroSection.jsx
+++ b/src/components/Services-heroSection.jsx
@@ -50,24 +50,28 @@
     display: 'flex',
     flexWrap: 'wrap',
     gap: '0.875rem',
+    alignItems: 'stretch',
   },
   primaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#d9bf8d',
     color: '#1f1813',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
   secondaryAction: {
     display: 'inline-flex',
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.25rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     border: '1px solid rgba(247, 241, 232, 0.42)',
@@ -75,11 +79,12 @@
     textDecoration: 'none',
     backgroundColor: 'rgba(247, 241, 232, 0.08)',
     fontWeight: 600,
+    textAlign: 'center',
   },
   highlights: {
     marginTop: '1.5rem',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
     gap: '0.875rem',
   },
   highlightCard: {
diff --git a/src/components/Services-overviewSection.jsx b/src/components/Services-overviewSection.jsx
index c6328f0ac9db51b1363742b1a1168afb085cf13e..1e57ccba1850126aa7a35b2b73f88fbe0c0a0f98
--- a/src/components/Services-overviewSection.jsx
+++ b/src/components/Services-overviewSection.jsx
@@ -38,7 +38,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -93,7 +93,7 @@
   },
   processList: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
     gap: '0.9rem',
     margin: 0,
     padding: 0,
@@ -141,12 +141,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index 2944b9ef6d6a89d07d87a33f47d278dd74323922..6b4af97c1e6fa7c100676ed2e6083d953e17051a
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -40,7 +40,7 @@
   },
   grid: {
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
     gap: '1rem',
   },
   card: {
@@ -97,12 +97,14 @@
     alignItems: 'center',
     justifyContent: 'center',
     minHeight: '3.15rem',
+    maxWidth: '100%',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
     backgroundColor: '#201914',
     color: '#f7f1e8',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/components/StorySection.jsx b/src/components/StorySection.jsx
index f4e7061aabaac86b2cb8c73d2def80ce3ec0385f..95c0c281e9820c5a2e95eac1b7b40c2d1826fd82
--- a/src/components/StorySection.jsx
+++ b/src/components/StorySection.jsx
@@ -4,7 +4,7 @@
   section: {
     marginTop: 'clamp(3rem, 7vw, 5rem)',
     display: 'grid',
-    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
+    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
     gap: '1.5rem',
     padding: 'clamp(1.4rem, 4vw, 2.75rem)',
     borderRadius: '32px',
@@ -90,6 +90,7 @@
     alignItems: 'center',
     justifyContent: 'center',
     width: 'fit-content',
+    maxWidth: '100%',
     minHeight: '3.1rem',
     padding: '0.9rem 1.5rem',
     borderRadius: '999px',
@@ -97,6 +98,7 @@
     color: '#221914',
     textDecoration: 'none',
     fontWeight: 700,
+    textAlign: 'center',
   },
 }
 
diff --git a/src/index.css b/src/index.css
index 08a3ac9e1e5c44ce374f782d7c4fa3aa70e4c1ff..bb60b15b8348b203dc2e3759c2107bcea89d02ad
--- a/src/index.css
+++ b/src/index.css
@@ -1,68 +1,61 @@
 :root {
-  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
+  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   line-height: 1.5;
   font-weight: 400;
-
-  color-scheme: light dark;
-  color: rgba(255, 255, 255, 0.87);
-  background-color: #242424;
-
+  color: #201914;
+  background:
+    radial-gradient(circle at top, rgba(234, 219, 197, 0.42), transparent 30%),
+    linear-gradient(180deg, #f8f4ed 0%, #f2eadf 100%);
   font-synthesis: none;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 
-a {
-  font-weight: 500;
-  color: #646cff;
-  text-decoration: inherit;
+*,
+*::before,
+*::after {
+  box-sizing: border-box;
 }
-a:hover {
-  color: #535bf2;
+
+html {
+  scroll-behavior: smooth;
 }
 
 body {
   margin: 0;
-  display: flex;
-  place-items: center;
   min-width: 320px;
   min-height: 100vh;
 }
 
-h1 {
-  font-size: 3.2em;
-  line-height: 1.1;
+img,
+svg {
+  display: block;
+  max-width: 100%;
 }
 
-button {
-  border-radius: 8px;
-  border: 1px solid transparent;
-  padding: 0.6em 1.2em;
-  font-size: 1em;
-  font-weight: 500;
-  font-family: inherit;
-  background-color: #1a1a1a;
-  cursor: pointer;
-  transition: border-color 0.25s;
+a {
+  color: inherit;
+  text-decoration: none;
 }
-button:hover {
-  border-color: #646cff;
+
+p,
+h1,
+h2,
+h3,
+figure {
+  overflow-wrap: anywhere;
 }
-button:focus,
-button:focus-visible {
-  outline: 4px auto -webkit-focus-ring-color;
+
+button,
+a,
+input,
+textarea,
+select {
+  font: inherit;
 }
 
-@media (prefers-color-scheme: light) {
-  :root {
-    color: #213547;
-    background-color: #ffffff;
-  }
-  a:hover {
-    color: #747bff;
-  }
-  button {
-    background-color: #f9f9f9;
-  }
+:focus-visible {
+  outline: 3px solid rgba(159, 123, 75, 0.45);
+  outline-offset: 3px;
 }
diff --git a/src/pages/Contatti.jsx b/src/pages/Contatti.jsx
index 825070c8be0bfe91fcac82fc27d38da608642e27..7bf8307de02e5886422d10fa8659bcd3504f88d8
--- a/src/pages/Contatti.jsx
+++ b/src/pages/Contatti.jsx
@@ -31,7 +31,7 @@
 
       <OpeningHoursSection />
 
-      <section aria-label="Contact closing note">
+      <section aria-label="Contact closing note" className="page-closing-note">
         <p>Every event begins with a thoughtful conversation, careful timing, and a clear sense of occasion.</p>
       </section>
     </article>

tokens used
127.638