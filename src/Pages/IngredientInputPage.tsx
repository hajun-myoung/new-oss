import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

import HelpIcon from "@mui/icons-material/Help";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as API from "../api.js";

export default function IngredientInputPage() {
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [tools, setTools] = useState<Array<string>>([]);
  const [inputValue4tools, setInputValue4tools] = useState<string>("");
  const [styles, setStyles] = useState<Array<string>>([]);
  const [inputValue4style, setInputValue4style] = useState<string>("");

  const navigation = useNavigate();

  const handleGetRecipe = useCallback(async () => {
    const response = await API.post("getrecipe", {
      styles,
      ingredients,
      tools,
    });

    const newRecipe = response.data.recipe;
    navigation("/recipe", { state: { recipe: newRecipe } });
  }, [ingredients, navigation, tools]);

  const handleAddIngredient = useCallback(() => {
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  }, [ingredients, inputValue]);

  const handleAddStyle = useCallback(() => {
    if (inputValue4style.trim()) {
      setStyles([...styles, inputValue4style.trim()]);
      setInputValue4style("");
    }
  }, [inputValue4style, styles]);

  const handleDeleteIngredient = useCallback(
    (ingredientToDelete: string) => {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== ingredientToDelete)
      );
    },
    [ingredients]
  );

  const handleTools = useCallback(() => {
    if (inputValue4tools.trim()) {
      setTools([...tools, inputValue4tools.trim()]);
      setInputValue4tools("");
    }
  }, [inputValue4tools, tools]);

  const handleDeleteTools = useCallback(
    (toolsToDelete: string) => {
      setTools(tools.filter((tool) => tool !== toolsToDelete));
    },
    [tools]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        원하는 스타일, 사용할 식재료와 조리도구를 입력해주세요:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="스타일"
          value={inputValue4style}
          onChange={(e) => {
            // if (isValidInput(e.target.value)) {
            setInputValue4style(e.target.value);
            // } else {
            // alert("영어와 공백만 가능합니다");
            // }
          }}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleAddStyle}>
          Add
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
        {styles.map((style, index) => (
          <Chip
            key={index}
            label={style}
            onDelete={() => handleDeleteIngredient(style)}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="식재료"
          value={inputValue}
          onChange={(e) => {
            // if (isValidInput(e.target.value)) {
            setInputValue(e.target.value);
            // } else {
            // alert("영어와 공백만 가능합니다");
            // }
          }}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleAddIngredient}>
          Add
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
        {ingredients.map((ingredient, index) => (
          <Chip
            key={index}
            label={ingredient}
            onDelete={() => handleDeleteIngredient(ingredient)}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="조리도구"
          value={inputValue4tools}
          onChange={(e) => setInputValue4tools(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleTools}>
          Add
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
        {tools.map((tool, index) => (
          <Chip
            key={index}
            label={tool}
            onDelete={() => handleDeleteTools(tool)}
          />
        ))}
      </Box>
      {/* <Button variant="contained" component={Link} to="/recipe">
        추천 레시피 받기
      </Button> */}
      <Button variant="contained" onClick={handleGetRecipe}>
        추천 레시피 받기
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <HelpIcon
            id="inputHelp"
            sx={{ ml: 2, color: "#888", fontSize: 24 }}
          />
          <Typography>왜 영어로만 식재료와 조리도구를 받나요?</Typography>
        </Box>
        <Box sx={{ overflow: "hidden" }}>
          <Typography>
            검색 결과 퀄리티를 높이기 위해 레시피 데이터셋을 이용했기 때문이에요
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
