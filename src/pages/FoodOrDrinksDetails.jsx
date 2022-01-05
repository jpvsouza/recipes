import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
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
import '../styles/FoodOrDrinksDetails.css';

function FoodOrDrinksDetails() {
  const { idReceita } = useParams();
  const location = useLocation();
  const history = useHistory();
  const currentPathName = location.pathname;
  const END_POINT_FOOD_FILTER_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const END_POINT_DRINK_FILTER_ID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
  const END_POINT_FOOD_RANDOM = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const END_POINT_DRINK_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const [recipeInfo, setRecipeInfo] = React.useState({});
  const [ingredientsArr, setIngredientsArr] = React.useState([]);
  const [measureArr, setMeasureArr] = React.useState([]);
  const [recommendedFD, setRecommendedFD] = React.useState([]);

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
      fetch(END_POINT_FOOD_FILTER_ID)
        .then((response) => response.json())
        .then((data) => setRecipeInfo(data.meals[0]));
    }
    if (currentPathName.includes('bebidas')) {
      fetch(END_POINT_DRINK_FILTER_ID)
        .then((response) => response.json())
        .then((data) => setRecipeInfo(data.drinks[0]));
    }
  }, [idReceita]);

  React.useEffect(() => {
    if (currentPathName.includes('bebidas')) {
      fetch(END_POINT_FOOD_RANDOM)
        .then((response) => response.json())
        .then((data) => setRecommendedFD(data.meals));
    }
    if (currentPathName.includes('comidas')) {
      fetch(END_POINT_DRINK_RANDOM)
        .then((response) => response.json())
        .then((data) => setRecommendedFD(data.drinks));
    }
  }, [idReceita]);

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
        recommendedFD={ recommendedFD }
        currentPathName={ currentPathName }
      />
      {currentPathName.includes('comidas')
        ? (
          <button
            onClick={ () => history.push(`/comidas/${idReceita}/in-progress`) }
            className="startRecipeBtn"
            data-testid="start-recipe-btn"
            type="button"
          >
            Iniciar Receita
          </button>)
        : (
          <button
            onClick={ () => history.push(`/bebidas/${idReceita}/in-progress`) }
            className="startRecipeBtn"
            data-testid="start-recipe-btn"
            type="button"
          >
            Iniciar Receita
          </button>)}
    </div>
  );
}

export default FoodOrDrinksDetails;
