import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [parsedRecipe, setParsedRecipe] = useState({
    name: "",
    time: "",
    difficulty: "",
    cost: "",
    steps: [],
  });

  useEffect(() => {
    if (!location.state || !location.state.recipe) {
      navigate("/input");
      return;
    }

    const recipe = location.state.recipe;
    const lines = recipe.split("\n");
    const name = lines[0].split(": ")[1];
    const time = lines[1].split(": ")[1];
    const difficulty = lines[2].split(": ")[1];
    const cost = lines[3].split(": ")[1];
    const steps = lines
      .slice(4)
      .map((step: string) => step.replace(/^\d+\. /, ""));
    setParsedRecipe({ name, time, difficulty, cost, steps });
  }, [location, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card sx={{ backgroundColor: "#EDEDE9" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {parsedRecipe.name}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            단계별 레시피
          </Typography>
          <Box component="ol">
            {parsedRecipe.steps.map((step, index) => (
              <Typography component="li" key={index} sx={{ marginBottom: 1 }}>
                {step}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        돌아가기
      </Button>
    </Box>
  );
};

export default RecipeDetailPage;
