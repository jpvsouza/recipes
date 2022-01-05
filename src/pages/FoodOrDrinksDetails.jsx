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
  const [measureArr, setMeasureArr] = React.useState([]);

  const filter = () => {
    const keysIngre = Object.keys(recipeInfo)
      .filter((item) => item.includes('strIngredient'));
    const keysMeasu = Object.keys(recipeInfo)
      .filter((item) => item.includes('strMeasure'));

    const ingredients = keysIngre.map((item) => recipeInfo[item])
      .filter((ing) => ing !== '' && ing !== null);
    const measure = keysMeasu.map((item) => recipeInfo[item]);

    setIngredientsArr(ingredients);
    setMeasureArr(measure);
  };

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
    filter();
  }, [recipeInfo]);

  return (
    <div>
      <FDDetailsHeader
        recipeInfo={ recipeInfo }
        currentPathName={ currentPathName }
      />
      <FDDetailsIngredients
        ingredientsArr={ ingredientsArr }
        measureArr={ measureArr }
      />
      <FDDetailsInstructions recipeInfo={ recipeInfo } />
      {currentPathName.includes('comidas')
      && (
        <FDDetailsVideo
          recipeInfo={ recipeInfo }
          currentPathName={ currentPathName }
        />)}
      <FDDetailsRecommended
        recipeInfo={ recipeInfo }
        currentPathName={ currentPathName }
      />
    </div>
  );
}

export default FoodOrDrinksDetails;
