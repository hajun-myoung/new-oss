import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import IngredientInputPage from "./Pages/IngredientInputPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<IngredientInputPage />} />
        <Route path="/recipe" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
