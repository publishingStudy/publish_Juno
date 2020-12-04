import React from "react";
import styled, { css } from "styled-components";

const ImgWrapper = styled.div`
  display: flex;
  width: 1032px;
`;

const Img = styled.img`
  width: 680px;
  ${(props) => css`
    transform: translateX(${-1032 * props.idx}px);
    transition: 0.5s;
  `}
`;

const SubImg = styled.div`
  ${(props) =>
    props.idx === 0
      ? css`
          background-color: #c19b80;
        `
      : props.idx === 1
      ? css`
          background-color: #2ea68a;
        `
      : props.idx === 2
      ? css`
          background-color: #676769;
        `
      : props.idx === 3
      ? css`
          background-color: #ed7129;
        `
      : css`
          background-color: #5b7852;
        `}
  ${(props) => css`
    transform: translateX(${-1032 * props.idx});
    transition: 0.5s;
  `}
  z-index: 1;
  color: #ffffff;
  padding: 0 32px;
  width: 288px;
  height: 383px;
`;

const Main = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

function Image({ banner, idx }) {
  return (
    <>
      <ImgWrapper>
        <Img idx={idx} src={banner.url} />
        <SubImg idx={idx}>
          <Main>
            {banner.main1}
            <br></br>
            {banner.main2}
          </Main>
        </SubImg>
      </ImgWrapper>
    </>
  );
}

export default Image;
