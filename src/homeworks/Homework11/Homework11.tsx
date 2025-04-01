import  { ChangeEvent, useState } from 'react';
import { Homework11Container,  StyledParagraph } from './styles';
import Input from '../../components/Input/Input';

const Homework11 = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [changeCount, setChangeCount] = useState(0);

    const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
        setChangeCount(changeCount + 1);
    };

    const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    };

    return (
        <Homework11Container>
            <Input
                type="text"
                value={inputValue1}
                onChange={handleInputChange1}
                placeholder="Введите текст 1" name={''}           
                 />
            <StyledParagraph>Количество изменений в первом Input: {changeCount}</StyledParagraph>
            <Input
                type="text"
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="Введите текст 2" name={''}           
                 />
        </Homework11Container>
    );
};

export default Homework11;

