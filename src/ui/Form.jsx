import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: clamp(1.6rem, 1.2rem + 1vw, 2.4rem)
        clamp(2rem, 1.2rem + 1.5vw, 4rem);

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: clamp(28rem, min(80rem, 90vw), 100%);
      max-width: 100%;
    `}

  overflow: hidden;
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);

  @media (max-width: 768px) {
    padding: clamp(1.2rem, 1rem + 0.8vw, 2rem);
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
