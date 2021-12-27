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
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a variety of technologies in web development. Including
      Back-end and Front-end.
    </SectionText>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br />
          React.js, Next.js and Redux
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experienced with <br />
          Node.js, Express and MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experienced with <br />
          tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </Section>
);

export default Technologies;
