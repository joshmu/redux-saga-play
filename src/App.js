import './App.css';
import { List } from './components/List';
import { Toggle } from './components/Toggle';

function App() {

  const handleIncrement = () => {}
  const handleDecrement = () => {}

  return (
    <div className="App">
      <Toggle />
      <div className="controls">
        <button onClick={handleIncrement} className='control-item'>+</button>
        <button onClick={handleDecrement} className='control-item'>-</button>
      </div>
      <List /> 
    </div>
  );
}

export default App;
