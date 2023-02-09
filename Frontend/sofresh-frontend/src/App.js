import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import P from './constants/paths'
import Main from './pages/main'
import Login from './pages/login'
import Shop from './pages/shop'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={P.MAIN} element={<Main />} />
        <Route path={P.LOGIN} element={<Login />} />
        <Route path={P.SHOP} element={<Shop />} />
        <Route path={P.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
