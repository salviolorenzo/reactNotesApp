import React from "react";

function Searchform(props) {
  return (
    <div className="searchBar">
      <form onSubmit={props.onSubmit}>
        <input type="text" placeholder="Search" onChange={props.onChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Searchform;
