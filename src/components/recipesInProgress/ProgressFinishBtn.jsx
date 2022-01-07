import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { concludeMealRecipeAC, concludeDrinkRecipeAC } from '../../redux/actions/userAC';

function ProgressFinishBtn({ currentPathName,
  idReceita, recipeProgress }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const concludeRecipeClick = () => {
    if (currentPathName.includes('comidas')) {
      const concludedMealObj = {
        id: idReceita,
        type: 'comida',
        area: recipeProgress.strArea,
        category: recipeProgress.strCategory,
        alcoholicOrNot: '',
        name: recipeProgress.strMeal,
        image: recipeProgress.strMealThumb,
        doneDate: 'Alterar',
        tags: recipeProgress.strTags,
      };

      dispatch(concludeMealRecipeAC(concludedMealObj, idReceita));
      history.push('/receitas-feitas');
    }
    if (currentPathName.includes('bebidas')) {
      const concludedDrinkObj = {
        id: idReceita,
        type: 'bebida',
        area: '',
        category: recipeProgress.strCategory,
        alcoholicOrNot: recipeProgress.strAlcoholic,
        name: recipeProgress.strDrink,
        image: recipeProgress.strDrinkThumb,
        doneDate: 'Alterar',
        tags: recipeProgress.strTags,
      };

      dispatch(concludeDrinkRecipeAC(concludedDrinkObj, idReceita));
      history.push('/receitas-feitas');
    }
  };

  return (
    <button
      onClick={ () => concludeRecipeClick() }
      className="startRecipeBtn"
      data-testid="finish-recipe-btn"
      type="button"
    >
      Finalizar Receita
    </button>
  );
}

ProgressFinishBtn.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  idReceita: PropTypes.string.isRequired,
  recipeProgress: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProgressFinishBtn;
