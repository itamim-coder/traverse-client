import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageHotelPage = () => {
  return (
    <div>
      <h1>Manage Hotel</h1>
      <Link href="/super_admin/manage-hotel/create">
        <Button>Create hotel</Button>
      </Link>
    </div>
  );
};

export default ManageHotelPage;
