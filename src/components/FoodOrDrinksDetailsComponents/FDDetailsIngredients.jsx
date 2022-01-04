import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsIngredients({ ingredientsArr }) {
  return (
    <div>
      {/* {array.map((ingredient, index) => (
        <h3 key={ index }>{ingredient.strIngredient}</h3>
      ))} */}
      <h3>Ingredientes</h3>
    </div>
  );
}

FDDetailsIngredients.propTypes = {
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FDDetailsIngredients;
