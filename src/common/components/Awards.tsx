import React from 'react';
import styled from 'styled-components';

function Awards() {
  const Container = styled.div``;
  const AwardItem = styled.div`
    display: inline-block;
    height: 54px;
    background-size: 54px 54px;
    background-position: left top;
    background-repeat: no-repeat;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
    font-family: sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme.colors['--color-gray800']};
  `;
  const PlayStore = styled(AwardItem)`
    background-image: url(./assets/images/play-store@2x.png);
  `;
  const AppStore = styled(AwardItem)`
    background-image: url(./assets/images/app-store@2x.png);
  `;

  return (
    <Container>
      <PlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppStore>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppStore>
    </Container>
  );
}

export default Awards;
