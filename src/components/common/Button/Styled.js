import styled from "styled-components";


export const Button = styled.button`
    /* 공통 */ 
    box-sizing: border-box;
    display: inline-flex;
    background-color: ${({theme, $bgColor}) => $bgColor || theme.white};
    border-radius: 6px;
    padding: 0px 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 100%;

    color: ${({color}) => color ? color : 'rgb(68, 68, 68)'};
    border: solid 1px ${({$bgColor}) => $bgColor || 'transparent'};
`;