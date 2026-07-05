import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export default ButtonGroup;
