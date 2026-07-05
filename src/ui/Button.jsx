import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: clamp(1rem, 0.9rem + 0.1vw, 1.2rem);
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
    padding: clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem)
      clamp(1.2rem, 1rem + 0.3vw, 1.6rem);
    font-weight: 500;
  `,
  large: css`
    font-size: clamp(1.4rem, 1.2rem + 0.2vw, 1.6rem);
    padding: clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem)
      clamp(1.6rem, 1.2rem + 0.5vw, 2.4rem);
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
