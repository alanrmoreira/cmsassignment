import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Recipe {
  id: number;
  Title: string;
  documentId: string;
}

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/recipes")
      .then((res) => setRecipes(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Recipes
      </Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardActionArea onClick={() => navigate(`/recipes/${recipe.documentId}`)}>
                <CardContent>
                  <Typography variant="h6">{recipe.Title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;