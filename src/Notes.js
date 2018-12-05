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
    return obj;
  }

  _onChange(event) {
    let obj = this.state.focus;
    obj.content = event.target.value;
    this.setState({
      focus: obj
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    let obj = this.state.focus;
    let newNoteArray = NoteArray.map(note => {
      if (note.id === obj.id) {
        return obj;
      } else {
        return note;
      }
    });
    this.setState({
      items: newNoteArray
    });
  }

  render() {
    return (
      <div className="notesApp">
        <Searchform />
        <div className="ListEditor">
          <NotesList
            notes={this.state.items}
            onClick={this._handleClick.bind(this)}
          />
          <Editor
            content={this.state.focus.content}
            onChange={this._onChange.bind(this)}
            onSubmit={this._onSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Notes;
