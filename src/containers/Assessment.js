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
                <div className="panel" onClick={this.handleFinishAssessment("happy")}><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-OITf7IzUdFWRGccUxOuOaONEBI8L2e9_aJ_nsiOG0DzhlQm" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("safe")}><Image src="https://png2.kisspng.com/show/a706614c684acb61222c766d300a6d1b/L0KzQYm3VcA6N5x5fZH0aYP2gLBuTfVud5tuiNdtaXGwd7b6lQVzbV5tedDtc3jke7a0VfFnO2o3SqdrMEW3dIS1VcI6OWc7Uao6NUK4SYK5UcAyP2M3S5D5bne=/kisspng-emojipedia-gesture-handshake-5af39225b054d3.5291669815259121017223.png" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("alright")}><Image src="https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Emoji_Icon_34f238ed-d557-4161-b966-779d8f37b1ac_large.png?v=1513251058" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("angry")}><Image src="https://cdn.shopify.com/s/files/1/1061/1924/products/Angry_Face_Emoji_Icon_ios10_large.png?v=1513251030" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("depressed")}><Image src="https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("anxious")}><Image src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/disappointed-but-relieved-face_1f625.png" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("stressed")}><Image src="https://mbtskoudsalg.com/images/confused-emojis-png-6.png" responsive/></div>
                <div className="panel" onClick={this.handleFinishAssessment("unsafe")}><Image src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/76/face-screaming-in-fear_1f631.png" responsive/></div>
            </div>
        );
    }
}