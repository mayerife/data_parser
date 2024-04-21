import React from 'react';
import FavoriteQueries from './FavoriteQueries';
import { Link } from 'react-router-dom';


function ProfilePage() {
  return (
    <div className="profile-page">
        <div className="header">
      <img src="public/assets/image3.png" alt="Логотип компании" className="logo" />
      <Link to="/parsing" className="home-link">Парсинг</Link>
      <Link to="/profile" className="home-link">Личный кабинет</Link>
      </div>
      <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
      <div className="profile-fields">
        <div className="field">
          <label htmlFor="fullName">ФИО:</label>
          <input type="text" id="fullName" />
        </div>
        <div className="field">
          <label htmlFor="position">Должность:</label>
          <input type="text" id="position" />
        </div>
        <div className="field">
          <label htmlFor="phoneNumber">Номер телефона:</label>
          <input type="tel" id="phoneNumber" />
        </div>
        <button className="save-button">Сохранить</button>
      </div>
      <h3>Избранные запросы</h3>
      <FavoriteQueries />
    </div>
  );
}

export default ProfilePage;
