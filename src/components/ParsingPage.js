import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LeftColumn() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [searchCategories, setSearchCategories] = useState('');
  const [rowCount, setRowCount] = useState('');

  const handleAddCategory = () => {
    if (searchCategories.trim() !== '') {
      setCategories([...categories, searchCategories]);
      setSearchCategories('');
    }
  };

  return (
    <div className="left-column">
      <h2>Парсинг</h2>
      <div className="field">
        <label htmlFor="query">Запрос:</label>
        <input type="text" id="query" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="searchCategories">Категории поиска:</label>
        <div className="category-input">
          <input type="text" id="searchCategories" value={searchCategories} onChange={(e) => setSearchCategories(e.target.value)} />
          <button onClick={handleAddCategory}>+</button>
        </div>
        <div className="added-categories">
          {categories.map((category, index) => (
            <div key={index}>{category}</div>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="rowCount">Количество выводимых строк:</label>
        <input type="number" id="rowCount" value={rowCount} onChange={(e) => setRowCount(e.target.value)} />
      </div>
      <button className="start-parsing-button">Начать парсинг</button>
    </div>
  );
}

function RightColumn() {
    return (
      <div className="right-column">
        <h2>Предпросмотр</h2>
        <table>
          <thead>
            <tr>
              <th>Заголовок 1</th>
              <th>Заголовок 2</th>
              <th>Заголовок 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Данные 1</td>
              <td>Данные 2</td>
              <td>Данные 3</td>
            </tr>
            <tr>
              <td>Данные 4</td>
              <td>Данные 5</td>
              <td>Данные 6</td>
            </tr>
          </tbody>
        </table>
        <button className="favorite-button">В избранное</button>
        <button className="download-button">Скачать</button>
      </div>
    );
  }

  function ParsingPage() {
    return (
      <div className="parsing-page">
        <div className="header">
      <img src="public/assets/image3.png" alt="Логотип компании" className="logo" />
      <Link to="/" className="home-link">Вход</Link>
      <Link to="/profile" className="home-link">Личный кабинет</Link>
      </div>
      <div className="parsing-page-content">
        <LeftColumn />
        <RightColumn />
      </div>
      </div>
    );
  }
  
  export default ParsingPage;