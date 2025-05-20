import React, { useState } from "react";
// import "./About.scss";
// import Display from "./StateLiftUp/Display";
// import Form from "./StateLiftUp/Form";
import Hit from "./HighOrder/Hit";
import Sue from "./HighOrder/Sue";
const About = () => {
  // const [data, setData] = useState({ phone: "" });
  const [form, setForm] = useState({ count1: 0, count2: 0 });
  const incrementCounter = (value) => {
    console.log(value, "value");
    setForm({ ...form, [value]: form[value] + 1 });
  };

  return (
    // <div className="main">
    //   <div className="row">
    //     <div className="col col-sm-4 col-md-4 aside ">4th page</div>
    //     <div className="col col-sm-8 col-md-8 section">8th page</div>
    //   </div>
    //   <div className="row footer">
    //      <div className="ul-items">
    //               <ul className="ul">
    //                        <li>fb</li>
    //                        <li>instagram</li>
    //                        <li>twitter</li>
    //                        <li>whatsupp</li>
    //               </ul>
    //      </div>
    //   </div>
    // </div>
    <div className="row">
      {/* <div className="col col-sm-4">
        {/* <Form  name={phone} value={data.phone} setData={setData} /> */}
      {/* <Form setData={setData} phoneData={data}/> */}
      {/* </div> */}
      {/* <div className="col col-sm-4"> */}
      {/* <Display data={data} /> */}
      {/* </div> */}
      <div className="col col-sm-4">
        {/* <Hit form={form} incrementCounter={incrementCounter} /> */}
        <Hit/>
      </div>
      <div className="col col-sm-4">
        {/* <Sue form={form} incrementCounter={incrementCounter} /> */}
        <Sue/>
      </div>
    </div>
  );
};

export default About;
