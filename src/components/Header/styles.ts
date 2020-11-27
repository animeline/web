import { lighten, rgba } from 'polished';
import { FaSearch } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  padding: 0 40px;

  z-index: 888;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  background: ${({ theme }) => lighten(0.1, theme.background)};

  @media (max-width: 900px) {
    justify-content: unset;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  user-select: none;

  @media (max-width: 900px) {
    width: 100%;

    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const HamburgerIcon = styled(MdMenu)`
  width: 40px;
  height: 40px;

  margin-right: 20px;
  padding: 5px;

  cursor: pointer;

  border-radius: 50%;

  fill: ${({ theme }) => theme.primary};

  &:hover {
    transition: all 0.2s ease-in-out;

    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 900px) {
    width: 35px;
    height: 35px;

    margin-right: 0px;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;

  color: ${({ theme }) => theme.primary};

  > span {
    font-weight: 400;

    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 400px;

  padding: 0 15px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px 0 0 8px;

  background: ${({ theme }) => theme.background};
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 8px 8px 0;

  background: ${({ theme }) => theme.background};

  &:hover {
    svg {
      transition: all 0.2s ease-in-out;

      fill: ${({ theme }) => rgba(theme.primary, 0.4)};
    }
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;

  fill: ${({ theme }) => rgba(theme.primary, 0.2)};
`;

export const UserArea = styled.div``;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;

  position: relative;

  display: flex;
  align-items: center;

  border-radius: 100%;

  background: ${({ theme }) => lighten(0.15, theme.primary)};

  @media (max-width: 900px) {
    display: none;
  }
`;
