import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Element } from "react-scroll";
import { css } from "emotion";
import LinkIcons from "./LinkIcons";

const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: right;
  padding-left: 4vh;
  background-color: #FCEAC8;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: "Open Sans";
  text-decoration: none;
  transition: 0.25s all ease;
  color: black;
  font-weight: 500;
  padding-right: 30px;
  &:hover {
    font-size: 22px;
  }
`;
const DummyFiller = styled("div")`
  margin-left: auto;
  margin-right: auto;
`;

const LinkBox = styled("div")`
  display: flex;
  align-items: center;
`;

const RightLinkBox = styled(LinkBox)`
  display: flex;
  justify-self: flex-end;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <Element
        name="navbar"
        className={css`
          position: sticky;
          top: 0;
          z-index: 100000;
        `}
      >
        <Container>
          <LinkBox>
            <StyledLink to="/">Home</StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to="/experience">Experience</StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to="/projects">Projects</StyledLink>
          </LinkBox>
          <LinkBox>
          </LinkBox>
          <DummyFiller />
          <RightLinkBox>
            <LinkIcons />
          </RightLinkBox>
        </Container>
      </Element>
    );
  }
}
