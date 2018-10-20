import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Assessment.css";
import {
    Image
} from "react-bootstrap";

export default class Assessment extends Component {
    constructor(props) {
        super(props);
        this.handleFinishAssessment = this.handleFinishAssessment.bind(this);
    }

    handleFinishAssessment(mood) {
        return ( e => {
            e.preventDefault();
            this.props.setMood(mood);
            this.props.history.push("/exercises");
        });

    };

    render() {
        return (
            <div className="Assessment">

                <center> <h1> How are you feeling today? </h1></center>
                <div className="panel" onClick={this.handleFinishAssessment("happy")}>
                    <Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>
                </div>
            </div>
        );
    }
}