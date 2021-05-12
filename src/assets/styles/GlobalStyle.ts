import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    
    body {
        margin: 0;
        background: ${Colors.body};
    }
`;
