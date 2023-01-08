import { Route, Routes } from "react-router-dom";
import Nav from "./conponent/Nav";
import Home from "./conponent/Home";
import About from "./conponent/About"
import Board from "./conponent/Board";
import './App.css';

function App() {
  return (
      <div className="page">
          <Nav></Nav>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Board" element={<Board/>}/>
              <Route exact path="/About" element={<About/>}/>
          </Routes>
      </div>
  );
}

export default App;
