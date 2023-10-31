import React from 'react';


const FeatureTag = (props) => {
  const colorTheme = {
    'color': props.color
  }

  const padNum = (x) => {
    x = x.toString();
    return (x.length === 1) ? `0${x}` : `${x}`;
  }


  return (
    <div className="FeatureTag">
      <h2 style={ colorTheme }>{ props.feature }</h2>
      {props.points.map((point, index) => (
        <TagListItem
          key={index}
          color={props.color}
          number={padNum(index + 1)}
          text={point}
        />
      ))}
    </div>
  );
}


const TagListItem = (props) => {
  const colorTheme = {
    'color': props.color
  }

  return (
    <div className="TagListItem">
      <p style={ colorTheme }>{ props.number }</p>
      <p>{ props.text }</p>
    </div>
  )
}
 
export default FeatureTag;