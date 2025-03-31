import styled from "@emotion/styled";
//
import { css } from "@emotion/react";

//export const = styled.``

//Создаём переменную, которая будет содержать шаблон стилей для переиспользования
const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
`;

export const Lesson10Container = styled.div`
  // //подстановка переменной, которая содержит шаблон стилей
  ${boxBasicStyles}
  /* display: flex;
  flex-direction: column; */
  gap: 40px;
  flex: 1;
  padding: 50px;
  background-color: rgb(29, 96, 101);
`;

export const SectionWrapper = styled.section`
  ${boxBasicStyles}
  gap: 20px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(13, 37, 39);
  border-radius: 4px;
`;

export const SectionTitle = styled.div`
  font-size: 40px;
  color: rgb(13, 37, 39);
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 20px;
  color: rgb(22, 63, 67);
`;

export const NotesContainer = styled.div`
  ${boxBasicStyles}
  flex-direction: row; //
  /* display: flex; */
  justify-content: center;
  gap: 30px;
`;

export const NoteBlock = styled.div`
  ${boxBasicStyles}
  align-items: center;
  gap: 10px;
  min-width: 200px;
  padding: 20px;
  background-color: rgb(229, 245, 54);
  border-radius: 10px;
`;

export const NoteTitle = styled.h3`
  color: rgb(136, 7, 7);
`;

export const NoteDescription = styled.p`
  font-size: 18px;
`;

// Расширение компонентов (наследование)
export const MainSection = styled(SectionWrapper)`
  box-shadow: 3px 3px 10px rgb(237, 240, 226);
  color: rgb(104, 10, 121);

  //
  &:hover {
    background-color:rgb(196, 230, 222);
  }
`;
