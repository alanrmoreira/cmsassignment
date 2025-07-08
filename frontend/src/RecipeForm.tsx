import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const navigate = useNavigate();

  const formatToBlocks = (text: string) => {
    return text
      .split("\n")
      .filter(line => line.trim() !== "")
      .map(line => ({
        type: "paragraph",
        children: [
          {
            type: "text",
            text: line.trim(),
          },
        ],
      }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:1337/api/recipes", {
        data: {
          Title: title,
          Ingredients: formatToBlocks(ingredients),
          Preparation: formatToBlocks(preparation),
        },
      });
      navigate("/");
    } catch (err) {
      console.error("Strapi error response: ", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Recipe Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        multiline
        rows={4}
      />
      <TextField
        label="Preparation"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained">Save</Button>
    </Box>
  );
}

export default RecipeForm;