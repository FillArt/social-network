import React, {useState} from 'react';
import './App.css';
import {HomePage} from "./components/Pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/Pages/DialogsPage";
import {Error404} from "./components/Pages/Error404";
import {v1} from "uuid";

export type PostType = {
    id: string,
    message: string,
    likesCount: number,
}

export type DialogType = {
    id: string,
    name: string,
}

export type MessageType = {
    id: string,
    message: string,
    author: string,
    myMessage: boolean
}

function App() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [dialogs] = useState<DialogType[]>([
        {id: v1(), name: 'Artiom'},
        {id: v1(), name: 'Elissa'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Max'}
    ])
    const [messages] = useState<MessageType[]>([
        {
            id: v1(),
            message: 'Hello Man',
            author:'Author',
            myMessage: true
        },

        {
            id: v1(),
            message: 'How are you?',
            author:'Author',
            myMessage: true
        },

        {
            id: v1(),
            message: 'Here is a placeholder for dialogues I wrote',
            author:'Friend',
            myMessage: false
        },
    ])

    const addPost = (post: PostType) => {
        setPosts([post, ...posts])
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={posts} addPost={addPost} />} />
          <Route path="/dialogs" element={<DialogsPage data={dialogs} messages={messages} />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
