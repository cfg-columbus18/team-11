import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Assessment.css";
import {
    Image
} from "react-bootstrap";

export default class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {mood: ""};
        this.handleFinishAssessment = this.handleFinishAssessment.bind(this);
    }

    handleFinishAssessment(mood) {
        return ( e => {
            e.preventDefault();
            this.setState({mood: mood});
        });

    };

    render() {
        return (
            <div className="Assessment">
                <div className="panel" onClick={this.handleFinishAssessment("happy")}>
                    <Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>
                </div>
            </div>
        );
    }
}