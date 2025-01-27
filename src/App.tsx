import React from 'react';
import './App.css';
import {HomePage} from "./components/Pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/Pages/DialogsPage";
import {Error404} from "./components/Pages/Error404";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dialogs" element={<DialogsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
