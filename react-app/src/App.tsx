import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div id="home">
        <Home></Home>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
