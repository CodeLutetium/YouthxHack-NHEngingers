import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, color, link, id, isSubmit, onSubmit }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
  }

  return (
  <div 
    className="btn"
    onClick={isSubmit ? onSubmit : onClick}
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