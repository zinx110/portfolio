import React from "react";
import { AcomplishmentsData } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText, BoxTitle } from "./AcomplishmentsStyles";

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Education Information</SectionTitle>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
