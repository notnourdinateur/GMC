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

### 1. Minimalist "X" (Twitter) Theme
To achieve a modern, premium aesthetic, the design utilizes a strict dark mode palette inspired by "X":
*   **Background:** True black (`#000000`) for the base and a dark surface color (`#16181c`) for product cards to create depth without relying on borders.
*   **Accent Color:** The official "X Blue" (`#1d9bf0`) is used for the primary call-to-action buttons to draw the user's eye and make the page feel dynamic.

### 2. Framework & Responsiveness
*   **Bootstrap 5:** The Bootstrap grid system (`container`, `row`, `col-lg-3`, `col-md-6`) was heavily utilized to effortlessly manage the layout across breakpoints.
*   **Mobile-First Adaptability:** The 4 product cards sit side-by-side on desktop but gracefully stack vertically on mobile devices, preventing any horizontal scrolling and ensuring a smooth user experience. The navigation also collapses into a standard hamburger menu.

### 3. Glassmorphism & UI Refinements
*   **Navigation Bar:** A glassmorphism effect (`backdrop-filter: blur(20px)`) is applied to the fixed navbar when scrolling, ensuring the text remains legible over the changing content behind it.
*   **Proportional Interactions:** Product cards contain hover interactions that reveal quick-action buttons (wishlist/view). These icons are centrally aligned using CSS Flexbox with fixed `45x45px` dimensions to ensure they remain perfectly circular and proportional on all screen sizes.
*   **Clean Typography:** The Google Font "Outfit" was chosen for its geometric, highly readable characteristics, removing the need for busy "vibe coded" gradients.