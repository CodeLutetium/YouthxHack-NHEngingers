import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, color, link, id}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
  }
  return (
  <div 
    className="btn"
    onClick={onClick}
    id={id}
    style={{ backgroundColor: color }}>
   {text}
  </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button