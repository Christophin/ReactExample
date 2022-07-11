import './App.css';
import Nav from './Nav'
import StaticMarkup from './StaticMarkup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <StaticMarkup />
      </header>
      <footer>
        <p>© 2022 Coralli development. All rights reseved</p>
      </footer>
    </div>
  );
}

export default App;
