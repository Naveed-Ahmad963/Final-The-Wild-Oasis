import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: clamp(1.6rem, 1.2rem + 1vw, 3.2rem) clamp(2rem, 1.2rem + 1.5vw, 4rem);
  transition: all 0.5s;
  width: min(92vw, 56rem);
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: clamp(0.2rem, 0.1rem + 0.2vw, 0.4rem);
  border-radius: var(--border-radius-sm);
  transform: translateX(clamp(0.4rem, 0.3rem + 0.2vw, 0.8rem));
  transition: all 0.2s;
  position: absolute;
  top: clamp(0.8rem, 0.6rem + 0.5vw, 1.2rem);
  right: clamp(1.2rem, 1rem + 0.5vw, 1.9rem);
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    height: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
