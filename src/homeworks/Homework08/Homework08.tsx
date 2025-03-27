import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './styles.css'

function Homework08 () {

const [password, setPassword] = useState<string>('');
const [showPassword, setShowPassword] = useState<boolean>(false);

const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => (
       setPassword(event.target.value));

const handleButtonClick = () => {
    setShowPassword(!showPassword);
  };       

    return(
        <div className="homework08-container">
        <h1>Change password</h1>
        {/* <label>
            Password:
             </label> */}
        <Input 
        name='personal-password' 
        onChange={onChangePassword} 
        value={password}
        placeholder="Enter your password"
        type="password"
        label="Password:"
        />
       
        <Button name="SHOW PASSWORD" onClick={handleButtonClick}/>
        {showPassword &&
        <div>
            {password}
        </div>}
        </div>
      
    );
}
export default Homework08;