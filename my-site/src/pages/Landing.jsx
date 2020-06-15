import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { mediaQueries } from "../imports/media";
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 3000px;
  max-height: 1687px;
  overflow: hidden;
  height: 100%;
  ${mobile} {
    max-width: 700px;
    max-height: 300px;
  }
`;

export default class Landing extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FCEAC8",
          width: "100%",
          height: "100vh"
        }}
      >
        <Container>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=kCetJylD614&feature=youtu.be"
            playing="true"
            loop="true"
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  disablekb: 0
                }
              }
            }}
            width={3000}
            height={1687}
            overflow="hidden"
          />
        </Container>
      </div>
    );
  }
}
