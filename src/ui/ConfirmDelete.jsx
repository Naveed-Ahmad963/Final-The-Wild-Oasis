import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: clamp(28rem, 90vw, 40rem);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 100%;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
    font-size: clamp(1.3rem, 1.1rem + 0.2vw, 1.5rem);
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    flex-wrap: wrap;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
