import styled from "styled-components";

const Textarea = styled.textarea`
  padding: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem)
    clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: clamp(7rem, 6rem + 2vw, 8rem);
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  resize: vertical;
`;

export default Textarea;
