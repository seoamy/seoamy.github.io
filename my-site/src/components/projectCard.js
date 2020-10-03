import React from "react";
import styled from "styled-components";
import LanguageTag from "./languageTag";

const CardContainer = styled("div")`        
    width: 30vh;
    height: 30vh;
    border-radius: 15%;
    margin: 2vh;
    background-color: #EEE;
    box-shadow: 4px 3px 8px #929292;
    text-decoration: none;
`;

const CardImage = styled("img")`
    width: 30vh;
    height: 30vh;
    border-radius: 15%;
`;

const ProjectTitle = styled("div")`
    padding-top: 4vh;
    font-family: 'Manrope', sans-serif;
    font-size: 1.5em;
    text-decoration: none;
    display:flex;
    align-items: flex-start;
    padding-left: 3vh;
`;

const ProjectDescription = styled("div")`
    font-family: "Open Sans";
    font-size: 0.75em;
    text-decoration: none;
    padding: 1.5vh;
`;

const Link = styled("a")`
    text-decoration: none;
    color: black;
`;

const LanguagesContainer = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 3vh;
    padding-top: 1vh;
    padding-bottom: 1.5vh;
    
`;

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notHover: true
        };
        this.changeHover = this.changeHover.bind(this)
    }


    changeHover() {
        this.setState({ notHover: !this.state.notHover })
    }

    render() {
        return (
            <div>
                <Link href={this.props.link} target="_blank">
                    <CardContainer onMouseEnter={this.changeHover} onMouseLeave={this.changeHover}>
                        {this.state.notHover && (
                            <CardImage src={this.props.img} />
                        )}
                        {!this.state.notHover && (
                            <div>
                                <ProjectTitle>{this.props.title}</ProjectTitle>
                                <LanguagesContainer>
                                    {this.props.languages.map((l, key) => (
                                        <LanguageTag name={l} key={key} />
                                    ))}
                                </LanguagesContainer>
                                <ProjectDescription>{this.props.description}</ProjectDescription>
                            </div>
                        )}
                    </CardContainer>
                </Link>
            </div>




        )
    }
}