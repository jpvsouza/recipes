import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  const mealsArray = useSelector((state) => state.foodsAndDrinks.meals);
  const history = useHistory();
  const eleven = 11;

  React.useEffect(() => {
    if (mealsArray.length === 1) {
      history.push(`/comidas/${mealsArray[0].idMeal}`);
    }
  }, [mealsArray, history]);

  return (
    <div>
      <Header />
      {mealsArray.filter((_meal, i) => (i <= eleven))
        .map((item, index) => (
          <div key={ item.idMeal } data-testid={ `${index}-recipe-card` }>
            <img
              src={ item.strMealThumb }
              alt={ item.strMeal }
              width="150px"
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{item.strMeal}</h2>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default Foods;
