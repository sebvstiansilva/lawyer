---
name: Lex Chilean Juris
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545e76'
  primary: '#051125'
  on-primary: '#ffffff'
  primary-container: '#1b263b'
  on-primary-container: '#828da7'
  inverse-primary: '#bbc6e2'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#001224'
  on-tertiary: '#ffffff'
  tertiary-container: '#0a2742'
  on-tertiary-container: '#768fae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e2'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3c475d'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#afc9ea'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#2f4865'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is engineered to evoke a sense of "Solemne Authority"—a reflection of the Chilean legal tradition. It targets a high-stakes corporate and labor clientele who value precision, heritage, and the weight of law. 

The aesthetic style is **Corporate / Modern** with a strong leaning toward **Minimalism** and **High-Contrast** elements. It prioritizes clarity and gravitas, using white space as a tool for legibility and "mental breathing room" during complex legal reviews. The emotional response should be one of absolute reliability, calm under pressure, and intellectual distinction.

## Colors
This design system utilizes a palette that mirrors the architectural dignity of Chilean judicial institutions.

- **Primary (Deep Navy Blue):** Used for main navigation, primary actions, and solid backgrounds. It represents the stability of the law.
- **Secondary (Rich Gold):** Used sparingly as an accent color for highlights, active states, and small ornamental details. It signifies success and high-tier service.
- **Tertiary (Charcoal Gray):** Employed for secondary text, metadata, and borders.
- **Neutral (Off-White):** The canvas color. It provides a warmer, more sophisticated backdrop than pure white, reducing eye strain for long-form legal reading.
- **Feedback:** Success (Emerald), Error (Crimson), and Warning (Amber) should be used in muted, sophisticated tones to maintain the professional atmosphere.

## Typography
The typographic strategy balances the classic literary heritage of the *Código del Trabajo* with modern digital efficiency.

- **Headlines (EB Garamond):** Used for all major page headers and section titles. The high x-height and elegant serifs provide a scholarly, authoritative tone. Use Medium or SemiBold weights to ensure presence against the Off-White background.
- **Body & Labels (Inter):** A neutral, systematic sans-serif designed for legibility in dense legal text. 
- **Application:** Use `display-lg` for hero sections. Legal case titles should use `headline-md`. All functional text, labels, and form inputs must use `Inter` for clarity.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a prestigious, editorial feel. 

- **Desktop:** 12-column grid, 1200px max-width, centered. 
- **Tablet:** 8-column grid with fluid behavior.
- **Mobile:** 4-column grid with 16px side margins.
- **Spacing Rhythm:** Based on an 8px scale. Use generous padding (48px+) between major sections to emphasize exclusivity. Legal documents should be presented with wide "margins" (padding) to mimic the experience of reading a physical brief.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** rather than heavy shadows. 

- **Surface Levels:** The base is Off-White. Information cards or modals use a pure White (#FFFFFF) surface to subtly lift from the background.
- **Outlines:** Use thin (1px) "Charcoal Gray" borders at 20% opacity for structure.
- **Shadows:** Only use shadows for high-priority overlays (Modals, Dropdowns). These must be "Ambient Shadows": extra-diffused, 15% opacity Deep Navy Blue, with a 20px blur and no offset, creating a soft glow rather than a harsh drop.

## Shapes
The shape language is **Soft (0.25rem)**. This choice maintains a serious, rectilinear appearance that feels "architectural" while removing the harshness of sharp 90-degree corners.

- **Standard Elements:** Buttons and Input fields use a 4px corner radius.
- **Large Elements:** Cards and containers use 8px (`rounded-lg`) to provide a subtle modern touch.
- **Accents:** Strictly no circular or pill-shaped elements unless they are status indicators.

## Components
Consistent component styling reinforces the lawyer-client trust bond.

- **Buttons:** Primary buttons are solid Deep Navy Blue with White text. Secondary buttons are Deep Navy Blue outlines with a subtle 1px border. The "Gold" accent should only be used for the hover state or a "Highlight" CTA.
- **Inputs:** Use the "Floating Label" style. The border is a thin Charcoal Gray, turning into a 2px Deep Navy Blue line on focus.
- **Cards:** White background, 1px light gray border, no shadow. Use a vertical "Gold" stripe (2px) on the left side to indicate "Featured" or "Active" legal matters.
- **Lists:** Legal bullet points should use a small Gold diamond or square instead of a standard circle.
- **Specific Components:** 
    - **Case Status Timeline:** A vertical line in Charcoal Gray with Deep Navy Blue nodes.
    - **Legal Document Viewer:** A high-contrast container with a dedicated serif typography scale for long-form reading.