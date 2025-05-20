import React from "react";
import "./HigherForm.scss";
import { Button } from "reactstrap";
class HigherData extends React.Component {
  render() {
    const { handleButton } = this.props;

    return (
      <div>
        <Button onClick={handleButton} color="primary">
          Click
        </Button>
      </div>
    );
  }
}

export default HigherData;
