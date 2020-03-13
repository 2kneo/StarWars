import React, { Component } from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Header from "./components/header/Header";
import Home from "./components/Home";
import SiteBar from "./components/siteBar/SiteBar";
import People from "./components/page/people/People";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Row>
            <Col xl={9}>
              <SiteBar />
            </Col>
            <Col xl={9}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/people" component={People} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
