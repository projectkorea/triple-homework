import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';
import Awards from './common/components/Awards';
import ContentLogo from './common/components/ContentLogo';
import Metrics from './common/components/Metrics';

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
  min-width: 1200px;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <SectionContainer>
            <ContentLogo />
            <Metrics />
            <Awards />
          </SectionContainer>
        </body>
      </ThemeProvider>
    </>
  );
}

export default App;
