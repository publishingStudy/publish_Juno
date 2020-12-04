import React, { useState } from "react";
import styled, { css } from "styled-components";
import LeftBtn from "../assets/leftbtn.png";
import RightBtn from "../assets/rightbtn.png";
import { banners } from "../models/banners/banners";
import Image from "./Image";

const Slider = styled.div`
  display: flex;
  justify-contents: center;
  width: 1032px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 5px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0 10px;
  }
`;

const LeftSlideBtn = styled.div`
  background-image: ${LeftBtn};
  width: 35px;
  height: 35px;
  border: solid 0.5px;
  border-radius: 50%;
  cursor: pointer;
`;
const RightSlideBtn = styled.div`
  background-image: ${RightBtn};
  width: 35px;
  height: 35px;
  border: solid 0.5px;
  border-radius: 50%;
  cursor: pointer;
`;

function ImgSilder() {
  const [idx, setIdx] = useState(0);

  const handleLeft = () => {
    const lastIdx = banners.length - 1;
    if (idx === 0) {
      setIdx(lastIdx);
    } else {
      setIdx(idx - 1);
    }
  };
  const handleRight = () => {
    const lastIdx = banners.length - 1;
    if (idx === lastIdx) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <>
      <Slider>
        {banners.map((banner, index) => {
          return <Image idx={idx} key={index} banner={banner}/>;
        })}
      </Slider>
      <BtnWrapper>
        <LeftSlideBtn onClick={handleLeft} />
        <RightSlideBtn onClick={handleRight} />
      </BtnWrapper>
    </>
  );
}

export default ImgSilder;
