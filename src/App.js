import React, { useContext, useState } from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Pages/Home';
import Favourites from './components/Pages/Favourites';
import Cart from './components/Modules/Cart';
import ThemeContext from './components/Context/ThemeContext';
import CartForm from './components/Modules/CartForm';
import CartContext from './components/Context/CartContext';
import GamesContext from './components/Context/GamesContext';
import GameInfo from './components/Pages/GameInfo';
import SearchBlock from './components/Modules/SearchBlock';
import NotFound from './components/Pages/NotFound';

function App() {
  const ThemeCtx = useContext(ThemeContext)
  const CartCtx = useContext(CartContext)
  const GamesCtx = useContext(GamesContext)
  const [searchBlockOpen, setSearchBlockOpen] = useState(false);
  const handleSearchBlock = (e) => {
      e.preventDefault()
      setSearchBlockOpen(!searchBlockOpen)
  }

  return (
    <>
      <BrowserRouter>
        <Header handleSearchBlock={handleSearchBlock} />
        <Cart />
        {
          searchBlockOpen === true ? <SearchBlock handleSearchBlock={handleSearchBlock} />
          : ''
        }
        {
          CartCtx.cart.length ? <CartForm />
          : ''
        }
        <main className={ThemeCtx.theme === 'light' ? 'main light-mode': 'main'}>
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            {
              GamesCtx.game?.map((game, i) => {
                return <Route key={i} path={`/game/${game.id}`} element={<GameInfo
                key={i}
                name={game.name}
                image={game.image}
                id={game.id}
                genre={game.genre}
                price={game.price}
                video={game.video}
                />}>
              </Route>
              })
            }
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
