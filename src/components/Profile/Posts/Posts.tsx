import React from 'react';
import styled from "styled-components";
import {Post} from "./Post";
import {Button} from "../../Base/Button/Button";

export const Posts = () => {
    return (
        <PostsContainer>
            <h2>My Posts</h2>
            <PostsControl>
                <textarea name="" placeholder="your news..." id="" />
                <Button name='Send' style='send' onClick={() => alert('Send')} />
            </PostsControl>
            <PostsList>
                <Post/>
                <Post/>
                <Post/>
            </PostsList>
        </PostsContainer>
    );
};

const PostsContainer = styled.div``

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
`

const PostsList = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`