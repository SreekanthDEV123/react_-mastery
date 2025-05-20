import React, { useState } from "react";
// import "./ReactCo
import ReactForm from "../../Components/ReactForm/ReactForm";
import ReactData from "../../Components/ReactData/ReactData";
import { Row, Col } from "reactstrap";

const StrapDetails = () => {
  const [data, setData] = useState([]);
  const addDetails = (details) => {
    console.log(details, "dd");
    setData([...data, details]);
  };
  return (
    <Row>
      <Col xs={12} md={6}>
        <ReactForm addDetails={addDetails} />
      </Col>
      <Col xs={12} md={6}>
        <ReactData datalist={data} />
        {/* <h3>hello</h3> */}
      </Col>
    </Row>
  );
};

export default StrapDetails;
