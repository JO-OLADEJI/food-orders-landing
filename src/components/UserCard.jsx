import React from 'react';


const UserCard = (props) => {
  const colorTheme = {
    'color': props.color
  }

  return (
    <div className="UserCard">
      <h1>
        For
        <span className="user-card-user" style={colorTheme}>
          { props.user }
        </span>
      </h1>
      <p>{ props.description }</p>
      <img src={ props.illustration } alt="" />
    </div>
  );
}


export default UserCard;