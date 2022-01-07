import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

export default function ProgressIngredients({ ingredientsArr, measureArr }) {
  // const inProgressRecipesObj = useSelector((state) => state.user.inProgressRecipes);
  // const [ingredientChecked, setingredientChecked] = useState(false);
  return (
    <div>
      <h3>Ingredientes</h3>
      { ingredientsArr
        .map((ite, index) => (
          <div key={ ite }>
            <label className="checkIngredient" htmlFor={ ite }>
              <input type="checkbox" id={ ite } />
              <p
                data-testid={ `${index}-ingredient-step` }
              >
                {`- ${ite} - ${measureArr[index]}`}
              </p>
            </label>
          </div>))}
    </div>
  );
}

ProgressIngredients.propTypes = {
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  measureArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
