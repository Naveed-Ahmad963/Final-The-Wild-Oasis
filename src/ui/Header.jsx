import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1rem clamp(0.8rem, 0.6rem + 1vw, 1.8rem);
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  min-width: 0;

  @media (max-width: 640px) {
    justify-content: space-between;
    padding: 0.8rem 1rem;
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
