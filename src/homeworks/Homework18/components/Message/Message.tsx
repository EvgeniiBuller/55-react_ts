import { useContext } from "react";
import { MessageContext } from "../../Homework18";
import { MessageContainer, Text } from "./styles";

function Message() {
  const { message } = useContext(MessageContext)!; // '!' утверждает, что значение контекста не будет undefined

  return (
    <MessageContainer>
      <Text>{message}</Text>
    </MessageContainer>
  );
}

export default Message;
