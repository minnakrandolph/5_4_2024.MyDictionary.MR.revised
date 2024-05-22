import './App.css';
import passionflower from "./passionflower.jpg";
import Results from "./Results";
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
      <footer className="footer text-center"><small>Open sourced code by <a href="https://github.com/minnakrandolph/5_4_2024.MyDictionary.MR.revised">Minna Randolph </a></small></footer>
      </div>
      </div>
  );
}

export default App;
