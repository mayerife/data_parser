import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="header">
      <img src={require('./assets/image2.png')} alt="Логотип компании" className="logo" />
      </div>
      <div className="content">
        <div className='bigger-text'>
        <p>Войдите в аккаунт, чтобы продолжить</p>
        <p>Нет аккаунта? <Link to="/registration">Регистрация</Link></p>
        </div>
        <div className="input-fields">
        <div>
          <input type="text" placeholder="Логин" />
        </div>
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
