import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FDDetailsHeader
  from '../components/FoodOrDrinksDetailsComponents/FDDetailsHeader';
import FDDetailsIngredients
  from '../components/FoodOrDrinksDetailsComponents/FDDetailsIngredients';
import FDDetailsInstructions
  from '../components/FoodOrDrinksDetailsComponents/FDDetailsInstructions';
import FDDetailsRecommended
  from '../components/FoodOrDrinksDetailsComponents/FDDetailsRecommended';
import FDDetailsVideo
  from '../components/FoodOrDrinksDetailsComponents/FDDetailsVideo';

function FoodOrDrinksDetails() {
  const { idReceita } = useParams();
  const location = useLocation();
  const currentPathName = location.pathname;
  const END_POINT_FOOD = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const END_POINT_DRINK = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const [recipeInfo, setRecipeInfo] = React.useState({});
  const [ingredientsArr, setIngredientsArr] = React.useState([]);

  React.useEffect(() => {
    if (currentPathName.includes('comidas')) {
      fetch(END_POINT_FOOD)
        .then((response) => response.json())
        .then((data) => setRecipeInfo(data.meals[0]));
    }
    if (currentPathName.includes('bebidas')) {
      fetch(END_POINT_DRINK)
        .then((response) => response.json())
        .then((data) => setRecipeInfo(data.drinks[0]));
    }
  }, []);

  React.useEffect(() => {
    if (currentPathName.includes('comidas') && recipeInfo.length >= 1) {
      // Criar array de ingredientes de comida
    }
    if (currentPathName.includes('bebidas') && recipeInfo.length >= 1) {
      // Criar array de ingredientes de comida
    }
  }, [recipeInfo]);

  return (
    <div>
      {console.log(recipeInfo)}
      <FDDetailsHeader
        recipeInfo={ recipeInfo }
        currentPathName={ currentPathName }
      />
      <FDDetailsIngredients
        ingredientsArr={ ingredientsArr }
      />
      <FDDetailsInstructions />
      <FDDetailsVideo
        recipeInfo={ recipeInfo }
        currentPathName={ currentPathName }
      />
      <FDDetailsRecommended />
    </div>
  );
}

export default FoodOrDrinksDetails;
