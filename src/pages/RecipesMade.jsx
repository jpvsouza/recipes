import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

function RecipesMade() {
  const doneRecipesArray = useSelector((state) => state.user.doneRecipes);
  const inProgressRecipesObj = useSelector((state) => state.user.inProgressRecipes);

  React.useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesArray));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesObj));
  }, [doneRecipesArray]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default RecipesMade;
