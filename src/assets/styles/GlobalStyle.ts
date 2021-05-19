import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";
import { ScreenSize } from "./ScreenSize";

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    html { 
        font-size: 10px;
    }

    body {
        margin: 0;
        background: ${Colors.body};
        color: ${Colors.bodyFontColor};
        font-family: 'Inter', sans-serif;
        overflow: hidden;
    }

    h1 { 
        font-size: 3rem;
    }
    p { 
        color: ${Colors.primaryFontColor};
        font-size: 1.4rem;
    }

    svg {
        width: 20px;
        height: 20px;
        fill: ${Colors.bodyFontColor} ;
    }

    a  {
        text-decoration: none;
        fill: ${Colors.bodyFontColor};
    }

    span { 
        color: ${Colors.secondaryFontColor};
        margin-left: 5px;
    }

    .activeMobileLink { 
        svg {
            fill: ${Colors.secondaryFontColor}
        }
    }
    
    input,
    textarea,
    button,
    select,
    a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
  
`;

export const BodyInner = styled.div`
  margin: 0 10px;

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 10px;
  }

  @media only screen and (min-width: ${ScreenSize.laptopScreen}) {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    padding: 0 10px;

    > :nth-child(1) {
      flex-basis: 30%;
    }
    > :nth-child(2) {
      flex-basis: 60%;
      margin: 0 10px;
    }
    > :nth-child(3) {
      flex-basis: 20%;
    }
  }
  @media only screen and (min-width: ${ScreenSize.desktopScreen}) {
    padding: 0;
  }
`;
