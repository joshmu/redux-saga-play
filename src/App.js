import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { List } from './components/List';
import { Toggle } from './components/Toggle';
import { addItem, removeItem } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const showing = useSelector(state => state.showHide);

  return (
    <div className='App'>
      <Toggle />
      {showing && (
        <>
          <div className='controls'>
            <button
              onClick={() => dispatch(addItem())}
              className='control-item'
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeItem())}
              className='control-item'
            >
              -
            </button>
          </div>
          <List />
        </>
      )}
    </div>
  );
}

export default App;
