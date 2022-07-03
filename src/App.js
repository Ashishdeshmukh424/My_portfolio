import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience />
    </div>
  );
}

export default App;
