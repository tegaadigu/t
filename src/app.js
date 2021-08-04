import React from "react";

const App = () => {
  const [typer, setTyper] = React.useState();
  return (
    <>
      Hello world!
      <input
        onChange={(e) => {
          console.log("value:", e.target.value);
        }}
      />
    </>
  );
};

export default App;
