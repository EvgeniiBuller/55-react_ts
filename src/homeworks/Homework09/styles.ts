import styled from "@emotion/styled";

export const InfoCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 45px;
  text-align: center;
  width: 250px;
  height: 200px;
  background-color: #f5b5d2;
  justify-content: center;
`;

export const VipInfoCard = styled(InfoCard)`
  width: 300px;
  height: 250px;
  background-color: #e0f7fa;
  border: 2px solid #00bcd4;
  color: #1976d2;
  margin: 20px;
`;
