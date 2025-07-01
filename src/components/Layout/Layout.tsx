import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout; 