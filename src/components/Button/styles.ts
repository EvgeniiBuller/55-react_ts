import styled from "@emotion/styled";

interface ButtonComponentStyleProps {
  isButton?: boolean
}

export const MainButton = styled.button<ButtonComponentStyleProps>`

 width: 150px;
  height: 50px;
    background: rgb(17, 48, 127);
    border: 1px solid black;
    border-radius: 6px;
    font-size: 26px;
    color: white;
    cursor: pointer;
    gap: 26px;
    background-color: ${({isButton}) => isButton ? 'red' : 'rgb(98, 106, 129)'};
`;

