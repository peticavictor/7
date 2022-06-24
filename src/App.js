import {BrowserRouter, Routes, Route} from "react-router-dom"
import Context from "./components/Context";
import CVs from "./components/CVs";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import "./css/styles.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/Jobs" element={<Jobs />} ></Route>
            <Route path="/CVs" element={<CVs />} ></Route>
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
