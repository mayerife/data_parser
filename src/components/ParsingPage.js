import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LeftColumn() {
    const [categories, setCategories] = useState([]);
    const [searchCategories, setSearchCategories] = useState('');
  
    const handleAddCategory = () => {
      if (searchCategories.trim() !== '') {
        setCategories([...categories, searchCategories]);
        setSearchCategories('');
      }
    };
  
    const handleRemoveCategory = (indexToRemove) => {
      setCategories(categories.filter((_, index) => index !== indexToRemove));
    };

    
  
    return (
        <div className="left-column">
          <p className='biggest-text'>Парсинг</p>
          <div className="field border">
            <label htmlFor="query">Запрос</label>
            <input type="text" id="query" />
          </div>
          <div className='border'>
          <div className="field">
            <label htmlFor="searchCategories">Категории поиска</label>
            <div className="category-input">
              <input
                type="text"
                id="searchCategories"
                value={searchCategories}
                onChange={(e) => setSearchCategories(e.target.value)}
              />
              <button onClick={handleAddCategory}>+</button>
            </div>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <div key={index} className="category">
                {category}
                <span className="remove-category" onClick={() => handleRemoveCategory(index)}>✖</span>
              </div>
            ))}
          </div>
          </div>
          <div className="field border">
            <label htmlFor="Count">Количество выводимых строк</label>
            <input type="number" id="Count" min="1" inputmode="numeric"/>
          </div>
          <button className="start-parsing-button">Начать парсинг</button>
        </div>
      );
  }
  
  

function RightColumn() {
    return (
      <div className="right-column">
        <p className='biggest-text'>Предпросмотр</p>
        <div className="favorite-queries border">
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
        </div>
        <div>
        <button className="favorite-button">В избранное</button>
        </div>
        <button className="download-button">Скачать</button>
      </div>
    );
  }

  function ParsingPage() {
    return (
      <div className="parsing-page">
        <div className="header">
        <img src={require('./assets/image2.png')} alt="Логотип компании" className="logo" />
      <Link to="/profile" className="home-link">Личный кабинет</Link>
      </div>
      <div className="parsing-page-content ">
        <LeftColumn />
        <RightColumn />
      </div>
      </div>
    );
  }
  
  export default ParsingPage;