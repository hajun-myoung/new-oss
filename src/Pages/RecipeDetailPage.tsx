import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

const dummyRecipe = {
  id: 1,
  title: "Spaghetti Carbonara",
  image: "https://via.placeholder.com/600x400",
  ingredients: [
    "Spaghetti",
    "Eggs",
    "Parmesan Cheese",
    "Bacon",
    "Black Pepper",
  ],
  instructions: [
    "Boil the spaghetti.",
    "Cook the bacon until crisp.",
    "Mix eggs and parmesan.",
    "Combine spaghetti, bacon, and egg mixture.",
    "Serve with a sprinkle of black pepper.",
  ],
};

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = dummyRecipe; // In real case, fetch the recipe based on ID

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          <Box component="ul">
            {recipe.ingredients.map((ingredient, index) => (
              <Typography component="li" key={index}>
                {ingredient}
              </Typography>
            ))}
          </Box>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Instructions
          </Typography>
          <Box component="ol">
            {recipe.instructions.map((instruction, index) => (
              <Typography component="li" key={index}>
                {instruction}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecipeDetailPage;
