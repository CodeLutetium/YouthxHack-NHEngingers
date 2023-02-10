import Header from '../components/Header';
import Button from '../components/Button';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please do not leave any blank fields!");
      return
    }

    navigate("/shop")
  }

  return(
    <div>
      <Header />
      <div className='background login'>
        <img className='login-img' src={require('../assets/homepage.png')} />
        <div className='login-container'>
          <div className='login-item'>
            <h3>Username</h3>
            <input
              type="input"
              className="searchbar" 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='login-item'>
            <h3>Password</h3>
            <input
              type="password"
              className="searchbar"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button id='login-btn' text="Login" color="#31C48D" isSubmit={true} onSubmit={onSubmit}/>
          <Button id='reg-btn' text="Register" color="#10412f" isSubmit={true} onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
)};
