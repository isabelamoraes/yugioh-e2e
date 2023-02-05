import styled from "styled-components";

export const Container = styled.div`
  width: 136px;
  cursor: pointer;
  perspective: 1000px;
`;

export const Content = styled.div`
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const ZoneContent = styled.div`
  img {
    width: 136px;
  }
`;

export const CardContent = styled.div`
  img {
    width: 136px;
    transform: rotateY(-180deg)
  }
`;