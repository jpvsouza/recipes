import React from 'react';
// import PropTypes from 'prop-types';

export default function ProgressInstructions(recipeProgress) {
  return (
    <div>
      <h2 data-testid="recipe-title">Instruções</h2>
      <p>{ recipeProgress.strInstructions }</p>
    </div>
  );
}

// ProgressInstructions.propTypes = {
//   recipeProgress: PropTypes.objectOf(PropTypes.string).isRequired,
// };
