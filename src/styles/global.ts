import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    background: none;
    
    color: ${({ theme }) => theme.black};
    
    font-family: 'Poppins', sans-serif;  
    
    transition: color .2s ease-out;
  }
  
  a {
    text-decoration: none;
  }
  
  html {
    scroll-behavior: smooth;
    
    background: ${({ theme }) => theme.background};
  }
  
  ul {
    list-style: none;    
  }
`;
