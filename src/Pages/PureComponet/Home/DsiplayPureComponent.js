import React from "react";

const DsiplayPureComponent = React.memo(({ message }) => {
  console.log("displayComponent2");
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
});

export default DsiplayPureComponent;
