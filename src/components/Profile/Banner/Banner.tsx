import React from 'react';
import styled from "styled-components";

export const Banner = () => {
    return (
        <BannerContainer />
    );
};

const BannerContainer = styled.section`
    background-size: cover;
    background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1600px-London_Skyline_%28125508655%29.jpeg") no-repeat 30% center;
    height: 200px;
    margin: 0 0 10px 0;
`