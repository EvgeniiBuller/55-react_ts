import styled from "@emotion/styled";

export const PathWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 60px;
  background-color: rgb(11, 170, 152);
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #110d30;
`;

export const List = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
  margin-bottom: 20px;
  width: 80%; // Можете настроить ширину списка
  max-width: 600px; // Максимальная ширина
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  color: #f0f8ff; 
`;