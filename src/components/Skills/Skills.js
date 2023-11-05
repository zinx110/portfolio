import React from "react";
import { DiNodejs, DiReact, DiZend } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./SkillsStyles";

const Skills = () => (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle>Skills</SectionTitle>
        <SectionText>
            I am skiled in a variety of technologies in web and mobile
            application development
        </SectionText>
        <ListItem>
            <DiReact size="3rem" />
            <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph>
                    React.js, Next.js, React Native, Firebase, Tailwind CSS,
                    typescript
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiNodejs size="3rem" />
            <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph>
                    REST API, Node.js, Express and MongoDB, PHP{" "}
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiZend size="3rem" />
            <ListContainer>
                <ListTitle>Familiar with</ListTitle>
                <ListParagraph>JAVA, C++, C#, Python, Three.js</ListParagraph>
            </ListContainer>
        </ListItem>
    </Section>
);

export default Skills;
