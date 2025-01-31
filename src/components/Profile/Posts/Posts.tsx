import React from 'react';
import styled from "styled-components";
import {Button} from "../../Base/Button/Button";
import {PostType} from "../../../App";
import {Post} from "./Post";


type PostsProps = {
    data: PostType[];
}

export const Posts = ({data} :PostsProps) => {
    return (
        <PostsContainer>
            <h2>My Posts</h2>
            <PostsControl>
                <textarea name="" placeholder="your news..." id="" />
                <Button name='Send' style='send' onClick={() => alert('Send')} />
            </PostsControl>
            <PostsList>
                {data.map((post: PostType) => {
                    console.log(post);
                    // return '1'
                    return <Post post={post} key={post.id} />
                })}
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