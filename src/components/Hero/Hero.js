import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I'm <Span>zinx</Span> (Tasdid Hossain)
      </SectionTitle>
      <SectionText>
        My purpose is to develop aspiring websites using various technologies
        that will solve real problems and to make people happy, even if only a
        little.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://linkedin.com/in/zinx110")}
      >
        Hire me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
