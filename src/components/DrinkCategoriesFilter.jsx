import React from 'react';
import { useSelector } from 'react-redux';

function DrinkCategoriesFilter() {
  const drinksCategArray = useSelector((state) => state.foodsAndDrinks.drinksCategories);
  const four = 4;

  return (
    <div className="foodCategoriesFilterContainer">
      <button
        type="button"
      >
        All
      </button>
      {drinksCategArray.filter((_drinkCat, i) => (i <= four))
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

export default DrinkCategoriesFilter;
