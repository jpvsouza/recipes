import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import RecipeMadeShareBtn from './RecipeMadeShareBtn';

function DrinkMadeCard() {
  const doneDrinksArray = useSelector((state) => state.user.doneRecipes);
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <div>
      {doneDrinksArray.map((rec, index) => (
        rec.type === 'bebida'
        && (
          <div key={ index }>
            <Link
              to={ `/bebidas/${rec.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ rec.image }
                alt="Imagem da Receita"
                width="160px"
              />
            </Link>
            <h4 data-testid={ `${index}-horizontal-top-text` }>{rec.alcoholicOrNot}</h4>
            <Link
              to={ `/bebidas/${rec.id}` }
              data-testid={ `${index}-horizontal-name` }
            >
              {rec.name}
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            <RecipeMadeShareBtn
              index={ index }
              recipeId={ rec.id }
              currentPathName={ currentPathName }
            />
          </div>)
      ))}
    </div>
  );
}

export default DrinkMadeCard;
