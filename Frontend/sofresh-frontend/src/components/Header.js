import PropTypes from 'prop-types';
import HeaderButton from './HeaderButton';

const Header = ({ title }) => {
  return (
    <header className="header">
        {/* <img src="./sofresh-logo-zip-file/logo-white.png" /> */}
        <h1>{title}</h1>
        <div className="header-buttons">
            <HeaderButton text="Recommendations"/>
            <HeaderButton text="Contact Us"/>
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
