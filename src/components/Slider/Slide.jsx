import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link';


const Slide = ({ content }) => {    
    
    return (        
           <Link href="/projects">
             <div 
                css={css`
                height:100%;
                min-width:100%;
                background-image: url('${content}');
                background-size: 95%;
                background-repeat: no-repeat;
                background-position: 50%; 
                cursor:pointer;                            
            `
                }>

            </div>
           </Link>
        


    )
}

export default Slide
