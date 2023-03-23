import './App.css';
import logo from './logo.svg';

const Id = 2212081019;
const info = {
  name: "Naimur Rahman",
  location: "Gazipur, Dhaka"
}

const infoStyle = {
  color: 'white',
  backgroundColor: 'green',
  padding: '7px',
  borderRadius: '5px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
         <div className="container">
             My first React Project!
         </div>
         <h3>Id: {Id}</h3>
         <div className="info">
           <h3 style={infoStyle}>
             Name: {info.name}
           </h3>
            <h4 style={{ color: 'blue', backgroundColor: 'white', borderRadius: '5px'}}>
              Location: {info.location}
            </h4>
         </div>
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
