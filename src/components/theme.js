import { createGlobalStyle } from "styled-components";

 export const lightTheme = {
    
    tittle_color: 'hsl(var(--second-hue), 15%, 15%)',
    text_color: 'hsl(var(--second-hue), 8%, 35%)',
    body_color: 'hsl(var(--second-hue), 60%, 92%)',
    container_color: '#fff',
    link_hover: 'hsl(var(--second-hue), 48%, 8%)',

}

export const darkTheme = {
    /**
     * We can add some styles in future, but now Its not necesary because 
     * 
     * By default the app is set in dark mode (index.css)
     */
}

export const GlobalStyles = createGlobalStyle`

    :root{
        --tittle-color: ${(props) => props.theme.tittle_color};
        --text-color: ${(props) => props.theme.text_color};
        --body-color: ${(props) => props.theme.body_color};
        --container-color: ${(props) => props.theme.container_color};
        --link-color-hover: ${(props) => props.theme.link_hover};
    }
`;