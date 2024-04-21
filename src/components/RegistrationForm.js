import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  return (
    <div className="registration-form">
      <div className="header">
        <img src="public/assets/image3.png" alt="Логотип компании" className="logo" />
        <Link to="/" className="home-link">Вход</Link>
      </div>
      <div className="content">
        <h2>РЕГИСТРАЦИЯ</h2>
        <div className="form-wrapper">
          <div className="form-column">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Должность" />
          </div>
          <div className="form-column">
            <input type="tel" placeholder="Телефон" />
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
          </div>
        </div>
        <button className="register-button">Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
