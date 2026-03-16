# Waveform Animation - Asset Reference

The intro waveform is built from these layers (bottom to top):

## 1. Background Layer
- **`intro-animation-wave-bg.png`** / **`intro-animation-wave-bg@2x.png`** (overridden by CSS)
- **CSS override applied:** Replaced with `linear-gradient(180deg, #f5f5f5, #e8e8e8, #d0d0d0)` for gray B&W theme
- Original PNGs no longer used; remove override in styles.scss to restore image background

## 2. Bars Layer
- **`intro-animation-bars-bg.png`** / **`intro-animation-bars-bg@2x.png`**
- The vertical bar/equalizer pattern
- **CSS override applied:** `filter: grayscale(1)` and `opacity: 0.6` for B&W theme
- **Optional:** Replace with native grayscale image for crisper result

## 3. SVG Wave Paths (CSS-controlled ✓)
- Four horizontal wavy lines — stroke color set via CSS (currently #000000)
- No image updates needed

## 4. Dot Circles (wave-1 & wave-2)
- **wave-1 (heart/thumb icons):** `intro-animation-orange-dot.png` / `@2x` — orange/yellow gradient
- **wave-2 (music icons):** `intro-animation-purple-dot.png` / `@2x` — purple gradient
- **SVG versions exist:** `intro-animation-orange-dot.svg`, `intro-animation-purple-dot.svg`
- **CSS override applied:** Now using solid colors (#000000, rgb(127, 106, 214)) instead of images

## 5. Dot Icons (inside circles)
- **`intro-animation-heart.svg`** — heart icon (has pink/yellow fill)
- **`intro-animation-thumb.svg`** — thumbs-up icon
- **`intro-animation-music-1.svg`**, **`intro-animation-music-2.svg`**, **`intro-animation-music-3.svg`** — musical note icons
- **To match palette:** Update fills to white (#ffffff) for icons on dark circles

## 6. Scrubber Overlay (CSS-controlled ✓)
- Semi-transparent overlay — already adjusted for white background
