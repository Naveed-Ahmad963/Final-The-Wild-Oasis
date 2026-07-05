import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem);

  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: clamp(0.6rem, 0.4rem + 0.3vw, 0.8rem);
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
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
