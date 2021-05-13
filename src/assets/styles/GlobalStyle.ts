import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

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
    }

    h1 { 
        font-size: 3rem;
    }

    g  {
            fill: ${Colors.bodyFontColor};
    }
`;
