import React from 'react';
import styled from "styled-components";
import {PostType} from "../../../App";

type PostItemProps = {
    post: PostType;
}

export const Post = ({ post }: PostItemProps) => {
    return (
        <PostContainer>
            <PostAvatar>
                <img src="" alt=""/>
            </PostAvatar>
            <PostContent>
                <p>{post.message} <br /> Likes: {post.likesCount}</p>
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