import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerData from "./CustomerData";
// import DisplayComponent from "./DisplayComponent";
// import DsiplayPureComponent from "./DsiplayPureComponent";

const Homes = () => {
  // const [name, setName] = useState("hello");
  // const [city, setCity] = useState("hai");

  // const updateMessage1 = () => {
  //   setName("hyderabad");
  // };
  // const updateMessage2 = () => {
  //   setCity("vizak");
  // };
  const [customer, setCustomer] = useState([]);
  const [updatedCustomer, setupdatedCustomer] = useState({});
  const deletedCustomer = (deleteCustomer) => {
    const filteredCustomerData = customer.filter(
      (eachCustomer) => eachCustomer.username != deleteCustomer.username
    );
    setCustomer(filteredCustomerData);
  };
  const addCustomer = (eachCustomer, type) => {
    if (type == "submit") {
      setCustomer([...customer, { ...eachCustomer, id: customer.length + 1 }]);
    } else {
      const isExistingRecord = customer.find(
        (eachCustomerRecord) => eachCustomerRecord.id === eachCustomer.id
      );
      console.log(isExistingRecord, "existing");
      if (isExistingRecord) {
        const updatedData = customer.map((eachCustomerRow) =>
          eachCustomerRow.id === isExistingRecord.id
            ? eachCustomer
            : eachCustomerRow
        );

        setCustomer(updatedData);
      }
    }
    //   const customerExists = customer.find(
    //     (customerRow) => customerRow.id === eachCustomer.id
    //   );
    //   if (customerExists) {
    //     const updatedUserInfo = customer.map((customerRow) =>
    //       customerRow.id === customerExists.id ? eachCustomer : customerRow
    //     );
    //     setCustomer(updatedUserInfo);
    //   }
    // }
  };
  const updateCustomer = (eachCustomer) => {
    console.log(eachCustomer, "updated");

    setupdatedCustomer(eachCustomer);
  };
  console.log(customer, "array");
  return (
    <div className="row">
      <div className="col col-sm-6">
        {/* <DisplayComponent message={name} /> */}
        <CustomerForm
          addCustomer={addCustomer}
          updatedCustomer={updatedCustomer}
        />
      </div>
      <div className="col col-sm-6">
        {/* <DsiplayPureComponent message={city} /> */}
        {
          <CustomerData
            customer={customer}
            deletedCustomer={deletedCustomer}
            updateCustomer={updateCustomer}
          />
        }
      </div>
      {/* <button onClick={updateMessage1}>Update Message</button> */}
    </div>
  );
};

export default Homes;
