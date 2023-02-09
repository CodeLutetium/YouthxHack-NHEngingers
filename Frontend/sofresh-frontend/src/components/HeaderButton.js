import { useNavigate } from "react-router-dom";

const HeaderButton = ({ text, link }) => {
    let navigate = useNavigate();
    const onClick = () => {
        navigate(link);
    }

  return (
    <div 
        className="button-header"
        onClick={onClick}
    >
        {text}
    </div>
  )
}

export default HeaderButton