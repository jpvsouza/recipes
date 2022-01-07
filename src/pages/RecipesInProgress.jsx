import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProgressHeader from '../components/recipesInProgress/ProgressHeader';
import ProgressIngredients from '../components/recipesInProgress/ProgressIngredients';
import ProgressInstructions from '../components/recipesInProgress/ProgressInstructions';
import ProgressFinishBtn from '../components/recipesInProgress/ProgressFinishBtn';

export default function RecipesInProgress() {
  const { idReceita } = useParams();
  const location = useLocation();
  const currentPathName = location.pathname;
  const END_POINT_FOOD = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const END_POINT_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const [recipeProgress, setRecipeProgress] = useState({});
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [measureArr, setMeasureArr] = useState([]);

  const inProgressRecipesObj = useSelector((state) => state.user.inProgressRecipes);

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

  const filter = () => {
    const keysIngre = Object.keys(recipeProgress)
      .filter((item) => item.includes('strIngredient'));
    const keysMeasu = Object.keys(recipeProgress)
      .filter((item) => item.includes('strMeasure'));
    const ingredients = keysIngre.map((item) => recipeProgress[item])
      .filter((remove) => remove !== '' && remove !== null);
    const measure = keysMeasu.map((item) => recipeProgress[item]);

    setIngredientsArr(ingredients);
    setMeasureArr(measure);
  };

  useEffect(() => {
    filter();
  }, [recipeProgress]);

  React.useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesObj));
  }, [inProgressRecipesObj]);

  return (
    <section>
      <ProgressHeader
        recipeProgress={ recipeProgress }
        currentPathName={ currentPathName }
      />
      <ProgressIngredients
        ingredientsArr={ ingredientsArr }
        measureArr={ measureArr }
      />
      <ProgressInstructions
        recipeProgress={ recipeProgress }
        currentPathName={ currentPathName }
      />
      <ProgressFinishBtn
        idReceita={ idReceita }
        currentPathName={ currentPathName }
        recipeProgress={ recipeProgress }
      />
    </section>
  );
}
