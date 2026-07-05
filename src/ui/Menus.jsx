import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: clamp(0.2rem, 0.1rem + 0.2vw, 0.4rem);
  border-radius: var(--border-radius-sm);
  transform: translateX(clamp(0.4rem, 0.3rem + 0.2vw, 0.8rem));
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: clamp(2rem, 1.8rem + 0.3vw, 2.4rem);
    height: clamp(2rem, 1.8rem + 0.3vw, 2.4rem);
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  z-index: 100;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  max-width: clamp(20rem, 90vw, 30rem);
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: clamp(0.8rem, 0.6rem + 0.4vw, 1.2rem)
    clamp(1.6rem, 1.2rem + 0.5vw, 2.4rem);
  font-size: clamp(1.2rem, 1rem + 0.15vw, 1.4rem);
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: clamp(1.2rem, 1rem + 0.3vw, 1.6rem);
  white-space: nowrap;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: clamp(1.3rem, 1.1rem + 0.2vw, 1.6rem);
    height: clamp(1.3rem, 1.1rem + 0.2vw, 1.6rem);
    color: var(--color-grey-400);
    transition: all 0.3s;
    flex-shrink: 0;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
