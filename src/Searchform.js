import React from "react";

function Searchform(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Search" onChange={props.onChange} />
      <input type="submit" />
    </form>
  );
}

export default Searchform;
