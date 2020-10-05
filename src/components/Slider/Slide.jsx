import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => {
    return (
        <div css={css`
                height:100%;
                min-width:100%;
                background-image: url('${content}');
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: 50%  0%;
                
            `
        }>

        </div>
    )
}

export default Slide
