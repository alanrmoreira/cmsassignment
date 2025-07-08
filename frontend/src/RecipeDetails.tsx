import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Container, CircularProgress } from "@mui/material";

interface RichTextChild {
  type: string;
  text?: string;
}

interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

interface Recipe {
  Title: string;
  Ingredients: RichTextBlock[];
  Preparation: RichTextBlock[];
}

const renderRichText = (blocks: RichTextBlock[]) => {
  return blocks.map((block, index) => (
    <div key={index}>
      {block.children.map((child, idx) => (
        <Typography key={idx} variant="body1">
          {child.text}
        </Typography>
      ))}
    </div>
  ));
};

const RecipeDetails: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:1337/api/recipes?filters[documentId][$eq]=${id}`)
      .then((res) => {
        const data = res.data?.data?.[0];
        if (data) {
          setRecipe(data); 
        } else {
          setRecipe(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setRecipe(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          Recipe not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {recipe.Title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ingredients
      </Typography>
      {renderRichText(recipe.Ingredients)}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        How to Cook
      </Typography>
      {renderRichText(recipe.Preparation)}
    </Container>
  );
};

export default RecipeDetails;