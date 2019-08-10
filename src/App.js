import React from "react";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import "./App.css";

let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ""
    };
  }

  updateMarkdown = function(markdown) {
    this.setState({
      markdown
    });
  };

  render() {
    let { markdown } = this.state;

    return (
      <div className="App container-fluid">
        <div>
          <br />
          <Form>
            <h3>Markdown Input</h3>
            <Form.Group controlId="controlTextArea">
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Enter markdown text here!"
                value={markdown}
                onChange={event => this.updateMarkdown(event.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <h3>Markdown Output</h3>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    );
  }
}

export default App;
