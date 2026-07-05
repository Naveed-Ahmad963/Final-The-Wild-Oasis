import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: clamp(18rem, 20vw, 24rem) 1fr 1.2fr;
  gap: clamp(1.6rem, 1.2rem + 0.8vw, 2.4rem);

  padding: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem) 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);

    &:has(button) {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
`;

const Error = styled.span`
  font-size: clamp(1.1rem, 0.9rem + 0.15vw, 1.4rem);
  color: var(--color-red-700);
  word-wrap: break-word;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
