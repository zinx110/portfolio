import React from "react";
import { EducationData } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText, BoxTitle } from "./EducationStyles";

const Education = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {EducationData.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Education;
