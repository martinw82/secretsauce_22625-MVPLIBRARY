# Technical README - Secret Sauce App

## Overview

Secret Sauce is a web application designed to help users discover, save, and manage recipes. It features a user-friendly interface, a recipe vault with search and filtering capabilities, a chat assistant ("Momma Marinade"), and a section for related products ("Momma's Pantry"). The application is built as a Minimum Viable Product (MVP) with potential for future expansion.

## Technologies Used

*   **Frontend Framework:** React (v18.3.1)
*   **Language:** TypeScript (v5.5.3)
*   **Build Tool:** Vite (v5.4.2)
*   **Styling:** Tailwind CSS (v3.4.1)
    *   Custom theme defined in `tailwind.config.js`.
    *   Uses PostCSS and Autoprefixer.
*   **Linting:** ESLint (v9.9.1) with TypeScript ESLint plugin.
*   **Package Manager:** npm (implied by `package-lock.json`)
*   **Icons:** Lucide React
*   **Animation:** `canvas-confetti` for celebrations.

## Project Structure

```
secret-sauce-app/
├── public/                 # Static assets (if any, typically handled by Vite)
├── src/
│   ├── assets/             # Images and other static assets
│   ├── components/         # React components
│   │   ├── Hero.tsx
│   │   ├── MommaChat.tsx
│   │   ├── MommasPantry.tsx
│   │   ├── Navigation.tsx
│   │   ├── RecipeDetail.tsx
│   │   ├── RecipeRoulette.tsx
│   │   ├── RecipeVault.tsx
│   │   └── UserProfile.tsx
│   ├── data/               # Static data files
│   │   ├── products.ts     # Product information
│   │   └── recipes.ts      # Recipe data
│   ├── App.tsx             # Main application component, handles routing and global state
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles (Tailwind base, components, utilities)
│   └── vite-env.d.ts       # Vite environment type definitions
├── docs/                   # Documentation files (this folder)
│   ├── tech_readme.md
│   ├── user_readme.md
│   └── roadmap_readme.md
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package-lock.json       # Exact dependency versions
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript configuration for the application
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js environment (e.g., Vite config)
└── vite.config.ts          # Vite configuration
```

## Key Components and Functionality

*   **`App.tsx`**:
    *   Manages the current view (`currentView` state) to simulate page navigation.
    *   Handles global state such as `selectedRecipe`, `searchQuery`, `selectedFilters`, `favorites`, and `completedRecipes`.
    *   Uses `useEffect` hooks to load and save `favorites` and `completedRecipes` to `localStorage`.
    *   Provides functions for toggling favorites (`toggleFavorite`), marking recipes as completed (`markRecipeCompleted`), and navigating between views (`handleNavigate`).
    *   Filters recipes based on search queries and selected filters.
*   **`Navigation.tsx`**: Displays the main navigation menu.
*   **`Hero.tsx`**: The landing page, providing an overview and entry points to different sections.
*   **`RecipeVault.tsx`**:
    *   Displays recipes in a grid or list view.
    *   Implements search functionality (`searchQuery`).
    *   Allows filtering by category, difficulty, prep time, and dietary tags (`selectedFilters`).
*   **`RecipeDetail.tsx`**: Shows detailed information for a single recipe. Allows users to mark as favorite or completed.
*   **`MommaChat.tsx`**:
    *   A chat interface with "Momma Marinade".
    *   Provides pre-defined responses and quick prompts.
    *   Includes a mock voice playback feature (console log).
    *   *Note: Voice functionality is currently mocked and mentions ElevenLabs API for future integration.*
*   **`MommasPantry.tsx`**: Displays products (e.g., sauces).
*   **`UserProfile.tsx`**: Shows lists of favorite and completed recipes.
*   **`RecipeRoulette.tsx`**: Selects and displays a random recipe.
*   **Data Management**:
    *   Recipe and product data is currently stored in `src/data/recipes.ts` and `src/data/products.ts`.
    *   User-specific data (favorites, completed recipes) is stored in `localStorage` under keys `secret-sauce-favorites` and `secret-sauce-completed`.

## Setup and Installation

1.  **Prerequisites:**
    *   Node.js (which includes npm) installed. Recommended version based on `package.json` (though not explicitly stated, typical React projects use recent LTS versions).
    *   A code editor (e.g., VS Code).

2.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd secret-sauce-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173` (or the next available port). The application will automatically reload when changes are made to the source files.

5.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code, bundles the assets, and optimizes them for production. The output will be in the `dist/` folder.

6.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run ESLint to check for code quality and style issues based on the configuration in `eslint.config.js`.

7.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This command serves the `dist/` folder, allowing you to test the production build locally.

## Configuration

*   **Vite Configuration (`vite.config.ts`):**
    *   Uses `@vitejs/plugin-react` for React support.
    *   Includes an optimization to exclude `lucide-react` from `optimizeDeps`.
*   **Tailwind CSS Configuration (`tailwind.config.js`):**
    *   Specifies content paths for purging unused styles.
    *   Extends the default theme with custom colors (primary, secondary, accent, success, warning, error), font families (sans, serif), and animations (spin-slow, bounce-gentle, pulse-gentle).
*   **TypeScript Configuration (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`):**
    *   Standard TypeScript configurations for a React project using Vite.
    *   `isolatedModules` is enabled, `jsx` is set to `react-jsx`.
*   **ESLint Configuration (`eslint.config.js`):**
    *   Configured for TypeScript and React, using recommended plugins and rules.

## Data Storage

*   **Recipe and Product Data:** Currently hardcoded in `src/data/recipes.ts` and `src/data/products.ts`. For a production application, this would typically be fetched from a backend API and database.
*   **User Preferences:** Favorites and completed recipes are stored in the browser's `localStorage`. This is suitable for a simple MVP but has limitations (data is client-side only, limited storage capacity).

## Potential Areas for Improvement (Technical Debt)

*   **No Backend/API:** All data is client-side. User data is not persistent across devices or browsers.
*   **State Management:** Uses React's built-in `useState` and prop drilling. For a larger application, a dedicated state management library (e.g., Zustand, Redux Toolkit, Jotai) might be beneficial.
*   **No User Authentication:** The application does not have user accounts. Features like saving favorites are tied to `localStorage`.
*   **Limited Error Handling:** While some components might have basic error handling (e.g., image fallbacks), comprehensive error handling (e.g., for data fetching if an API were used) is not apparent.
*   **No Unit or Integration Tests:** There are no test files or testing framework setup evident in the file structure.
*   **Accessibility (A11y):** While Tailwind CSS provides utilities for accessible design, a dedicated accessibility audit would be needed to ensure compliance.
*   **Performance:** For a small app with local data, performance is likely good. However, with larger datasets or API calls, optimizations (memoization, code splitting beyond default Vite behavior, image optimization) might be necessary.
*   **Security:** Client-side storage is not secure for sensitive data. If user accounts or more sensitive information were added, proper security measures would be critical.
*   **Chat Functionality:** The "MommaChat" feature has mock voice output and predefined responses. A real implementation would require integration with an NLP service and a Text-to-Speech API (like the mentioned ElevenLabs).

This document provides a technical overview for developers. For user instructions, please refer to `user_readme.md`. For future development ideas, see `roadmap_readme.md`.
