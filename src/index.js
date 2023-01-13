import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss'
import './index'
import { GamesContextProvider } from './components/Context/GamesContext';
import { CartContextProvider } from './components/Context/CartContext';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { FavouritesContextProvider } from './components/Context/FavouritesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <ThemeContextProvider>
    <GamesContextProvider>
      <FavouritesContextProvider>
        <CartContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartContextProvider>
      </FavouritesContextProvider>
    </GamesContextProvider>
  </ThemeContextProvider>
)
