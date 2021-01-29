import React from 'react';

import logoSecondaryImage from '@assets/images/logo-secondary.png';

import {
  Container,
  LogoArea,
  HamburgerIcon,
  LogoContainer,
  SearchContainer,
  SearchBar,
  IconContainer,
  SearchIcon,
  UserArea,
  UserAvatar,
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <HamburgerIcon />

        <LogoContainer>
          <img src={logoSecondaryImage} alt="animeline"/>
          
          Anime<span>Line</span>
        </LogoContainer>
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
