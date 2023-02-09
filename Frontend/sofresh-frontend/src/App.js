import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-body">
        <Button text="Click me!" />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
