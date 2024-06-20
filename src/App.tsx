import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import IngredientInputPage from "./Pages/IngredientInputPage";
import RecipeRecommendationPage from "./Pages/RecipeRecommendationPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<IngredientInputPage />} />
        <Route path="/recommendations" element={<RecipeRecommendationPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
