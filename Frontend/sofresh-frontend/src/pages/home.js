import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { FaHeart } from 'react-icons/fa'

function home() {
  return (
    <div className="background-shop">
      <Header />
      <div className='home-wrapper'>
        <div className='home-txt-container'>
          <img className='home-logo' src={require('../assets/logo-no-background.png')} />
          <h1 className='home-txt'>Bringing Local Products Nearer to You</h1>
        </div>
        <img className='home-img' src={require('../assets/homepage.png')} />
      </div>
      <Button />
    </div>
  )
}

export default home
