import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem)
      clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
    margin-right: clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;
    white-space: nowrap;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
