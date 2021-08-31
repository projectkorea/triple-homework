import React from 'react';
import styled from 'styled-components';

function Metrics() {
  const Container = styled.div``;
  const MetricItem = styled.div`
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors['--color-gray']};
  `;

  return (
    <>
      <Container>
        <MetricItem>
          <strong>630만 명</strong>의 여행자
        </MetricItem>
        <MetricItem>
          <strong>95만 개</strong>의 여행 리뷰
        </MetricItem>
        <MetricItem>
          <strong>425만 개</strong>의 여행 일정
        </MetricItem>
      </Container>
    </>
  );
}

export default Metrics;
