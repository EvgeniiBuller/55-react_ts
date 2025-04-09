
import { DellWrapper, JobTitle, Image, MissionText } from "./styles";

function Dell() {
  return (
    <DellWrapper>
      <JobTitle>Dell</JobTitle>
      <MissionText>
      Миссия Dell — обеспечить прогресс человечества с помощью технологий . 
      Это означает предоставление надежных, высококачественных продуктов и услуг, 
      которые помогают людям достигать своих целей, будь то индивидуальные пользователи, 
      малый бизнес или крупные предприятия.
      </MissionText>
      <Image src='https://www.shutterstock.com/image-illustration/dell-logo-font-on-dark-600nw-2269690647.jpg' />
    </DellWrapper>
  )
}
export default Dell;