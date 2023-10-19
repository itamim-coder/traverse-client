"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { Table } from "antd";
import { useGetAdminQuery } from "@/redux/api/adminApi";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact No",
    dataIndex: "contactNo",
    key: "contactNo",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Action
      </button>
    ),
  },
];


// const data = [
//   {
//     key: "1",
//     name: "John Doe",
//     age: 28,
//     address: "123 Main St",
//   },
//   // Add more data as needed
// ];

const ManageAdminPage = () => {
  const { data, isLoading } = useGetAdminQuery(undefined);
console.log(data);
  return (
    <div>
      <h1>Admin List</h1>
      <Link href="/super_admin/manage-admin/create">
        <Button>Create Admin</Button>
      </Link>

      <div className="table-responsive">
        <Table columns={columns} dataSource={data} pagination={true} />
      </div>
    </div>
  );
};

export default ManageAdminPage;
