import { useNavigate } from "react-router-dom";

// TODO: SETUP REACT ROUTERS FOR NAVIGATION LINKS

const HeaderButton = ({ text, link }) => {
    // let navigate = useNavigate();
    // const onClick = () => {
    //     navigate(link);
    // }

  return (
    <div 
        className="button-header"
        // onClick={onClick}
    >
        {text}
    </div>
  )
}

export default HeaderButton