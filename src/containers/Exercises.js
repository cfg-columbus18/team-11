import React, { Component } from "react";
import { Button, Image, Modal, Panel } from "react-bootstrap";
import "./Exercises.css"

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
            hideAll: false,
            show: false
        };

        this.toggleShowAll = this.toggleShowAll.bind(this);
        this.onFinish = this.onFinish.bind(this);
        this.handleFeedback = this.handleFeedback.bind(this);
    }

    toggleShowAll() {
        this.setState({showAll: !this.state.showAll});
    }

    onFinish() {
        this.props.setSize(this.props.size + 1);
        this.setState({show: true});
    }

    handleFeedback() {
        this.props.setAlert(true);
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="Exercises">
                <div className="row">
                {
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" || this.props.mood === "depressed"
                        || this.props.mood === "anxious" || this.props.mood === "stressed") ?
                        <Panel className="col-lg-5">
                            <Panel.Heading id={"panelhead"}>
                                <Panel.Title componentClass="h3">Dance</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Move your body to the beat</Panel.Body>

                            {/*<Image src="https://classroomclipart.com/images/gallery/Clipart/Dance/TN_enjoying-music-and-dancing-clipart-623.jpg" responsive/>*/}

                            <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                            <Panel.Collapse>
                                <Modal.Dialog>
                                    <Modal.Body>Dance is a performing art form consisting of purposefully selected
                                        sequences of human movement. This movement has aesthetic and symbolic value, and
                                        is acknowledged as dance by performers and observers within a particular
                                        culture.</Modal.Body>
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
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" ) ?
                        <Panel className="col-lg-4">
                            <Panel.Heading id={"panelhead"}>
                                <Panel.Title componentClass="h3">Music</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Pick calm music</Panel.Body>
                            <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                            <Panel.Collapse>
                                <Modal.Dialog>
                                    <Modal.Body>Pick music that relaxes that relaxes you such as classical music. For example, Beethoven.</Modal.Body>
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
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Eating</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Eat healthy foods. i.e. fruits & veggies</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>A healthy diet is a diet that helps to maintain or improve overall health.</Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "alright") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Arts & Craft</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Make paper airplanes or origami</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>A craft or trade is a pastime or a profession that requires some creativity. </Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "depressed") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">3 Good Things</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Write 3 things you are thankful for</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body> 3 good things</Modal.Body>
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
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Card Games</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Play Uno, War, or Go Fish</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>A card game is any game using playing cards as the primary device with which the game is played, be they traditional or game-specific.</Modal.Body>
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
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" || this.props.mood === "depressed"
                        || this.props.mood === "anxious" || this.props.mood === "stressed") ?
                        <Panel className="col-lg-4">
                            <Panel.Heading id={"panelhead"}>
                                <Panel.Title componentClass="h3">Yoga</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Breathe and Stretch</Panel.Body>
                            <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                            <Panel.Collapse>
                                <Modal.Dialog>
                                    <Modal.Body>1. Inhale 2. Exhale 3. Stretch your left leg to the right and reach your right hand to left foot.
                                    4. Breathe and feel the stretch.</Modal.Body>
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
                    (this.state.showAll) || (!this.state.hideAll && this.props.mood === "angry" || this.props.mood === "depressed"
                        || this.props.mood === "anxious" || this.props.mood === "stressed") ?
                        <Panel className="col-lg-4">
                            <Panel.Heading id={"panelhead"}>
                                <Panel.Title componentClass="h3">Meditation</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Sit, close your eyes, and breathe</Panel.Body>
                            <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                            {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                            <Panel.Collapse>
                                <Modal.Dialog>
                                    <Modal.Body>1. Sit or lie comfortably.
                                        2.Close your eyes.
                                        3. Make no effort to control the breath; simply breathe naturally.
                                        4. Focus your attention on the breath and on how the body moves with each inhalation and exhalation.
                                    </Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "alright") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Experience Nature</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Go take a walk</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>Go to the woods, go sightseeing. </Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "safe") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Socialize</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Call your best friend</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>Communication is the act of conveying meanings from one entity or group to another through the use of mutually understood signs and semiotic rules.  </Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "unsafe") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Get Help</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Dial hotline # 440-260-8595</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>Other resousrces: Dial 911.</Modal.Body>
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
                        (this.state.showAll) || (!this.state.hideAll && this.props.mood === "safe") ?
                            <Panel className="col-lg-4">
                                <Panel.Heading id={"panelhead"}>
                                    <Panel.Title componentClass="h3">Give a Compliment</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>Say something nice</Panel.Body>
                                <Panel.Toggle className="toggle" componentClass="a">Show Description</Panel.Toggle>
                                {/*<Image src="https://cdn.psychologytoday.com/sites/default/files/blogs/38/2008/12/2598-75772.jpg" responsive/>*/}
                                <Panel.Collapse>
                                    <Modal.Dialog>
                                        <Modal.Body>
                                            a polite expression of praise or admiration.</Modal.Body>
                                        <Modal.Footer>
                                            <Panel.Toggle className="toggle" componentClass="a">Close</Panel.Toggle>
                                            <Button bsStyle="primary" onClick={this.onFinish}>I'm Done!</Button>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                </Panel.Collapse>
                            </Panel>
                            : null
                    }

            </div>

                <Modal show={this.state.show} className={"feedback"}>
                    <Modal.Header>
                        <Modal.Title>How Was Your Exercise?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please rate your experience</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="col-md-3" bsStyle="danger" onClick={this.handleFeedback}>Bad</Button>
                        <Button className="col-md-3" onClick={this.handleFeedback}>Neutral</Button>
                        <Button className="col-md-3" bsStyle="primary" onClick={this.handleFeedback}>Good</Button>
                    </Modal.Footer>
                </Modal>
                <Button className="col-md-3" bsStyle="info" onClick={this.toggleShowAll}>Show All</Button>

            </div>

        )
    }
}

