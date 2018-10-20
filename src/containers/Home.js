import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Code4Good</h1>
                    <p>Our project</p>
                    <LinkContainer to="/assessment">
                        <button type="button" className="btn btn-success">Success</button>
                    </LinkContainer>
                    <img src="https://i1.wp.com/bestselfpropelledlawnmowers.com/wp-content/uploads/2017/06/how-to-plant-grass-seed-on-dirt.jpg?resize=275%2C183" alt="Flowers in Chania"/>
                </div>
            </div>
        );
    }
}