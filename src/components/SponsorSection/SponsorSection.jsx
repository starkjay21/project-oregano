import React from 'react'
import {Heading3} from "../shared";
import Sponsors from '../../../config/content/Sponsor'
import {AlphaContainer, AlphaLogosContainer, AlphaSponsors, Logo, SponsorHeader} from "./styles";

function SponsorSection() {

  const alphaSponsors = Sponsors.alpha
  const betaSponsors = Sponsors.beta
  const gammaSponsors = Sponsors.gamma
  const deltaSponsors = Sponsors.delta

  console.log(alphaSponsors)

  return (
    <div className='

        '>

      <AlphaSponsors>
        <AlphaContainer>
          <SponsorHeader>Alpha Sponsors</SponsorHeader>
          <AlphaLogosContainer>
            {
              alphaSponsors.map(({src, alt, link}) => (
                <Logo key={src}>
                  <a href={link} target='_blank noreferer noopener'>
                    <img src={src} alt={alt}/>
                  </a>
                </Logo>
              ))
            }
          </AlphaLogosContainer>
        </AlphaContainer>
      </AlphaSponsors>
    </div>
  )
}

export default SponsorSection
