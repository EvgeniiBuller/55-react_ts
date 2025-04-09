
import styled from '@emotion/styled';

export const SamsungWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-color: rgb(125, 76, 241);
`
export const JobTitle = styled.div`
 font-size: 40px;
 font-weight: bold;
 color: #2cf1f1;
`
export const Image = styled.img`
 width: 400px;
`
export const MissionText = styled.li` // Используем styled.li для стилизации элемента <li>
  color: #d1f8c9; /* Белый цвет текста */
  font-size: 16px; /* Размер шрифта */
  line-height: 1.5; /* Межстрочный интервал для лучшей читаемости */
  margin-top: 10px; /* Отступ сверху от заголовка */
  padding: 10px; /* Внутренние отступы */
  border: 1px solid #2cf1f1; /* Пример рамки */
  border-radius: 10px; /* Скругление углов рамки */
  text-align: center; /* Выравнивание текста по центру */
`;

export const ButtonContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 width: 400px;

`;