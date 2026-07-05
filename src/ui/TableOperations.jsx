import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 0.6rem + 0.6vw, 1.2rem);
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export default TableOperations;
