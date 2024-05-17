import './App.css';
import passionflower from "./passionflower.jpg";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"> 
   <img src={passionflower} alt="logo" className="App-logo img-fluid"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer text-center"><small>coded by Minna Randolph</small></footer>
      </div>
      </div>
  );
}

export default App;
