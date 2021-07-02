import * as React from "react";
import { version } from "../../package.json";

export const ExampleComponent = (): React.ReactElement => {
  const [clicks, setClicks] = React.useState(0);

  return (
    <>
      <header>
        <h1>Zerospace</h1>
        <div>v{version}</div>
      </header>
      <article>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setClicks(clicks + 1);
          }}
        >
          You've clicked me {clicks} time(s)!
        </button>
      </article>
    </>
  );
};
