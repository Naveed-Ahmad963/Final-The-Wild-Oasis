import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  margin-left: clamp(0.4rem, 0.3rem + 0.2vw, 0.8rem);

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: clamp(0.4rem, 0.3rem + 0.2vw, 0.6rem);
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: clamp(1.1rem, 0.9rem + 0.15vw, 1.4rem);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.2rem, 0.1rem + 0.15vw, 0.4rem);
  padding: clamp(0.4rem, 0.3rem + 0.2vw, 0.6rem)
    clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
  transition: all 0.3s;
  white-space: nowrap;

  &:has(span:last-child) {
    padding-left: clamp(0.2rem, 0.1rem + 0.15vw, 0.4rem);
  }

  &:has(span:first-child) {
    padding-right: clamp(0.2rem, 0.1rem + 0.15vw, 0.4rem);
  }

  & svg {
    height: clamp(1.4rem, 1.2rem + 0.15vw, 1.8rem);
    width: clamp(1.4rem, 1.2rem + 0.15vw, 1.8rem);
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
