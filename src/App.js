import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Madrid"/>
      <footer>
        Open-source code by 
        <a className="coder" href="https://github.com/kbernal96/weather-react-app" target="_blank" rel="noreferrer"> Karla Bernal</a>
      </footer>
    </div>
  );
}

export default App;
