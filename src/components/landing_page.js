import React from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://png.pngtree.com/svg/20170128/avatar_beard_shades_cool_959650.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Vijay Shankar Gupta</h1>
              <h3>Front-End Web Developer</h3>
              <hr />
              <p>HTML | CSS | JavaScript | React | Redux </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
