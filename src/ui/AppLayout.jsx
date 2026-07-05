import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(18rem, 22rem) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: clamp(1.2rem, 0.8rem + 1vw, 2.4rem) clamp(1rem, 0.6rem + 1vw, 2rem)
    clamp(2rem, 1rem + 2vw, 3.2rem);
  overflow-x: hidden;
  min-width: 0;
`;

const Container = styled.div`
  width: min(120rem, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.2rem, 0.8rem + 1vw, 2rem);
  min-width: 0;
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
