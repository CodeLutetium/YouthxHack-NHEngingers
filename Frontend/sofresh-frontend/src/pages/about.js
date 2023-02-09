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
        <h1>What does the symbols represent?</h1>
        <div className='star-wrapper'>
          <div className='star-container'>
            <img className='star-img' src={require('../assets/1star.png')} />
            <p>
              <span className='bold-txt'>Fresh</span>
              <br />Local Produce
            </p>
          </div>
          <div className='star-container'>
            <img className='star-img' src={require('../assets/2star.png')} />
            <p>
              <span className='bold-txt'>Fresh, <br />Quality Assured</span>
              <br />Local Produce
            </p>
          </div>
          <div className='star-container'>
            <img className='star-img' src={require('../assets/3star.png')} />
            <p>
              <span className='bold-txt'>Fresh, <br />Quality Assured, <br /> Sustainable</span>
              <br />Local Produce
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
