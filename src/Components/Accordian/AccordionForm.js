import React, { useEffect, useState } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
const AccordionForm = () => {
  const [details, setDetails] = useState({ date: "", name: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(details, "details");
  }, [details]);

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="exampleEmail">Date</Label>
          <Input
            id="exampleEmail"
            name="date"
            placeholder="with a placeholder"
            type="Date"
            value={details.date}
            onChange={inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            id="examplePassword"
            name="name"
            placeholder="password placeholder"
            type="text"
            value={details.name}
            onChange={inputHandler}
          />
        </FormGroup>

        <Button type="button">Submit</Button>
      </Form>
    </div>
  );
};

export default AccordionForm;
