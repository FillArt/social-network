import React, {useState} from 'react';
import './App.css';
import {HomePage} from "./components/Pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/Pages/DialogsPage";
import {Error404} from "./components/Pages/Error404";

export type PostType = {
    id: string,
    message: string,
    likesCount: number,
}

function App() {
    const [statePosts, setStatePosts] = useState<PostType[]>([])

    const addPost = (post: PostType) => {
        setStatePosts([post, ...statePosts])
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={statePosts} addPost={addPost} />} />
          <Route path="/dialogs" element={<DialogsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
