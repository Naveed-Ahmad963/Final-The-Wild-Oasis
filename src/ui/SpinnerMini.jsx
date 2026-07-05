import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
  height: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
  animation: ${rotate} 1.5s infinite linear;
  flex-shrink: 0;
`;

export default SpinnerMini;
