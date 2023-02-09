import PropTypes from 'prop-types';

const Button = ({ text, color }) => {
    const onClick = () => {
        console.log('clicked')
    }

    return (
    <div 
        className="btn"
        style={{ backgroundColor: color }}
        onClick={ onClick }
    >
        {text}
    </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button