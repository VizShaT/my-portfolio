import React from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "./profile";
import Project from "./project";
import { project1, project2, project3, project4 } from "./project_list";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <Profile />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Personal Projects</h3>
            <hr />
            <Project
              title={project1.title}
              link={project1.link}
              description={project1.description}
            />
            <hr />
            <Project
              title={project2.title}
              link={project2.link}
              description={project2.description}
            />
            <hr />
            <Project
              title={project3.title}
              link={project3.link}
              description={project3.description}
            />
            <hr />
            <Project
              title={project4.title}
              link={project4.link}
              description={project4.description}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
