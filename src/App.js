import logo from './logo.svg';
import './App.css';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography:{
    fontFamily:[
      'Roboto'
    ],
    h4: {
      fontweight:600,
      fontsize:28,
      lineHeight:'2rem',
    },
    h5:{
      fontweight:100,
      lineHeight:'2rem',
    },
  },
});

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
      </header>
    </div>
  );
}

export default App;
