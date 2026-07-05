import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: clamp(1.2rem, 0.8rem + 0.8vw, 1.6rem);
  display: grid;
  grid-template-columns: clamp(5rem, 4rem + 1vw, 6.4rem) 1fr;
  grid-template-rows: auto auto;
  column-gap: clamp(1.2rem, 0.8rem + 0.8vw, 1.6rem);
  row-gap: 0.4rem;

  @media (max-width: 768px) {
    padding: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);
    grid-template-columns: clamp(4.5rem, 4rem + 0.8vw, 5.5rem) 1fr;
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: clamp(2.4rem, 2rem + 0.5vw, 3.2rem);
    height: clamp(2.4rem, 2rem + 0.5vw, 3.2rem);
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: clamp(1rem, 0.9rem + 0.1vw, 1.2rem);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: clamp(1.8rem, 1.6rem + 0.3vw, 2.4rem);
  line-height: 1;
  font-weight: 500;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
