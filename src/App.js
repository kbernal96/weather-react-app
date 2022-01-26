import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        Coded by 
        <a className="coder" href="https://github.com/kbernal96/weather-react-app" target="_blank" rel="noreferrer">Karla Bernal</a>
      </footer>
    </div>
  );
}

export default App;
