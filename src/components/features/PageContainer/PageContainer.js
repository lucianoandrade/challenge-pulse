import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../../styles/global';

const PageContainer = props => {
  return (
    <>
      <GlobalStyles />
      <Header/>
        {props.children}
      <Footer/>
    </>
  )
}
export default PageContainer;