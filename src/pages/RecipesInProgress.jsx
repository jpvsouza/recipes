import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProgressHeader from '../components/recipesInProgress/ProgressHeader';
import ProgressIngredients from '../components/recipesInProgress/ProgressIngredients';
import ProgressInstructions from '../components/recipesInProgress/ProgressInstructions';

export default function RecipesInProgress() {
  const { idReceita } = useParams();
  const location = useLocation();
  const currentPathName = location.pathname;
  const END_POINT_FOOD = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const END_POINT_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const [recipeProgress, setRecipeProgress] = useState({});

  useEffect(() => {
    if (currentPathName.includes('comidas')) {
      fetch(END_POINT_FOOD)
        .then((response) => response.json())
        .then((data) => setRecipeProgress(data.meals[0]));
    }
    if (currentPathName.includes('bebidas')) {
      fetch(END_POINT_DRINK)
        .then((response) => response.json())
        .then((data) => setRecipeProgress(data.drinks[0]));
    }
  }, []);

  return (
    <section>
      <ProgressHeader
        recipeProgress={ recipeProgress }
        currentPathName={ currentPathName }
      />
      <ProgressIngredients
        recipeProgress={ recipeProgress }
        currentPathName={ currentPathName }
      />
      <ProgressInstructions
        recipeProgress={ recipeProgress }
        currentPathName={ currentPathName }
      />
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
    </section>
  );
}
