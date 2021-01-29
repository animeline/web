import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  *, button, input {        
    color: ${({ theme }) => theme.black};
    font-family: 'Raleway', sans-serif;
    
    border: 0;
    outline: 0;      
    
    background: none;
  }
  
  a {
    text-decoration: none;
  }
  
  html {        
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-thumb {                
      background-color: ${({ theme }) => theme.primary};
    }
    
    ::-webkit-scrollbar-track {      
      background-color: ${({ theme }) => lighten(0.15, theme.primary)};      
    } 
    
    scroll-behavior: smooth;
    
    background-color: ${({ theme }) => theme.background};
  }
  
  ul {
    list-style: none;
  }
`;
