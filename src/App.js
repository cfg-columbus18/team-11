import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Alert, ButtonToolbar, DropdownButton, MenuItem, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            mood: " ",
            // completed: false,
            size: 0,
            showAlert: false
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };

    setMood = mood => {
        this.setState({mood: mood});
    };

    setAlert = alert => {
        this.setState({showAlert: alert});
    };

    // setCompleted = completed => {
    //     this.setState({completed: completed});
    // };

    setSize = size => {
        this.setState({size: size});
    };

    handleLogout = event => {
        // DO LOGOUT STUFF HERE

        this.userHasAuthenticated(false);
        this.props.history.push("/login");
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            // setCompleted: this.setCompleted,
            setMood: this.setMood,
            // completed: this.state.completed,
            mood: this.state.mood,
            size: this.state.size,
            setSize: this.setSize,
            setAlert: this.setAlert
        };

        return (
            !this.state.isAuthenticating &&
            <div className="App container">

                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">GrowU</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {/*<ButtonToolbar>*/}
                            {/*<DropdownButton title={"Menu"}>*/}
                                {/*<MenuItem eventKey="1">Statistics</MenuItem>*/}
                                {/*<MenuItem eventKey="2">Change Language action</MenuItem>*/}
                            {/*</DropdownButton>*/}
                        {/*</ButtonToolbar>*/}
                        <Nav pullRight>

                            {this.state.isAuthenticated
                                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                                : <Fragment>
                                    <LinkContainer to="/signup">
                                        <NavItem>Signup</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/login">
                                        <NavItem>Login</NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {
                    (this.state.showAlert) ?
                        <Alert bsStyle="success">
                            <strong>CONGRATS! Your Plant Grew</strong>
                        </Alert>
                        : null
                }
                <Routes childProps={childProps} />
            </div>
        );
    }
}

export default withRouter(App);
