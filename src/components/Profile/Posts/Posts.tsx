import React from 'react';
import styled from "styled-components";
import {Post} from "./Post";

export const Posts = () => {
    return (
        <PostsContainer>
            <h2>My Posts</h2>
            <PostsControl>
                <textarea name="" placeholder="your news..." id="" />
                <button>Send</button>
            </PostsControl>
            <PostsList>
                <Post/>
                <Post/>
                <Post/>
            </PostsList>
        </PostsContainer>
    );
};

const PostsContainer = styled.div`

`

const PostsControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    textarea {
        resize: none;
        background: lightgrey;
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        border: none;
    }
    button {
        cursor: pointer;
        border: none;
        background: green;
        color: white;
        padding: 10px 20px;
    }
`

const PostsList = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`