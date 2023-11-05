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
                I am a Web and Mobile App developer and a 3rd year computer
                science student at AIUB. I mostly work in React/Mern Stack as
                well as other technologies.
            </SectionText>
            <Button
                onClick={() =>
                    (window.location = "https://linkedin.com/in/zinx110")
                }
            >
                Hire me
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
