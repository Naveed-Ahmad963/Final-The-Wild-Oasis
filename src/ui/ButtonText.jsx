import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  padding: clamp(0.3rem, 0.2rem + 0.2vw, 0.6rem);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
