import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  handleTabChange = tabId => {
    this.setState({
      activeTab: tabId
    });
  };
  toggleCategory() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "300px",
                background:
                  "url(https://cdn.auth0.com/blog/es6rundown/logo.png) center /cover"
              }}
            >
              VanillaCart
            </CardTitle>
            <CardText>A shopping cart UI in Vanilla JavaScript.</CardText>
            <CardActions before>
              <Button colored>
                <a
                  href="https://github.com/kikit/VanillaCart"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://codesandbox.io/s/github/kikit/VanillaCart"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "300px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center /cover"
              }}
            >
              Portfolio Website
            </CardTitle>
            <CardText>Portfolio Website in React.</CardText>
            <CardActions before>
              <Button colored>
                <a
                  href="https://github.com/kikit/my-porfolio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="http://kikit.github.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "300px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center /cover"
              }}
            >
              Skype Clone
            </CardTitle>
            <CardText>A Skype like interface in React-Redux</CardText>
            <CardActions before>
              <Button colored>
                <a
                  href="https://github.com/kikit/skype-clone"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://codesandbox.io/s/github/kikit/skype-clone"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "300px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center /cover"
              }}
            >
              Hacker News Clone
            </CardTitle>
            <CardText>Hacker News clone in React-Redux.</CardText>
            <CardActions before>
              <Button colored>
                <a
                  href="https://github.com/kikit/hacker-news-clone"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a href="#">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "300px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center /cover"
              }}
            >
              CounterApp
            </CardTitle>
            <CardText>A simple counter in React-Redux</CardText>
            <CardActions before>
              <Button colored>
                <a
                  href="https://github.com/kikit/CounterApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://codesandbox.io/s/github/kikit/CounterApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={this.handleTabChange}
          ripple
        >
          <Tab>Vanilla</Tab>
          <Tab>React</Tab>
          <Tab>React-Redux</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategory()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
