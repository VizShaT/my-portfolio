import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="left-container">
        <div style={{ textAlign: "center" }}>
          <img
            src="https://png.pngtree.com/svg/20170128/avatar_beard_shades_cool_959650.png"
            alt="avatar"
            style={{ height: "200px" }}
          />
        </div>
        <div>
          <h2 style={{ paddingTop: "0.2em" }}>Vijay Shankar Gupta</h2>
          <hr style={{ borderTop: "3px solid", width: "100%" }} />
        </div>
        <div>
          <p>
            Self-motivated and creative IT professional with Bachelor’s Degree
            in Information Technology and passionate about creating customized
            solutions seeks the position of Front-end Developer in an exciting
            and growing company.
          </p>
          <hr style={{ borderTop: "3px solid", width: "100%" }} />
        </div>
        <div>
          <h5>Address</h5>
          <p>Chandigarh, India</p>
          <hr style={{ borderTop: "3px solid", width: "100%" }} />
        </div>
        <div>
          <h5>Skills</h5>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bash</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
