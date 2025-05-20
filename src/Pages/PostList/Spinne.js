import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
const Spinne = () => (
  <Flex align="center" gap="middle">
    {/* <Spin indicator={<LoadingOutlined spin />} size="small" /> */}
    {/* <Spin indicator={<LoadingOutlined spin />} /> */}
    {/* <Spin indicator={<LoadingOutlined spin />} size="large" /> */}
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 104,
            color: "red",
            position: "relative",
            marginLeft: "450px",
            marginBottom: "250px",
          }}
          spin
        />
      }
    />
  </Flex>
);
export default Spinne;
