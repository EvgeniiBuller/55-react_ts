import "./styles.css";
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
}: ButtonProps) {
  return (
    <button
      className="main-button"
      onClick={onClick}
      disabled={disablet}
      type={type}
    >
      {name}
    </button>
  );
}

export default Button;
