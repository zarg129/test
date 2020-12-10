import React, {useState, useEffect, useLayoutEffect} from 'react';
import UsersList  from './components/UsersList.js'
import './App.scss';
import UserAdd from './components/UserAdd.js';
import { GetUser } from '../src/api/users';

function  App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(6);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  
 

  return (
    <div className="App">
      <header className="header">
      <div class="burger-menu">
        <input id="burger-menu__toggle" type="checkbox" />
        <label class="burger-menu__btn" for="burger-menu__toggle">
          <span></span>
        </label>
        <ul class="burger-menu__list">
          <li>
            <a href="#header" class="burger-menu__item">
              About me
            </a>
          </li>
          <li>
            <a href="#info" class="burger-menu__item">
              Realtionships
            </a>
          </li>
          <li>
            <a href="#consultation" class="burger-menu__item">
              Requirements
            </a>
          </li>
          <li>
            <a href="#testimonials" class="burger-menu__item">
              Users
            </a>
          </li>
          <li>
            <a href="#contacts" class="burger-menu__item">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
        <div className="header__top" title="logo">
          <img  src="./styles/Assets/favicon-32x32.png" alt="logo" className="header__logo"></img>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link-active" href="#header">About me</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#main">Realtionships</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#aquainted">Requirements</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#users">Users</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#footer">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="header__info" title="bunner">
        <div className="header__container">
          <h1 className="header__title">Test assignment <br/> for Frontend <br/> Developer position</h1>
          <p className="header__text">We kindly remind you that your test assignment should be submitted <br/>as a link to github/bitbucket repository. Please be patient, we consider<br/> and respond to every application that meets minimum requirements.<br/> We look forward to your submission. Good luck! The photo has to scale<br/> in the banner area on the different screens</p>
          <button className="header__button button" type="button" title="sign up">Sign up now</button>
        </div>
      </div>
      <main className="main" id="main">
        <div className="aquainted" id="aquainted">
          <h2 className="aquainted__title">Let's get acquainted</h2>
          <div className="aquainted__container">
            <div className="aquainted__photo" title="photo"></div>
            <div className="aquainted__body">
              <h3 className="aquainted__subtitle">I am cool frontend developer</h3>
              <p className="aquainted__text">We will evaluate how clean your approach to writing CSS and Javascript<br/> code is. You can use any CSS and Javascript 3rd party libraries without<br/> any restriction.<br/><br/>
              If 3rd party css/javascript libraries are added to the project via<br/> bower/npm/yarn you will get bonus points. If you use any task runner<br/> (gulp/webpack) you will get bonus points as well. Slice service directory<br/> page P​SD mockup​ into HTML5/CSS3</p>
              <a href="#footer" className="aquainted__sign" title="sign up">Sign up now</a>
            </div>
          </div>
        </div>
        <div className="users" id="users">
          <UsersList users={users} setUsers={setUsers} setCount={setCount} setPage={setPage} disabled={disabled} count={count} setDisabled={setDisabled} page={page} />
        </div>
      </main>
      <footer className="footer" id="footer">
        <UserAdd setUsers={setUsers} />
        <div className="footer__info">
          © abz.agency specially for the test task
        </div>
      </footer>
    </div>
  );
}

export default App;
