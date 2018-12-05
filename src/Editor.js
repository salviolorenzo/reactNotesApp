import React from "react";

function Editor(props) {
  return (
    <div className="editor">
      <form>
        <textarea value={props.content} />
      </form>
    </div>
  );
}

export default Editor;
