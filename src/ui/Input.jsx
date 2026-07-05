import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: clamp(0.7rem, 0.5rem + 0.4vw, 0.9rem)
    clamp(0.8rem, 0.6rem + 0.4vw, 1.1rem);
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  box-shadow: var(--shadow-sm);
  width: 100%;
  min-width: 0;
`;

export default Input;
