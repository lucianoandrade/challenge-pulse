import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import GlobalStyles from '../../../styles/global';

const PageContainer = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
          {props.children}
        <Footer/>
      </ThemeProvider>
    </>
  )
}
export default PageContainer;