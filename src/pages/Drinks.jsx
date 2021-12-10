import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  const drinksArray = useSelector((state) => state.foodsAndDrinks.drinks);
  const history = useHistory();
  const eleven = 11;

  React.useEffect(() => {
    if (drinksArray.length === 1) {
      history.push(`/bebidas/${drinksArray[0].idDrink}`);
    }
  }, [drinksArray, history]);

  return (
    <div>
      <Header />
      {drinksArray.filter((_drink, i) => (i <= eleven))
        .map((item, index) => (
          <div key={ item.idDrink } data-testid={ `${index}-recipe-card` }>
            <img
              src={ item.strDrinkThumb }
              alt={ item.strDrink }
              width="150px"
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>{item.strDrink}</h2>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default Drinks;
