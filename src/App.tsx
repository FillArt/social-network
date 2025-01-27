import React from 'react';
import './App.css';
import {Home} from "./components/Pages/Home";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Pages/Dialogs";
import {Error404} from "./components/Pages/Error404";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
