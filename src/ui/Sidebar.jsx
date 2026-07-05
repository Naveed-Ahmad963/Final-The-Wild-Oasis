import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: clamp(2rem, 1.2rem + 1vw, 3.2rem) clamp(1.2rem, 0.8rem + 1vw, 2.4rem);
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: clamp(2.4rem, 2rem + 0.5vw, 3.2rem);

  @media (max-width: 1024px) {
    grid-row: auto;
    grid-column: 1 / -1;
    border-right: none;
    border-bottom: 1px solid var(--color-grey-100);
    padding: clamp(1.6rem, 1.2rem + 1vw, 2.4rem);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
