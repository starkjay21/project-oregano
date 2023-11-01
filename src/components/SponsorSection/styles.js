import styled from 'styled-components';
import tw from 'twin.macro';
import {Heading3} from "../shared";

export const Logo = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}
`

export const AlphaLogosContainer = styled.div`
  ${tw`
    grid
    md:grid-cols-3
    grid-cols-1
    md:gap-[120px]
    gap-[24px]
  `}
`

export const AlphaContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    md:gap-[48px]
    gap-[32px]
  `}
`

export const AlphaSponsors = styled.div`
  padding: 26px 60px;
  width: 90%;
  margin: 82px auto 0 auto;
  border-radius: 12px;
  background: linear-gradient(180deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);

  transition: all 2s ease-in-out;
  &:hover {
    background: linear-gradient(180deg, rgba(53, 225, 255, 0.40) -6.4%, rgba(58, 58, 58, 0.15) 99.89%);
  }

  @media (max-width: 761px) {
    background: linear-gradient(180deg, rgba(53, 225, 255, 0.40) -6.4%, rgba(58, 58, 58, 0.15) 99.89%);
  }
`

export const SponsorHeader = styled(Heading3)`
  @media (max-width: 761px) {
    color: var(--neutral-1, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    text-transform: capitalize;
  }
`
