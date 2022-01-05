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
        I am a Computer Science student in AIUB and a web developer skilled in
        React.js, Next.js, Tailwind CSS and many other popular web technologies.
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
