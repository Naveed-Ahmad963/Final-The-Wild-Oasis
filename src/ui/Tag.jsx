import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: clamp(0.95rem, 0.85rem + 0.1vw, 1.1rem);
  font-weight: 600;
  padding: clamp(0.3rem, 0.2rem + 0.2vw, 0.4rem)
    clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;
