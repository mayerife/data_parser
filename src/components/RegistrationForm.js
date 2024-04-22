import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  return (
    <div className="registration-form">
      <div className="header">
      <img src={require('./assets/image2.png')} alt="Логотип компании" className="logo" />
        <Link to="/" className="home-link">Уже есть аккаунт? Войти</Link>
      </div>
      <div className="content">
        <p className='biggest-text'>РЕГИСТРАЦИЯ</p>
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
        <Link to="/parsing">
            <button className="register-button">Зарегистрироваться</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrationForm;
