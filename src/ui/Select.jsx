import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  padding: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem)
    clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
