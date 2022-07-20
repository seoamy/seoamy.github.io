import React from "react";
import styled from "styled-components";

const RowDiv = styled("div")`
    display: flex;
    flex-direction: row;
    padding-right: 6vh;
`;

const IconLink = styled("img")`
    height: 4vh;
    width: 4vh;
    border-radius: 50%;
    padding: 1vh;
    overflow: hidden;
    transition: 0.25s all ease;
    &:hover {
        width: 5vh;
        height: 5vh;
    }
`;

export default class LinkIcons extends React.Component {
    render() {
        return (
            <RowDiv>
                <a href="https://www.youtube.com/user/sweetco0kiepie" target="_blank"><IconLink src={require("../assets/yt.png")} /></a>
                <a href="https://github.com/seoamy" target="_blank"><IconLink src={require("../assets/github.png")} /></a>
                <a href="https://www.linkedin.com/in/amy-seo-4484b2191/" target="_blank" ><IconLink src={require("../assets/linkedin.png")} /></a>
                <a href="mailto:amyseo@g.ucla.com" target="_blank"><IconLink src={require("../assets/email.png")} /></a>
            </RowDiv>
        )
    }
}
