import React from "react";
import ReactDOM from "react-dom";

function Button(props) {
  return (
    <div class="cards">
      <div class="ui cards">
          <div class="content">
          {props.children}
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Button;
