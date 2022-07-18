import React from "react";
import styled from "styled-components";


const Tag = styled("div")`
    display: inline;
    text-align: center;
    background-color: white;
    border: 1px solid #E88582;
    border-radius: 12px;
    padding-left: 1vh;
    padding-right: 1vh;
    font-family: "Open Sans";
    margin-right: 0.5vh;
    font-size: 0.5em;
`;

export default class LanguageTag extends React.Component {

    render() {
        return (
            <div>
                <Tag>{this.props.name}</Tag>
            </div>
        )
    }
}