# NovaCart — DOM Shopping Cart 🛒

Checkpoint: **Introduction to Computer Programming: Part 1 — The World of DOM**

A fully functional shopping cart built with **vanilla HTML, CSS and JavaScript**
(no build step, no framework). Open `index.html` in a browser and it just works.

## Features

| Instruction | How it's implemented |
|-------------|----------------------|
| Adjust quantity with **+ / −** | Quantity stepper per row; `−` never drops below 1 |
| **Delete** items from the cart | Trash button removes the row (with a slide-out animation) |
| **Like** items (heart changes colour) | Heart toggles pink + fills in, with a pop animation and a "liked" counter |
| **Total price** updates live | Recalculated after every quantity change and deletion |

## How it works

- Each product row stores its **unit price** in a `data-price` attribute, so the
  total is always derived from real data — not the hard-coded numbers in the HTML.
- All clicks are handled by a **single listener** on the cart container
  (**event delegation**), which keeps the code short and works for any number of items.
- `updateTotals()` recomputes every line total and the grand total; an empty-cart
  message appears automatically once the last item is removed.

## Tech / tools

- **Font Awesome** (icon toolkit) for the heart, trash, plus and minus icons.
- **Google Fonts** (Poppins) for typography.
- Plain DOM APIs: `addEventListener`, `closest`, `classList.toggle`, `dataset`.

## Files

- `index.html` — markup and pre-selected items
- `style.css` — layout, theme and animations
- `script.js` — all the cart interactivity (heavily commented)
