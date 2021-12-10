import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCategoriesMeals as fetchFoodCategories } from '../redux/actions/apiAC';
import Header from '../components/Header';
import FoodCategoriesFilter from '../components/FoodCategoriesFilter';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

function Foods() {
  const MEALS_CAT_END_POINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const mealsArray = useSelector((state) => state.foodsAndDrinks.meals);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (mealsArray.length === 1) {
      history.push(`/comidas/${mealsArray[0].idMeal}`);
    }
  }, [mealsArray, history]);

  React.useEffect(() => {
    dispatch(fetchFoodCategories(MEALS_CAT_END_POINT));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <FoodCategoriesFilter />
      <FoodCard />
      <Footer />
    </div>
  );
}

export default Foods;
