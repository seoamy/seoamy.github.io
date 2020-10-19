import React from "react";
import ProjectCard from "../components/projectCard";
import styled from "styled-components";
import { Paperclip } from "@styled-icons/foundation/Paperclip";
import { mediaQueries } from "../imports/media";
const { mobile, notMobile } = mediaQueries;


const PageTitle = styled("div")`
  font-size: 3em;
  font-family: 'Manrope', sans-serif;
  display: flex;
  justify-content: center;
  padding-bottom: 2vh;
`;

const ResumeButton = styled("button")`
  background-color: #E88582;
  height: 6vh;
  width: 24vh;
  border: none;
  border-radius: 12em;
  transition: 0.25s all ease;
  font-size: 1.25em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600px;
  &:hover{
    height: 7vh;
    width: 26vh;
    cursor: pointer;
  } 
`;

const Container = styled("div")`
  display: flex;
  width: 100%;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2em;
`;

const CompanyName = styled("div")`
  font-family: 'Open Sans', sans-serif;
  color:#E88582;
  font-size: 1.5em;
  font-weight: 700;
`;

const Role = styled("div")`
 font-family: 'Open Sans', sans-serif;
  color: black;
  font-size: 1em;
  font-weight: 1000;
`;

const Date = styled("div")`
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  color: #7B7B7B;
  font-size: 1em;
  padding-bottom: 1.5vh;
`;

const Description = styled("div")`
padding-left: 2vh;
 font-family: 'Open Sans', sans-serif;
  color: black;
  font-size: 1em;
  font-weight: 400;
`;

const ExperienceContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-bottom: 1.5vh;
  padding-top: 5vh;
`;

const ProjectContainer = styled("div")`
  display: flex;
  flex-direction: row;
  ${mobile} {
    flex-direction: column;
  }
`;
export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <PageTitle>Experience</PageTitle>
          <a href="https://drive.google.com/file/d/11xSm-p2q7LNu4oJHwFG3OqWG6XREu4cb/view?usp=sharing target=_blank">
            <ResumeButton><Paperclip size="25"></Paperclip>{"  "}PDF Version</ResumeButton>
          </a >
          <ExperienceContainer>
            <CompanyName>UCLA DevX</CompanyName>
            <Role>Product Manager</Role>
            <Date>Oct 2020 - Present</Date>
            <Description>Ideated the vision for InstaPark, an iOS app where users can lend and rent private parking spaces.</Description>
            <Description>- Currently leading the development of the product by recruiting skilled team members, organizing a timeline of the project,
and delegating tasks to each member. </Description>
            <Description>- Designed a complete prototype on Figma, including fonts, color palettes, and the user experience </Description>
            <Description>- Created schema of data structures and wrote classes for each query object in Swift.</Description>
          </ExperienceContainer>

          <ExperienceContainer>
            <CompanyName>Lyftly</CompanyName>
            <Role>Software Engineer Intern</Role>
            <Date>Sep - Oct 2020</Date>
            <Description>As a front-end intern, I helped build our community forum to increase support for our users.
I built the commenting feature with React.js, MaterialUI, and Redux. I implemented the live community list by using our custom-built Lyftly backend API via Axios. I initiated UI design changes and constantly communicated with our product manager and designer.</Description>
          </ExperienceContainer>

          <ExperienceContainer>
            <CompanyName>Daily Bruin</CompanyName>
            <Role>Software Engineer Intern</Role>
            <Date>Jan - Oct 2020</Date>
            <Description>As a front-end intern, I created interactive and responsive websites for UCLA’s student-run newspaper using React.js and CSS.</Description>
            <Description>Projects:</Description>
            <Description>
              - Covid Student Stories: I implemented the filtering feature for stories by firing the correct query
  for each toggle using JavaScript and React.js for the UI</Description>
            <Description>- Enterprise: I auto-generated each article page by taking the content from our editors and mapping each component to the correct UI</Description>
            <ProjectContainer>
              <ProjectCard img={require("../assets/covid-stories.png")}
                link="https://covidstories.dailybruin.com/"
                languages={["Javascript", "React.js"]}
                title="Covid Stories"
                description="In light of covid-19, this platform is an open forum for students to talk about how covid-19 has affected their life." />
              <ProjectCard img={require("../assets/enterprise.png")}
                link="https://features.dailybruin.com/2020/ballpark-figures/#/"
                languages={["Javascript", "React.js"]}
                title="Enterprise - Athletics"
                description="This article delves into how collegiate athletics is being handled at UCLA" />
            </ProjectContainer>
          </ExperienceContainer>
        </Container>

      </div >
    )
  }
}
