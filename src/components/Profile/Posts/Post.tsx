import React from 'react';
import styled from "styled-components";

export const Post = () => {
    return (
        <PostContainer>
            <PostAvatar>
                <img src="" alt=""/>
            </PostAvatar>
            <PostContent>
                <p>Lorem ipsum ....</p>
            </PostContent>
        </PostContainer>
    );
};

const PostContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
`
const PostAvatar = styled.div`
    max-width: 50px;
    height: 50px;
    width: 100%;
    background: darkgoldenrod;
    border-radius: 50%;
`
const PostContent = styled.div`

`