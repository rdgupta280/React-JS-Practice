import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Reactbenifit/>
        <Button/>
      </header>
    </div>
  );
}


function Reactbenifit(){
  return (
    <div class="App-header">
    <h1>Benifits of using react ...</h1>
    <ol>
        <li>Benifits of usiing react</li>
        <li>Component-based architecture</li>
        <li>Virtual DOM for efficient Updates</li>
        <li>Rich ecosystem and community</li>
        <li>Cross-platform development</li>
        <li>Strong community support</li>
    </ol>
   </div>

  );
}


function Button(){
  return (
    <button>Get Started...</button>
  );
}

export default App;
