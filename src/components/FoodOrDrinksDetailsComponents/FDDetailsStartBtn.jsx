import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startMealRecipeAC, startDrinkRecipeAC } from '../../redux/actions/userAC';

function FDDetailsStartBtn({ setStartBtnStatus, startBtnStatus,
  currentPathName, idReceita, ingredientsArr }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const startRecipe = 'Iniciar Receita';
  const continueRecipe = 'Continuar Receita';

  const startRecipeClick = () => {
    if (currentPathName.includes('comidas')) {
      dispatch(startMealRecipeAC(idReceita, ingredientsArr));
      if (startBtnStatus === startRecipe) {
        setStartBtnStatus(continueRecipe);
      }
      history.push(`/comidas/${idReceita}/in-progress`);
    }
    if (currentPathName.includes('bebidas')) {
      dispatch(startDrinkRecipeAC(idReceita, ingredientsArr));
      if (startBtnStatus === startRecipe) {
        setStartBtnStatus(continueRecipe);
      }
      history.push(`/bebidas/${idReceita}/in-progress`);
    }
  };

  return (
    <button
      onClick={ () => startRecipeClick() }
      className="startRecipeBtn"
      data-testid="start-recipe-btn"
      type="button"
    >
      {startBtnStatus}
    </button>
  );
}

FDDetailsStartBtn.propTypes = {
  startBtnStatus: PropTypes.string.isRequired,
  setStartBtnStatus: PropTypes.func.isRequired,
  currentPathName: PropTypes.string.isRequired,
  idReceita: PropTypes.string.isRequired,
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FDDetailsStartBtn;
