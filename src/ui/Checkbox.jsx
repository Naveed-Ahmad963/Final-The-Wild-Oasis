import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: clamp(1.2rem, 1rem + 0.3vw, 1.6rem);
  align-items: center;

  & input[type="checkbox"] {
    height: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    width: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
    flex-shrink: 0;
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem);
    font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
