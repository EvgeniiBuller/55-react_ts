import { createContext } from "react";

import Message from "../Message/Message";
import { CardWrapper, Name } from "./styles";
import { CardInterface } from "./types";

export const CardContext = createContext<CardInterface>({
  data: undefined,
  changeData: () => {},
});

function Card() {
  const userName = "Enter your name";
  const userSurname = "enter your surname";

  return (
    <CardWrapper>
      <Name>
        {userName} {userSurname}
      </Name>
      <Message />
    </CardWrapper>
  );
}

export default Card;
