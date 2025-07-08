import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Recipes from "./Recipes";
import RecipeForm from "./RecipeForm";
import RecipeDetail from "./RecipeDetails";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Recipes />} />
        <Route path="new" element={<RecipeForm />} />
        <Route path="recipes/:id" element={<RecipeDetail />} />
      </Route>
    </Routes>
  </Router>
);