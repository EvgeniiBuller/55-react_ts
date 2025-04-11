import { useContext, useState } from "react";
import { MessageContext } from "../../Homework18";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Card from "../Card/Card";
import { BlogManagementWrapper } from "./styles";

function BlogManagement() {
  const [inputValue, setInputValue] = useState("");

  const { setMessage } = useContext(MessageContext)!;
  const handlePostClick = () => {
    setMessage(inputValue);
    setInputValue("");
  };

  return (
    <BlogManagementWrapper>
      <Input
        name="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a message"
      />
      <Button name="Post" onClick={handlePostClick} />
      <Card />
    </BlogManagementWrapper>
  );
}

export default BlogManagement;
