import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { GetUser } from '../api/users';

const UsersList = ({ users, setPage, disabled, setUsers, count, page, setDisabled }) => {
  
  const handleClick = () => {
    setPage((prevPage) => prevPage + 1)
  };

  useEffect(() => {
    GetUser(count, page)
      .then(data => { 

        console.log(data)

        if (data.length < 6) {
          setDisabled(true)
        }
        setUsers(data)
      })      
  }, [setUsers, setDisabled, count, page, users]);    //here is my problem


  //console.log(users)
  
  return (
    <div className="users__container">
      <h2 className="users__title">Our cheerful users</h2>
      <p className="users__alert">Attention! Sorting users by registration date!</p>
      <ul className="users__list">
        {users.sort((a, b) => b.registration_timestamp - a.registration_timestamp).map(user => (
          <li className="users__item card" key={user.id}>
            <UserCard {...user} />
          </li>
        ))}
      </ul>
      {disabled 
        ? <button className="users__button button" disabled="disabled" type="button" onClick={() => handleClick()}>Disabled</button>
        : <button className="users__button button" type="button" onClick={() => handleClick()}>Show more</button>
      }
    </div>
  )
}

export default UsersList;