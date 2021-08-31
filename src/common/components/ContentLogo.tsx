import React from 'react';
import styled from 'styled-components';

function ContentLogo() {
  const Container = styled.div`
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
    background-image: url(./assets/images/triple@2x.png);
    background-repeat: no-repeat;
    text-align: center;
    font-family: sans-serif;
    color: ${(props) => props.theme.colors['--color-gray700']};
  `;

  return (
    <>
      <Container>2021년 5월 기준</Container>
    </>
  );
}

export default ContentLogo;
