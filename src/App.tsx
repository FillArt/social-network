import React, {useState} from 'react';
import './App.css';
import {HomePage} from "./components/Pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/Pages/DialogsPage";
import {Error404} from "./components/Pages/Error404";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

function App() {
    const [statePosts, setStatePosts] = useState<PostType[]>([
        {id: 1, message: 'Hello!', likesCount: 12},
        {id: 2, message: 'World!', likesCount: 21},
        {id: 3, message: 'Testing', likesCount: 34},
        {id: 4, message: 'Data', likesCount: 2}
    ])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={statePosts} />} />
          <Route path="/dialogs" element={<DialogsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
