import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/foodPage.css';

function FoodCard({ mealsArray }) {
  const eleven = 11;
  const history = useHistory();

  return (
    <div className="foodCardsContainer">
      {mealsArray.filter((_meal, i) => (i <= eleven))
        .map((item, index) => (
          <div
            key={ item.idMeal }
            data-testid={ `${index}-recipe-card` }
            className="eachFoodCard"
            onClick={ () => history.push(`/comidas/${item.idMeal}`) }
            onKeyDown={ () => history.push(`/comidas/${item.idMeal}`) }
            role="button"
            tabIndex={ 0 }
          >
            <div className=''>
              <img
                src={ item.strMealThumb }
                alt={ item.strMeal }
                width="150px"
                data-testid={ `${index}-card-img` }
              />
              <h2 data-testid={ `${index}-card-name` }>{item.strMeal}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}

FoodCard.propTypes = {
  mealsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FoodCard;
