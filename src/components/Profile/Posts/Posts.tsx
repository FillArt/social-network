import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Button} from "../../Base/Button/Button";
import {PostType} from "../../../App";
import {Post} from "./Post";
import {v1} from "uuid";


type PostsProps = {
    data: PostType[];
    addPost: (post: PostType) => void;
}

export const Posts = ({data, addPost} :PostsProps) => {

    const [localValue, setLocalValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(e.currentTarget.value);
    }

    const onClickHandler = () => {
        const newItem: PostType = {
            id: v1(),
            message: localValue,
            likesCount: 0
        }
        addPost(newItem)
        setLocalValue('')
    }

    return (
        <PostsContainer>
            <h2>My Posts</h2>
            <PostsControl>
                <textarea name="" value={localValue} onChange={(e) => onChangeHandler(e)} placeholder="your news..." id="" />
                <Button name='Send' style='send' onClick={() => onClickHandler()} />
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