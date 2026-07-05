import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiBars3,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiXMark,
} from "react-icons/hi2";

const NavWrapper = styled.nav`
  width: 100%;
`;

const MobileToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  font-weight: 600;
  min-height: 3.2rem;

  @media (max-width: 1024px) {
    display: inline-flex;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(0.4rem, 0.3rem + 0.2vw, 0.6rem);

  @media (max-width: 1024px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    margin-top: 0.8rem;
    padding-top: 0.4rem;
    border-top: 1px solid var(--color-grey-100);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);

    color: var(--color-grey-600);
    font-size: clamp(1.2rem, 1rem + 0.15vw, 1.6rem);
    font-weight: 500;
    padding: clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem)
      clamp(1.6rem, 1.2rem + 0.5vw, 2.4rem);
    transition: all 0.3s;
    white-space: nowrap;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    height: clamp(2rem, 1.8rem + 0.2vw, 2.4rem);
    color: var(--color-grey-400);
    transition: all 0.3s;
    flex-shrink: 0;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media (max-width: 1024px) {
    padding: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem)
      clamp(0.8rem, 0.6rem + 0.3vw, 1.2rem);
  }
`;

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper>
      <MobileToggle onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <HiXMark /> : <HiBars3 />}
        <span style={{ marginLeft: "0.6rem" }}>
          {isOpen ? "Close" : "Menu"}
        </span>
      </MobileToggle>

      <NavList open={isOpen}>
        <li>
          <StyledNavLink to="/dashboard" onClick={() => setIsOpen(false)}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" onClick={() => setIsOpen(false)}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" onClick={() => setIsOpen(false)}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" onClick={() => setIsOpen(false)}>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={() => setIsOpen(false)}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </NavWrapper>
  );
}

export default MainNav;
