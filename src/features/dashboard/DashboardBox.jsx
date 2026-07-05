import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: clamp(1.6rem, 1rem + 1.2vw, 3.2rem);

  display: flex;
  flex-direction: column;
  gap: clamp(1.4rem, 1rem + 0.8vw, 2.4rem);
  min-width: 0;
  overflow: hidden;
`;

export default DashboardBox;
