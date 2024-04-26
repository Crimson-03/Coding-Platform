import React from "react";

const Output = ({output}) => {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder="target"
        id="floatingOutput"
        value={output === null ? "Please check input" : output}
        disabled
      ></textarea>
      <label htmlFor="floatingOutput">Output</label>
    </div>
  );
};

export default Output;
