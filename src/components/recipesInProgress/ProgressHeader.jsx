import React, {} from 'react';
import PropTypes from 'prop-types';
import WhiteHeartIcon from '../../images/whiteHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';

// falta logica de adicionar os favoritos
// verificar icones
export default function ProgressHeader({ recipeProgress, currentPathName }) {
  return (
    <header>
      <div>
        {currentPathName.includes('comidas')
          ? (
            <img
              width="250px"
              data-testid="recipe-photo"
              src={ recipeProgress.strMealThumb }
              alt="Food Recipe"
            />)
          : (
            <img
              width="250px"
              data-testid="recipe-photo"
              src={ recipeProgress.strDrinkThumb }
              alt="Drink Recipe"
            />)}
        {currentPathName.includes('comidas')
          ? <h1 data-testid="recipe-title">{ recipeProgress.strMeal }</h1>
          : <h1 data-testid="recipe-title">{ recipeProgress.strDrink }</h1>}
        {currentPathName.includes('comidas')
          ? <h3 data-testid="recipe-category">{ recipeProgress.strCategory }</h3>
          : <h3 data-testid="recipe-category">{ recipeProgress.strCategory }</h3>}
      </div>

      {/* ======Icones====== */}
      <div>
        <img src={ WhiteHeartIcon } alt="Favoritar" />
        <img src={ ShareIcon } alt="Compartilhar" />
      </div>
    </header>
  );
}

ProgressHeader.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recipeProgress: PropTypes.objectOf(PropTypes.string).isRequired,
};
