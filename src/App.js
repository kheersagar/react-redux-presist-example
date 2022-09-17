import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from './store/dataSlice';

function App() {
  const {data} = useSelector(state => state.data)
  const {logged} = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(dataActions.setData([24,246,16136136,14]))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
    {data.toString() + logged.toString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>test</button>
      </header>
    </div>
  );
}

export default App;
