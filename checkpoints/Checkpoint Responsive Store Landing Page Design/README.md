# Responsive Store Landing Page

This is the submission for the "Responsive Store Landing Page Design" checkpoint using HTML, custom CSS, and the Bootstrap 5 framework.

## 📸 Screenshots

### Desktop View
![Desktop View Placeholder](screenshots/desktop.png)

### Mobile View
![Mobile View Placeholder](screenshots/mobile.png)

---

## 🎨 Design Choices & Development Process

During the development process, the following design and technical choices were made to meet and exceed the checkpoint requirements:

### 1. Modern E-commerce Design System
To achieve a clean, highly accessible, and e-commerce-focused premium aesthetic, the design utilizes elements inspired by modern enterprise retail platforms:
*   **Backgrounds & Surfaces:** A soft contrast approach featuring a clean light grey background (`#f6f6f7`) with bright white surfaces (`#ffffff`) and layered drop shadows to create depth and hierarchy.
*   **Accent Color:** A tailored Brand Green (`#008060`) is used for primary calls-to-action, success states, and gradient highlights, providing a familiar and trustworthy shopping experience.

### 2. Framework & Responsiveness
*   **Bootstrap 5:** The Bootstrap grid system (`container`, `row`, `col-lg-3`, `col-md-6`) was heavily utilized to effortlessly manage the layout across breakpoints.
*   **Mobile-First Adaptability:** The 4 product cards sit side-by-side on desktop but gracefully stack vertically on mobile devices, preventing any horizontal scrolling and ensuring a smooth user experience. The navigation also collapses into a standard hamburger menu.

### 3. Modern UI Refinements & Glassmorphism
*   **Navigation Bar:** A dynamic glassmorphism effect (`backdrop-filter: blur(12px)`) is applied to the fixed navbar when scrolling, ensuring the text remains legible over the changing content behind it while keeping a lightweight feel.
*   **Proportional Interactions:** Product cards contain elegant hover animations that reveal fluid quick-action buttons (wishlist/view). These icons are styled perfectly circular using CSS Flexbox on a `42x42px` footprint to ensure they remain proportional on all screen sizes.
*   **Clean Typography:** The Google Font "Inter" was chosen for its exceptional readability at small sizes and professional neutrality, perfectly complementing the structured, data-clear Polaris aesthetic.