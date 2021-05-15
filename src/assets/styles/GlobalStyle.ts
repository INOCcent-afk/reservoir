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
        fill: ${Colors.bodyFontColor}
    }
  
`;

export const BodyInner = styled.div`
  margin: 0 10px;
  max-width: 1300px;

  @media only screen and (min-width: ${ScreenSize.tabletScreen}) {
    margin: 0 auto;
  }
`;
