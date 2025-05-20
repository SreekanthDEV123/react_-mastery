import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import UserAccordion from "./UserAccordion";
import AccordionForm from "./AccordionForm";
import {
  AccordianDatalist,
  AccordiansList,
} from "../../Constants/UILibraryConstant";
import "./Accordian.scss";

const Accordian = () => {
  const [open, setOpen] = useState(null);
  const todayDate = new Date().toLocaleDateString();

  const selectedAccordian = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container">
      <Accordion open={open} toggle={selectedAccordian} className="row">
        {AccordianDatalist.map((eachAccordian) => (
          <AccordionItem className="custom-accordion-item">
            <AccordionHeader targetId={eachAccordian.accordionId}>
              {eachAccordian.accordionHeader}
            </AccordionHeader>
            <AccordionBody
              accordionId={eachAccordian.accordionId}
              style={{ backgroundColor: "#f0f0f0" }}
            >
              {eachAccordian.accordionId === open && (
                <>
                  {eachAccordian.accordionId === 1 && <p>{todayDate}</p>}
                  {eachAccordian.accordionId === 2 && <UserAccordion />}
                  {eachAccordian.accordionId === 3 && <AccordionForm />}
                </>
              )}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
