import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fetchData } from "../../utils/restUtils";
import Spinne from "./Spinne";

const AntdForm = () => {
  // const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [comment, setComment] = useState("");

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "FirstName",
      dataIndex: "name",
      key: "firstname",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "LastName",
      dataIndex: "username",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      render: (website) => (
        <Tag color={website.length > 5 ? "orange" : "green"} key={website}>
          {website.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handleInvite(record.name)}>
            Invite {record.name}
          </button>
          <button onClick={() => handleDelete(record.id)}>Delete</button>
        </Space>
      ),
    },
  ];

  const handleInvite = (name) => {
    alert(`Inviting ${name}`);
  };

  const handleDelete = (id) => {
    const updatedData = filteredData.filter((ele) => ele.id !== id);
    setFilteredData(updatedData);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const postData = await fetchData(
          "https://jsonplaceholder.typicode.com/users"
        );
        //setData(postData);
        setFilteredData(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedEmail.length > 0 && selectedEmail.length % 2 == 0) {
      const filtered = filteredData.filter((ele) =>
        ele.email.toLowerCase().includes(selectedEmail.toLowerCase())
      );
      if (filtered.length > 0) {
        setFilteredData(filtered);
        setComment("");
      } else {
        setComment("No data found");
      }
    } else if (selectedEmail.length == 0) {
      setFilteredData(filteredData);
    }
  }, [selectedEmail]);

  const inputHandler = (e) => {
    const { value } = e.target;
    setSelectedEmail(value);
  };

  return filteredData.length == 0 ? (
    <Spinne />
  ) : (
    <div>
      {filteredData.length > 0 && (
        <div>
          <input
            style={{
              width: "300px",
              float: "right",
              height: "40px",
              marginBottom: "5px",
            }}
            type="text"
            value={selectedEmail}
            onChange={inputHandler}
            placeholder="Filter by email"
          />
        </div>
      )}
      {comment === "" ? (
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            pageSize: 3,
            showSizeChanger: true,
          }}
        />
      ) : (
        <h1>{comment}</h1>
      )}
    </div>
  );
};

export default AntdForm;
