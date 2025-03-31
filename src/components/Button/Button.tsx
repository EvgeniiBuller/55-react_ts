import { MainButton } from "./styles";
import { ButtonProps } from "./types";

// interface ButtonProps {
//     name: string,
//     // void - если функция ничего не возвращает
//     onClick?: () => void,
//     disablet?: boolean,
//     type?: 'submit' | 'button' | 'reset'
// }

function Button({
  name,
  onClick,
  disablet = false,
  type = "submit",
  danger 
}: ButtonProps) {
  return (
    <MainButton 
    onClick={onClick} 
    disabled={disablet} 
    type={type}
    isButton = {danger}
    >
      {name}
    </MainButton>
  );
}

export default Button;
