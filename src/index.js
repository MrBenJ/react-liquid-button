/** @jsx jsx  */
import React from 'react';
import { css, jsx } from '@emotion/core';

const LiquidButton = props => {
  const {
    // filled = false,
    speed = 0.5,
    color = 'red',
    children
  } = props;

  const style = css`
    position: relative;
    padding: 20px 50px;
    color: white;
    overflow: hidden;

    .liquid {
      display: block;
      position: absolute;
      top: -80px;
      left: 0;
      width: 200px;
      height: 200px;
      background: ${color};
      box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
      transition: ${speed}s;

      &:before,
      &:after {
        content: '';
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -75%);
        background: #000;
      }

      &:before {
        border-radius: 45%;
        background: rgba(20, 20, 20, 1);
        animation: animate 5s linear infinite;
      }
      &:after {
        border-radius: 40%;
        background: rgba(20, 20, 20, .5);
        animation: animate 10s linear infinite;
      }
    }

    .text {
      color: white;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 1;

    }

    &:hover .liquid {
      top: -120px;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      filter: brightness(1.1);
    }

    transition: filter .1s ease;

    @keyframes animate {
      0% {
        transform: translate(-50%, -75%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -75%) rotate(360deg);
      }
    }
  `;

  return (
    <button {...props} css={style}>
      <span className="text">
        {children}
      </span>
      <span className="liquid" />
    </button>
  );
};

export default LiquidButton;
