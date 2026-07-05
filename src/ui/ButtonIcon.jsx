import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: clamp(0.4rem, 0.2rem + 0.3vw, 0.6rem);
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: clamp(1.8rem, 1.6rem + 0.2vw, 2.2rem);
    height: clamp(1.8rem, 1.6rem + 0.2vw, 2.2rem);
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
