# Everyday Market App - React with Vite

This is my submission for **Assignment 2: Front-End Frameworks – Everyday Market App (React 18+)**.

## Student Information

- **Name:** Olabisi Afolabi
- **Framework:** React 18+
- **Build Tool:** Vite

## Features Implemented

- ✅ **Header Component** – displays my name "Afolabi's Everyday Market" with custom images
- ✅ **ProductsPage Component** – uses `useState` and `useEffect` hooks
- ✅ **Market Service** – `loadCategories()` returns Promise with 2-second simulated delay
- ✅ **CategoryMenu Component** – uses `.map()` to render category items
- ✅ **CategoryMenuItem Component** – receives props and sends events via callbacks
- ✅ **Selected Category** – visually distinct background color when clicked
- ✅ **Console Logging** – logs selected category name to browser console

## My 5 Categories

| ID | Name |
|----|------|
| 1 | Fresh Fruits |
| 2 | Vegetables |
| 3 | Dairy Products |
| 4 | Bakery Items |
| 5 | Beverages |

## How to Run the App

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Open browser to http://localhost:5173
src/
├── components/
│   ├── common/
│   │   ├── Header.css
│   │   └── Header.jsx
│   └── market/
│       ├── services/
│       │   └── marketService.js
│       ├── ProductsPage.css
│       └── ProductsPage.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
Technologies Used
React 18+

Vite

JavaScript (ES6+)

CSS3

Testing Instructions
Run npm run dev to start the application

Navigate to http://localhost:5173

Verify header displays "Afolabi's Everyday Market"

Wait 2 seconds for categories to load

Click on any category card

Open browser console (F12) to see logged category selection

Development Server
Run npm run dev for a dev server. The app will automatically reload when you change source files.
Build
Run npm run build to build the project for production.
GitHub Repository
https://github.com/Bunbix/everyday-market-vite-final

## Key Changes Made:

| Old (Create React App) | New (Vite) |
|------------------------|------------|
| `npm start` | `npm run dev` |
| `http://localhost:3000` | `http://localhost:5173` |
| Create React App | Vite |

## To save this README:

```bash
code "C:\Users\oafol\OneDrive\Password Recovery\Desktop\GitHub-Projects\everyday-market\README.md"
