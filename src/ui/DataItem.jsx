import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1.2rem, 0.8rem + 0.8vw, 1.6rem);
  padding: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem) 0;
  flex-wrap: wrap;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem);
  font-weight: 500;
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);

  & svg {
    width: clamp(1.6rem, 1.4rem + 0.2vw, 2rem);
    height: clamp(1.6rem, 1.4rem + 0.2vw, 2rem);
    color: var(--color-brand-600);
    flex-shrink: 0;
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
