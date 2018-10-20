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

                <center> <h1> How are you feeling today? </h1></center>

                <div className="panel" onClick={this.handleFinishAssessment("happy")}>

                    <Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>
                    <Image src="https://cdn.shopify.com/s/files/1/1061/1924/products/Angry_Face_Emoji_Icon_ios10_large.png?v=1513251030" responsive/>
                    <Image src="https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214" responsive/>
                    <Image src="https://mbtskoudsalg.com/images/confused-emojis-png-6.png" responsive/>
                    <Image src="https://sites.google.com/site/quilliamsart/_/rsrc/1457630700087/portfolio/digital-art/anxious-emoji/Emoji%20Animation%20%28Shawn%20Quilliams%29.gif" responsive/>
                </div>
            </div>
        );
    }
}