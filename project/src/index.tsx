import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  yearRelease: 2014,
};
ReactDOM.render(
  <React.StrictMode>
    <App
      title={promoFilm.title}
      genre={promoFilm.genre}
      yearRelease={promoFilm.yearRelease}
    />
  </React.StrictMode>,
  document.getElementById('root'));
