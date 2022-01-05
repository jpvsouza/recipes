import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressIngredients({ ingredientsArr, measureArr }) {
  return (
    <div>
      <h3>Ingredientes</h3>
      {console.log(ingredientsArr)}
      {/* { ingredientsArr.map((ite, index) => (
        <div key={ ite }>
          <input type="checkbox" id={ ite } name={ ite } />
          <label htmlFor={ ite }>{`${ite} ${measureArr[index]}`}</label>
        </div>
      ))} */}
    </div>
  );
}

ProgressIngredients.propTypes = {
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  measureArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
