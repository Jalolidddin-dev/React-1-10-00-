import React from "react";

function Header({ iconSet }) {
  return (
    <div>
      <button onClick={iconSet}>Changed</button>
    </div>
  );
}

export default Header;
