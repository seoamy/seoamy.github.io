import React from "react";
import ProjectCard from "../components/projectCard";
import styled from "styled-components";

const AllContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding-bottom: 4em;
`;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 75%;
  flex-wrap: wrap;
`;

const PageTitle = styled("div")`
  font-size: 3em;
  font-family: 'Manrope', sans-serif;
  display: flex;
  justify-content: center;
  padding-bottom: 3vh;
`;

export default class Projects extends React.Component {
  render() {
    return (
      <AllContainer>
        <PageTitle>Projects</PageTitle>
        <Container>
          <ProjectCard
            img={require("../assets/bruinbridge.png")}
            link="https://github.com/tkanarsky/BruinBridge"
            languages={["JavaScript", "React.js", "Firebase"]}
            title="BruinBridge"
            description="BruinBridge is a web app that bridges the gap between prospective UCLA students and current UCLA students."
          ></ProjectCard>
          <ProjectCard
            img={require("../assets/playmsg.png")}
            link="https://github.com/seoamy/PlayMeAMessage"
            languages={["JavaScript", "React.js", "Node.js"]}
            title="Play Me a Message"
            description="Using Spotify’s web API, this web app generates a playlist that spells out whatever message the user enters."
          ></ProjectCard>
          <ProjectCard
            img={require("../assets/instapark.png")}
            link="https://github.com/ucladevx/InstaPark-ios"
            languages={["Swift", "Firebase"]}
            title="InstaPark"
            description="InstaPark, inspired by Airbnb, is an iOS app for users to lend and rent their private parking spots."
          ></ProjectCard>
          <ProjectCard
            img={require("../assets/kontagion.png")}
            link="https://github.com/seoamy/Kontagion"
            languages={["C++"]}
            title="Kontagion"
            description="Kontagion is a 3rd-person shooter game built in C++ for CS 32 using inheritance and polymorphism."
          ></ProjectCard>
          <ProjectCard
            img={require("../assets/delivery.png")}
            link="https://github.com/seoamy/Delivery-Navigation"
            languages={["C++"]}
            title="Delivery Navigator"
            description="Delivery Navigator, inspired by Uber Eats delivery service, was a C++ project for CS32.  I built my own hash map and used BFS with a queue to calculate the delivery route."
          ></ProjectCard>
        </Container>
        </AllContainer>
    )
  }
}
