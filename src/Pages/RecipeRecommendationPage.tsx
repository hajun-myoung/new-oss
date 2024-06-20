import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

const dummyRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    time: "30 mins",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Chicken Curry",
    image: "https://via.placeholder.com/150",
    time: "45 mins",
    difficulty: "Medium",
  },
];

export default function RecipeRecommendationPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Recommended Recipes
      </Typography>
      <Grid container spacing={2}>
        {dummyRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.time} - {recipe.difficulty}
                </Typography>
                <Button
                  component={Link}
                  to={`/recipe/${recipe.id}`}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
