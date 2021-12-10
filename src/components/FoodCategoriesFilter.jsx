import React from 'react';
import { useSelector } from 'react-redux';

function FoodCategoriesFilter() {
  const mealsCategoriesArr = useSelector((state) => state.foodsAndDrinks.mealsCategories);
  const four = 4;

  return (
    <div className="foodCategoriesFilterContainer">
      <button
        type="button"
      >
        All
      </button>
      {mealsCategoriesArr.filter((_mealCat, i) => (i <= four))
        .map((category) => (
          <button
            key={ category.strCategory }
            data-testid={ `${category}-category-filter` }
            type="button"
          >
            {category.strCategory}
          </button>
        ))}
    </div>
  );
}

export default FoodCategoriesFilter;
