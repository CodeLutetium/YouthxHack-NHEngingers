import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './public'

function main() {
  return (
    <main className='main-background'>
      <div className="container">
      <Header />
      <div className="container-body">
        <Button text="Click me!" />
        <SearchBar />
      </div>
      </div>
    </main>
  );
}

export default main;
