import React, { Component } from "react";
import NotesList from "./NotesList";
import Editor from "./Editor";
import NoteArray from "./NoteArray";

import Searchform from "./Searchform";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: NoteArray,
      focus: {}
    };
  }

  _handleClick(obj) {
    console.log(obj);
    this.setState({
      items: NoteArray,
      focus: obj
    });
  }

  render() {
    return (
      <div className="notesApp">
        <Searchform />
        <NotesList
          notes={this.state.items}
          onClick={this._handleClick.bind(this)}
        />
        <Editor content={this.state.focus.content} />
      </div>
    );
  }
}

export default Notes;
