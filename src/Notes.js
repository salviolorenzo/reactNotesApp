import React, { Component } from "react";
import NotesList from "./NotesList";
import Editor from "./Editor";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <NotesList />
        <Editor />
      </div>
    );
  }
}

export default Notes;
