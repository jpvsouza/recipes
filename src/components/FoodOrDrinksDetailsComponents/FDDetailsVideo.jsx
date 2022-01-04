import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsRecommended({ recipeInfo, currentPathName }) {
  const linkCompleto = recipeInfo.strYoutube;
  console.log(linkCompleto);
  // const linkCurto = linkCompleto.split('=');
  // console.log(linkCurto[1]);
  return (
    <div>
      {/* {currentPathName.includes('comidas')
        && (
          <iframe
            width="853"
            height="480"
            src={ `https://www.youtube.com/embed/${linkCurto[1]}` } // REF: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
            frameBorder="0"
            allowFullScreen
            title="Embedded Youtube Video"
          />)} */}
    </div>
  );
}

FDDetailsRecommended.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FDDetailsRecommended;
