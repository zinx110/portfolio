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
                I'm <Span>Taslima Afroz</Span>
            </SectionTitle>
            <SectionText>
                I am a Web and Mobile App developer specializing in MERN stack and React Native
            </SectionText>
            <SectionText>

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
