import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      link: "",
      description: ""
    };
  }
  render() {
    const title = this.props.title;
    const link = this.props.link;
    const description = this.props.description;
    const list = description.map(item => <li>{item}</li>);
    return (
      <div>
        <h4>{title}</h4>
        <ul>{list}</ul>
        <a href={link} rel="noopener noreferrer" target="_blank">
          Check here
        </a>
      </div>
    );
  }
}

export default Project;
