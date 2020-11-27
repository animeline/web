import React from 'react';

import {
  Container,
  LogoArea,
  HamburgerIcon,
  Logo,
  SearchContainer,
  SearchBar,
  IconContainer,
  SearchIcon,
  UserArea,
  UserAvatar,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <HamburgerIcon />

        <Logo>
          Anime<span>Line</span>
        </Logo>
      </LogoArea>

      <SearchContainer>
        <SearchBar placeholder="Procurar conteúdo" />

        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </SearchContainer>

      <UserArea>
        <UserAvatar />
      </UserArea>
    </Container>
  );
};

export default Header;
