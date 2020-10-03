import React from "react";
import { nominalTypeHack } from "prop-types";
import styled from "styled-components";
import { Paperclip } from "@styled-icons/foundation/Paperclip";


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
`;

const CompanyName = styled("div")`
  font-family: 'Open Sans', sans-serif;
  color:#E88582;
  font-size: 1.5em;
  font-weight: 800;
`;
export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <PageTitle>Experience</PageTitle>
          <a href="https://drive.google.com/file/d/1pByol-n_zAt0AqwFuT0OsA2WA9gJZjUR/view?usp=sharing" target="_blank">
            <ResumeButton><Paperclip size="25"></Paperclip>{"  "}PDF Version</ResumeButton>
          </a >
          <CompanyName>Lyftly</CompanyName>

        </Container>

      </div >
    )
  }
}
