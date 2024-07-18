import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Header from "./component/header";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           
            <Route path="/" element={<Home />}>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
