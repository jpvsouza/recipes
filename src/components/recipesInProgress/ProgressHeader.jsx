import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as WhiteHeartIcon } from '../../images/whiteHeartIcon.svg';

export default function ProgressHeader({ recipeProgress, currentPathName }) {
  return (
    <header>
      <div>
        {currentPathName.includes('comidas')
          ? (
            <img
              data-testid="recipe-photo"
              src={ recipeProgress.strMealThumb }
              alt="Food Recipe"
            />)
          : (
            <img
              data-testid="recipe-photo"
              src={ recipeInfo.strDrinkThumb }
              alt="Drink Recipe"
            />)}
        {currentPathName.includes('comidas')
          ? <h1 data-testid="recipe-title">{ recipeProgress.strMeal }</h1>
          : <h1 data-testid="recipe-title">{ recipeProgress.strDrink }</h1>}
        {currentPathName.includes('comidas')
          ? <h3 data-testid="recipe-category">{ recipeProgress.strCategory }</h3>
          : <h3 data-testid="recipe-category">{ recipeProgress.strCategory }</h3>}
      </div>
      <div>
        <WhiteHeartIcon />
      </div>
    </header>

  //   <button data-testid="share-btn" type="button">Compartilhar</button>
  //   <button data-testid="favorite-btn" type="button">Favoritar</button>
  // </div>
  );
}

ProgressHeader.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recipeProgress: PropTypes.objectOf(PropTypes.string).isRequired,
};
