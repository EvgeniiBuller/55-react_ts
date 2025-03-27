import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input"
import './styles.css'
import { ChangeEvent, useState } from "react";



function Consultation04 () {
    // для ввода в строку 
    const [invoiceAmount, setInvoiceAmount] = useState<string>('');
    // показывает вводимый результат в указанном месте
    const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false);

    const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => { 
        setInvoiceAmount(event.target.value)
      }

    const showTotalPriceHandler = () => {
        setShowTotalPrice(!showTotalPrice)
    }
console.log(showTotalPrice);

    return (
        <div className="consultation04-container">
            <Input 
            name="invoice_amount" 
            onChange={onChangeAmount} 
            value={invoiceAmount}/>
            <Button name='SHOW FULL PRICE' onClick={showTotalPriceHandler}/>
            {showTotalPrice &&
            <div>
               {invoiceAmount}
            </div>}
        </div>
    )


}

export default Consultation04;