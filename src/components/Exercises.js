import React, { Component } from "react";
import { Button, Image, Modal, Panel } from "react-bootstrap";
import "./Exercises.css"

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
            hideAll: false
        };

        this.toggleShowAll = this.toggleShowAll.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }

    toggleShowAll() {
        this.setState({showAll: !this.state.showAll});
    }

    onFinish() {
        this.props.setSize(this.props.size + 1);
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="Exercises">
                {
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry") ?
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Ex 1</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                        <Panel.Toggle componentClass="a">Show Description</Panel.Toggle>
                        {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                        <Panel.Collapse>
                            <Modal.Dialog>
                                <Modal.Body>Description of what to do</Modal.Body>
                                <Modal.Footer>
                                    <Panel.Toggle className="toggle" componentClass="a">Close</Panel.Toggle>
                                    <Button bsStyle="primary" onClick={this.onFinish}>I'm Done!</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Panel.Collapse>
                    </Panel>
                        : null
                }

                <Button bsStyle="info" onClick={this.toggleShowAll}>Show All</Button>
            </div>
        );
    }
}