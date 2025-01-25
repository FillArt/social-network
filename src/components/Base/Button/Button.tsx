import React from 'react';
import styled from "styled-components";

type ButtonProps = {
    name: string;
    onClick: () => void;
    style?: 'default' | 'error' | 'send';
    disabled?: boolean;
}

export const Button = ({name, onClick, style = 'default', disabled = false}: ButtonProps) => {

    const onClickHandler = () => onClick();

    return <ButtonComponent buttonStyle={style} disabled={disabled} onClick={onClickHandler}>{name}</ButtonComponent>;
};

const ButtonComponent = styled.button<{ buttonStyle: 'default' | 'error' | 'send' }>`
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px 20px;

    background: ${({ buttonStyle }) =>
            buttonStyle === 'default' ? 'blue' :
                    buttonStyle === 'error' ? 'red' :
                            buttonStyle === 'send' ? 'green' : 'blue'};

    &:hover {
        background: ${({ buttonStyle }) =>
                buttonStyle === 'default' ? 'darkblue' :
                        buttonStyle === 'error' ? 'darkred' :
                                buttonStyle === 'send' ? 'darkgreen' : 'darkblue'};
    }
    
    &:disabled {
        cursor: not-allowed;
        background: grey;
        opacity: 0.5;
    }
`