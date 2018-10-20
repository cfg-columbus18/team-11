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
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" ||this.props.mood === "depressed"
        ||this.props.mood === "anxious") ?
                    <Panel className="col-lg-4">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Dance</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Move your body</Panel.Body>
                        <Panel.Toggle componentClass="a">Show Description</Panel.Toggle>
                        {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                        <Panel.Collapse>
                            <Modal.Dialog>
                                <Modal.Body>Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture.</Modal.Body>
                                <Modal.Footer>
<Panel.Toggle className="toggle" componentClass="a">Close</Panel.Toggle>
    <Button bsStyle="primary" onClick={this.onFinish}>I'm Done!</Button>
</Modal.Footer>
</Modal.Dialog>
</Panel.Collapse>
</Panel>
: null
}
        {
            (this.state.showAll) || (!this.state.hideAll && this.props.mood === "happy") ?
        <Panel className="col-lg-4">
        <Panel.Heading>
        <Panel.Title componentClass="h3">Music</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Listen to your favorite song</Panel.Body>
        <Panel.Toggle componentClass="a">Show Description</Panel.Toggle>
            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
        <Panel.Collapse>
        <Modal.Dialog>
        <Modal.Body>Music is an art form and cultural activity whose medium is sound organized in time. In general definitions of music will include common elements such as pitch, rhythm, dynamics, and the sonic qualities of timbre and texture.</Modal.Body>
        <Modal.Footer>
        <Panel.Toggle className="toggle" componentClass="a">Close</Panel.Toggle>
            <Button bsStyle="primary" onClick={this.onFinish}>I'm Done!</Button>
        </Modal.Footer>
        </Modal.Dialog>
        </Panel.Collapse>
        </Panel>
        : null
        }
        {
            (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" ||this.props.mood === "depressed"
                ||this.props.mood === "anxious") ?
        <Panel className="col-lg-4">
            <Panel.Heading>
            <Panel.Title componentClass="h3">Yoga</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Breathe and Pose</Panel.Body>
        <Panel.Toggle componentClass="a">Show Description</Panel.Toggle>
            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
        <Panel.Collapse>
        <Modal.Dialog>
        <Modal.Body>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India</Modal.Body>
        <Modal.Footer>
        <Panel.Toggle className="toggle" componentClass="a">Close</Panel.Toggle>
            <Button bsStyle="primary" onClick={this.onFinish}>I'm Done!</Button>
        </Modal.Footer>
        </Modal.Dialog>
        </Panel.Collapse>
        </Panel>
        : null
        }

        {
            (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" ||this.props.mood === "depressed"
                ||this.props.mood === "anxious") ?
        <Panel className="col-lg-4">
            <Panel.Heading>
            <Panel.Title componentClass="h3">Meditation</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Sit, close your eyes, and breathe</Panel.Body>
        <Panel.Toggle componentClass="a">Show Description</Panel.Toggle>
            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
        <Panel.Collapse>
        <Modal.Dialog>
        <Modal.Body>Meditation is a practice where an individual uses a technique, such as focusing their mind on a particular object, thought or activity, to achieve a mentally clear and emotionally calm state.</Modal.Body>
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