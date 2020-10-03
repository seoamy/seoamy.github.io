import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../imports/media";
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${mobile} {
    flex-direction: column;
  }
`;

const Image = styled("img")`
  width: 35%;
`;

const Heading = styled("div")`
  font-size: 4em;
  font-weight: 700;
  font-family: 'Manrope', sans-serif;
  color: black;
  padding-bottom: 6vh;
  ${mobile} {
    font-size: 1.75em;
    padding-bottom: 1.5vh;
  }
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
          <AboutMe>I'm a second-year computer science student at UCLA. I'm interested in web and mobile development because of how creative you can be with it.</AboutMe>
          <AboutMe>In my free time I enjoy baking baking, photography, and designing.</AboutMe>
          <AboutMe>Please feel free to contact me about anything :)</AboutMe>
        </TextContainer>
      </Container>
    );
  }
}
