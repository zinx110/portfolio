import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, github, link }) => (
        <BlogCard key={id}>
          <ImgContainer>
            <Img src={image} alt={title} />
          </ImgContainer>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={github}>
              <AiFillGithub /> Git{" "}
            </ExternalLinks>
            <ExternalLinks href={link}>Visit</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
