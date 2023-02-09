import PropTypes from 'prop-types';

const Button = ({ text, color }) => {
    return (
    <div 
        className="btn"
        style={{ backgroundColor: color }}
    >
        {text}
    </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button