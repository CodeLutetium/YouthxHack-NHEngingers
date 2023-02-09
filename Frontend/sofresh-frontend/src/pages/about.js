import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function about() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='img-container'>
        <img src={require('../assets/background_img.jpg')} className="bg-img" alt="image not found"/>
        <p className='overlay-txt'> So Near, It's SoFresh </p>
      </div>
      <div className='background'>
        <img src={require('../assets/logo-no-background.png')} className='logo' />
        <h1>About Us</h1>
        <p className='centered'>SoFresh is an initiative that aims to encourage Singaporeans to purchase locally grown food over imports. By encouraging the purchase of locally grown food, we hope that the increased in demand will help Singapore meet the 30 by 30 goal earlier.</p>
        <p className='centered'>Join us now in searching for the nearest local produce!</p>
      </div>
    </div>
  )
}

export default about
