import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import StrapDetails from "./StrapDetails";
import Accordian from "../../Components/Accordian/Accordian";

const UiLibraries = () => {
  const [activeStateTab, setActiveStateTab] = useState("1");
  const [show, setShow] = useState(false);
  const handleToggle = (num) => {
    if (activeStateTab !== num) {
      setActiveStateTab(num);
    }
  };

  return (
    <div>
      <div>
        <Nav tabs justified pills>
          <NavItem>
            <NavLink
              style={{ color: "red", fontSize: "25px", fontFamily: "bold" }}
              className={activeStateTab == "1" ? "active" : ""}
              onClick={() => {
                handleToggle("1");
                // setShow(true);
              }}
            >
              Tabl(reactstrap)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "red", fontSize: "25px", fontFamily: "bold" }}
              className={activeStateTab == "2" ? "active" : ""}
              onClick={() => {
                handleToggle("2");
              }}
            >
              Tab2(Antd)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "red", fontSize: "25px", fontFamily: "bold" }}
              className={activeStateTab == "3" ? "active" : ""}
              onClick={() => {
                handleToggle("3");
              }}
            >
              Tab3(Material)
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeStateTab}>
          <TabPane tabId="1">
            {" "}
            <StrapDetails />
          </TabPane>
          <TabPane tabId="2">
            <Accordian />
          </TabPane>
          <TabPane tabId="3">
            <h1>Third one coming</h1>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default UiLibraries;
