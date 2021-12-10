import React from 'react';
import { useSelector } from 'react-redux';

function DrinkCard() {
  const drinksArray = useSelector((state) => state.foodsAndDrinks.drinks);
  const eleven = 11;

  return (
    <div className="drinkCardsContainer">
      {drinksArray.filter((_drink, i) => (i <= eleven))
        .map((item, index) => (
          <div
            key={ item.idDrink }
            data-testid={ `${index}-recipe-card` }
            className="eachDrinkCard"
          >
            <img
              src={ item.strDrinkThumb }
              alt={ item.strDrink }
              width="150px"
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{item.strDrink}</h2>
          </div>
        ))}
    </div>
  );
}

export default DrinkCard;
