import React from "react";
import styled from "styled-components";
import { Paperclip } from "@styled-icons/foundation/Paperclip";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import resumePDF from '../assets/amy_seo_resume.pdf';

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
  padding-bottom: 5em;
`;

const ButtonContainer = styled("div")`
display: flex;
width: 100%;
justify-content:center;
align-items: center;
flex-direction: column;
padding-bottom: 2em;
padding-top: 1em;
`;

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <PageTitle>Resume</PageTitle>
          <a href="https://drive.google.com/file/d/1t3hRACq61-2S5DXDsvDhntLOLwHESVqT/view?usp=sharing" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
            <ButtonContainer>
              <ResumeButton>
                <Paperclip size="25" />{"  "}Download PDF
              </ResumeButton>
            </ButtonContainer>
          </a >
          <Document file={resumePDF} onLoadError={console.error}><Page pageNumber={1} /></Document>
        </Container>
      </div >
    )
  }
}
