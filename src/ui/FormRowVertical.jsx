import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem);
  padding: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem) 0;
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

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
