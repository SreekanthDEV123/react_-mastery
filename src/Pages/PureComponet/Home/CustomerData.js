// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CustomerData.scss";
// const CustomerData = ({ customer, deletedCustomer, updateCustomer }) => {
//   const navigate = useNavigate();
//   console.log(customer, "customervahadu");
//   const editCustomer = (a) => {
//     updateCustomer(a);
//   };
//   const deleteCustomer = (b) => {
//     deletedCustomer(b);
//   };
//   const navigateCustomerDetails = (a) => {
//     // console.log("a", a, "row");
//     navigate(`/app/${a}`);
//   };
//   return (
//     <div className="tableForm">
//       {/* <h1>Customer Data is diplaying</h1> */}
//       {customer.length > 0 && (
//         <table className="table table-striped table-dark">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>User Name</th>
//               <th>Role</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customer.length > 0 &&
//               customer.map((eachCustomer) => (
//                 <tr onClick={() => navigateCustomerDetails(eachCustomer.id)}>
//                   <td>{eachCustomer.id}</td>
//                   <td>{eachCustomer.username}</td>
//                   <td>{eachCustomer.role}</td>
//                   <td>
//                     <button
//                       onClick={() => editCustomer(eachCustomer)}
//                       className="btn btn-success rounded-pill"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => deleteCustomer(eachCustomer)}
//                       className="btn btn-danger rounded-pill"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default CustomerData;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerData.scss";

const CustomerData = ({ customer, deletedCustomer, updateCustomer }) => {
  const navigate = useNavigate();

  const editCustomer = (event, customer) => {
    event.stopPropagation(); // Stop event propagation
    updateCustomer(customer);
  };

  const deleteCustomer = (event, customer) => {
    event.stopPropagation(); // Stop event propagation
    deletedCustomer(customer);
  };

  const navigateCustomerDetails = (customerId) => {
    navigate(`/app/${customerId}`);
  };

  return (
    <div className="tableForm">
      {customer.length > 0 ? (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((eachCustomer) => (
              <tr
                key={eachCustomer.id}
                onClick={() => navigateCustomerDetails(eachCustomer.id)}
              >
                <td>{eachCustomer.id}</td>
                <td>{eachCustomer.username}</td>
                <td>{eachCustomer.role}</td>
                <td>
                  <button
                    onClick={(e) => editCustomer(e, eachCustomer)}
                    className="btn btn-success rounded-pill"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => deleteCustomer(e, eachCustomer)}
                    className="btn btn-danger rounded-pill"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No customer data available</p>
      )}
    </div>
  );
};

export default CustomerData;
