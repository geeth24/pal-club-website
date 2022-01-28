import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Made With:</FooterLinkTitle>
              <FooterLink to="/">React.js,</FooterLink>
              <FooterLink to="/">Styled Components,</FooterLink>
              <FooterLink to="/">Chakra UI.</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggleHome}
            >
              PAL
            </SocialLogo>

            <WebsiteRights>
              Geeth Gunnampalli © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCfFcVPlDSHp5FNR327DMvVw"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/thetechie.official/?hl=en"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
