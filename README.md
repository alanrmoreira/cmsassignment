PROJECT SETUP GUIDE
====================

This guide explains how to run both the backend (Strapi CMS) and the frontend (React app) locally.

-------------------------------------------------------
BACKEND - STRAPI 5 (http://localhost:1337)
-------------------------------------------------------

1. Install dependencies:
   > cd backend
   > npm install

2. Start Strapi in development mode:
   > npm run dev

3. Initial setup:
   - Open http://localhost:1337/admin in your browser

4. Create example recipes (optional):
   - Use the Strapi admin panel or make a POST request with an API client (e.g., Postman).

-------------------------------------------------------
FRONTEND - REACT + VITE + MUI (http://localhost:5173)
-------------------------------------------------------

1. Install dependencies:
   > cd frontend
   > npm install

2. Start the development server:
   > npm run dev

-------------------------------------------------------
PROJECT STRUCTURE
-------------------------------------------------------

- /backend    → Strapi CMS project (Node.js based)
- /frontend   → React project (Vite + MUI)

-------------------------------------------------------