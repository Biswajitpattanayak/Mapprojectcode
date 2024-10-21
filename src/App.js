// import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
// import { Navbar } from "react-bootstrap";
import Header from "./Pages/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <div>
   
        <Router>
        <Header/>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
