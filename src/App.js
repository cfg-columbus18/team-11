import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Alert, Nav, Navbar, NavItem } from "react-bootstrap";
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
            size: 0
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };

    setMood = mood => {
        this.setState({mood: mood});
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
            setSize: this.setSize
        };

        return (
            !this.state.isAuthenticating &&
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Code4Good</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
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
                    (this.state.size !== 0) ?
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
