import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-color: rgb(87, 13, 77);
`
export const Title = styled.div`
 font-size: 40px;
 font-weight: bold;
 color: #9c9ed3
`

export const StyledLink = styled(Link)`
 font-size: 30px;
 font-weight: bold;
 color: #25cf16;
`