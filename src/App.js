import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="My Portfolio" scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer title="My Portfolio">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
