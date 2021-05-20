import React from 'react'
import styled from 'styled-components';
import saly10 from '../assets/saly-11.png';
// TODO compress all the below svgs..

import doodle1 from '../assets/doodle-1.svg';
import doodle2 from '../assets/doodle-2.svg';
import doodle3 from '../assets/doodle-3.svg';
const LandingMainDiv=styled.div`
height:calc(100vh - 40px);
display:flex;
justify-content:space-between;
align-items:center;
overflow:hidden
`

const LandingDiv1=styled.div`
/* border:1px solid red; */
position:relative;
`

const Doodle1=styled.img`
height:90px
`
const Doodle2=styled.img`
height:80px;
position:absolute;
bottom:-50px;
right:-50px;
`
const Doodle3=styled.img`
height:80px;
position:absolute;
top:-50px;
right:-50px;
`

const LandingHeroH1=styled.h1`
font-size: 52px;
    font-weight: 800;
    letter-spacing: 2px;
    line-height:64px;
    
`

const LandingHeroButton=styled.button`
padding: 10px 20px;
    border-radius: 5px;
    background: #4485f5;
    color: white;
    /* font-size: 20px; */
    border: none;
`

const LandingImage=styled.img`
width:50%;
height:auto;
`

const Landing = () => {
    return (
        <LandingMainDiv>
            <LandingDiv1>
                <Doodle1 loading="lazy" src={doodle1} alt="" />
                <Doodle2 loading="lazy" src={doodle2} alt="" />
                <Doodle3 loading="lazy" src={doodle3} alt="" />
            <LandingHeroH1>
            Your Job Hunt <br /> Made Easier
            </LandingHeroH1>
<LandingHeroButton>
    View Open Positions &#8594;	
</LandingHeroButton>
            </LandingDiv1>
           
<LandingImage src={saly10} alt="illustration" />
        </LandingMainDiv>
       
    )
}

export default Landing
