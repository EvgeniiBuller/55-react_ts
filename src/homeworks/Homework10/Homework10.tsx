import Button from "../../components/Button/Button";
import { StyledButton } from "./styles";


function Homework10  ()  {

    function handleSendClick(): void {
        throw new Error("Function not implemented.");
    }

    function handleDeleteClick(): void {
        throw new Error("Function not implemented.");
    }

  return(
    <StyledButton>
<>
<Button name="SEND" onClick={handleSendClick} />
<Button name="DELETE" danger={true} onClick={handleDeleteClick} />
</></StyledButton>
  )

};


export default Homework10;