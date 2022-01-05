import React from 'react';
import PropTypes from 'prop-types';
import WhiteHeartIcon from '../../images/whiteHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';

function FDDetailsHeader({ recipeInfo, currentPathName }) {
  return (
    <header>
      <div>
        {currentPathName.includes('comidas')
          ? (
            <img
              data-testid="recipe-photo"
              width="250px"
              src={ recipeInfo.strMealThumb }
              alt="Food Recipe"
            />)
          : (
            <img
              data-testid="recipe-photo"
              width="250px"
              src={ recipeInfo.strDrinkThumb }
              alt="Drink Recipe"
            />)}
        {currentPathName.includes('comidas')
          ? <h1>{recipeInfo.strMeal}</h1>
          : <h1>{recipeInfo.strDrink}</h1>}
        {currentPathName.includes('comidas')
          ? <h3 data-testid="recipe-category">{ recipeInfo.strCategory }</h3>
          : <h3 data-testid="recipe-category">{ recipeInfo.strCategory }</h3>}
      </div>
      <div>
        {/* ======Icones====== */}
        <div>
          <img
            src={ WhiteHeartIcon }
            alt="Favoritar"
          />
          <img
            src={ ShareIcon }
            alt="Compartilhar"
          />
        </div>
      </div>
    </header>
  );
}

FDDetailsHeader.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FDDetailsHeader;
