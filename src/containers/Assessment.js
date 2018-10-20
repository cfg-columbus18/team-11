import React, { Component } from "react";
import "./Assessment.css";
import {
    Panel,
    Image
} from "react-bootstrap";

export default class Assessment extends Component {
    render() {
        return (
            <div className="Assessment">
                <div className="panel">
                    <Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>
                </div>
            </div>
        );
    }
}