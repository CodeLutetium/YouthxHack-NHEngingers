import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header = ({ title }) => {
  let navigate = useNavigate();
  const onClick = (path) => {
    navigate(path)
  }

  return (
    <header className="header">
      <div className='header-left' onClick={
          () => onClick("/")
      }>
        <img className='header-logo' src={require('../assets/logo-cropped.png')} />
        <h1 id='title'>SoFresh</h1>
      </div>
        <div className="header-buttons">
          <HeaderButton text="About Us" link="/about_us"/>
          <HeaderButton text="Login" link="/login"/>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: 'SoFresh'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
