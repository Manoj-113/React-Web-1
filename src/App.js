import logo from './logo.svg';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Grid from './components/Grid'

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

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

      <ThemeProvider theme={theme}>
        <NavBar/>
        <Grid icon = {<SecurityIcon style={{fill: '#4360A6',height: '125', width: '125'}}/>} title="Secure" btnTitle= "Show me More"/>
        <Grid icon = {<SecurityIcon style={{fill: '#449A76',height: '125', width: '125'}}/>} title="Reliable" btnTitle= "Show me More"/>
        <Grid icon = {<SecurityIcon style={{fill: '#D05B2D',height: '125', width: '125'}}/>} title="Performance" btnTitle= "Show me More"/>


      </ThemeProvider>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
