import React from 'react';
import styled from "styled-components";

import {Banner} from "./Banner";
import {Info} from "./Info";
import {Posts} from "./Posts/Posts";
import {PostType} from "../../App";

type ProfileProps = {
    posts: PostType[]
}

export const Profile = (props: ProfileProps) => {
    return (
        <ProfileContainer>
            <Banner />
            <Info />
            <Posts data={props.posts} />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div``