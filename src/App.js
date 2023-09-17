
import ReactIcon from './components/ReactIcon';
import IdleTimeTracker from './components/IdleTimeTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ReactIcon />
        <p>
        <IdleTimeTracker /> {/* Add the IdleTimeTracker component */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
