import Header from '../components/Header';

export default function login() {
  return(
    <div>
      <Header />
      <div className='background login'>
        <img className='login-img' src={require('../assets/homepage.png')} />
        <div className='login-container'>
          <div className='login-item'>
            <h3>Username</h3>
            <input
              type="form"
              className="searchbar" />
          </div>
          <div className='login-item'>
            <h3>Password</h3>
            <input
              type="password"
              className="searchbar" />
          </div>
        </div>
      </div>
    </div>
)};
