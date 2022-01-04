import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsHeader({ recipeInfo, currentPathName }) {
  return (
    <header>
      <div>
        {currentPathName.includes('comidas')
          ? (
            <img
              data-testid="recipe-photo"
              src={ recipeInfo.strMealThumb }
              alt="Food Recipe"
            />)
          : (
            <img
              data-testid="recipe-photo"
              src={ recipeInfo.strDrinkThumb }
              alt="Drink Recipe"
            />)}
        {currentPathName.includes('comidas')
          ? <h1>{recipeInfo.strMeal}</h1>
          : <h1>{recipeInfo.strDrink}</h1>}
      </div>
    </header>
  );
}

FDDetailsHeader.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FDDetailsHeader;
