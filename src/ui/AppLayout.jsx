import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(22rem, 26rem) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: clamp(2rem, 1rem + 2vw, 4.8rem) clamp(1.5rem, 0.8rem + 2vw, 4.8rem)
    clamp(3rem, 1.5rem + 2.5vw, 6.4rem);
  overflow: auto;
`;

const Container = styled.div`
  width: min(120rem, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 1.5rem + 1vw, 3.2rem);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
