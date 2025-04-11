import { createContext, useState } from "react";
import { Homework18Wrapper, Title } from "./styles";
import { MessageContextType } from "./types";
import BlogManagement from "./components/BlogManagement/BlogManagement";

export const MessageContext = createContext<MessageContextType | undefined>(
  undefined
);

function Homework18() {
  const [message, setMessage] = useState("");

  return (
    <Homework18Wrapper>
      <Title>Homework18</Title>
      <MessageContext.Provider value={{ message, setMessage }}>
        <BlogManagement />
      </MessageContext.Provider>
    </Homework18Wrapper>
  );
}

export default Homework18;
