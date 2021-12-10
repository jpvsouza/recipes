import React from 'react';
import { useSelector } from 'react-redux';

function FoodCard() {
  const mealsArray = useSelector((state) => state.foodsAndDrinks.meals);
  const eleven = 11;

  return (
    <div className="foodCardsContainer">
      {mealsArray.filter((_meal, i) => (i <= eleven))
        .map((item, index) => (
          <div
            key={ item.idMeal }
            data-testid={ `${index}-recipe-card` }
            className="eachFoodCard"
          >
            <img
              src={ item.strMealThumb }
              alt={ item.strMeal }
              width="150px"
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{item.strMeal}</h2>
          </div>
        ))}
    </div>
  );
}

export default FoodCard;
