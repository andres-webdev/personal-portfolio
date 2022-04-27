import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './components/theme';

function App(){

    const [ theme, setTheme ] = useState('darkTheme');

    const changeTheme = (change) => {
        
        if(!change){
            setTheme('lightTheme');
        } else{
            setTheme('darkTheme');
        }

    }

    return(
        <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme} >
            <GlobalStyles />
                <Header themeValue={changeTheme} />
                <Main />
                <Footer />
        </ThemeProvider>
    );
}

export default App;