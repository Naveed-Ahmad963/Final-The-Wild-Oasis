import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 0;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: clamp(1.2rem, 1rem + 0.3vw, 1.6rem);
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
