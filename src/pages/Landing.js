import React from 'react'
import styled from 'styled-components'

const LandingMainDiv=styled.div`
height:calc(100vh - 40px);
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`
const LandingHeroH1=styled.h1`
font-size: 52px;
    font-weight: 800;
    letter-spacing: 2px;
    line-height:64px;
    text-align:center;
`

const LandingHeroButton=styled.button`
padding: 10px 20px;
    border-radius: 5px;
    background: #4485f5;
    color: white;
    /* font-size: 20px; */
    border: none;
`

const Landing = () => {
    return (
        <LandingMainDiv>
            <LandingHeroH1>
            Entry Level Job Hunt <br /> Made Easier
            </LandingHeroH1>
<LandingHeroButton>
    View Open Positions &#8594;	
</LandingHeroButton>
        </LandingMainDiv>
    )
}

export default Landing
