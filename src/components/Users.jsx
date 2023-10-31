import React from 'react';
import userCardData from './user-card-data.json';
import UserCard from './UserCard.jsx';
import manager from '../assets/Illustrations/manager.png';
import fieldAgent from '../assets/Illustrations/field-agent.png';
import bottomBg from '../assets/backgrounds/users-bottom-bg.png';


const Users = (props) => {
  const cardIllustrations = [manager, fieldAgent];

  return (
    <div className="Users">
      {userCardData.map((data, index) => (
        <UserCard
          key={data.id}
          user={data.user}
          color={data.color}
          description={data.description}
          illustration={cardIllustrations[index]}
        />
      ))}
      <img className="users-bottom-bg" src={ bottomBg } alt="" />
    </div>
  );
}


export default Users;