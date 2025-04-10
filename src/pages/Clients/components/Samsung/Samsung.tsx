import { useNavigate } from "react-router-dom";
import { JobTitle, Image, SamsungWrapper, MissionText, ButtonContainer,  } from "./styles";
import Button from "../../../../components/Button/Button";

function Samsung() {

  const navigate = useNavigate();//функция  для кнопки для перехода на выбраную строницу

  const goToApplePage = ()=>{
    navigate('/clients/apple')//прописываем кнопку на которую строницу перейдёт
  }

  return (
    <SamsungWrapper>
      <JobTitle>Samsung</JobTitle>
      <MissionText>
      Миссия Samsung: 
      Мы используем человеческие и технологические ресурсы компании 
      для создания товаров и услуг превосходящего качества, 
      осуществляя тем самым свой вклад в улучшение глобального состояния общества. 
      </MissionText>
      <Image src='https://www.iphones.ru/wp-content/uploads/2015/10/02-1-Samsung-Rose-Gold.jpg' />
      <ButtonContainer>
        <Button name='About Apple' onClick={goToApplePage}/>
      </ButtonContainer>

    </SamsungWrapper>
  )
}
export default Samsung;