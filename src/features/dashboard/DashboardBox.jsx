import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: clamp(1.2rem, 0.8rem + 1vw, 2.4rem);

  display: flex;
  flex-direction: column;
  gap: clamp(1.2rem, 0.8rem + 0.8vw, 2rem);
  min-width: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export default DashboardBox;
