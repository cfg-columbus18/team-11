import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Code4Good</h1>
                    {/*<h3>{this.props.size}</h3>*/}
                    {/*<p>Our project</p>*/}
                    <div className={"plant"}>
                        <img src="https://i1.wp.com/bestselfpropelledlawnmowers.com/wp-content/uploads/2017/06/how-to-plant-grass-seed-on-dirt.jpg?resize=275%2C183" alt="Flowers in Chania"/>
                    </div>


                    <div id={"goToExercise"}>
                        <LinkContainer to="/assessment">
                            <button type="button" className="btn btn-success">Go to my excercises</button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        );
    }
}