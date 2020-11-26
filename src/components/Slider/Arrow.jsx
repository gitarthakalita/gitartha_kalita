/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core';
// import leftArrow from '/assets/left-arrow.svg';
// import rightArrow from '/assets/right-arrow.svg';


const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      
      css={css`
      display: flex;
      position: absolute;
      top:50%;
      ${direction === 'right' ? `right: 10px` : `left: 10px`};
      height: 40px;
      width: 40px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 0.35rem #d5d8dd;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
        transition: transform ease-in 0.1s;
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
      @media screen and (max-width: 480px) {
        display:none;
      }
    `}
    >
      {direction === 'right' ? <img src="/assets/right-arrow.svg" alt="right-arrow" /> : <img src="/assets/left-arrow.svg" alt="left-arrow" />}
    </div>
  )
}

export default Arrow
