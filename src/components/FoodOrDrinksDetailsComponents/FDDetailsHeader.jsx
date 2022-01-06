import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteRecipeAC as addFavoriteRecipe } from '../../redux/actions/userAC';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';

function FDDetailsHeader({ recipeInfo, currentPathName }) {
  const [isMessageHidden, setIsMessageHidden] = React.useState(true);
  const favoriteRecipesArr = useSelector((state) => state.user.favoriteRecipes);
  const dispatch = useDispatch();

  const onClickShareBtn = ({ target }) => {
    const TEN_SECONDS = 10000;
    navigator.clipboard.writeText(`http://localhost:3000${target.id}`); // REF: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    setIsMessageHidden(false);
    setTimeout(() => setIsMessageHidden(true), TEN_SECONDS);
  };

  const onClickFavoriteBtn = () => {
    if (currentPathName.includes('comidas')) {
      const favoriteMealRecipeObj = {
        id: recipeInfo.idMeal,
        type: 'Meal',
        area: recipeInfo.strArea,
        category: recipeInfo.strCategory,
        name: recipeInfo.strMeal,
        image: recipeInfo.strMealThumb,
      };

      dispatch(addFavoriteRecipe(favoriteMealRecipeObj));
      console.log(favoriteRecipesArr);
    }
  };

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
          ? <h1 data-testid="recipe-title">{recipeInfo.strMeal}</h1>
          : <h1 data-testid="recipe-title">{recipeInfo.strDrink}</h1>}
        {currentPathName.includes('comidas')
          ? <h3 data-testid="recipe-category">{ recipeInfo.strCategory }</h3>
          : <h3 data-testid="recipe-category">{ recipeInfo.strAlcoholic }</h3>}
      </div>
      <div>
        <div>
          <div
            className="favoriteBtnContainer"
            onClick={ () => onClickFavoriteBtn() }
            onKeyDown={ () => onClickFavoriteBtn() }
            role="button"
            tabIndex={ 0 }
          >
            <img
              data-testid="favorite-btn"
              src={ whiteHeartIcon }
              alt="Ícone de Favoritar"
            />
          </div>
          <div
            className="shareBtnContainer"
            id={ currentPathName }
            onClick={ (ev) => onClickShareBtn(ev) }
            onKeyDown={ (ev) => onClickShareBtn(ev) }
            role="button"
            tabIndex={ 0 }
          >
            <img
              id={ currentPathName }
              data-testid="share-btn"
              src={ ShareIcon }
              alt="Compartilhar"
            />
            <h4 hidden={ isMessageHidden }>Link copiado!</h4>
          </div>
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
