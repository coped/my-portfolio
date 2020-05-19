import React from "react";
import { Toolbox } from "components/home";
import { tools } from "lib";

export default function Tools() {
  return (
    <div className="columns">
      <div className="column">
        <Toolbox name="Back end" tools={tools.backend} />
      </div>
      <div className="column">
        <Toolbox name="Front end" tools={tools.frontend} />
      </div>
      <div className="column">
        <Toolbox name="Miscellaneous" tools={tools.miscellaneous} />
      </div>
    </div>
  );
}
