import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import RecipesMadeFilters from '../components/RecipesMadeComponents/RecipesMadeFilters';
import MealMadeCard from '../components/RecipesMadeComponents/MealMadeCard';
import DrinkMadeCard from '../components/RecipesMadeComponents/DrinkMadeCard';

function RecipesMade() {
  const doneRecipesArray = useSelector((state) => state.user.doneRecipes);
  const isThereSomeMealRecipe = doneRecipesArray.some(({ type }) => type === 'comida');
  const isThereSomeDrinkRecipe = doneRecipesArray.some(({ type }) => type === 'bebida');

  const inProgressRecipesObj = useSelector((state) => state.user.inProgressRecipes);

  // ==========================IN-PROGRESS-RECIPES-LS // DONE-RECIPES-LS=======================
  React.useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipesArray));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesObj));
  }, [doneRecipesArray]);
  // =============================================================================

  return (
    <div>
      <header>
        <Header />
        <RecipesMadeFilters />
      </header>
      <section>
        {isThereSomeMealRecipe && <MealMadeCard />}
        {isThereSomeDrinkRecipe && <DrinkMadeCard />}
      </section>
    </div>
  );
}

export default RecipesMade;
