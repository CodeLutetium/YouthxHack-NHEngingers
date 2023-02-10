import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import P from './constants/paths'
import Login from './pages/login'
import Shop from './pages/shop'
import About from './pages/about'
import Home from './pages/home'
import Product from './pages/product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={P.LOGIN} element={<Login />} />
        <Route path={P.SHOP} element={<Shop />} />
        <Route path={P.ABOUT} element={<About />} />
        <Route path={P.HOME} element={<Home/>} />
        <Route path={P.PRODUCT} element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
