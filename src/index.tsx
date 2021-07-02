import "./index.sass";

import * as reactDom from "react-dom";
import * as React from "react";

import { ExampleComponent } from "./example-component";

reactDom.render(<ExampleComponent />, document.getElementById(`root`));
