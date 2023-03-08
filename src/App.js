import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import IncrementByAmount from './IncrementByAmount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IncrementByAmount></IncrementByAmount>

      </header>
    </div>
  );
}

export default App;
