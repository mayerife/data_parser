import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="header">
      <img src="public/assets/image3.png" alt="Логотип компании" className="logo" />
      </div>
      <div className="content">
        <h2>Войдите в аккаунт, чтобы продолжить</h2>
        <h2>Нет аккаунта? <Link to="/registration">Регистрация</Link></h2>
        <div className="input-fields">
          <input type="text" placeholder="Логин" />
          <input type="password" placeholder="Пароль" />
        </div>
        <Link to="/parsing">
            <button className="login-button">Вход</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
