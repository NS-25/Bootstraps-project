import React from "react";
/* The following line can be included in your src/index.js or App.js file */

import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </div>
  );
};

export default App;
