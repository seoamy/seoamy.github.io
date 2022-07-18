import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../imports/media";
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 5em;
  padding-top: 5em;
  ${mobile} {
    flex-direction: column;
  }
`;

const Image = styled("img")`
  width: 30%;
`;

const Heading = styled("div")`
  font-size: 4em;
  font-weight: 700;
  font-family: 'Manrope', sans-serif;
  color: black;
  padding-bottom: 1vh;
  ${mobile} {
    font-size: 1.75em;
    padding-bottom: 1.5vh;
  }
`;

const SubHeading = styled("div")`
font-size: 2.5em;
font-weight: 600;
font-family: 'Manrope', sans-serif;
color: #E88582;
padding-bottom: 2vh;
`;

const AboutMe = styled("div")`
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  color: black;
  padding-bottom: 0.75em;
`;

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
export default class Landing extends React.Component {
  render() {
    return (
      <Container>
        <Image src={require("../assets/landing-1.png")} />
        <TextContainer>
          <Heading>Hi, I'm Amy!</Heading>
          <SubHeading>Creator. Learner. Software Engineer.</SubHeading>
          <AboutMe>I'm a fourth-year computer science student at UCLA. Right now, I am interning at Datadog. I'm interested in front-end development because of how visual and creative you can be with it.</AboutMe>
          <AboutMe>In my free time I enjoy baking baking, photography, and designing.</AboutMe>
          <AboutMe>Please feel free to contact me about anything :)</AboutMe>
        </TextContainer>
      </Container>
    );
  }
}
