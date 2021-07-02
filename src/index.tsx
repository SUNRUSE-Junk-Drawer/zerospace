import "./index.sass";

import * as reactDom from "react-dom";
import * as React from "react";

import { ExampleComponent } from "./example-component";

if (`serviceWorker` in navigator) {
  navigator.serviceWorker.register(`service-worker.js`);
}

reactDom.render(<ExampleComponent />, document.getElementById(`root`));
