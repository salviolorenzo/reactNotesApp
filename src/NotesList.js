import React from "react";

function NotesList(props) {
  return (
    <div className="list">
      <ul>
        {props.notes.map(note => {
          return (
            <li
              key={note.id}
              className="list-item"
              onClick={() => {
                props.onClick(note);
              }}
              content={props.content}
            >
              {note.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NotesList;
