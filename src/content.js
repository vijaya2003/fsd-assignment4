import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

function Content() {
  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src={faker.image.image()} />
          <div class="header">Elliot Fu</div>
          <div class="meta">Friends of Veronika</div>
          <div class="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
