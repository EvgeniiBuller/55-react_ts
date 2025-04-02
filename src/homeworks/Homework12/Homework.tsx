import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Homework12Container, CatsWrapper,Error } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

function Homework12 () {
    const [cats, setCats] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);


const FACTS_ABOUT_CATS: string = "https://catfact.ninja/fact";

const getCats = async () => {

    setError(undefined);

    try {
        setIsLoading(true);
        const response = await axios.get(FACTS_ABOUT_CATS); 
        console.log(response.data);      
        const data = response.data;
        setCats(`${data.fact}; - ${data.punchline}`);
}
 catch (error: any) {
    setError(error.message);

} finally {
    setIsLoading(false);
  }
};

useEffect(() => { getCats() },[])

     return(
        <Homework12Container>
            <Button name="GET MORE FACTS" onClick={getCats} disabled={isLoading}/>
            <CatsWrapper>{isLoading ? <Spinner/> : cats}</CatsWrapper>
            <Error>{error}</Error>
        </Homework12Container>
     );
}

export default Homework12;