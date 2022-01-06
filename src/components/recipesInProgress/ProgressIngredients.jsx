import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressIngredients({ ingredientsArr, measureArr }) {
  return (
    <div>
      <h3>Ingredientes</h3>
      { ingredientsArr
        .map((ite, index) => (
          <div key={ ite }>
            <input type="checkbox" />
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ite} - ${measureArr[index]}`}
            </p>
          </div>))}
    </div>
  );
}

ProgressIngredients.propTypes = {
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  measureArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
