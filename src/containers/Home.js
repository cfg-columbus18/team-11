import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Alert } from "react-bootstrap"
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


                    {
                        (this.props.size === 0) ?
                            <div className={"plant"}><img src="https://image.ibb.co/jidci0/Screen-Shot-2018-10-20-at-9-56-05-AM.png"/></div>
                            : null
                    }

                    {
                        (this.props.size === 1) ?
                            <div className={"plant"}><img src="https://image.ibb.co/foOXGL/Screen-Shot-2018-10-20-at-10-14-32-AM.png"/></div>
                            : null
                    }

                    {
                        (this.props.size === 2) ?
                            <div className={"plant"}><img src="https://image.ibb.co/mDJtO0/Screen-Shot-2018-10-20-at-9-56-36-AM.png"/></div>
                            : null
                    }

                    {
                        (this.props.size === 3) ?
                            <div className={"plant"}><img src="https://image.ibb.co/hx7WAf/Screen-Shot-2018-10-20-at-9-56-43-AM.png"/></div>
                            : null
                    }

                    {
                        (this.props.size >= 4) ?
                            <div className={"plant"}><img src="https://image.ibb.co/b3xWAf/Screen-Shot-2018-10-20-at-9-56-50-AM.png"/></div>
                            : null
                    }




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