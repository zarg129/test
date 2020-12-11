/* eslint-disable no-sequences */
import React, { useState, useEffect } from 'react';
import {addUser, GetUser, GetPosition, getToken } from '../api/users';

const UserAdd = ({ setUser }) => {
  const [name, setName] = useState([]);
  const [tel, setTel] = useState([]);
  const [email, setEmail] = useState([]);
  const [position_id, setPosition] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [pos, setPos] = useState([]);
  const [token, setToken] = useState({ token: '' });
  
  const  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: tel,
      position_id: position_id,
      photo: photo,
    }
    //console.log(token)
    if (name, email, tel, position_id, photo) {
    addUser(data, token)
    GetUser()
      .then(setUser)
      .then(
        setName([]), 
        setEmail([]),
        setTel([]),
        setPosition([]),
        setPhoto([]),
      )
    }

  } 

  useEffect(() => {
    GetPosition()
      .then(res => setPos(res))
    getToken()
      .then(res => setToken(res.token))
  }, [])

  return (
    <>
      <div className="footer__container">
        <h2 className="footer__title">Register to get a work </h2>
        <p className="footer__text">Attention! After successful registration and alert, update the<br/> list of users in the block from the top</p>
        <div className="footer__form">
          <form className="form" onSubmit={event => handleSubmit(event)} encType="multipart/form-data">
            <div className="form__fields">
              <label className="form__label" htmlFor="name">
                Name
                <input
                  type="text"
                  autoComplete="off"
                  //disabled="true"
                  minLength="2"
                  maxLength="60"
                  placeholder="Your name"
                  name="name"
                  className="form__input"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                />
                <div className="requirements">
                  Must be a valid name.
                </div>
              </label>

              <label className="form__label" htmlFor="email">
                Email
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Your email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  className="form__input"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                />
                <div className="requirements">
                  Must be a valid email address.
                </div>
              </label>

              <label className="form__label" htmlFor="phone">
                Phone number
                <input
                  type="tel"
                  autoComplete="off"
                  placeholder="+380 XX XXX XX XX"
                  name="phone"
                  pattern="^[\+]{0,1}380([0-9]{9})$"
                  className="form__input"
                  value={tel}
                  onChange={event => setTel(event.target.value)}
                  required
                />
                <div className="requirements">
                  Must be a valid phone.
                </div>
              </label>
              <span className="form__text">Enter a phone number in international format</span>
              </div>
              <br />
              <label className="form__label-radio" htmlFor="position">
                Select your position <br/>
                <div className="form__radio-col">
                  {pos.map(elem => (
                    <div className="form__radio" key={elem.id}>
                      <input className="form__input-radio" name ="position" type="radio" id={elem.id} value={elem.id} onChange={event => setPosition(event.target.value)} />
                      <label className="form__label-radio" htmlFor={elem.id}>{elem.name}</label>
                    </div>
                  ))}
                </div><br/>
              </label>
              <label className="form__label-photo" htmlFor="photo">
                Photo
              <label className="form__label-file" htmlFor="photo">
                <input
                  type="file"
                  accept="jpeg/jpg"
                  placeholder="Your photo"
                  className="form__input-file"
                  name="photo"
                  id="photo"
                  onChange={event => setPhoto(event.target.files[0])}
                />
                <span className="form__label-custom"></span>
                <div className="requirements">
                  Must be a valid phone.
                </div>
              </label>
              </label>
              <button type="submit" className="form__button button">Sign up now</button>
          </form>
      </div>
      </div>
    </>
  )
}

export default UserAdd;