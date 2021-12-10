import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCategoriesDrinks as fetchDrinksCategories } from '../redux/actions/apiAC';
import Header from '../components/Header';
import DrinkCard from '../components/DrinkCard';
import DrinkCategoriesFilter from '../components/DrinkCategoriesFilter';
import Footer from '../components/Footer';

function Drinks() {
  const DRINKS_CAT_END_POINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const drinksArray = useSelector((state) => state.foodsAndDrinks.drinks);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (drinksArray.length === 1) {
      history.push(`/bebidas/${drinksArray[0].idDrink}`);
    }
  }, [drinksArray, history]);

  React.useEffect(() => {
    dispatch(fetchDrinksCategories(DRINKS_CAT_END_POINT));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <DrinkCategoriesFilter />
      <DrinkCard />
      <Footer />
    </div>
  );
}

export default Drinks;
