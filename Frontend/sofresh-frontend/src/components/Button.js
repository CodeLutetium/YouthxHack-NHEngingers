import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, color, link }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
    console.log("haha");
  }
  return (
  <div 
    className="btn"
    onClick={onClick}
    style={{ backgroundColor: color }}>
   {text}
  </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button