import React from 'react';
import styled from "styled-components";

import {Banner} from "./Banner";
import {Info} from "./Info";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <ProfileContainer>
            <Banner />
            <Info />
            <Posts />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div``