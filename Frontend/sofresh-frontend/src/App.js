import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container">
      <Header title="Hello!"/>
      <Button text="Click me!" color="steelblue"/>
      <SearchBar />
    </div>
  );
}

export default App;
