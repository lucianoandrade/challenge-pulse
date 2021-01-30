import React from "react";
// import Loading from "../../elements/Loading/Loading";
import Header from '../Header';
// import Footer from '../../features/Footer/Footer';
import GlobalStyles from '../../../styles/global';

const PageContainer = props => {
  return (
    <>
      <GlobalStyles />
      <Header/>
        {props.children}
      {/* <Footer/> */}
    </>
  )
}

export default PageContainer;