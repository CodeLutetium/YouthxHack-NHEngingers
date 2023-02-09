import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header title="Hello!"/>
      <Button text="Click me!" color="steelblue"/>
    </div>
  );
}

export default App;
