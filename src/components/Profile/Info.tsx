import React from 'react';
import styled from "styled-components";

export const Info = () => {
    return (
        <InfoContainer>
            <div>
                <img width="200px" height="200px"  src="https://media.licdn.com/dms/image/v2/D4E35AQE7LixIFk84Rw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1676252008213?e=1738206000&v=beta&t=P1o_Vrf813W0ZdfxYHajLxYl42rKq0UP3NclROrISak" alt="User photo"/>
            </div>

            <div>
                <h1>Artiom. F</h1>
                <p>Date of Birth: 8 December</p>
                <p>City: Saint John</p>
                <p>Education: College Gagarin</p>
                <p>Web Site: <a href="https://github.com/FillArt" target="_blank">https://github.com/FillArt</a></p>
            </div>
        </InfoContainer>
    );
};


const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 0 0 25px 0;
    h1 {
        margin: 0 0 10px 0;
    }
    p {
        margin: 0;
        &:not(:last-child) {
            margin: 0 0 5px 0;
        }
    }
    a {
        text-decoration: none;
        color: darkslategrey;
    }
`