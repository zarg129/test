import React from 'react';

const UserCard = ({ photo, name, position, email, phone }) => {
  return (
    <>
      <img className="card__photo" src={photo} alt="Img of user" />
      <h3 className="card__name" lang="eng">{name}</h3>
      <p className="card__position" lang="eng">{position}</p>
      <p className="card__email" lang="eng">{email}</p>
      <p className="card__phone">{phone}</p>
    </>
  )
};

export default UserCard;
