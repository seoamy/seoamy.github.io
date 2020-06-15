import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Element } from "react-scroll";
import { css } from "emotion";

const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: right;
  padding-left: 20px;
  background-color: #fceac8;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: "Open Sans";
  text-decoration: none;
  transition: 0.25s all ease;
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
  height: 100%;
  text-align: center;
  margin: 15px;
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
            <StyledLink to="/resume">Resume</StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to="/projects">Projects</StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to="/music">Music</StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to="/photography">Photography</StyledLink>
          </LinkBox>
          <DummyFiller />
          <RightLinkBox>
            <StyledLink to="/contact">Contact Me!</StyledLink>
          </RightLinkBox>
        </Container>
      </Element>
    );
  }
}
