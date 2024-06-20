import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

import HelpIcon from "@mui/icons-material/Help";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

interface positionCoordi {
  top: number;
  left: number;
}

export default function IngredientInputPage() {
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [tools, setTools] = useState<Array<string>>([]);
  const [inputValue4tools, setInputValue4tools] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  const handleAddIngredient = useCallback(() => {
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  }, [ingredients, inputValue]);

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
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Add your INGREDIENTS and the TOOLS:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="Ingredient"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
          label="Tool"
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
      <Button variant="contained" component={Link} to="/recommendations">
        추천 레시피 받기
      </Button>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        <Box sx={{ display: "flex" }}>
          <HelpIcon
            id="inputHelp"
            sx={{ ml: 2, color: "#888", fontSize: 24 }}
          />
          <Typography>왜 영어로만 식재료와 조리도구를 받나요?</Typography>
        </Box>
        <Box
          className={visible ? "toggleOn" : "toggleOff"}
          sx={{ overflow: "hidden" }}
        >
          <Typography>
            검색 결과 퀄리티를 높이기 위해 레시피 데이터셋을 이용했어요
          </Typography>
          <Typography>
            한글 데이터셋은 문자 인코딩 깨짐으로 인해 영문 데이터셋을
            사용하였고(...) 그래서에요
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
