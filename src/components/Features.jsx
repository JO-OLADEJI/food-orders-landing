import React from 'react';
import featuresData from './features-data.json';
import FeatureTag from './FeatureTag.jsx';
import paperPlane from '../assets/Illustrations/paper-plane.png';
import topBg from '../assets/backgrounds/features-top-bg.png';


const Features = (props) => {
  return (
    <div className="Features">
      <img className="features-top-bg" src={ topBg } alt="" />
      <img className="paper-plane" src={ paperPlane } alt="" />
      <h1>Tracking Features</h1>
      <div className="features-body">
        {featuresData.map(data => (
          <FeatureTag
            key={data.id}
            color={data.color}
            feature={data.feature}
            points={data.points}
          />
        ))}
      </div>
    </div>
  );
}


export default Features;