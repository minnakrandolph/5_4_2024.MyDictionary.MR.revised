import './App.css';
import passionflower from "./passionflower.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
    <img src={passionflower} alt="logo" className="App-logo img-fluid"/>
      <h1>hello</h1> 
      
    <a href="#" className="btn btn-primary shadow">button</a>
      </header>
      </div>
  );
}

export default App;
