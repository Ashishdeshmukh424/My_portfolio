import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
