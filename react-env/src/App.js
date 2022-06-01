import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="/hello" method="post" className="form1">
          <button type="submit">Connected?</button>
        </form>
        <form action="/index" method="post" className="form2">
          <button type="submit">Index</button>
        </form>
        <a
          href="http://localhost:8080/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          Localhost Users
        </a>
      </header>
    </div>
  );
}

export default App;
