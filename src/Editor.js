import React from "react";

function Editor(props) {
  return (
    <div className="editor">
      <form onSubmit={props.onSubmit}>
        <textarea value={props.content} onChange={props.onChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Editor;
