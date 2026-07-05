import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem clamp(1.2rem, 1rem + 1.2vw, 4.8rem);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: space-between;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
