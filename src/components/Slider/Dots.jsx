/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
    <span
        css={css`
      padding: 5px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? '#312949' : '#d7d7f4'};
    `}
    />
)

const Dots = ({ slides, activeIndex }) => (
    <div
        css={css`
      position: absolute;
      bottom: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    >
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
        ))}
    </div>
)

export default Dots