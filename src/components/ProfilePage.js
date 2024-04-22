import React from 'react';
import FavoriteQueries from './FavoriteQueries';
import { Link } from 'react-router-dom';


function ProfilePage() {
  return (
    <div className="profile-page">
        <div className="header">
        <img src={require('./assets/image2.png')} alt="Логотип компании" className="logo" />
      <Link to="/parsing" className="home-link">Парсинг</Link>
      </div>
      <div className='profile-page-content'>
      <h2 className="content">ЛИЧНЫЙ КАБИНЕТ</h2>
      <div className="profile-fields">
        <div className="field">
          <input type="text" id="fullName" placeholder="Имя, фамилия"/>
        </div>
        <div className="field">
          <input type="text" id="position" placeholder="Должность"/>
        </div>
        <div className="field">
          <input type="tel" id="phoneNumber" placeholder="Номер телефона"/>
          </div>
          <div className="field">
          <input type="email" id="email" placeholder="Почта"/>
          </div>
        <button className="save-button">Сохранить</button>
        <Link to="/">
            <button className="save-button">Выйти из аккаунта</button>
        </Link>
      </div>
      <h3>Избранные запросы</h3>
      <FavoriteQueries />
    </div>
    </div>
  );
}

export default ProfilePage;
