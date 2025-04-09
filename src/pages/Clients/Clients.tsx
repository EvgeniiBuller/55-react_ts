import { Title, StyledLink, ClientsWrapper } from "./styles"

function Clients() {
  return (
    <ClientsWrapper>
      <Title>Clients company</Title>
      <StyledLink to='apple'>Apple</StyledLink>
      <StyledLink to='dell'>Dell</StyledLink>
      <StyledLink to='samsung'>Samsung</StyledLink>
    </ClientsWrapper>
  )
}

export default Clients;