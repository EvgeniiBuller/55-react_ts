import { AppleWrapper, JobTitle, Image, MissionText } from "./styles";

function Apple() {
  return (
    <AppleWrapper>
      <JobTitle>Apple</JobTitle>
      <MissionText>
      Миссия Apple: 
      Apple производит компьютеры Mac лучшие персональные компьютеры в мире, 
      наряду с OS X, iLife, iWork и профессиональным программным обеспечением. 
      Apple продолжает революцию цифровой музыки с его iPod и iTunes. 
      Apple заново открыл мобильный телефон с его революционным iPhone и App Store и 
      определяет будущее мобильных средств массовой информации и вычислительных устройств с iPad. 
      (миссия Apple Computer, Inc. в начале ее деятельности была сформулирована так: 
      Мы предлагаем компьютеры самого высокого качества для людей во всем мире). 
      </MissionText>
      <Image src='https://www.ixbt.com/img/r30/00/02/51/18/apple-march-presentation-2022-big.jpg' />
    </AppleWrapper>
  )
}
export default Apple;